from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "DoAide InsureKit"
    debug: bool = False
    database_url: str = "postgresql+psycopg://localhost:5432/insurekit"
    cors_origins: list[str] = ["http://localhost:3064", "https://insure.doaide.com"]

    model_config = {"env_prefix": "INSUREKIT_"}


settings = Settings()
