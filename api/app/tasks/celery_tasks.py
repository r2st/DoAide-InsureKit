"""Celery task definitions."""
import logging

from app.tasks.celery_app import celery_app
from app.tasks.lic_freshness import check_lic_freshness

logger = logging.getLogger(__name__)


@celery_app.task(name="app.tasks.celery_tasks.check_lic_data_freshness")
def check_lic_data_freshness():
    """Weekly task to check if LIC website content has changed."""
    logger.info("Running LIC data freshness check...")
    result = check_lic_freshness()
    logger.info("Freshness check complete: %s", result)
    return result
