import { Link, useLocation } from "react-router-dom";

const ROUTE_NAMES = {
  "/premium-calculator": "Premium Calculator",
  "/maturity-calculator": "Maturity Calculator",
  "/plan-comparison": "Plan Comparison",
  "/commission-calculator": "Commission Calculator",
  "/tax-calculator": "Tax Calculator",
  "/policy-tracker": "Policy Tracker",
  "/bonus-history": "Bonus History",
  "/marketing": "Marketing Generator",
  "/client-reminders": "Client Reminders",
  "/receipt-generator": "Receipt Generator",
  "/revival-calculator": "Revival Calculator",
  "/surrender-calculator": "Surrender Calculator",
  "/loan-calculator": "Loan Against Policy",
  "/premium-calendar": "Premium Calendar",
  "/claim-estimator": "Claim Estimator",
  "/plan-recommender": "Plan Recommender",
  "/compare-plans": "Compare Any Plans",
  "/guides": "Guides",
  "/guides/best-lic-plans-2026": "Best LIC Plans 2026",
  "/guides/check-policy-status": "Check Policy Status",
  "/guides/bonus-rates-history": "Bonus Rates History",
  "/guides/revive-lapsed-policy": "Revive Lapsed Policy",
  "/plans": "LIC Plans",
  "/compare": "Compare",
  "/compare/lic-super-sales-saathi": "InsureKit vs Super Sales Saathi",
  "/compare/perfect-agent-plus": "InsureKit vs Perfect Agent Plus",
  "/best-lic-agent-tools-2026": "Best LIC Agent Tools 2026",
};

export default function Breadcrumb() {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [{ path: "/", label: "Home" }];

  let accumulated = "";
  for (const seg of segments) {
    accumulated += "/" + seg;
    crumbs.push({
      path: accumulated,
      label: ROUTE_NAMES[accumulated] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    });
  }

  return (
    <nav className="border-b border-white/7 print:hidden" aria-label="Breadcrumb">
      <div className="max-w-4xl mx-auto px-4">
        <ol className="flex items-center gap-1.5 py-2.5 text-xs text-white/35">
          {crumbs.map((crumb, i) => (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
              {i === crumbs.length - 1 ? (
                <span className="text-white/60">{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-white/60 transition-colors no-underline">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
