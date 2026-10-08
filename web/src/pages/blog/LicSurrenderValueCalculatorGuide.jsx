import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "How is LIC surrender value calculated?",
    a: "LIC calculates two surrender values — Guaranteed Surrender Value (GSV) and Special Surrender Value (SSV). GSV = (Total premiums paid - first year premium) × GSV factor. SSV = (Paid-up value + accrued bonuses) × SSV factor. You receive whichever is higher.",
  },
  {
    q: "What is the surrender value of LIC policy after 10 years?",
    a: "After 10 years, the Special Surrender Value (SSV) is typically higher than GSV. For a Jeevan Anand policy with ₹5 lakh SA and annual premium of ₹25,000, after 10 years the surrender value is approximately ₹1.8-2.2 lakh (around 70-80% of premiums paid). The exact amount depends on the plan, term, and bonus accrued.",
  },
  {
    q: "When can I surrender my LIC policy?",
    a: "You can surrender a LIC policy after paying premiums for a minimum of 3 consecutive years (2 years for some plans). Before that, the policy has no surrender value and you lose all premiums paid. The surrender value increases significantly after 5+ years.",
  },
  {
    q: "What is the difference between GSV and SSV?",
    a: "Guaranteed Surrender Value (GSV) is the minimum guaranteed amount, calculated using a fixed formula. Special Surrender Value (SSV) is calculated based on the paid-up value and accrued bonuses with a surrender value factor that varies by plan and year. SSV is usually higher for policies with longer premium payment history.",
  },
  {
    q: "Should I surrender my LIC policy or make it paid-up?",
    a: "Making it paid-up is usually better — the policy continues with a reduced sum assured and you still receive the maturity value (reduced SA + bonuses accumulated till that point) at the end of the term. Surrendering gives you immediate cash but at a significant loss. Another option is to take a loan against the policy instead.",
  },
  {
    q: "Is surrender value taxable?",
    a: "If the annual premium exceeds 10% of SA (for policies issued after 01-04-2012), the surrender value is taxable as 'Income from Other Sources'. The taxable amount is: Surrender Value received - Total premiums paid. If annual premium is within the 10% limit, the surrender proceeds are tax-free under Section 10(10D).",
  },
];

const GSV_FACTORS = [
  { year: 3, factor: "30%" },
  { year: 4, factor: "50%" },
  { year: 5, factor: "50%" },
  { year: 6, factor: "55%" },
  { year: 7, factor: "60%" },
  { year: 8, factor: "65%" },
  { year: 9, factor: "70%" },
  { year: 10, factor: "75%" },
  { year: 15, factor: "80%" },
  { year: 20, factor: "90%" },
];

export default function LicSurrenderValueCalculatorGuide() {
  useEffect(() => {
    document.title = "LIC Plan Surrender Value Calculator — How to Calculate GSV & SSV | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Learn how to calculate LIC policy surrender value. Understand GSV vs SSV, year-wise surrender value factors, and when you should (or shouldn't) surrender your LIC policy.";

    let script = document.getElementById("blog-ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "blog-ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "LIC Plan Surrender Value Calculator — How to Calculate GSV & SSV",
        description: "Complete guide to LIC surrender value calculation with formulas, year-wise factors, and alternatives to surrender.",
        url: "https://insure.doaide.com/blog/lic-surrender-value-calculator-guide",
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
        publisher: { "@type": "Organization", name: "DoAide" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((i) => ({
          "@type": "Question",
          name: i.q,
          acceptedAnswer: { "@type": "Answer", text: i.a },
        })),
      },
    ]);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, []);

  return (
    <div className="animate-fade-up">
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        Calculator Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">
        LIC Plan Surrender Value Calculator
      </h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 10 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            Thinking about surrendering your LIC policy? Before you do, understand <strong className="text-white/80">how
            much you will actually receive</strong> and <strong className="text-white/80">what you will
            lose</strong>. Surrendering early can mean losing 40-70% of your total premiums paid.
            This guide explains the surrender value calculation formula, year-wise factors, and
            better alternatives to surrender.
          </p>
          <p>
            Use our <Link to="/surrender-calculator" className="text-signal">Surrender Value Calculator</Link> for
            an instant estimate based on your specific plan, or read on for the detailed formula.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What is Surrender Value?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            Surrender value is the <strong className="text-white/80">cash amount</strong> LIC pays you when
            you permanently exit your policy before its maturity date. It is always significantly less than
            the maturity value you would have received if the policy completed its full term.
          </p>
          <p>LIC calculates two surrender values and pays whichever is higher:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Guaranteed Surrender Value (GSV):</strong> Minimum guaranteed amount based on premiums paid</li>
            <li><strong className="text-white/80">Special Surrender Value (SSV):</strong> Higher value based on paid-up value and accrued bonuses</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">GSV Calculation Formula</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="font-mono text-white/80 bg-white/5 p-3 rounded text-xs">
            GSV = (Total Premiums Paid - First Year Premium) × GSV Factor + Guaranteed Surrender Value of Bonuses
          </p>
          <p>
            The GSV factor depends on how many years of premiums have been paid relative to the total
            premium paying term. The first year premium is excluded because it covers the insurer&apos;s
            acquisition costs (commission, medical, administration).
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Year-wise GSV Factors</h2>
        <p className="text-sm text-white/40 mb-3">Approximate factors for traditional endowment plans:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Years of Premium Paid</th>
                <th className="text-right py-2 px-3">GSV Factor (approx.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              {GSV_FACTORS.map((row) => (
                <tr key={row.year} className="border-b border-white/5">
                  <td className="py-2 px-3 text-white/80">{row.year} years</td>
                  <td className="py-2 px-3 text-right text-signal">{row.factor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">SSV Calculation Formula</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="font-mono text-white/80 bg-white/5 p-3 rounded text-xs">
            SSV = (Paid-Up Value + Accrued Bonuses) × SSV Factor
          </p>
          <p>
            <strong className="text-white/80">Paid-Up Value</strong> = (Premiums Paid / Total Premiums Due) × Sum Assured
          </p>
          <p>
            The SSV factor is specific to each plan and year. It is typically higher than the GSV factor for
            policies that have been running for 5+ years. LIC does not publicly disclose exact SSV factors —
            they are calculated internally based on actuarial methods.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Example Calculation</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <p><strong className="text-white/80">Plan:</strong> Jeevan Anand (815) · SA: ₹5,00,000 · Term: 20 years · Annual Premium: ₹25,000 · Surrendering after 10 years</p>
          <div className="mt-3">
            <p className="text-white/50 text-xs uppercase tracking-wide mb-2">GSV Calculation:</p>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/5"><td className="py-1 px-3">Total premiums paid (10 × ₹25,000)</td><td className="py-1 px-3 text-right text-white/80">₹2,50,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-1 px-3">Less first year premium</td><td className="py-1 px-3 text-right text-white/80">₹25,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-1 px-3">Net premiums × GSV factor (75%)</td><td className="py-1 px-3 text-right text-white/80">₹1,68,750</td></tr>
                <tr className="border-b border-white/5"><td className="py-1 px-3">Bonus GSV (10 yrs × ₹44 × 500 × 30%)</td><td className="py-1 px-3 text-right text-white/80">₹66,000</td></tr>
                <tr><td className="py-1 px-3 font-semibold text-white/70">Total GSV</td><td className="py-1 px-3 text-right text-signal font-bold">₹2,34,750</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            You paid ₹2.5 lakh over 10 years and would receive approximately ₹2.35 lakh — a loss of ₹15,000
            plus the opportunity cost of 10 years of compounding. Had you kept the policy to maturity (20 years),
            you would receive approximately ₹9-10 lakh.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Alternatives to Surrender</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Before surrendering, consider these options that preserve more of your investment:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong className="text-white/80">Loan Against Policy:</strong> Borrow up to 85-90% of the surrender
              value at 9-10% interest while keeping the policy active. Use our{" "}
              <Link to="/loan-calculator" className="text-signal">Loan Calculator</Link>.
            </li>
            <li>
              <strong className="text-white/80">Make it Paid-Up:</strong> Stop paying premiums and let the policy
              continue with a reduced sum assured. You still receive a maturity value (reduced SA + bonuses
              accrued till date). Use our{" "}
              <Link to="/paid-up-value" className="text-signal">Paid-Up Value Calculator</Link>.
            </li>
            <li>
              <strong className="text-white/80">Reduce Premium Mode:</strong> Switch from yearly to quarterly
              or monthly payment to reduce the burden. Contact your LIC branch.
            </li>
            <li>
              <strong className="text-white/80">Auto Premium Loan:</strong> If enabled, LIC automatically deducts
              premiums from the policy&apos;s surrender value, keeping the policy active.
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">When Surrender Makes Sense</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>Policy is in the last 2-3 years of its term (surrender value is close to maturity value)</li>
            <li>You have a medical emergency and no other source of funds</li>
            <li>The policy was mis-sold and does not meet your needs at all</li>
            <li>IRR on the remaining term is very low and you can invest better elsewhere</li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm mt-8">
        <p className="text-white/50 mb-3">Calculate your policy&apos;s surrender value</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/surrender-calculator" className="btn-primary no-underline text-sm">
            Surrender Calculator
          </Link>
          <Link to="/loan-calculator" className="btn-secondary no-underline text-sm">
            Loan Calculator
          </Link>
          <Link to="/paid-up-value" className="btn-secondary no-underline text-sm">
            Paid-Up Value Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
