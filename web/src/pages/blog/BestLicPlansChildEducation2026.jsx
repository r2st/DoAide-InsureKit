import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "Which LIC plan is best for my child's education?",
    a: "Jeevan Labh (836) is the top pick for child education because of the highest bonus rates (₹51/1000 SA) and limited premium paying term of 10 years. If you want staged payouts during college years, Jeevan Tarun (834) provides survival benefits at ages 20, 22, and 24. For maximum flexibility, Amritbaal (874) offers a long maturity period with premium waiver on parent's death.",
  },
  {
    q: "How much money do I need for my child's education in 2030-2035?",
    a: "Engineering (private college): ₹15-25 lakh. Medical (private): ₹50-80 lakh. MBA (top institute): ₹25-40 lakh. BCA/BBA: ₹8-12 lakh. Study abroad: ₹30-80 lakh. With education inflation at 10-12% per year, these costs could double in 8-10 years. Start planning early.",
  },
  {
    q: "Should I start a child plan at birth or wait?",
    a: "Start as early as possible. A plan started at age 0 gives 18-25 years of compounding. The premium is lower, the bonus accumulation period is longer, and the maturity corpus is significantly higher. Waiting even 5 years can reduce the final maturity by 20-30%.",
  },
  {
    q: "What is the premium waiver benefit in child plans?",
    a: "If the parent (proposer/life assured) dies during the policy term, all future premiums are waived by LIC, but the policy continues with full benefits. The child receives the complete maturity amount as planned. This is a critical feature that mutual funds and fixed deposits do not offer.",
  },
  {
    q: "Can I use LIC maturity for foreign education?",
    a: "Yes, the maturity amount from LIC can be used for any purpose including foreign education. However, for high-cost foreign education (₹30-80 lakh), a single LIC plan may not be sufficient. Consider combining a LIC plan (for guaranteed base corpus) with SIP in equity mutual funds (for wealth creation).",
  },
  {
    q: "Is Sukanya Samriddhi Yojana better than LIC for daughters?",
    a: "SSY offers 8.2% interest (tax-free) which is higher than LIC endowment returns (5-6% IRR). However, SSY has a ₹1.5 lakh per year investment limit and no life cover. LIC plans provide guaranteed maturity + life cover + premium waiver. For daughters, a combination of SSY + LIC plan gives the best results.",
  },
];

const PLANS = [
  {
    name: "Jeevan Labh",
    table: "836",
    ppt: "10 years",
    term: "16 years",
    srb: "₹51/1000",
    irr: "5.5-6%",
    highlight: "Highest bonus rates in LIC. Pay for 10 years, maturity at 16. Best pure returns.",
  },
  {
    name: "Amritbaal",
    table: "874",
    ppt: "7 or 10 years",
    term: "25 years",
    srb: "₹57/1000",
    irr: "5-5.5%",
    highlight: "Dedicated child plan. Long maturity (25yr from start). Premium waiver on parent's death.",
  },
  {
    name: "Jeevan Tarun",
    table: "834",
    ppt: "Till child is 25",
    term: "25 years (from child's age 0)",
    srb: "₹45/1000",
    irr: "4.5-5%",
    highlight: "Staged payouts: 20% of SA at ages 20, 22, 24 and 40% at 25. Ideal for staggered education costs.",
  },
  {
    name: "Jeevan Lakshya",
    table: "833",
    ppt: "13-25 years",
    term: "13-25 years",
    srb: "₹49/1000",
    irr: "5-6%",
    highlight: "Annual income benefit of 10% SA on death. Family gets income + final lump sum at maturity.",
  },
  {
    name: "New Children's Money Back",
    table: "832",
    ppt: "Till child is 25",
    term: "25 years (from child's age 0)",
    srb: "₹40/1000",
    irr: "4-4.5%",
    highlight: "Payouts at ages 18, 20, 22, and maturity at 25. Good for periodic education milestones.",
  },
];

const EDUCATION_COSTS = [
  { course: "Engineering (Private)", cost2026: "₹15-25 lakh", cost2035: "₹35-55 lakh" },
  { course: "Medical (Private)", cost2026: "₹50-80 lakh", cost2035: "₹1.2-1.8 crore" },
  { course: "MBA (Top 20 B-School)", cost2026: "₹25-40 lakh", cost2035: "₹55-90 lakh" },
  { course: "BCA / BBA / B.Com", cost2026: "₹5-10 lakh", cost2035: "₹12-22 lakh" },
  { course: "Study Abroad (UK/US)", cost2026: "₹30-80 lakh", cost2035: "₹70 lakh - ₹1.8 crore" },
  { course: "IIT / NIT / IIIT", cost2026: "₹8-12 lakh", cost2035: "₹18-28 lakh" },
];

export default function BestLicPlansChildEducation2026() {
  useEffect(() => {
    document.title = "Best LIC Plans for Child Education 2026 — Top 5 with Returns | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Compare the best LIC plans for child education in 2026 — Jeevan Labh, Amritbaal, Jeevan Tarun, Jeevan Lakshya. Premium examples, maturity projections, and education cost planning.";

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
        headline: "Best LIC Plans for Child Education 2026",
        description: "Compare top LIC plans for child education with premium examples, maturity projections, and education cost planning guide.",
        url: "https://insure.doaide.com/blog/best-lic-plans-child-education-2026",
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
        Education Planning
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">
        Best LIC Plans for Child Education 2026
      </h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 12 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            Education costs in India are rising at <strong className="text-white/80">10-12% per year</strong>.
            An engineering degree that costs ₹15 lakh today will cost ₹35+ lakh in 10 years. LIC plans
            offer a <strong className="text-white/80">guaranteed, risk-free way</strong> to build a corpus
            for your child&apos;s education, with the added benefit of life cover and premium waiver on
            the parent&apos;s death — a safety net that no mutual fund provides.
          </p>
          <p>
            This guide compares the top 5 LIC plans for child education planning, with premium examples,
            estimated maturity, and a cost projection table for major courses.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Top 5 LIC Plans for Child Education</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">PPT</th>
                <th className="text-right py-2 px-3">SRB</th>
                <th className="text-right py-2 px-3">IRR</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              {PLANS.map((p) => (
                <tr key={p.table} className="border-b border-white/5">
                  <td className="py-2 px-3 text-white/80">{p.name}</td>
                  <td className="py-2 px-3 text-right">{p.table}</td>
                  <td className="py-2 px-3 text-right">{p.ppt}</td>
                  <td className="py-2 px-3 text-right">{p.srb}</td>
                  <td className="py-2 px-3 text-right text-signal">{p.irr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {PLANS.map((p) => (
        <section key={p.table} className="mb-6">
          <h3 className="text-base font-semibold text-white mb-2">
            {p.name} (Table {p.table})
          </h3>
          <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
            <p>{p.highlight}</p>
            <p className="mt-2">
              Premium paying term: {p.ppt} · Policy term: {p.term} · Bonus rate: {p.srb} · Est. IRR: {p.irr}
            </p>
          </div>
        </section>
      ))}

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Sample Calculation — Jeevan Labh</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Parent age: 30 · Child age: 2 · Plan: Jeevan Labh (836) · SA: ₹10 lakh · Term: 16 years · PPT: 10 years</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-3">
              <tbody className="text-white/60">
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50">Annual Premium (approx.)</td><td className="py-2 px-3 text-right text-white/80">₹55,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50">Total Premium Paid (10 years)</td><td className="py-2 px-3 text-right text-white/80">₹5,50,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50">Sum Assured</td><td className="py-2 px-3 text-right text-white/80">₹10,00,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50">Accrued Bonus (₹51 × 16 × 1000)</td><td className="py-2 px-3 text-right text-white/80">₹8,16,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50">Final Additional Bonus (est.)</td><td className="py-2 px-3 text-right text-white/80">₹1,00,000</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/50 font-semibold">Estimated Maturity</td><td className="py-2 px-3 text-right text-signal font-bold">₹19,16,000</td></tr>
                <tr><td className="py-2 px-3 text-white/50">Maturity when child is</td><td className="py-2 px-3 text-right text-white/80">18 years old</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            You pay ₹5.5 lakh over 10 years and receive approximately ₹19.16 lakh when your child turns 18 — perfect timing for college admission.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Education Cost Projection</h2>
        <p className="text-sm text-white/40 mb-3">Estimated costs assuming 10% annual education inflation:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Course</th>
                <th className="text-right py-2 px-3">Cost Today (2026)</th>
                <th className="text-right py-2 px-3">Est. Cost in 2035</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              {EDUCATION_COSTS.map((row) => (
                <tr key={row.course} className="border-b border-white/5">
                  <td className="py-2 px-3 text-white/80">{row.course}</td>
                  <td className="py-2 px-3 text-right">{row.cost2026}</td>
                  <td className="py-2 px-3 text-right text-signal">{row.cost2035}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How to Choose the Right Plan</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">For maximum returns:</strong> Jeevan Labh (836) — highest bonus rates, limited premium paying</li>
            <li><strong className="text-white/80">For staggered payouts:</strong> Jeevan Tarun (834) — payouts at 20, 22, 24, 25 for each education milestone</li>
            <li><strong className="text-white/80">For dedicated child protection:</strong> Amritbaal (874) — purpose-built child plan with premium waiver</li>
            <li><strong className="text-white/80">For family income protection:</strong> Jeevan Lakshya (833) — annual income to family on parent&apos;s death + lump sum at maturity</li>
            <li><strong className="text-white/80">For periodic payouts:</strong> Children&apos;s Money Back (832) — regular payouts at 18, 20, 22, and 25</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tips for Parents</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white/80">Start early:</strong> Begin when the child is 0-3 years old for maximum compounding</li>
            <li><strong className="text-white/80">Match the term:</strong> Choose a policy term so maturity aligns with the child&apos;s college admission (age 17-18)</li>
            <li><strong className="text-white/80">Diversify:</strong> Combine LIC (guaranteed returns) with SSY (for daughters) and SIP (for growth)</li>
            <li><strong className="text-white/80">Buy adequate cover:</strong> Ensure the parent has a separate term plan for family protection</li>
            <li><strong className="text-white/80">Add riders:</strong> Accident benefit and premium waiver riders cost very little and add valuable protection</li>
          </ol>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm mt-8">
        <p className="text-white/50 mb-3">Calculate premiums and maturity for any child plan</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/premium-calculator" className="btn-primary no-underline text-sm">
            Premium Calculator
          </Link>
          <Link to="/plan-recommender" className="btn-secondary no-underline text-sm">
            Plan Recommender
          </Link>
        </div>
      </div>
    </div>
  );
}
