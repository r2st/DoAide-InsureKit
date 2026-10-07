import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    label: "How-To Guides",
    guides: [
      {
        path: "/guides/lic-premium-payment-online",
        title: "How to Pay LIC Premium Online: Complete Guide 2026",
        desc: "All methods to pay LIC premium online — LIC portal, app, UPI, net banking, and CSC. Payment charges, grace period rules, and troubleshooting.",
        tag: "How-To",
      },
      {
        path: "/guides/lic-policy-status-check",
        title: "How to Check LIC Policy Status Online",
        desc: "6 methods to check your LIC policy status — website, app, SMS, helpline, agent, and branch. Understand policy status types and keep details updated.",
        tag: "How-To",
      },
      {
        path: "/guides/check-policy-status",
        title: "Quick Guide: Check LIC Policy Status",
        desc: "Short step-by-step guide to check your LIC policy status online via the LIC website, app, and SMS.",
        tag: "How-To",
      },
      {
        path: "/guides/lic-maturity-amount-check",
        title: "How to Check LIC Maturity Amount Online",
        desc: "Understand maturity value components — SA, SRB, FAB. Sample calculations for Jeevan Anand and Jeevan Labh. Tax rules on maturity.",
        tag: "How-To",
      },
      {
        path: "/guides/lic-loan-on-policy",
        title: "How to Get Loan Against LIC Policy: Complete Guide",
        desc: "Eligibility, loan amount (up to 90% of surrender value), interest rates, application process, and repayment options for LIC policy loans.",
        tag: "How-To",
      },
      {
        path: "/guides/lic-claim-process",
        title: "LIC Claim Process: Documents, Steps & Settlement",
        desc: "Maturity, death, and survival benefit claim process. Required documents, settlement timeline, rejection reasons, and escalation steps.",
        tag: "How-To",
      },
      {
        path: "/guides/revive-lapsed-policy",
        title: "How to Revive a Lapsed LIC Policy",
        desc: "Complete guide to reviving a lapsed LIC policy — eligibility, required documents, revival amount calculation, online and offline methods.",
        tag: "How-To",
      },
    ],
  },
  {
    label: "Reference & Tax",
    guides: [
      {
        path: "/guides/best-plans-for-tax-saving",
        title: "Best LIC Plans for Tax Saving 2026",
        desc: "Top 5 LIC plans for Section 80C. Compare returns, maturity exemption, and tax-efficient strategies — old vs new regime.",
        tag: "Tax Guide",
      },
      {
        path: "/guides/lic-tax-benefits",
        title: "LIC Policy Tax Benefits: Section 80C, 10(10D) Complete Guide",
        desc: "Tax deduction on premium (80C), maturity exemption (10(10D)), old vs new regime comparison, and tax planning strategies with LIC.",
        tag: "Tax Guide",
      },
      {
        path: "/guides/lic-surrender-value",
        title: "LIC Surrender Value: How to Calculate & Rules",
        desc: "GSV vs SSV formulas, year-wise surrender value table, tax on surrender, and 4 alternatives to surrendering your LIC policy.",
        tag: "Reference",
      },
      {
        path: "/guides/bonus-rates-history",
        title: "LIC Bonus Rates History 2024-2026",
        desc: "Complete history of LIC Simple Reversionary Bonus (SRB) rates from 2024 to 2026. Track bonus trends across all major plans.",
        tag: "Reference",
      },
    ],
  },
  {
    label: "Comparison & Best Plans",
    guides: [
      {
        path: "/guides/best-lic-plans-2026",
        title: "Best LIC Plans 2026 — Complete Comparison Guide",
        desc: "Comprehensive comparison of top LIC plans for 2026. Find the best endowment, term, money back, and whole life plans.",
        tag: "Comparison",
      },
      {
        path: "/guides/best-lic-plans-for-child",
        title: "Best LIC Plans for Children 2026: Top 5 with Returns",
        desc: "Amritbaal, Jeevan Tarun, Children's Money Back compared. Sample calculations, education cost planning, and choosing the right plan.",
        tag: "Comparison",
      },
      {
        path: "/guides/best-term-insurance-plan",
        title: "Best Term Insurance Plans 2026: LIC vs Private",
        desc: "LIC Tech Term, Jeevan Amar vs HDFC, ICICI, Max Life. Claim settlement ratios, premium comparison, riders, and buying guide.",
        tag: "Comparison",
      },
    ],
  },
  {
    label: "Career & Commission",
    guides: [
      {
        path: "/guides/how-to-become-lic-agent",
        title: "How to Become a LIC Agent in 2026: Complete Guide",
        desc: "Step-by-step process — eligibility, 25-hour training, IC-38 exam, IRDAI license, first steps, and career growth path.",
        tag: "Career",
      },
      {
        path: "/guides/lic-commission-structure",
        title: "LIC Agent Commission Structure 2026",
        desc: "First year (10-40%), renewal (7.5%), bonus commission, Star Club/MDRT/COT/TOT tiers, income scenarios, and tax on commission.",
        tag: "Agent Guide",
      },
      {
        path: "/guides/lic-agent-exam-preparation",
        title: "LIC Agent Exam 2026: Syllabus, Preparation Tips & Study Material",
        desc: "IC-38 exam syllabus, pattern, preparation strategy, free study resources, and career growth path as a LIC agent.",
        tag: "Career",
      },
    ],
  },
];

export default function GuidesIndex() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">InsureKit Guides</h1>
      <p className="text-white/40 text-sm mb-8">
        In-depth guides on LIC plans, policies, tax benefits, and procedures
      </p>

      {CATEGORIES.map((cat) => (
        <div key={cat.label} className="mb-10">
          <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
            {cat.label}
          </h2>
          <div className="space-y-3">
            {cat.guides.map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="panel p-5 block hover:border-signal/30 transition-all group no-underline"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
                      {guide.tag}
                    </span>
                    <h3 className="text-base font-semibold text-white mt-2 group-hover:text-signal transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-white/35 mt-1 leading-relaxed">{guide.desc}</p>
                  </div>
                  <span className="text-white/20 group-hover:text-signal transition-colors shrink-0 mt-6">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
