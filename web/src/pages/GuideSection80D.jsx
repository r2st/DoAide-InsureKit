import { Link } from "react-router-dom";
import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "Can I claim 80D deduction under the new tax regime?",
    a: "No. Section 80D deduction is not available under the new tax regime (Section 115BAC). You must opt for the old regime to claim health insurance premium deductions. Compare both regimes using our Tax Calculator.",
  },
  {
    q: "Is preventive health check-up separate from 80D premium limit?",
    a: "No. The ₹5,000 preventive check-up is included within the overall 80D limit, not in addition to it. For example, if your limit is ₹25,000, the check-up is part of that ₹25,000.",
  },
  {
    q: "Can I claim 80D for parents' health insurance?",
    a: "Yes. You can claim a separate deduction for premiums paid for your parents — ₹25,000 if they're below 60, or ₹50,000 if either parent is 60+. This is over and above your own deduction.",
  },
  {
    q: "Does employer-provided group health insurance qualify for 80D?",
    a: "No. Premiums paid by your employer for group health insurance don't qualify for 80D since you didn't pay them. Only premiums you pay from your own pocket qualify.",
  },
  {
    q: "Can I claim 80D for top-up health insurance?",
    a: "Yes. Super top-up and top-up health insurance premiums qualify for 80D deduction, subject to the overall limit. These are a cost-effective way to increase coverage while maximizing tax benefits.",
  },
  {
    q: "Is GST on health insurance premium eligible for 80D?",
    a: "Yes. The total premium including GST (18%) qualifies for Section 80D deduction. Since GST significantly increases the premium, this provides additional tax relief.",
  },
];

const TOC = [
  { id: "what-is-80d", label: "What is Section 80D" },
  { id: "deduction-limits", label: "Deduction Limits 2026-27" },
  { id: "who-can-claim", label: "Who Can Claim" },
  { id: "eligible-expenses", label: "Eligible Expenses" },
  { id: "senior-citizen", label: "Senior Citizen Benefits" },
  { id: "examples", label: "Tax Saving Examples" },
  { id: "claim-process", label: "How to Claim" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
  { id: "80c-vs-80d", label: "80C vs 80D Comparison" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-tax-benefits", title: "LIC Tax Benefits: 80C & 10(10D)" },
  { path: "/guides/best-plans-for-tax-saving", title: "Best Plans for Tax Saving" },
  { path: "/guides/best-term-insurance-plan", title: "Best Term Insurance Plans 2026" },
];

const RELATED_TOOLS = [
  { path: "/tax-calculator", label: "Tax Benefit Calculator" },
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/plan-comparison", label: "Plan Comparison" },
  { path: "/sip-vs-insurance", label: "SIP vs Insurance" },
];

export default function GuideSection80D() {
  return (
    <GuideLayout
      tag="Tax Guide"
      title="Section 80D Tax Benefits on Health Insurance 2026"
      subtitle="Complete guide to Section 80D deductions — limits for self, family, and parents, eligible expenses, senior citizen benefits, and how to maximize your tax savings on health insurance premiums."
      publishDate="Oct 2026"
      readTime="10 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      <section id="what-is-80d">
        <h2 className="text-lg font-bold text-white mb-3">What is Section 80D?</h2>
        <p className="text-white/70 mb-3">
          Section 80D of the Income Tax Act allows individuals and HUFs to claim deductions on premiums
          paid for health insurance policies. This is <strong className="text-white">separate from
          Section 80C</strong> (which covers life insurance, PPF, ELSS, etc.), giving you additional
          tax savings on top of the ₹1.5 lakh 80C limit.
        </p>
        <p className="text-white/70 mb-3">
          The deduction covers premiums paid for health insurance for yourself, your spouse, dependent
          children, and parents. It also covers preventive health check-up expenses up to ₹5,000 per year.
        </p>
        <p className="text-white/70 mb-3">
          Use our <Link to="/tax-calculator" className="text-signal hover:underline">Tax Benefit Calculator</Link> to
          compute your exact savings under Section 80D.
        </p>
      </section>

      <section id="deduction-limits">
        <h2 className="text-lg font-bold text-white mb-3">Section 80D Deduction Limits (FY 2026-27)</h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Category</th>
                <th className="text-right py-2 pr-4 text-white/50 font-medium">Self &amp; Family</th>
                <th className="text-right py-2 pr-4 text-white/50 font-medium">Parents</th>
                <th className="text-right py-2 text-white/50 font-medium">Total Max</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Below 60 (self) + Below 60 (parents)</td>
                <td className="text-right py-2 pr-4">₹25,000</td>
                <td className="text-right py-2 pr-4">₹25,000</td>
                <td className="text-right py-2 font-medium text-white">₹50,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Below 60 (self) + Senior citizen parents (60+)</td>
                <td className="text-right py-2 pr-4">₹25,000</td>
                <td className="text-right py-2 pr-4">₹50,000</td>
                <td className="text-right py-2 font-medium text-white">₹75,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Senior citizen (60+) self + Senior citizen parents</td>
                <td className="text-right py-2 pr-4">₹50,000</td>
                <td className="text-right py-2 pr-4">₹50,000</td>
                <td className="text-right py-2 font-medium text-white">₹1,00,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-white/70 mb-3">
          The preventive health check-up deduction of ₹5,000 is <strong className="text-white">included
          within</strong> these limits, not in addition to them.
        </p>
      </section>

      <section id="who-can-claim">
        <h2 className="text-lg font-bold text-white mb-3">Who Can Claim Section 80D?</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-3">
          <li><strong className="text-white">Individuals</strong> — salaried, self-employed, or business owners (old tax regime only)</li>
          <li><strong className="text-white">Hindu Undivided Families (HUF)</strong> — for premiums paid for any member</li>
          <li><strong className="text-white">Payment mode</strong> — must be paid by any mode <em>other than cash</em> (cheque, bank transfer, UPI, card). Exception: preventive health check-up can be paid in cash.</li>
        </ul>
        <p className="text-white/70 mb-3">
          <strong className="text-white">Not eligible:</strong> Companies, partnership firms, and LLPs
          cannot claim 80D deductions. Premiums paid for siblings, in-laws, or working children are also
          not eligible.
        </p>
      </section>

      <section id="eligible-expenses">
        <h2 className="text-lg font-bold text-white mb-3">Eligible Expenses Under 80D</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-3">
          <li><strong className="text-white">Health insurance premiums</strong> — mediclaim, family floater, individual policies</li>
          <li><strong className="text-white">Top-up / super top-up</strong> — premiums qualify within the overall limit</li>
          <li><strong className="text-white">Critical illness policies</strong> — standalone critical illness cover premiums</li>
          <li><strong className="text-white">Preventive health check-up</strong> — up to ₹5,000 for self, spouse, children, or parents</li>
          <li><strong className="text-white">CGHS / central govt. scheme</strong> — contribution to Central Government Health Scheme</li>
          <li><strong className="text-white">Medical expenditure for senior citizens</strong> — if parents (60+) are uninsured, actual medical expenses up to ₹50,000 qualify</li>
        </ul>
        <p className="text-white/70 mb-3">
          <strong className="text-white">Not eligible:</strong> GST on life insurance, rider premiums on
          life policies, and premiums paid from employer-provided group insurance.
        </p>
      </section>

      <section id="senior-citizen">
        <h2 className="text-lg font-bold text-white mb-3">Senior Citizen Benefits</h2>
        <p className="text-white/70 mb-3">
          Senior citizens (60+) get enhanced benefits under Section 80D:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-3">
          <li><strong className="text-white">Higher limit</strong> — ₹50,000 instead of ₹25,000 for self/family</li>
          <li><strong className="text-white">Medical expenses allowed</strong> — if no health insurance exists, actual medical expenses up to ₹50,000 qualify (this is unique to senior citizens)</li>
          <li><strong className="text-white">No age limit for parents</strong> — if your parents are super senior citizens (80+), the limit remains ₹50,000</li>
        </ul>
        <p className="text-white/70 mb-3">
          This means a senior citizen paying for their own and their senior citizen parents' health
          insurance can claim up to <strong className="text-white">₹1,00,000</strong> in total deductions.
        </p>
      </section>

      <section id="examples">
        <h2 className="text-lg font-bold text-white mb-3">Tax Saving Examples</h2>

        <div className="panel-inner p-4 mb-4">
          <h3 className="text-sm font-semibold text-white mb-2">Example 1: Salaried (Age 32), Parents Below 60</h3>
          <ul className="text-white/70 text-sm space-y-1">
            <li>Family floater premium: ₹18,000</li>
            <li>Parents' health insurance: ₹22,000</li>
            <li>Preventive check-up: ₹4,000</li>
            <li>Total 80D claim: ₹25,000 (self, capped) + ₹22,000 (parents) = <strong className="text-white">₹47,000</strong></li>
            <li>Tax saved (30% slab): <strong className="text-signal">₹14,100 + cess</strong></li>
          </ul>
        </div>

        <div className="panel-inner p-4 mb-4">
          <h3 className="text-sm font-semibold text-white mb-2">Example 2: Age 45, Senior Citizen Parents (65+)</h3>
          <ul className="text-white/70 text-sm space-y-1">
            <li>Family floater premium: ₹25,000</li>
            <li>Parents' health insurance: ₹48,000</li>
            <li>Preventive check-up (parents): ₹5,000</li>
            <li>Total 80D claim: ₹25,000 (self) + ₹50,000 (parents, capped) = <strong className="text-white">₹75,000</strong></li>
            <li>Tax saved (30% slab): <strong className="text-signal">₹22,500 + cess</strong></li>
          </ul>
        </div>

        <div className="panel-inner p-4 mb-4">
          <h3 className="text-sm font-semibold text-white mb-2">Example 3: Senior Citizen (62) + Senior Parents (85+)</h3>
          <ul className="text-white/70 text-sm space-y-1">
            <li>Own health insurance: ₹45,000</li>
            <li>Parents' medical expenses (no insurance): ₹38,000</li>
            <li>Total 80D claim: ₹50,000 (self, capped) + ₹38,000 (parents) = <strong className="text-white">₹88,000</strong></li>
            <li>Tax saved (30% slab): <strong className="text-signal">₹26,400 + cess</strong></li>
          </ul>
        </div>

        <p className="text-white/70 mb-3">
          Calculate your exact savings with our{" "}
          <Link to="/tax-calculator" className="text-signal hover:underline">Tax Benefit Calculator</Link>.
        </p>
      </section>

      <section id="claim-process">
        <h2 className="text-lg font-bold text-white mb-3">How to Claim Section 80D Deduction</h2>
        <ol className="list-decimal list-inside text-white/70 space-y-2 mb-3">
          <li><strong className="text-white">Collect premium receipts</strong> — ensure they show policy number, premium amount, and payment date</li>
          <li><strong className="text-white">Get Form 16 / 12BB</strong> — declare health insurance details to your employer via Form 12BB for TDS adjustment</li>
          <li><strong className="text-white">Keep preventive check-up bills</strong> — retain receipts for health check-ups (max ₹5,000)</li>
          <li><strong className="text-white">Fill ITR Section 80D</strong> — enter premium paid for self/family and parents separately in Schedule VIA</li>
          <li><strong className="text-white">Verify in Form 26AS / AIS</strong> — check if the insurance company reported the premium payment to the IT department</li>
        </ol>
      </section>

      <section id="common-mistakes">
        <h2 className="text-lg font-bold text-white mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc list-inside text-white/70 space-y-2 mb-3">
          <li><strong className="text-white">Claiming under new regime</strong> — 80D is not available under the new tax regime. Switch to old regime to claim.</li>
          <li><strong className="text-white">Cash payments</strong> — premiums paid in cash don't qualify (except preventive health check-up)</li>
          <li><strong className="text-white">Counting preventive check-up separately</strong> — it's within the limit, not additional</li>
          <li><strong className="text-white">Claiming employer-paid premiums</strong> — group insurance paid by employer doesn't qualify</li>
          <li><strong className="text-white">Mixing 80C and 80D</strong> — life insurance premiums go under 80C, health insurance under 80D. Don't confuse them.</li>
          <li><strong className="text-white">Not claiming parents' premium</strong> — many people miss this separate deduction for parents</li>
        </ul>
      </section>

      <section id="80c-vs-80d">
        <h2 className="text-lg font-bold text-white mb-3">Section 80C vs 80D: Key Differences</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Feature</th>
                <th className="text-left py-2 pr-4 text-white/50 font-medium">Section 80C</th>
                <th className="text-left py-2 text-white/50 font-medium">Section 80D</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Covers</td>
                <td className="py-2 pr-4">Life insurance, PPF, ELSS, etc.</td>
                <td className="py-2">Health insurance premiums</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Max limit</td>
                <td className="py-2 pr-4">₹1,50,000</td>
                <td className="py-2">₹25,000 – ₹1,00,000</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Parents eligible</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">Yes (separate limit)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">Cash payment</td>
                <td className="py-2 pr-4">Allowed for some</td>
                <td className="py-2">Not allowed (except check-ups)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 pr-4">New tax regime</td>
                <td className="py-2 pr-4">Not available</td>
                <td className="py-2">Not available</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-white/70 mb-3">
          Both sections are independent — you can claim <strong className="text-white">₹1.5L under
          80C + up to ₹1L under 80D</strong> = ₹2.5L total deduction. Read more in our{" "}
          <Link to="/guides/lic-tax-benefits" className="text-signal hover:underline">LIC Tax Benefits Guide</Link>.
        </p>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
