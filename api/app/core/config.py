from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "DoAide InsureKit"
    debug: bool = False
    database_url: str = "postgresql+psycopg://localhost:5432/insurekit"
    cors_origins: list[str] = ["http://localhost:3064", "https://insure.doaide.com"]

    jwt_secret: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_expire_days: int = 30

    google_client_id: str = ""
    google_client_secret: str = ""
    google_redirect_uri: str = "https://insure.doaide.com/auth/google/callback"

    github_client_id: str = ""
    github_client_secret: str = ""
    github_redirect_uri: str = "https://insure.doaide.com/auth/github/callback"

    microsoft_client_id: str = ""
    microsoft_client_secret: str = ""
    microsoft_redirect_uri: str = "https://insure.doaide.com/auth/microsoft/callback"

    frontend_url: str = "https://insure.doaide.com"

    model_config = {"env_prefix": "INSUREKIT_"}


settings = Settings()
