from urllib.parse import urlencode

import httpx
from fastapi import APIRouter, Depends, HTTPException, Response
from fastapi.responses import RedirectResponse
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.auth import create_token, get_current_user
from app.core.config import settings
from app.core.database import get_db
from app.models.user import User

router = APIRouter(prefix="/auth", tags=["auth"])

GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth"
GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v2/userinfo"

GITHUB_AUTH_URL = "https://github.com/login/oauth/authorize"
GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token"
GITHUB_USER_URL = "https://api.github.com/user"
GITHUB_EMAILS_URL = "https://api.github.com/user/emails"

MS_TENANT = "common"
MS_AUTH_URL = f"https://login.microsoftonline.com/{MS_TENANT}/oauth2/v2.0/authorize"
MS_TOKEN_URL = f"https://login.microsoftonline.com/{MS_TENANT}/oauth2/v2.0/token"
MS_USERINFO_URL = "https://graph.microsoft.com/v1.0/me"


@router.get("/google/login")
async def google_login():
    params = {
        "client_id": settings.google_client_id,
        "redirect_uri": settings.google_redirect_uri,
        "response_type": "code",
        "scope": "openid email profile",
        "state": "google",
        "access_type": "offline",
        "prompt": "select_account",
    }
    return RedirectResponse(url=f"{GOOGLE_AUTH_URL}?{urlencode(params)}")


@router.get("/github/login")
async def github_login():
    params = {
        "client_id": settings.github_client_id,
        "redirect_uri": settings.github_redirect_uri,
        "scope": "read:user user:email",
        "state": "github",
    }
    return RedirectResponse(url=f"{GITHUB_AUTH_URL}?{urlencode(params)}")


@router.get("/microsoft/login")
async def microsoft_login():
    params = {
        "client_id": settings.microsoft_client_id,
        "redirect_uri": settings.microsoft_redirect_uri,
        "response_type": "code",
        "scope": "openid email profile User.Read",
        "state": "microsoft",
        "response_mode": "query",
    }
    return RedirectResponse(url=f"{MS_AUTH_URL}?{urlencode(params)}")


def _set_token_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key="ik_token",
        value=token,
        httponly=True,
        secure=True,
        samesite="lax",
        max_age=settings.jwt_expire_days * 86400,
        path="/",
    )


def _upsert_user(db: Session, *, email: str, name: str, picture: str | None, provider: str, provider_id: str) -> User:
    user = db.execute(select(User).where(User.email == email)).scalar_one_or_none()
    if user:
        user.name = name
        user.picture = picture
        user.provider = provider
        user.provider_id = provider_id
    else:
        user = User(email=email, name=name, picture=picture, provider=provider, provider_id=provider_id)
        db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.get("/google/callback")
async def google_callback(code: str, db: Session = Depends(get_db)):
    async with httpx.AsyncClient() as client:
        token_resp = await client.post(GOOGLE_TOKEN_URL, data={
            "code": code,
            "client_id": settings.google_client_id,
            "client_secret": settings.google_client_secret,
            "redirect_uri": settings.google_redirect_uri,
            "grant_type": "authorization_code",
        })
        if token_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to exchange Google code")
        tokens = token_resp.json()

        user_resp = await client.get(GOOGLE_USERINFO_URL, headers={"Authorization": f"Bearer {tokens['access_token']}"})
        if user_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to get Google user info")
        info = user_resp.json()

    user = _upsert_user(
        db, email=info["email"], name=info.get("name", info["email"]),
        picture=info.get("picture"), provider="google", provider_id=info["id"],
    )
    token = create_token(user.id)
    redirect = RedirectResponse(url=settings.frontend_url, status_code=302)
    _set_token_cookie(redirect, token)
    return redirect


@router.get("/github/callback")
async def github_callback(code: str, db: Session = Depends(get_db)):
    async with httpx.AsyncClient() as client:
        token_resp = await client.post(GITHUB_TOKEN_URL, data={
            "code": code,
            "client_id": settings.github_client_id,
            "client_secret": settings.github_client_secret,
            "redirect_uri": settings.github_redirect_uri,
        }, headers={"Accept": "application/json"})
        if token_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to exchange GitHub code")
        tokens = token_resp.json()
        access_token = tokens.get("access_token")
        if not access_token:
            raise HTTPException(status_code=400, detail="No access token from GitHub")

        headers = {"Authorization": f"Bearer {access_token}", "Accept": "application/json"}
        user_resp = await client.get(GITHUB_USER_URL, headers=headers)
        if user_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to get GitHub user info")
        info = user_resp.json()

        email = info.get("email")
        if not email:
            emails_resp = await client.get(GITHUB_EMAILS_URL, headers=headers)
            if emails_resp.status_code == 200:
                for e in emails_resp.json():
                    if e.get("primary") and e.get("verified"):
                        email = e["email"]
                        break
        if not email:
            raise HTTPException(status_code=400, detail="No verified email from GitHub")

    user = _upsert_user(
        db, email=email, name=info.get("name") or info.get("login", email),
        picture=info.get("avatar_url"), provider="github", provider_id=str(info["id"]),
    )
    token = create_token(user.id)
    redirect = RedirectResponse(url=settings.frontend_url, status_code=302)
    _set_token_cookie(redirect, token)
    return redirect


@router.get("/microsoft/callback")
async def microsoft_callback(code: str, db: Session = Depends(get_db)):
    async with httpx.AsyncClient() as client:
        token_resp = await client.post(MS_TOKEN_URL, data={
            "code": code,
            "client_id": settings.microsoft_client_id,
            "client_secret": settings.microsoft_client_secret,
            "redirect_uri": settings.microsoft_redirect_uri,
            "grant_type": "authorization_code",
            "scope": "openid email profile User.Read",
        })
        if token_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to exchange Microsoft code")
        tokens = token_resp.json()

        user_resp = await client.get(MS_USERINFO_URL, headers={"Authorization": f"Bearer {tokens['access_token']}"})
        if user_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to get Microsoft user info")
        info = user_resp.json()

    email = info.get("mail") or info.get("userPrincipalName")
    if not email:
        raise HTTPException(status_code=400, detail="No email from Microsoft")

    user = _upsert_user(
        db, email=email, name=info.get("displayName", email),
        picture=None, provider="microsoft", provider_id=info["id"],
    )
    token = create_token(user.id)
    redirect = RedirectResponse(url=settings.frontend_url, status_code=302)
    _set_token_cookie(redirect, token)
    return redirect


@router.get("/me")
async def get_me(user: User = Depends(get_current_user)):
    return {
        "id": str(user.id),
        "email": user.email,
        "name": user.name,
        "picture": user.picture,
        "provider": user.provider,
    }


@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("ik_token", path="/")
    return {"ok": True}
