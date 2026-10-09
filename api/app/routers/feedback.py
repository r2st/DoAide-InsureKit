"""Feedback collection endpoint — appends to a JSON file."""
import json
from pathlib import Path

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

FEEDBACK_FILE = Path("/opt/DoAide-InsureKit/feedback.json")


class FeedbackPayload(BaseModel):
    page: str
    rating: str
    comment: str | None = None
    timestamp: str


@router.post("/api/feedback", status_code=201)
def submit_feedback(payload: FeedbackPayload):
    FEEDBACK_FILE.parent.mkdir(parents=True, exist_ok=True)
    entries = []
    if FEEDBACK_FILE.exists():
        try:
            entries = json.loads(FEEDBACK_FILE.read_text())
        except (json.JSONDecodeError, OSError):
            entries = []
    entries.append(payload.model_dump())
    FEEDBACK_FILE.write_text(json.dumps(entries, indent=2))
    return {"status": "ok"}
