from fastapi import APIRouter
from fastapi.responses import Response

router = APIRouter(tags=["seo"])

SITE_URL = "https://insure.doaide.com"

PAGES = [
    ("/", "weekly", "1.0"),
    ("/premium-calculator", "monthly", "0.9"),
    ("/maturity-calculator", "monthly", "0.9"),
    ("/commission-calculator", "monthly", "0.8"),
    ("/tax-calculator", "monthly", "0.8"),
    ("/plan-comparison", "monthly", "0.8"),
    ("/compare-plans", "monthly", "0.8"),
    ("/plan-recommender", "monthly", "0.8"),
    ("/revival-calculator", "monthly", "0.7"),
    ("/surrender-calculator", "monthly", "0.7"),
    ("/loan-calculator", "monthly", "0.7"),
    ("/claim-estimator", "monthly", "0.7"),
    ("/premium-calendar", "monthly", "0.7"),
    ("/client-reminders", "monthly", "0.6"),
    ("/policy-tracker", "monthly", "0.6"),
    ("/bonus-history", "monthly", "0.7"),
    ("/marketing", "monthly", "0.6"),
    ("/receipt-generator", "monthly", "0.5"),
    ("/guides", "weekly", "0.8"),
    ("/guides/best-lic-plans-2026", "monthly", "0.7"),
    ("/guides/check-policy-status", "monthly", "0.7"),
    ("/guides/bonus-rates-history", "monthly", "0.7"),
    ("/guides/revive-lapsed-policy", "monthly", "0.7"),
]


def _build_sitemap_xml() -> str:
    urls = "\n".join(
        f"  <url><loc>{SITE_URL}{path}</loc>"
        f"<changefreq>{freq}</changefreq>"
        f"<priority>{prio}</priority></url>"
        for path, freq, prio in PAGES
    )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{urls}\n"
        "</urlset>\n"
    )


@router.get("/sitemap.xml")
async def sitemap():
    return Response(content=_build_sitemap_xml(), media_type="application/xml")
