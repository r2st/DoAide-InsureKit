"""Celery app configuration with beat schedule for periodic tasks."""
from celery import Celery
from celery.schedules import crontab

celery_app = Celery(
    "insurekit",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/1",
)

celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="Asia/Kolkata",
    enable_utc=True,
    beat_schedule={
        "check-lic-freshness-weekly": {
            "task": "app.tasks.celery_tasks.check_lic_data_freshness",
            "schedule": crontab(hour=6, minute=0, day_of_week=1),
        },
    },
)
