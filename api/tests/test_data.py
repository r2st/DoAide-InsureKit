import uuid

from app.core.auth import create_token
from app.models.user import User


def _seed_user(db_session) -> User:
    user = User(
        id=uuid.uuid4(),
        email="agent@example.com",
        name="LIC Agent",
        provider="github",
        provider_id="gh-456",
    )
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)
    return user


def _authed_client(client, db_session):
    user = _seed_user(db_session)
    token = create_token(user.id)
    client.cookies.set("ik_token", token)
    return user


# ── Clients ──────────────────────────────────────────────────────────

def test_list_clients_empty(client, db_session):
    _authed_client(client, db_session)
    resp = client.get("/api/clients")
    assert resp.status_code == 200
    assert resp.json() == []


def test_create_and_list_client(client, db_session):
    _authed_client(client, db_session)
    resp = client.post("/api/clients", json={"name": "Ravi Kumar", "phone": "9876543210", "birthday": "03-15"})
    assert resp.status_code == 201
    data = resp.json()
    assert data["name"] == "Ravi Kumar"
    assert data["phone"] == "9876543210"
    assert "id" in data

    listed = client.get("/api/clients").json()
    assert len(listed) == 1
    assert listed[0]["name"] == "Ravi Kumar"


def test_update_client(client, db_session):
    _authed_client(client, db_session)
    created = client.post("/api/clients", json={"name": "Old Name", "phone": "1111"}).json()
    resp = client.put(f"/api/clients/{created['id']}", json={"name": "New Name", "phone": "2222"})
    assert resp.status_code == 200
    assert resp.json()["name"] == "New Name"


def test_delete_client(client, db_session):
    _authed_client(client, db_session)
    created = client.post("/api/clients", json={"name": "Del Me", "phone": "333"}).json()
    resp = client.delete(f"/api/clients/{created['id']}")
    assert resp.status_code == 204
    assert client.get("/api/clients").json() == []


def test_client_isolation(client, db_session):
    """Other users' clients should not be visible."""
    user1 = _seed_user(db_session)
    user2 = User(id=uuid.uuid4(), email="other@example.com", name="Other", provider="google", provider_id="g-other")
    db_session.add(user2)
    db_session.commit()

    token1 = create_token(user1.id)
    client.cookies.set("ik_token", token1)
    client.post("/api/clients", json={"name": "User1 Client", "phone": "111"})

    token2 = create_token(user2.id)
    client.cookies.set("ik_token", token2)
    listed = client.get("/api/clients").json()
    assert len(listed) == 0


# ── Policies ─────────────────────────────────────────────────────────

def test_create_and_list_policy(client, db_session):
    _authed_client(client, db_session)
    payload = {
        "policy_number": "123456789",
        "holder_name": "Ravi Kumar",
        "plan_name": "Jeevan Anand",
        "sum_assured": 500000,
        "premium": 25000,
        "mode": "yearly",
        "status": "active",
    }
    resp = client.post("/api/policies", json=payload)
    assert resp.status_code == 201
    data = resp.json()
    assert data["policy_number"] == "123456789"

    listed = client.get("/api/policies").json()
    assert len(listed) == 1


def test_update_policy(client, db_session):
    _authed_client(client, db_session)
    created = client.post("/api/policies", json={
        "policy_number": "P1", "holder_name": "H1", "plan_name": "Plan1", "sum_assured": 100000, "premium": 5000,
    }).json()
    resp = client.put(f"/api/policies/{created['id']}", json={
        "policy_number": "P1", "holder_name": "H1 Updated", "plan_name": "Plan1", "sum_assured": 200000, "premium": 10000,
    })
    assert resp.status_code == 200
    assert resp.json()["sum_assured"] == 200000


def test_delete_policy(client, db_session):
    _authed_client(client, db_session)
    created = client.post("/api/policies", json={
        "policy_number": "P2", "holder_name": "H2", "plan_name": "Plan2", "sum_assured": 100000, "premium": 5000,
    }).json()
    resp = client.delete(f"/api/policies/{created['id']}")
    assert resp.status_code == 204
    assert client.get("/api/policies").json() == []


# ── Migrate ──────────────────────────────────────────────────────────

def test_migrate_data(client, db_session):
    _authed_client(client, db_session)
    payload = {
        "clients": [
            {"local_id": "abc-123", "name": "Local Client", "phone": "9999"},
            {"local_id": "abc-456", "name": "Another Client", "phone": "8888"},
        ],
        "policies": [
            {"local_id": "pol-1", "policy_number": "LP1", "holder_name": "H1", "plan_name": "P1", "sum_assured": 100000, "premium": 5000},
        ],
    }
    resp = client.post("/api/migrate", json=payload)
    assert resp.status_code == 200
    data = resp.json()
    assert data["clients_added"] == 2
    assert data["policies_added"] == 1

    # Second call should skip duplicates
    resp2 = client.post("/api/migrate", json=payload)
    assert resp2.json()["clients_added"] == 0
    assert resp2.json()["policies_added"] == 0


def test_unauthenticated_data_access(client):
    assert client.get("/api/clients").status_code == 401
    assert client.get("/api/policies").status_code == 401
    assert client.post("/api/migrate", json={"clients": [], "policies": []}).status_code == 401
