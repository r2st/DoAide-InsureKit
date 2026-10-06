# DoAide InsureKit

Free LIC insurance agent back-office tool — premium calculator, maturity calculator, plan comparison, commission calculator, and tax benefit tools.

**Live:** [insure.doaide.com](https://insure.doaide.com)

## Stack

- **Frontend:** React + Vite + Tailwind CSS (port 3064)
- **Backend:** FastAPI + SQLAlchemy + PostgreSQL (port 3063)

## Quick Start

```bash
# Frontend
cd web && npm install && npm run dev

# Backend
cd api && pip install -e ".[dev]" && uvicorn app.main:app --port 3063 --reload
```

## Free Tools (No Login Required)

| Tool | Route | Description |
|------|-------|-------------|
| Premium Calculator | `/premium-calculator` | Calculate exact premium with GST for any LIC plan |
| Maturity Calculator | `/maturity-calculator` | Maturity value with bonus, FAB, and IRR |
| Plan Comparison | `/plan-comparison` | Side-by-side comparison of 2-3 plans |
| Commission Calculator | `/commission-calculator` | Agent commission — FY, renewal, total |
| Tax Calculator | `/tax-calculator` | Section 80C, 10(10D), old vs new regime |

## Tests

```bash
cd web && npm test
cd api && pytest
```

## LIC Plans Covered

Jeevan Anand (815), Jeevan Labh (836), Jeevan Umang (845), New Endowment (814), New Money Back 20yr (820), New Money Back 25yr (821), Tech Term (854), Jeevan Lakshya (833), Dhan Sanchay (871), Amritbaal (874), Jeevan Kiran (875), Saral Pension (862), PMJJBY, PMSBY.
