import uuid
from datetime import datetime

from sqlalchemy import DateTime, String, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import GUID, Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(GUID(), primary_key=True, default=uuid.uuid4)
    email: Mapped[str] = mapped_column(String(320), unique=True, nullable=False, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    picture: Mapped[str | None] = mapped_column(String(500))
    provider: Mapped[str] = mapped_column(String(20), nullable=False)
    provider_id: Mapped[str] = mapped_column(String(200), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    clients: Mapped[list["Client"]] = relationship("Client", back_populates="user", cascade="all, delete-orphan")
    policies: Mapped[list["Policy"]] = relationship("Policy", back_populates="user", cascade="all, delete-orphan")
