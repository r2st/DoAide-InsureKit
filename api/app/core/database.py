import uuid as _uuid
from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker
from sqlalchemy.types import CHAR, TypeDecorator

from app.core.config import settings


class GUID(TypeDecorator):
    """Platform-independent UUID type: native UUID on PostgreSQL, CHAR(32) on SQLite."""
    impl = CHAR
    cache_ok = True

    def load_dialect_impl(self, dialect):
        if dialect.name == "postgresql":
            from sqlalchemy.dialects.postgresql import UUID
            return dialect.type_descriptor(UUID(as_uuid=True))
        return dialect.type_descriptor(CHAR(32))

    def process_bind_param(self, value, dialect):
        if value is None:
            return value
        if dialect.name == "postgresql":
            return value if isinstance(value, _uuid.UUID) else _uuid.UUID(value)
        return value.hex if isinstance(value, _uuid.UUID) else _uuid.UUID(value).hex

    def process_result_value(self, value, dialect):
        if value is None:
            return value
        if isinstance(value, _uuid.UUID):
            return value
        return _uuid.UUID(value)

engine = create_engine(settings.database_url, echo=settings.debug)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)


class Base(DeclarativeBase):
    pass


def get_db() -> Generator[Session]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
