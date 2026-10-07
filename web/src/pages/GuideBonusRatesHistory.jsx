import { Link } from "react-router-dom";
import { getAllBonusPlans, getBonusHistory } from "../data/bonusHistory";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  { q: "How is LIC bonus calculated?", a: "LIC declares Simple Reversionary Bonus (SRB) as ₹X per ₹1000 of Sum Assured. The bonus is added annually to the policy and paid at maturity or death. For example, if SRB is ₹45/1000 and SA is ₹10L, annual bonus = ₹45 × 1000 = ₹45,000." },
  { q: "Is LIC bonus guaranteed?", a: "No, LIC bonus is not guaranteed. It is declared annually based on the corporation's surplus. However, once declared and added to a policy, it becomes a guaranteed vested bonus that cannot be reduced." },
  { q: "What is Final Additional Bonus (FAB)?", a: "FAB is a one-time bonus added at maturity or death for policies that have run for a minimum number of years (usually 15+). It is in addition to the accumulated SRB and can significantly increase the payout." },
  { q: "Why do bonus rates differ between plans?", a: "Bonus rates depend on the plan's premium structure, investment pool, and expense ratio. Plans with higher premiums per SA (like Jeevan Umang) tend to get higher bonus rates." },
  { q: "When does LIC declare bonuses?", a: "LIC declares bonuses annually, typically after the Board of Directors' meeting following the end of the financial year (March 31). The bonus declaration usually happens between June and September." },
];

export default function GuideBonusRatesHistory() {
  const allPlans = getAllBonusPlans();

  return (
    <div className="animate-fade-up">
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        Reference Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">LIC Bonus Rates History 2024-2026</h1>
      <p className="text-white/40 text-sm mb-8">
        Complete SRB rates history for all major LIC plans. Track bonus trends to project maturity values.
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Understanding LIC Bonus</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>LIC declares <strong className="text-white/80">Simple Reversionary Bonus (SRB)</strong> annually for participating plans. The bonus is expressed as <strong className="text-white/80">₹X per ₹1000 of Sum Assured</strong>.</p>
          <p>For example, if SRB rate is ₹45/1000 and your Sum Assured is ₹10,00,000:</p>
          <div className="panel p-3 bg-signal/5 text-signal text-xs font-mono">
            Annual Bonus = (₹45 / 1000) × 10,00,000 = ₹45,000
          </div>
          <p>This bonus is added to the policy every year and compounds over the policy term, forming a significant portion of the maturity payout.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Current Bonus Rates (2024-25)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan Name</th>
                <th className="text-right py-2 px-3">Table No.</th>
                <th className="text-right py-2 px-3">SRB 2023</th>
                <th className="text-right py-2 px-3">SRB 2024</th>
                <th className="text-right py-2 px-3">SRB 2025</th>
                <th className="text-right py-2 px-3">Trend</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              {allPlans.map((planName) => {
                const history = getBonusHistory(planName);
                if (!history) return null;
                const rates = history.rates;
                const r2023 = rates.find((r) => r.year === 2023)?.srb || "-";
                const r2024 = rates.find((r) => r.year === 2024)?.srb || "-";
                const r2025 = rates.find((r) => r.year === 2025)?.srb || "-";
                const trend = r2025 !== "-" && r2024 !== "-" ? (r2025 > r2024 ? "up" : r2025 < r2024 ? "down" : "same") : "same";
                return (
                  <tr key={planName} className="border-b border-white/5">
                    <td className="py-2 px-3 text-white/80">{history.planName}</td>
                    <td className="py-2 px-3 text-right text-white/40">{history.tableNo}</td>
                    <td className="py-2 px-3 text-right">{r2023 !== "-" ? `₹${r2023}` : "-"}</td>
                    <td className="py-2 px-3 text-right">{r2024 !== "-" ? `₹${r2024}` : "-"}</td>
                    <td className="py-2 px-3 text-right text-signal font-medium">{r2025 !== "-" ? `₹${r2025}` : "-"}</td>
                    <td className="py-2 px-3 text-right">
                      {trend === "up" && <span className="text-good">&#8593;</span>}
                      {trend === "down" && <span className="text-bad">&#8595;</span>}
                      {trend === "same" && <span className="text-white/30">&#8212;</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/25 mt-2">Rates shown are ₹ per 1000 of Sum Assured. Actual rates may vary by SA slab for some plans.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Key Takeaways</h2>
        <div className="space-y-2">
          {[
            "LIC bonus rates have been broadly stable over the last few years, with some plans seeing marginal increases",
            "Plans with limited premium payment terms (Jeevan Labh, Amritbaal) tend to offer higher SRB rates",
            "Whole life plans like Jeevan Umang offer consistent high bonus rates due to longer investment horizon",
            "Term plans and non-participating plans do not receive any bonus",
          ].map((point, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start text-sm text-white/50">
              <span className="text-signal shrink-0 mt-0.5">&#8226;</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="panel p-4 border-l-4 border-l-signal mb-6">
        <div className="text-sm font-medium text-white mb-1">Explore Bonus Data</div>
        <div className="text-sm text-white/50">
          <Link to="/bonus-history" className="text-signal">Interactive Bonus History</Link> with year-by-year charts &middot;{" "}
          <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> uses these rates for projections &middot;{" "}
          <Link to="/claim-estimator" className="text-signal">Claim Estimator</Link> for bonus scenarios
        </div>
      </div>

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
