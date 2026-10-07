"""CRUD endpoints for syncing clients and policies."""
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import select
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
