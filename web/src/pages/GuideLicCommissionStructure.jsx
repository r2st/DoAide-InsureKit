import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "What is the first year commission rate for LIC agents?",
    a: "First year commission depends on Premium Paying Term (PPT): 25% for PPT 15+, 20% for PPT 12-14, 15% for PPT 8-11, 10% for PPT 5-7. Term plans get 28-40%.",
  },
  {
    q: "What is the renewal commission rate?",
    a: "Renewal commission is 7.5% for endowment and money back plans for years 2 onwards. Term plans have different renewal structures (typically 7.5-10%). Single premium plans have no renewal commission.",
  },
  {
    q: "What is LIC bonus commission (Star Club)?",
    a: "LIC rewards agents who achieve high First Year Commission (FYC): Star Club (₹3L+ FYC) gets 20% bonus, MDRT (₹6L+) gets 30%, COT (₹12L+) gets 35%, TOT (₹24L+) gets 40% bonus on total FYC.",
  },
  {
    q: "Do LIC agents get commission on single premium policies?",
    a: "Yes, but at a reduced rate of 2% of the single premium. There is no renewal commission on single premium policies.",
  },
  {
    q: "How much can a new LIC agent earn?",
    a: "A new agent selling 2-3 policies/month with average premium ₹30,000 yearly can earn ₹1.5-2.5 lakh in the first year from FY commission alone. With renewals building up, income can reach ₹5-10 lakh by year 3-5.",
  },
  {
    q: "When is LIC agent commission paid?",
    a: "Commission is credited to the agent's bank account within 7-15 working days after premium receipt. Renewal commission is paid after the renewal premium is received.",
  },
  {
    q: "Is LIC agent commission taxable?",
    a: "Yes, LIC commission is taxable as 'Income from Business or Profession'. TDS at 5% is deducted if annual commission exceeds ₹15,000. Agents can claim business expenses as deductions.",
  },
];

const TOC = [
  { id: "overview", label: "Commission Structure Overview" },
  { id: "first-year", label: "First Year Commission Rates" },
  { id: "renewal", label: "Renewal Commission Rates" },
  { id: "by-plan-type", label: "Commission by Plan Type" },
  { id: "bonus-commission", label: "Bonus Commission & LIC Clubs" },
  { id: "commission-table", label: "Complete Commission Table" },
  { id: "income-scenarios", label: "Income Scenarios for Agents" },
  { id: "tax-on-commission", label: "Tax on Commission Income" },
  { id: "tips", label: "Tips to Maximise Commission" },
];

const RELATED_GUIDES = [
  { path: "/guides/how-to-become-lic-agent", title: "How to Become a LIC Agent" },
  { path: "/guides/lic-agent-exam-preparation", title: "LIC Agent Exam Preparation" },
  { path: "/guides/lic-tax-benefits", title: "LIC Tax Benefits Guide" },
];

const RELATED_TOOLS = [
  { path: "/commission-calculator", label: "Commission Calculator" },
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/dashboard", label: "Agent Dashboard" },
];

export default function GuideLicCommissionStructure() {
  return (
    <GuideLayout
      tag="Agent Guide"
      title="LIC Agent Commission Structure 2026: Complete Guide"
      subtitle="Understand first-year commission, renewal commission, bonus commission, LIC club rewards, and how to maximise your earnings as a LIC agent."
      publishDate="Oct 2026"
      readTime="12 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      <section id="overview" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Commission Structure Overview</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          LIC agents earn commission on every policy they sell. The commission structure has three
          components: <strong className="text-white/80">First Year Commission (FYC)</strong> on
          the first premium, <strong className="text-white/80">Renewal Commission</strong> on
          subsequent premiums, and <strong className="text-white/80">Bonus Commission</strong> for
          high-performing agents who qualify for LIC clubs.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Commission rates were revised by IRDAI effective October 2024. The rates below reflect the
          current structure applicable to all new policies.
        </p>
      </section>

      <section id="first-year" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">First Year Commission Rates</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          First year commission is a percentage of the first annual premium. The rate depends on the
          Premium Paying Term (PPT) — the number of years premiums are to be paid:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">PPT Range</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">FY Rate</th>
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Example Plans</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">15+ years</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">25%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Jeevan Anand 20yr, Jeevan Labh 16yr</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">12-14 years</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">20%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Jeevan Labh 21yr/12yr PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">8-11 years</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">15%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Jeevan Labh 25yr/10yr PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">5-7 years</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">10%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Limited pay 5yr PPT plans</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Single Premium</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">2%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Single Premium Endowment (717)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-3 text-xs text-white/40">
          <strong className="text-white/60">Example:</strong> If you sell a Jeevan Anand (715) policy with ₹50,000
          annual premium and 20-year term, your FY commission = 25% × ₹50,000 = <strong className="text-signal">₹12,500</strong>.
        </div>
      </section>

      <section id="renewal" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Renewal Commission Rates</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Renewal commission is paid on every premium payment from year 2 onwards, for the entire
          premium paying term. This creates a growing passive income stream for agents.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Plan Type</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Renewal Rate</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Duration</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Endowment plans</td>
                <td className="py-2.5 px-3 text-right font-medium">7.5%</td>
                <td className="py-2.5 px-3 text-right text-xs text-white/40">Year 2 to PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Money Back plans</td>
                <td className="py-2.5 px-3 text-right font-medium">7.5%</td>
                <td className="py-2.5 px-3 text-right text-xs text-white/40">Year 2 to PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Whole Life plans</td>
                <td className="py-2.5 px-3 text-right font-medium">7.5%</td>
                <td className="py-2.5 px-3 text-right text-xs text-white/40">Year 2 to PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Term plans</td>
                <td className="py-2.5 px-3 text-right font-medium">7.5%</td>
                <td className="py-2.5 px-3 text-right text-xs text-white/40">Year 2 to PPT</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Pension / Annuity</td>
                <td className="py-2.5 px-3 text-right font-medium">7.5%</td>
                <td className="py-2.5 px-3 text-right text-xs text-white/40">Year 2 to PPT</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-3 text-xs text-white/40">
          <strong className="text-white/60">Passive income example:</strong> If you have 50 active policies each
          paying ₹30,000 annual premium, your yearly renewal income = 50 × ₹30,000 × 7.5% = <strong className="text-signal">₹1,12,500/year</strong>.
        </div>
      </section>

      <section id="by-plan-type" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Commission by Plan Type</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Some plan types have commission overrides that differ from the standard PPT-based rates:
        </p>
        <div className="space-y-2">
          {[
            { type: "Term Plans", fy: "28-40%", note: "Highest FY rate. Tech Term (854) = 28%, Jeevan Amar (855) = 40%." },
            { type: "ULIP Plans", fy: "Varies", note: "SIIP (852), Nivesh Plus (849) have separate commission structures set by IRDAI." },
            { type: "Micro Insurance", fy: "20%", note: "Micro Bachat (851) — lower premium, 20% FY commission." },
            { type: "Govt Schemes", fy: "0%", note: "PMJJBY and PMSBY — no agent commission." },
            { type: "Pension Plans", fy: "2-7.5%", note: "Saral Pension (862), New Jeevan Shanti (858) — lower rates." },
          ].map((item) => (
            <div key={item.type} className="panel-inner p-3 flex items-start gap-3">
              <div className="text-sm font-medium text-white/70 w-32 shrink-0">{item.type}</div>
              <div className="text-sm font-bold text-signal w-20 shrink-0">{item.fy}</div>
              <div className="text-xs text-white/40">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="bonus-commission" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Bonus Commission &amp; LIC Clubs</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC rewards top-performing agents with bonus commission based on their total First Year
          Commission (FYC) earned in a financial year. Higher tiers unlock club memberships with
          additional perks:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Club Tier</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Min FYC</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Bonus Rate</th>
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Perks</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 font-medium">No Club</td>
                <td className="py-2.5 px-3 text-right">Below ₹3L</td>
                <td className="py-2.5 px-3 text-right">0%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Base commission only</td>
              </tr>
              <tr className="border-b border-white/5 bg-signal/5">
                <td className="py-2.5 px-3 font-medium text-signal">Star Club</td>
                <td className="py-2.5 px-3 text-right">₹3,00,000+</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">20%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Certificate, regional events</td>
              </tr>
              <tr className="border-b border-white/5 bg-signal/5">
                <td className="py-2.5 px-3 font-medium text-signal">MDRT</td>
                <td className="py-2.5 px-3 text-right">₹6,00,000+</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">30%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">International trips, higher recognition</td>
              </tr>
              <tr className="border-b border-white/5 bg-signal/5">
                <td className="py-2.5 px-3 font-medium text-signal">COT</td>
                <td className="py-2.5 px-3 text-right">₹12,00,000+</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">35%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Premium foreign trips, VIP status</td>
              </tr>
              <tr className="border-b border-white/5 bg-signal/5">
                <td className="py-2.5 px-3 font-medium text-signal">TOT</td>
                <td className="py-2.5 px-3 text-right">₹24,00,000+</td>
                <td className="py-2.5 px-3 text-right font-bold text-signal">40%</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Highest recognition, exclusive conferences</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-3 text-xs text-white/40">
          <strong className="text-white/60">Example:</strong> An agent with ₹4L FYC qualifies for Star Club.
          Bonus commission = 20% × ₹4,00,000 = <strong className="text-signal">₹80,000</strong> extra.
          Total FY earnings = ₹4L + ₹0.8L = ₹4.8L.
        </div>
      </section>

      <section id="commission-table" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Complete Commission Table</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Here is the complete year-wise commission breakdown for a standard endowment policy with
          ₹50,000 annual premium and 20-year PPT:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Year</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Rate</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Commission</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Cumulative</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5 bg-signal/5">
                <td className="py-2 px-3 font-medium">Year 1</td>
                <td className="py-2 px-3 text-right">25%</td>
                <td className="py-2 px-3 text-right font-bold text-signal">₹12,500</td>
                <td className="py-2 px-3 text-right">₹12,500</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Year 2</td>
                <td className="py-2 px-3 text-right">7.5%</td>
                <td className="py-2 px-3 text-right">₹3,750</td>
                <td className="py-2 px-3 text-right">₹16,250</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3">Year 3-20</td>
                <td className="py-2 px-3 text-right">7.5%</td>
                <td className="py-2 px-3 text-right">₹3,750/yr</td>
                <td className="py-2 px-3 text-right font-bold text-signal">₹83,750</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30 mt-2">
          Total commission over 20 years: ₹12,500 (FY) + ₹3,750 × 19 (renewal) = ₹83,750 from a single ₹50,000/yr policy.
        </p>
      </section>

      <section id="income-scenarios" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Income Scenarios for Agents</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Scenario</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Policies/Month</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Avg Premium</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Year 1 Income</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Year 5 Income</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Part-time agent</td>
                <td className="py-2.5 px-3 text-right">2</td>
                <td className="py-2.5 px-3 text-right">₹25,000</td>
                <td className="py-2.5 px-3 text-right">₹1.5L</td>
                <td className="py-2.5 px-3 text-right font-medium text-signal">₹4.8L</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Full-time agent</td>
                <td className="py-2.5 px-3 text-right">5</td>
                <td className="py-2.5 px-3 text-right">₹35,000</td>
                <td className="py-2.5 px-3 text-right">₹5.3L</td>
                <td className="py-2.5 px-3 text-right font-medium text-signal">₹14.7L</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Star performer</td>
                <td className="py-2.5 px-3 text-right">8</td>
                <td className="py-2.5 px-3 text-right">₹50,000</td>
                <td className="py-2.5 px-3 text-right">₹12L</td>
                <td className="py-2.5 px-3 text-right font-medium text-signal">₹30L+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30">
          Year 5 income includes renewal commission from policies sold in years 1-4 plus new FY commission.
          Star performers also earn bonus commission from club qualification.
        </p>
      </section>

      <section id="tax-on-commission" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax on Commission Income</h2>
        <div className="space-y-3 text-sm text-white/60 leading-relaxed">
          <p>
            LIC agent commission is taxed as <strong className="text-white/80">&quot;Income from Business or Profession&quot;</strong>.
            Key tax points:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/50 ml-2">
            <li><strong className="text-white/70">TDS:</strong> LIC deducts 5% TDS if annual commission exceeds ₹15,000</li>
            <li><strong className="text-white/70">ITR Filing:</strong> File ITR-3 or ITR-4 (presumptive taxation)</li>
            <li><strong className="text-white/70">Section 44ADA:</strong> Claim 50% of commission as expenses without maintaining books (if total income &lt; ₹75L)</li>
            <li><strong className="text-white/70">GST:</strong> Register for GST if annual commission exceeds ₹20L</li>
            <li><strong className="text-white/70">Deductions:</strong> Phone, travel, stationery, internet, client entertainment expenses</li>
          </ul>
        </div>
      </section>

      <section id="tips" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tips to Maximise Commission</h2>
        <div className="space-y-2">
          {[
            { tip: "Sell higher-PPT plans", detail: "20-year PPT plans give 25% FY vs 10% for 5-year PPT." },
            { tip: "Focus on term plans", detail: "28-40% FY rates on term plans like Tech Term (854) are the highest available." },
            { tip: "Aim for club qualification", detail: "Star Club (₹3L+ FYC) gives 20% bonus — a massive income boost." },
            { tip: "Build renewal base", detail: "Each policy creates 19+ years of 7.5% renewal income. Volume compounds." },
            { tip: "Avoid single premium plans for commission", detail: "Only 2% FY with no renewals. Better for client service than income." },
            { tip: "Use InsureKit calculators", detail: "Show clients exact premium and maturity — builds trust and closes more policies." },
          ].map((item) => (
            <div key={item.tip} className="panel-inner p-3">
              <div className="text-sm font-medium text-white/70">{item.tip}</div>
              <div className="text-xs text-white/40 mt-0.5">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
