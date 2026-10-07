from fastapi import APIRouter
from fastapi.responses import Response

router = APIRouter(tags=["seo"])

SITE_URL = "https://insure.doaide.com"

PLAN_SLUGS = [
    "jeevan-anand-715",
    "new-endowment-714",
    "jeevan-labh-736",
    "jeevan-umang-745",
    "money-back-20-720",
    "money-back-25-721",
    "jeevan-lakshya-733",
    "single-prem-endow-717",
    "tech-term-854",
    "jeevan-kiran-875",
    "dhan-sanchay-871",
    "amritbaal-774",
    "saral-pension-862",
    "pmjjby",
    "jeevan-tarun-734",
    "bima-jyoti-860",
    "new-children-money-back-732",
    "aadhaar-shila-744",
    "aadhaar-stambh-743",
    "jeevan-amar-855",
    "jeevan-anand-815",
    "new-endowment-814",
    "jeevan-lakshya-833",
    "new-children-money-back-832",
    "pmsby",
    "jeevan-azad-868",
    "new-jeevan-shanti-858",
    "siip-852",
    "nivesh-plus-849",
    "micro-bachat-851",
    "aam-aadmi-bima-yojana",
]

PAGES = [
    ("/", "weekly", "1.0"),
    ("/plans", "weekly", "0.9"),
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
    ("/compare/lic-super-sales-saathi", "monthly", "0.6"),
    ("/compare/perfect-agent-plus", "monthly", "0.6"),
    ("/best-lic-agent-tools-2026", "monthly", "0.7"),
]

# Add individual plan pages
for slug in PLAN_SLUGS:
    PAGES.append((f"/plans/{slug}", "monthly", "0.7"))


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
