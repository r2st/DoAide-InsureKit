import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "Which LIC plan gives the best tax saving?",
    a: "For maximum 80C deduction with good returns, Jeevan Anand (815), Jeevan Labh (736), and New Endowment (814) are top choices. For maximum cover per premium, Tech Term (854) offers the most life cover within the ₹1.5L limit.",
  },
  {
    q: "Can I claim 80C deduction under the new tax regime?",
    a: "No, Section 80C deduction is NOT available under the new tax regime. However, Section 10(10D) maturity exemption applies under both regimes.",
  },
  {
    q: "What is the maximum tax saving from LIC premium?",
    a: "Under Section 80C (old regime), you can save up to ₹46,800/year (30% slab × ₹1.5L deduction). This is shared with PPF, ELSS, home loan principal.",
  },
  {
    q: "Is LIC maturity amount tax-free?",
    a: "Yes, under Section 10(10D), if: (a) annual premium < 10% of sum assured, (b) policy runs for 5+ years. Otherwise maturity is taxable as income.",
  },
  {
    q: "Should I buy LIC only for tax saving?",
    a: "No. LIC's primary purpose is life cover and savings. Tax benefit is an added advantage. For pure tax saving, ELSS mutual funds (lock-in 3 years, ~12% returns) may be better. But LIC offers guaranteed returns + insurance cover.",
  },
  {
    q: "Can I claim tax benefit on multiple LIC policies?",
    a: "Yes, you can claim 80C deduction on premiums of multiple LIC policies, up to the combined limit of ₹1.5 lakh per year.",
  },
  {
    q: "What about term insurance tax benefits?",
    a: "Term insurance premiums qualify for 80C deduction. Since premiums are very low, term plans are extremely tax-efficient — you get maximum cover per rupee of premium.",
  },
];

const TOC = [
  { id: "overview", label: "LIC Tax Benefits Overview" },
  { id: "section-80c", label: "Section 80C: Premium Deduction" },
  { id: "section-10-10d", label: "Section 10(10D): Maturity Exemption" },
  { id: "old-vs-new", label: "Old vs New Tax Regime" },
  { id: "best-plans", label: "Top 5 LIC Plans for Tax Saving" },
  { id: "comparison-table", label: "Plan Comparison Table" },
  { id: "strategy", label: "Tax-Saving Strategy with LIC" },
  { id: "avoid", label: "Mistakes to Avoid" },
  { id: "calculator", label: "Calculate Your Tax Savings" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-tax-benefits", title: "LIC Tax Benefits: 80C, 10(10D) Complete Guide" },
  { path: "/guides/best-lic-plans-2026", title: "Best LIC Plans 2026" },
  { path: "/guides/best-term-insurance-plan", title: "Best Term Insurance Plans 2026" },
];

const RELATED_TOOLS = [
  { path: "/tax-calculator", label: "Tax Calculator" },
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/plan-comparison", label: "Plan Comparison" },
  { path: "/plan-recommender", label: "Plan Recommender" },
];

export default function GuideBestPlansForTaxSaving() {
  return (
    <GuideLayout
      tag="Tax Guide"
      title="Best LIC Plans for Tax Saving in 2026"
      subtitle="Compare the best LIC plans for Section 80C tax deduction — returns, maturity exemption under 10(10D), and tax-efficient strategies to maximise your savings."
      publishDate="Oct 2026"
      readTime="10 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      <section id="overview" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">LIC Tax Benefits Overview</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          LIC policies offer dual tax benefits under the Income Tax Act: deduction on premiums paid
          (Section 80C) and exemption on maturity proceeds (Section 10(10D)). Combined with
          guaranteed returns and life cover, LIC remains one of the most popular tax-saving
          instruments in India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="panel-inner p-4 text-center">
            <div className="text-[10px] text-white/30 uppercase tracking-wide">Max 80C Deduction</div>
            <div className="text-xl font-bold text-signal mt-1">₹1.5L/yr</div>
            <div className="text-xs text-white/30 mt-0.5">Old regime only</div>
          </div>
          <div className="panel-inner p-4 text-center">
            <div className="text-[10px] text-white/30 uppercase tracking-wide">Max Tax Saved</div>
            <div className="text-xl font-bold text-signal mt-1">₹46,800</div>
            <div className="text-xs text-white/30 mt-0.5">At 30% slab + cess</div>
          </div>
          <div className="panel-inner p-4 text-center">
            <div className="text-[10px] text-white/30 uppercase tracking-wide">Maturity</div>
            <div className="text-xl font-bold text-signal mt-1">Tax-Free</div>
            <div className="text-xs text-white/30 mt-0.5">Under 10(10D)</div>
          </div>
        </div>
      </section>

      <section id="section-80c" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Section 80C: Premium Deduction</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Under Section 80C, premiums paid towards LIC policies qualify for deduction up to
          ₹1,50,000 per financial year under the <strong className="text-white/80">old tax regime</strong>.
          Key conditions:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-white/50 ml-2 mb-4">
          <li>Premium must be less than 10% of Sum Assured (15% for policies before 2012)</li>
          <li>Deduction for premiums on self, spouse, and children only</li>
          <li>Shared limit with PPF, ELSS, EPF, home loan principal, SCSS, etc.</li>
          <li>If policy is surrendered within 5 years, deductions are reversed</li>
        </ul>
        <div className="panel-inner p-3 text-xs text-white/40">
          <strong className="text-white/60">Tax saving example:</strong> ₹1.5L premium in 30% tax slab
          saves ₹1,50,000 × 31.2% (slab + 4% cess) = <strong className="text-signal">₹46,800</strong> in taxes annually.
        </div>
      </section>

      <section id="section-10-10d" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Section 10(10D): Maturity Exemption</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          The maturity amount (SA + Bonus + FAB) is <strong className="text-white/80">completely tax-free</strong> under
          Section 10(10D) if:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-white/50 ml-2">
          <li>Annual premium does not exceed 10% of Sum Assured</li>
          <li>Policy has been in force for at least 5 years</li>
          <li>Applies under both old AND new tax regimes</li>
          <li>Death claims are always exempt regardless of premium-to-SA ratio</li>
        </ul>
      </section>

      <section id="old-vs-new" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Old vs New Tax Regime</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Feature</th>
                <th className="text-center py-2 px-3 text-white/40 font-medium text-xs uppercase">Old Regime</th>
                <th className="text-center py-2 px-3 text-white/40 font-medium text-xs uppercase">New Regime</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">80C deduction</td>
                <td className="py-2.5 px-3 text-center text-signal font-medium">Yes (up to ₹1.5L)</td>
                <td className="py-2.5 px-3 text-center text-bad">No</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">10(10D) maturity exemption</td>
                <td className="py-2.5 px-3 text-center text-signal font-medium">Yes</td>
                <td className="py-2.5 px-3 text-center text-signal font-medium">Yes</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Better for LIC investors?</td>
                <td className="py-2.5 px-3 text-center text-signal font-bold">Yes</td>
                <td className="py-2.5 px-3 text-center text-white/40">Only if income &lt; ₹7L</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30 mt-2">
          If you have LIC policies with significant premium outgo, the old regime often saves more tax.
          Use InsureKit&apos;s Tax Calculator to compare.
        </p>
      </section>

      <section id="best-plans" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Top 5 LIC Plans for Tax Saving</h2>
        <div className="space-y-4">
          {[
            {
              rank: 1,
              name: "Jeevan Anand (815)",
              type: "Endowment + Whole Life",
              why: "Best all-rounder — good returns (5-6% IRR), whole life cover continues after maturity, flexible term (15-35 years).",
              premium: "₹46,000-55,000/yr for ₹10L SA (age 30, 20yr)",
              taxBenefit: "Full 80C + tax-free maturity + tax-free death claim",
            },
            {
              rank: 2,
              name: "Jeevan Labh (736)",
              type: "Limited Pay Endowment",
              why: "Highest IRR among endowment plans (5.5-6.5%). Limited premium paying term means you pay less years.",
              premium: "₹60,000-75,000/yr for ₹10L SA (age 30, 25yr/16yr PPT)",
              taxBenefit: "80C during PPT years + tax-free maturity",
            },
            {
              rank: 3,
              name: "Tech Term (854)",
              type: "Pure Term Insurance",
              why: "Maximum life cover per rupee. ₹1Cr cover for just ₹10,000-15,000/yr. Best for pure protection + 80C.",
              premium: "₹10,000-15,000/yr for ₹1Cr SA (age 30, 30yr)",
              taxBenefit: "80C on low premium — remaining limit for PPF/ELSS",
            },
            {
              rank: 4,
              name: "New Endowment (814)",
              type: "Traditional Endowment",
              why: "Classic savings plan with guaranteed returns. Lower premium than Jeevan Anand. Good for conservative investors.",
              premium: "₹42,000-48,000/yr for ₹10L SA (age 30, 20yr)",
              taxBenefit: "Full 80C + tax-free maturity",
            },
            {
              rank: 5,
              name: "Jeevan Umang (745)",
              type: "Whole Life + Survival Benefit",
              why: "8% of SA paid every year after PPT until age 100. Provides lifelong income + lump sum to nominee.",
              premium: "₹55,000-65,000/yr for ₹10L SA (age 30, 30yr PPT)",
              taxBenefit: "80C + survival benefits exempt + death claim exempt",
            },
          ].map((plan) => (
            <div key={plan.rank} className="panel p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-signal/15 flex items-center justify-center text-signal font-bold text-xs shrink-0">
                  #{plan.rank}
                </span>
                <div>
                  <span className="text-sm font-semibold text-white">{plan.name}</span>
                  <span className="text-xs text-white/30 ml-2">{plan.type}</span>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-2">{plan.why}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="panel-inner p-2">
                  <span className="text-white/30">Premium: </span>
                  <span className="text-white/60">{plan.premium}</span>
                </div>
                <div className="panel-inner p-2">
                  <span className="text-white/30">Tax: </span>
                  <span className="text-signal">{plan.taxBenefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="comparison-table" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Plan Comparison Table</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Side-by-side comparison for a 30-year-old, ₹10L Sum Assured:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-2 text-white/40 font-medium text-xs uppercase">Plan</th>
                <th className="text-right py-2 px-2 text-white/40 font-medium text-xs uppercase">Premium</th>
                <th className="text-right py-2 px-2 text-white/40 font-medium text-xs uppercase">Maturity</th>
                <th className="text-right py-2 px-2 text-white/40 font-medium text-xs uppercase">IRR</th>
                <th className="text-right py-2 px-2 text-white/40 font-medium text-xs uppercase">Tax Saved</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2 px-2 text-xs">Jeevan Anand 815</td>
                <td className="py-2 px-2 text-right">₹50,000</td>
                <td className="py-2 px-2 text-right">₹19.2L</td>
                <td className="py-2 px-2 text-right text-signal">5.3%</td>
                <td className="py-2 px-2 text-right">₹15,600/yr</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-2 text-xs">Jeevan Labh 736</td>
                <td className="py-2 px-2 text-right">₹65,000</td>
                <td className="py-2 px-2 text-right">₹23.5L</td>
                <td className="py-2 px-2 text-right text-signal">6.1%</td>
                <td className="py-2 px-2 text-right">₹20,280/yr</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-2 text-xs">Tech Term 854</td>
                <td className="py-2 px-2 text-right">₹12,000</td>
                <td className="py-2 px-2 text-right">₹0</td>
                <td className="py-2 px-2 text-right text-white/30">N/A</td>
                <td className="py-2 px-2 text-right">₹3,744/yr</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-2 text-xs">New Endowment 814</td>
                <td className="py-2 px-2 text-right">₹45,000</td>
                <td className="py-2 px-2 text-right">₹17.8L</td>
                <td className="py-2 px-2 text-right text-signal">5.1%</td>
                <td className="py-2 px-2 text-right">₹14,040/yr</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-2 text-xs">Jeevan Umang 745</td>
                <td className="py-2 px-2 text-right">₹60,000</td>
                <td className="py-2 px-2 text-right">₹10L + income</td>
                <td className="py-2 px-2 text-right text-signal">5.5%</td>
                <td className="py-2 px-2 text-right">₹18,720/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30 mt-2">
          Tax saved column assumes 31.2% effective rate (30% slab + 4% cess). Actual savings depend on your income and tax regime.
        </p>
      </section>

      <section id="strategy" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax-Saving Strategy with LIC</h2>
        <div className="space-y-3">
          {[
            {
              title: "Combo strategy: Term + Endowment",
              detail: "Buy ₹1Cr term plan (₹12K premium) for maximum cover, plus endowment (₹1.38L premium) for savings. Total = ₹1.5L 80C limit fully utilised. Best of both worlds.",
            },
            {
              title: "Premium timing: Pay before March 31",
              detail: "Ensure all LIC premiums are paid before March 31 to claim 80C in that financial year. Yearly mode premiums paid in April go to the next FY.",
            },
            {
              title: "Choose yearly mode for double benefit",
              detail: "Yearly premium gets 2% mode rebate (lower premium) AND you claim the full amount under 80C in one FY. Monthly/quarterly splits across FYs.",
            },
            {
              title: "Maintain premium-to-SA ratio",
              detail: "Keep annual premium below 10% of Sum Assured to ensure tax-free maturity under 10(10D). Premium ≥ 10% SA makes maturity taxable.",
            },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4">
              <div className="text-sm font-medium text-white/70 mb-1">{item.title}</div>
              <div className="text-xs text-white/40 leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="avoid" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Mistakes to Avoid</h2>
        <div className="space-y-2">
          {[
            "Buying LIC ONLY for 80C — insurance should match your actual need",
            "Over-insuring to fill the 80C limit — use PPF/ELSS for remaining amount",
            "Choosing new tax regime without calculating — old regime often saves more for LIC holders",
            "Surrendering before 5 years — all 80C deductions are reversed and taxed",
            "Ignoring premium-to-SA ratio — maturity becomes taxable if premium exceeds 10% of SA",
            "Not keeping premium receipts — needed for ITR filing and verification",
          ].map((item, i) => (
            <div key={i} className="panel-inner p-3 flex items-start gap-2">
              <span className="text-bad shrink-0">✗</span>
              <span className="text-xs text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="calculator" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Calculate Your Tax Savings</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Use InsureKit&apos;s free tools to find the best plan and calculate exact tax savings:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a href="/tax-calculator" className="panel-inner p-4 no-underline hover:border-signal/30 transition-all block text-center">
            <div className="text-base font-semibold text-signal">Tax Calculator</div>
            <div className="text-xs text-white/40 mt-1">Compare 80C saving under old vs new regime</div>
          </a>
          <a href="/plan-recommender" className="panel-inner p-4 no-underline hover:border-signal/30 transition-all block text-center">
            <div className="text-base font-semibold text-signal">Plan Recommender</div>
            <div className="text-xs text-white/40 mt-1">Get the best plan for your age &amp; budget</div>
          </a>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
