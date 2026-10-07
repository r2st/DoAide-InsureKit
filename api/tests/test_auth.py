import uuid

from app.core.auth import create_token
from app.models.user import User


def _seed_user(db_session) -> User:
    user = User(
        id=uuid.uuid4(),
        email="test@example.com",
        name="Test User",
        picture=None,
        provider="google",
        provider_id="g-123",
    )
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)
    return user


def test_me_unauthenticated(client):
    resp = client.get("/auth/me")
    assert resp.status_code == 401


def test_me_authenticated(client, db_session):
    user = _seed_user(db_session)
    token = create_token(user.id)
    client.cookies.set("ik_token", token)
    resp = client.get("/auth/me")
    assert resp.status_code == 200
    data = resp.json()
    assert data["email"] == "test@example.com"
    assert data["name"] == "Test User"
    assert data["provider"] == "google"


def test_me_invalid_token(client):
    client.cookies.set("ik_token", "bad-token")
    resp = client.get("/auth/me")
    assert resp.status_code == 401


def test_logout(client, db_session):
    user = _seed_user(db_session)
    token = create_token(user.id)
    client.cookies.set("ik_token", token)
    resp = client.post("/auth/logout")
    assert resp.status_code == 200
    assert resp.json()["ok"] is True


def test_google_login_redirect(client):
    resp = client.get("/auth/google/login", follow_redirects=False)
    assert resp.status_code == 307
    assert "accounts.google.com" in resp.headers["location"]


def test_github_login_redirect(client):
    resp = client.get("/auth/github/login", follow_redirects=False)
    assert resp.status_code == 307
    assert "github.com" in resp.headers["location"]


def test_microsoft_login_redirect(client):
    resp = client.get("/auth/microsoft/login", follow_redirects=False)
    assert resp.status_code == 307
    assert "login.microsoftonline.com" in resp.headers["location"]
