from unittest.mock import patch, AsyncMock

import httpx
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def _gemini_response(text="Test reply"):
    return httpx.Response(
        200,
        json={"candidates": [{"content": {"parts": [{"text": text}]}}]},
    )


def test_advisor_ask_success():
    mock = AsyncMock(return_value=_gemini_response())
    with patch("app.routers.advisor._get_api_key", return_value="fake-key"), \
         patch("httpx.AsyncClient.post", mock):
        r = client.post("/api/advisor/ask", json={"message": "Hello"})
    assert r.status_code == 200
    assert r.json()["reply"] == "Test reply"
    call_kwargs = mock.call_args
    assert "gemini-3.8-flash" in call_kwargs.args[0]
    body = call_kwargs.kwargs["json"]
    assert body["contents"][-1]["parts"][0]["text"] == "Hello"
    assert body["systemInstruction"]["parts"][0]["text"]


def test_advisor_ask_with_history():
    mock = AsyncMock(return_value=_gemini_response("Got it"))
    history = [
        {"role": "user", "text": "Q1"},
        {"role": "assistant", "text": "A1"},
    ]
    with patch("app.routers.advisor._get_api_key", return_value="fake-key"), \
         patch("httpx.AsyncClient.post", mock):
        r = client.post("/api/advisor/ask", json={"message": "Q2", "history": history})
    assert r.status_code == 200
    body = mock.call_args.kwargs["json"]
    assert len(body["contents"]) == 3
    assert body["contents"][0]["role"] == "user"
    assert body["contents"][1]["role"] == "model"
    assert body["contents"][2]["role"] == "user"


def test_advisor_ask_no_api_key():
    with patch("app.routers.advisor._get_api_key", return_value=""):
        r = client.post("/api/advisor/ask", json={"message": "Hi"})
    assert r.status_code == 500
    assert "not configured" in r.json()["detail"]


def test_advisor_ask_gemini_error():
    mock = AsyncMock(return_value=httpx.Response(500, json={"error": "fail"}))
    with patch("app.routers.advisor._get_api_key", return_value="fake-key"), \
         patch("httpx.AsyncClient.post", mock):
        r = client.post("/api/advisor/ask", json={"message": "Hi"})
    assert r.status_code == 502


def test_advisor_ask_missing_message():
    r = client.post("/api/advisor/ask", json={})
    assert r.status_code == 422


def test_advisor_key_from_file(tmp_path):
    key_file = tmp_path / "gemini-api-key"
    key_file.write_text("  file-key-123  \n")
    with patch("app.routers.advisor.KEYS_FILE", key_file), \
         patch.dict("os.environ", {}, clear=False):
        from app.routers.advisor import _get_api_key
        import os
        os.environ.pop("GEMINI_API_KEY", None)
        assert _get_api_key() == "file-key-123"
