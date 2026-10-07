import uuid
from datetime import datetime

from sqlalchemy import DateTime, Float, ForeignKey, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import GUID, Base


class Policy(Base):
    __tablename__ = "policies"

    id: Mapped[uuid.UUID] = mapped_column(GUID(), primary_key=True, default=uuid.uuid4)
    user_id: Mapped[uuid.UUID] = mapped_column(GUID(), ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    local_id: Mapped[str | None] = mapped_column(String(100))
    policy_number: Mapped[str] = mapped_column(String(50), nullable=False)
    holder_name: Mapped[str] = mapped_column(String(200), nullable=False)
    plan_name: Mapped[str] = mapped_column(String(200), nullable=False)
    sum_assured: Mapped[float] = mapped_column(Float, nullable=False)
    premium: Mapped[float] = mapped_column(Float, nullable=False)
    mode: Mapped[str] = mapped_column(String(20), default="yearly")
    start_date: Mapped[str | None] = mapped_column(String(10))
    term: Mapped[str | None] = mapped_column(String(10))
    next_due_date: Mapped[str | None] = mapped_column(String(10))
    status: Mapped[str] = mapped_column(String(20), default="active")
    notes: Mapped[str | None] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user: Mapped["User"] = relationship("User", back_populates="policies")
