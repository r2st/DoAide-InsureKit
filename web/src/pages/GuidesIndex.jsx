import { Link } from "react-router-dom";

const GUIDES = [
  {
    path: "/guides/best-lic-plans-2026",
    title: "Best LIC Plans 2026 — Complete Comparison Guide",
    desc: "Comprehensive comparison of top LIC plans for 2026. Find the best endowment, term, money back, and whole life plans based on returns, features, and suitability.",
    tag: "Comparison",
  },
  {
    path: "/guides/check-policy-status",
    title: "How to Check LIC Policy Status Online",
    desc: "Step-by-step guide to check your LIC policy status online via the LIC website, app, SMS, and through your agent. Includes premium payment status and maturity details.",
    tag: "How-To",
  },
  {
    path: "/guides/bonus-rates-history",
    title: "LIC Bonus Rates History 2024-2026",
    desc: "Complete history of LIC Simple Reversionary Bonus (SRB) rates from 2024 to 2026. Track bonus trends across all major endowment and whole life plans.",
    tag: "Reference",
  },
  {
    path: "/guides/revive-lapsed-policy",
    title: "How to Revive a Lapsed LIC Policy",
    desc: "Complete guide to reviving a lapsed LIC policy — eligibility, required documents, revival amount calculation, online and offline methods, and tips to avoid future lapses.",
    tag: "How-To",
  },
];

export default function GuidesIndex() {
  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold text-white mb-1">InsureKit Guides</h1>
      <p className="text-white/40 text-sm mb-8">
        In-depth guides on LIC plans, policies, and procedures
      </p>

      <div className="space-y-4">
        {GUIDES.map((guide) => (
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
                <h2 className="text-base font-semibold text-white mt-2 group-hover:text-signal transition-colors">
                  {guide.title}
                </h2>
                <p className="text-xs text-white/35 mt-1 leading-relaxed">{guide.desc}</p>
              </div>
              <span className="text-white/20 group-hover:text-signal transition-colors shrink-0 mt-6">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
