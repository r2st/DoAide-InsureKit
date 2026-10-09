"""Weekly task to check LIC data freshness by hashing key pages on licindia.in."""
import hashlib
import json
import logging
from datetime import datetime, timezone
from pathlib import Path

import httpx

logger = logging.getLogger(__name__)

HASH_FILE = Path(__file__).resolve().parent.parent.parent / "lic_page_hashes.json"

LIC_PAGES = {
    "plan_list": "https://licindia.in/web/guest/plan-702702702702702702702702702702702",
    "bonus_rates": "https://licindia.in/bonus-702702702702702702702",
    "home": "https://licindia.in",
}

FRESHNESS_THRESHOLD_DAYS = 30


def _load_stored_hashes() -> dict:
    if HASH_FILE.exists():
        return json.loads(HASH_FILE.read_text())
    return {}


def _save_hashes(data: dict) -> None:
    HASH_FILE.write_text(json.dumps(data, indent=2))


def _fetch_page_hash(url: str) -> str | None:
    try:
        resp = httpx.get(url, timeout=30, follow_redirects=True, headers={
            "User-Agent": "Mozilla/5.0 (compatible; InsureKit-FreshnessBot/1.0)"
        })
        resp.raise_for_status()
        return hashlib.sha256(resp.text.encode()).hexdigest()
    except Exception as e:
        logger.warning("Failed to fetch %s: %s", url, e)
        return None


def check_lic_freshness() -> dict:
    """Check LIC pages for changes. Returns freshness status dict."""
    stored = _load_stored_hashes()
    now = datetime.now(timezone.utc).isoformat()
    changes_detected = False

    for key, url in LIC_PAGES.items():
        current_hash = _fetch_page_hash(url)
        if current_hash is None:
            logger.warning("Could not fetch %s — skipping hash comparison", key)
            continue

        prev = stored.get(key, {})
        prev_hash = prev.get("hash")

        if prev_hash and prev_hash != current_hash:
            logger.warning(
                "LIC page '%s' content changed! Old hash: %s, New hash: %s",
                key, prev_hash[:12], current_hash[:12],
            )
            changes_detected = True

        stored[key] = {
            "hash": current_hash,
            "last_checked": now,
            "changed": prev_hash is not None and prev_hash != current_hash,
        }

    stored["_meta"] = {
        "last_run": now,
        "data_possibly_stale": changes_detected,
    }

    _save_hashes(stored)

    return {
        "checked_at": now,
        "changes_detected": changes_detected,
        "pages_checked": len(LIC_PAGES),
    }


def get_freshness_status() -> dict:
    """Return current freshness status for the API."""
    stored = _load_stored_hashes()
    meta = stored.get("_meta", {})
    last_run = meta.get("last_run")
    stale = meta.get("data_possibly_stale", False)

    days_since_check = None
    if last_run:
        last_dt = datetime.fromisoformat(last_run)
        days_since_check = (datetime.now(timezone.utc) - last_dt).days

    return {
        "last_verified": last_run,
        "days_since_check": days_since_check,
        "data_possibly_stale": stale or (days_since_check is not None and days_since_check > FRESHNESS_THRESHOLD_DAYS),
        "pages": {
            k: v for k, v in stored.items() if k != "_meta"
        },
    }
