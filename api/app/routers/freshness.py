"""API endpoints for LIC data freshness status."""
from fastapi import APIRouter

from app.tasks.lic_freshness import get_freshness_status, check_lic_freshness

router = APIRouter(prefix="/api", tags=["freshness"])


@router.get("/freshness")
def freshness_status():
    return get_freshness_status()


@router.post("/freshness/check")
def trigger_freshness_check():
    return check_lic_freshness()
