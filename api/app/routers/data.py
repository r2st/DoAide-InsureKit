"""CRUD endpoints for syncing clients and policies."""
import csv
import io
from uuid import UUID

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from pydantic import BaseModel
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.core.auth import get_current_user
from app.core.database import get_db
from app.models.client import Client
from app.models.policy import Policy
from app.models.user import User

router = APIRouter(prefix="/api", tags=["data"])


# ── Schemas ──────────────────────────────────────────────────────────

class ClientIn(BaseModel):
    local_id: str | None = None
    name: str
    phone: str | None = None
    email: str | None = None
    birthday: str | None = None
    anniversary: str | None = None
    notes: str | None = None


class ClientOut(ClientIn):
    id: UUID
    model_config = {"from_attributes": True}


class PolicyIn(BaseModel):
    local_id: str | None = None
    policy_number: str
    holder_name: str
    plan_name: str
    sum_assured: float
    premium: float
    mode: str = "yearly"
    start_date: str | None = None
    term: str | None = None
    next_due_date: str | None = None
    status: str = "active"
    notes: str | None = None


class PolicyOut(PolicyIn):
    id: UUID
    model_config = {"from_attributes": True}


class MigratePayload(BaseModel):
    clients: list[ClientIn] = []
    policies: list[PolicyIn] = []


# ── Clients ──────────────────────────────────────────────────────────

@router.get("/clients", response_model=list[ClientOut])
def list_clients(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.execute(select(Client).where(Client.user_id == user.id).order_by(Client.created_at)).scalars().all()
    return rows


@router.post("/clients", response_model=ClientOut, status_code=201)
def create_client(body: ClientIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    client = Client(user_id=user.id, **body.model_dump())
    db.add(client)
    db.commit()
    db.refresh(client)
    return client


@router.put("/clients/{client_id}", response_model=ClientOut)
def update_client(client_id: UUID, body: ClientIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    client = db.execute(select(Client).where(Client.id == client_id, Client.user_id == user.id)).scalar_one_or_none()
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
    for k, v in body.model_dump().items():
        setattr(client, k, v)
    db.commit()
    db.refresh(client)
    return client


@router.delete("/clients/{client_id}", status_code=204)
def delete_client(client_id: UUID, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    client = db.execute(select(Client).where(Client.id == client_id, Client.user_id == user.id)).scalar_one_or_none()
    if not client:
        raise HTTPException(status_code=404, detail="Client not found")
    db.delete(client)
    db.commit()


# ── Policies ─────────────────────────────────────────────────────────

@router.get("/policies", response_model=list[PolicyOut])
def list_policies(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.execute(select(Policy).where(Policy.user_id == user.id).order_by(Policy.created_at)).scalars().all()
    return rows


@router.post("/policies", response_model=PolicyOut, status_code=201)
def create_policy(body: PolicyIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    policy = Policy(user_id=user.id, **body.model_dump())
    db.add(policy)
    db.commit()
    db.refresh(policy)
    return policy


@router.put("/policies/{policy_id}", response_model=PolicyOut)
def update_policy(policy_id: UUID, body: PolicyIn, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    policy = db.execute(select(Policy).where(Policy.id == policy_id, Policy.user_id == user.id)).scalar_one_or_none()
    if not policy:
        raise HTTPException(status_code=404, detail="Policy not found")
    for k, v in body.model_dump().items():
        setattr(policy, k, v)
    db.commit()
    db.refresh(policy)
    return policy


@router.delete("/policies/{policy_id}", status_code=204)
def delete_policy(policy_id: UUID, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    policy = db.execute(select(Policy).where(Policy.id == policy_id, Policy.user_id == user.id)).scalar_one_or_none()
    if not policy:
        raise HTTPException(status_code=404, detail="Policy not found")
    db.delete(policy)
    db.commit()


# ── Migrate (bulk import from localStorage on first login) ───────────

@router.post("/migrate")
def migrate_local_data(body: MigratePayload, user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    existing_clients = db.execute(select(Client).where(Client.user_id == user.id)).scalars().all()
    existing_policies = db.execute(select(Policy).where(Policy.user_id == user.id)).scalars().all()
    existing_local_client_ids = {c.local_id for c in existing_clients if c.local_id}
    existing_local_policy_ids = {p.local_id for p in existing_policies if p.local_id}

    clients_added = 0
    for c in body.clients:
        if c.local_id and c.local_id in existing_local_client_ids:
            continue
        db.add(Client(user_id=user.id, **c.model_dump()))
        clients_added += 1

    policies_added = 0
    for p in body.policies:
        if p.local_id and p.local_id in existing_local_policy_ids:
            continue
        db.add(Policy(user_id=user.id, **p.model_dump()))
        policies_added += 1

    db.commit()
    return {"clients_added": clients_added, "policies_added": policies_added}


# ── Portfolio Import (CSV) ──────────────────────────────────────────

PORTFOLIO_FIELDS = {
    "policy_number", "holder_name", "plan_name", "premium",
    "sum_assured", "start_date", "maturity_date", "status",
}


@router.post("/portfolio/import")
async def import_portfolio(
    file: UploadFile = File(...),
    column_map: str = Form(...),
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if not file.filename or not file.filename.lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files are accepted")

    import json
    try:
        mapping = json.loads(column_map)
    except (json.JSONDecodeError, TypeError):
        raise HTTPException(status_code=400, detail="Invalid column_map JSON")

    contents = await file.read()
    try:
        text = contents.decode("utf-8-sig")
    except UnicodeDecodeError:
        text = contents.decode("latin-1")

    reader = csv.DictReader(io.StringIO(text))
    rows_added = 0
    errors = []
    for i, row in enumerate(reader, start=2):
        try:
            mapped = {}
            for target_field, csv_col in mapping.items():
                if target_field in PORTFOLIO_FIELDS and csv_col and csv_col in row:
                    mapped[target_field] = row[csv_col].strip()

            if not mapped.get("policy_number") or not mapped.get("holder_name"):
                errors.append({"row": i, "error": "Missing policy_number or holder_name"})
                continue

            premium_val = 0.0
            if mapped.get("premium"):
                premium_str = mapped["premium"].replace(",", "").replace("₹", "").strip()
                if premium_str:
                    premium_val = float(premium_str)

            sa_val = 0.0
            if mapped.get("sum_assured"):
                sa_str = mapped["sum_assured"].replace(",", "").replace("₹", "").strip()
                if sa_str:
                    sa_val = float(sa_str)

            status_raw = (mapped.get("status") or "active").lower().strip()
            status_map = {
                "active": "active", "inforce": "active", "in force": "active", "in-force": "active",
                "lapsed": "lapsed", "matured": "matured", "surrendered": "surrendered",
                "paid-up": "paid-up", "paid up": "paid-up", "paidup": "paid-up",
            }
            status_val = status_map.get(status_raw, "active")

            start_date = mapped.get("start_date") or None
            maturity_date = mapped.get("maturity_date") or None

            term_val = None
            if start_date and maturity_date:
                try:
                    from datetime import datetime
                    fmt_opts = ["%Y-%m-%d", "%d-%m-%Y", "%d/%m/%Y", "%m/%d/%Y"]
                    sd = md = None
                    for fmt in fmt_opts:
                        try:
                            sd = datetime.strptime(start_date, fmt)
                            break
                        except ValueError:
                            pass
                    for fmt in fmt_opts:
                        try:
                            md = datetime.strptime(maturity_date, fmt)
                            break
                        except ValueError:
                            pass
                    if sd and md:
                        term_val = str(max(1, round((md - sd).days / 365.25)))
                except Exception:
                    pass

            policy = Policy(
                user_id=user.id,
                policy_number=mapped["policy_number"],
                holder_name=mapped["holder_name"],
                plan_name=mapped.get("plan_name") or "",
                sum_assured=sa_val,
                premium=premium_val,
                start_date=start_date,
                term=term_val,
                status=status_val,
            )
            db.add(policy)
            rows_added += 1
        except Exception as e:
            errors.append({"row": i, "error": str(e)})

    db.commit()
    return {"imported": rows_added, "errors": errors}


@router.get("/portfolio")
def list_portfolio(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.execute(
        select(Policy).where(Policy.user_id == user.id).order_by(Policy.created_at.desc())
    ).scalars().all()
    return [
        {
            "id": str(p.id),
            "policy_number": p.policy_number,
            "holder_name": p.holder_name,
            "plan_name": p.plan_name,
            "premium": p.premium,
            "sum_assured": p.sum_assured,
            "start_date": p.start_date,
            "term": p.term,
            "status": p.status,
            "mode": p.mode,
            "next_due_date": p.next_due_date,
        }
        for p in rows
    ]


@router.get("/portfolio/analytics")
def portfolio_analytics(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.execute(select(Policy).where(Policy.user_id == user.id)).scalars().all()

    total = len(rows)
    by_status = {}
    total_premium = 0.0
    total_sa = 0.0
    by_plan = {}

    for p in rows:
        st = p.status or "active"
        by_status[st] = by_status.get(st, 0) + 1
        if st == "active":
            total_premium += p.premium or 0
            total_sa += p.sum_assured or 0
        plan = p.plan_name or "Unknown"
        by_plan[plan] = by_plan.get(plan, 0) + 1

    return {
        "total_policies": total,
        "by_status": by_status,
        "total_annual_premium": round(total_premium, 2),
        "total_sum_assured": round(total_sa, 2),
        "by_plan": by_plan,
    }
