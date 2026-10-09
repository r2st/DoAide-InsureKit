import json
from unittest.mock import patch

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

VALID_PAYLOAD = {
    "page": "/premium-calculator",
    "rating": "up",
    "comment": "Great tool!",
    "timestamp": "2026-10-09T10:00:00.000Z",
}


def test_feedback_submit_success(tmp_path):
    fb_file = tmp_path / "feedback.json"
    with patch("app.routers.feedback.FEEDBACK_FILE", fb_file):
        r = client.post("/api/feedback", json=VALID_PAYLOAD)
    assert r.status_code == 201
    assert r.json()["status"] == "ok"
    entries = json.loads(fb_file.read_text())
    assert len(entries) == 1
    assert entries[0]["page"] == "/premium-calculator"
    assert entries[0]["rating"] == "up"


def test_feedback_appends_to_existing(tmp_path):
    fb_file = tmp_path / "feedback.json"
    fb_file.write_text(json.dumps([{"page": "/old", "rating": "down", "comment": None, "timestamp": "2026-01-01T00:00:00Z"}]))
    with patch("app.routers.feedback.FEEDBACK_FILE", fb_file):
        r = client.post("/api/feedback", json=VALID_PAYLOAD)
    assert r.status_code == 201
    entries = json.loads(fb_file.read_text())
    assert len(entries) == 2


def test_feedback_without_comment(tmp_path):
    fb_file = tmp_path / "feedback.json"
    payload = {**VALID_PAYLOAD, "comment": None}
    with patch("app.routers.feedback.FEEDBACK_FILE", fb_file):
        r = client.post("/api/feedback", json=payload)
    assert r.status_code == 201
    entries = json.loads(fb_file.read_text())
    assert entries[0]["comment"] is None


def test_feedback_missing_rating():
    r = client.post("/api/feedback", json={"page": "/test", "timestamp": "2026-01-01T00:00:00Z"})
    assert r.status_code == 422


def test_feedback_missing_page():
    r = client.post("/api/feedback", json={"rating": "up", "timestamp": "2026-01-01T00:00:00Z"})
    assert r.status_code == 422


def test_feedback_corrupted_file(tmp_path):
    fb_file = tmp_path / "feedback.json"
    fb_file.write_text("not valid json{{{")
    with patch("app.routers.feedback.FEEDBACK_FILE", fb_file):
        r = client.post("/api/feedback", json=VALID_PAYLOAD)
    assert r.status_code == 201
    entries = json.loads(fb_file.read_text())
    assert len(entries) == 1
