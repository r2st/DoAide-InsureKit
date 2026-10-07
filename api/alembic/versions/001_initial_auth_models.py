"""initial auth models

Revision ID: 001
Revises:
Create Date: 2026-10-07
"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = "001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("email", sa.String(320), nullable=False, unique=True, index=True),
        sa.Column("name", sa.String(200), nullable=False),
        sa.Column("picture", sa.String(500), nullable=True),
        sa.Column("provider", sa.String(20), nullable=False),
        sa.Column("provider_id", sa.String(200), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
    )

    op.create_table(
        "clients",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True),
        sa.Column("local_id", sa.String(100), nullable=True),
        sa.Column("name", sa.String(200), nullable=False),
        sa.Column("phone", sa.String(20), nullable=True),
        sa.Column("email", sa.String(320), nullable=True),
        sa.Column("birthday", sa.String(5), nullable=True),
        sa.Column("anniversary", sa.String(5), nullable=True),
        sa.Column("notes", sa.Text, nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
    )

    op.create_table(
        "policies",
        sa.Column("id", postgresql.UUID(as_uuid=True), primary_key=True, server_default=sa.text("gen_random_uuid()")),
        sa.Column("user_id", postgresql.UUID(as_uuid=True), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True),
        sa.Column("local_id", sa.String(100), nullable=True),
        sa.Column("policy_number", sa.String(50), nullable=False),
        sa.Column("holder_name", sa.String(200), nullable=False),
        sa.Column("plan_name", sa.String(200), nullable=False),
        sa.Column("sum_assured", sa.Float, nullable=False),
        sa.Column("premium", sa.Float, nullable=False),
        sa.Column("mode", sa.String(20), server_default="yearly"),
        sa.Column("start_date", sa.String(10), nullable=True),
        sa.Column("term", sa.String(10), nullable=True),
        sa.Column("next_due_date", sa.String(10), nullable=True),
        sa.Column("status", sa.String(20), server_default="active"),
        sa.Column("notes", sa.Text, nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), server_default=sa.func.now()),
    )


def downgrade() -> None:
    op.drop_table("policies")
    op.drop_table("clients")
    op.drop_table("users")
