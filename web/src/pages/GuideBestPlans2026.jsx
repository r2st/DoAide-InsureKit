import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  { q: "Which LIC plan gives the highest returns?", a: "Among endowment plans, Jeevan Labh (836) and Jeevan Lakshya (833) typically offer the highest IRR of 5-6%. However, returns depend on sum assured, age, and term. Use our Maturity Calculator for exact projections." },
  { q: "Is LIC better than mutual funds?", a: "LIC provides guaranteed returns + life cover + tax benefits. Mutual funds offer potentially higher returns but with market risk and no life cover. For most people, a combination works best — LIC for protection + guaranteed savings, SIP for wealth creation." },
  { q: "Which LIC plan is best for a salaried person?", a: "Jeevan Anand (815) for savings + whole life cover, or Jeevan Labh (836) for higher returns with limited premium. For pure protection, Tech Term (854) offers the lowest premium per lakh of cover." },
  { q: "Can I buy multiple LIC policies?", a: "Yes, there's no limit on the number of LIC policies. Many advisors recommend a portfolio approach: a term plan for protection + an endowment for savings + a child plan if needed." },
  { q: "What is the minimum sum assured for LIC plans?", a: "Most LIC plans have a minimum SA of ₹1,00,000 to ₹2,00,000. Some plans like Jeevan Umang start at ₹2,00,000. Higher SA (₹5L+) qualifies for premium rebates." },
];

export default function GuideBestPlans2026() {
  return (
    <div className="animate-fade-up">
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        Comparison Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">Best LIC Plans 2026 — Complete Comparison Guide</h1>
      <p className="text-white/40 text-sm mb-8">
        Updated for 2026 with the latest bonus rates and premium tables
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How to Choose the Right LIC Plan</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Choosing the right LIC plan depends on three factors: your <strong className="text-white/80">goal</strong> (protection, savings, retirement, child's future), your <strong className="text-white/80">budget</strong> (monthly premium you can afford), and your <strong className="text-white/80">age</strong> (which determines eligibility and premium rates).</p>
          <p>Use our <Link to="/plan-recommender" className="text-signal">Plan Recommender</Link> to get personalized suggestions based on your profile.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Endowment Plans</h2>
        <p className="text-sm text-white/40 mb-3">For savings + life cover. Premium paying period = full term.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table No.</th>
                <th className="text-right py-2 px-3">Term</th>
                <th className="text-right py-2 px-3">SRB Rate</th>
                <th className="text-right py-2 px-3">IRR (est.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Anand</td><td className="py-2 px-3 text-right">815</td><td className="py-2 px-3 text-right">15-35yr</td><td className="py-2 px-3 text-right">₹45-46/1000</td><td className="py-2 px-3 text-right text-signal">4.5-5.5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Endowment</td><td className="py-2 px-3 text-right">814</td><td className="py-2 px-3 text-right">12-35yr</td><td className="py-2 px-3 text-right">₹42-43/1000</td><td className="py-2 px-3 text-right text-signal">4-5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Lakshya</td><td className="py-2 px-3 text-right">833</td><td className="py-2 px-3 text-right">13-25yr</td><td className="py-2 px-3 text-right">₹46/1000</td><td className="py-2 px-3 text-right text-signal">5-6%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Limited Premium Plans</h2>
        <p className="text-sm text-white/40 mb-3">Pay premiums for fewer years than the policy term.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table No.</th>
                <th className="text-right py-2 px-3">PPT / Term</th>
                <th className="text-right py-2 px-3">SRB Rate</th>
                <th className="text-right py-2 px-3">IRR (est.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Labh</td><td className="py-2 px-3 text-right">836</td><td className="py-2 px-3 text-right">10/16yr</td><td className="py-2 px-3 text-right">₹52/1000</td><td className="py-2 px-3 text-right text-signal">5.5-6%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Amritbaal</td><td className="py-2 px-3 text-right">874</td><td className="py-2 px-3 text-right">7-10/25yr</td><td className="py-2 px-3 text-right">₹58/1000</td><td className="py-2 px-3 text-right text-signal">5-5.5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Azad</td><td className="py-2 px-3 text-right">868</td><td className="py-2 px-3 text-right">5-10/15-20yr</td><td className="py-2 px-3 text-right">₹50/1000</td><td className="py-2 px-3 text-right text-signal">5-5.5%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Term Plans (Pure Protection)</h2>
        <p className="text-sm text-white/40 mb-3">Maximum cover at minimum premium. No maturity benefit.</p>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <p><strong className="text-white/80">LIC Tech Term (854)</strong> — LIC's online-only term plan with the lowest premium rates. For a 30-year-old male, ₹1 crore cover for 30 years costs approx ₹8,000-10,000/year. Ideal for pure protection needs.</p>
          <p className="mt-2"><strong className="text-white/80">LIC Jeevan Amar (855)</strong> — Offline term plan with additional rider options. Slightly higher premium than Tech Term but includes accidental death benefit rider option.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Whole Life Plan</h2>
        <p className="text-sm text-white/40 mb-3">Life cover till age 100 with regular payouts.</p>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <p><strong className="text-white/80">Jeevan Umang (745)</strong> — Unique whole life plan that pays 8% of SA every year after the premium paying period ends. Cover continues till age 100. SRB rate of ₹50/1000 SA. Best for those wanting regular income + life cover.</p>
        </div>
      </section>

      <div className="panel p-4 border-l-4 border-l-signal mb-6">
        <div className="text-sm font-medium text-white mb-1">Use Our Tools</div>
        <div className="text-sm text-white/50">
          <Link to="/premium-calculator" className="text-signal">Calculate Premium</Link> for any plan &middot;{" "}
          <Link to="/maturity-calculator" className="text-signal">Estimate Maturity</Link> with bonus projections &middot;{" "}
          <Link to="/compare-plans" className="text-signal">Compare Plans</Link> side by side
        </div>
      </div>

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
