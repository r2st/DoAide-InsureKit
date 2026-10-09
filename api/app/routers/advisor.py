"""AI Advisor endpoint — proxies chat to Gemini API server-side."""
import os
from pathlib import Path

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

GEMINI_MODEL = "gemini-3.8-flash"
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"
KEYS_FILE = Path("keys/gemini-api-key")

SYSTEM_PROMPT = (
    "You are an expert LIC insurance advisor for Indian agents and policyholders. "
    "Help with LIC plan selection, premium calculations, policy revival, maturity claims, "
    "tax benefits under 80C/80D/10(10D), bonus rates, and commission structures. "
    "Give practical, actionable advice specific to LIC of India."
)


def _get_api_key() -> str:
    key = os.environ.get("GEMINI_API_KEY", "")
    if not key and KEYS_FILE.exists():
        key = KEYS_FILE.read_text().strip()
    return key


class HistoryItem(BaseModel):
    role: str
    text: str


class AdvisorRequest(BaseModel):
    message: str
    history: list[HistoryItem] = []


@router.post("/api/advisor/ask")
async def advisor_ask(req: AdvisorRequest):
    api_key = _get_api_key()
    if not api_key:
        raise HTTPException(status_code=500, detail="Gemini API key not configured")

    contents = []
    for h in req.history:
        contents.append({
            "role": "user" if h.role == "user" else "model",
            "parts": [{"text": h.text}],
        })
    contents.append({"role": "user", "parts": [{"text": req.message}]})

    payload = {
        "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT}]},
        "contents": contents,
    }

    async with httpx.AsyncClient(timeout=60) as client:
        resp = await client.post(
            GEMINI_URL,
            params={"key": api_key},
            json=payload,
        )

    if resp.status_code != 200:
        raise HTTPException(status_code=502, detail="Gemini API request failed")

    data = resp.json()
    reply = (
        data.get("candidates", [{}])[0]
        .get("content", {})
        .get("parts", [{}])[0]
        .get("text", "Sorry, I couldn't generate a response.")
    )
    return {"reply": reply}
