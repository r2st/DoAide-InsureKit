import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  { q: "How is LIC premium calculated?", a: "LIC premium depends on: age at entry (older = higher premium), sum assured (higher SA = more premium but lower per-₹1000 rate due to SA rebate), policy term (longer term = lower annual premium but more total payment), premium payment mode (yearly is cheapest, monthly has loading), and plan type. The base tabular premium is multiplied by SA/1000, then GST, riders, and rebates are applied." },
  { q: "What is the GST rate on LIC premium?", a: "GST on life insurance premium is 18% for the first year and 18% on the portion of renewal premium that exceeds the previous year's surrender value. For term plans, 18% GST applies on the full premium for all years. For ULIPs, GST is 18% on fund management charges." },
  { q: "What is mode rebate in LIC?", a: "LIC offers a rebate for paying premiums annually or semi-annually instead of monthly. Yearly mode gets ~2% rebate, half-yearly gets ~1% rebate. Monthly (ECS/NACH) has no rebate. The rebate is applied on the tabular premium before GST calculation." },
  { q: "What is SA rebate in LIC?", a: "Sum Assured rebate is a discount on the tabular premium rate for higher SA. For most plans: no rebate below ₹2 lakh SA, small rebate (₹1-2 per ₹1000) for ₹2-5 lakh SA, and larger rebate for ₹5 lakh+ SA. The rebate incentivizes buying higher coverage." },
  { q: "Can I reduce my LIC premium mid-policy?", a: "You cannot reduce the premium directly, but you can convert to a Paid-Up policy (stop paying premiums — the policy continues with reduced SA proportional to premiums paid). You can also reduce premium by switching from yearly to monthly mode, though this increases total cost due to mode loading." },
];

export default function LicPremiumCalculatorGuide() {
  useEffect(() => {
    document.title = "LIC Premium Calculator Guide — How to Calculate Premium for Any Plan | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Complete guide to LIC premium calculation. Understand premium factors, GST, mode rebates, SA rebates, and how to calculate exact premium for any LIC plan using InsureKit.";

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
        headline: "LIC Premium Calculator Guide — How to Calculate Premium for Any Plan",
        description: "Complete guide to understanding and calculating LIC premiums. Covers tabular rates, GST, mode rebates, SA rebates, and rider costs.",
        url: "https://insurekit.doaide.com/blog/lic-premium-calculator-guide",
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
        publisher: { "@type": "Organization", name: "DoAide" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(i => ({
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
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">LIC Premium Calculator Guide — How to Calculate Premium for Any Plan</h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 13 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Understanding how LIC calculates premiums is essential for agents who need to give accurate quotes and policyholders who want to verify their premium amounts. LIC&apos;s premium structure involves tabular rates, rebates, loadings, GST, and rider costs — getting it wrong means quoting wrong premiums to clients or paying more than necessary.</p>
          <p>Skip the manual calculation — use our <Link to="/premium-calculator" className="text-signal">Premium Calculator</Link> for instant, accurate premiums for any LIC plan.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Premium Calculation Formula</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>The basic LIC premium formula is:</p>
          <p className="text-white/80 font-mono text-xs bg-white/5 px-3 py-2 rounded">
            Annual Premium = (Tabular Premium − SA Rebate) × (SA ÷ 1000) + Rider Premium + GST
          </p>
          <p>Let&apos;s break down each component:</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">1. Tabular Premium Rate</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>This is the base premium rate per ₹1,000 of Sum Assured. It varies by:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Age at entry:</strong> Higher age = higher premium (due to higher mortality risk)</li>
            <li><strong className="text-white/80">Policy term:</strong> Longer term = lower annual premium (spread over more years) but higher total payment</li>
            <li><strong className="text-white/80">Plan type:</strong> Each plan has its own tabular premium chart published by LIC</li>
          </ul>
          <p>Example: Jeevan Anand (815), age 30, term 20 years → Tabular rate = ₹52.35 per ₹1,000 SA.</p>
          <p>View full premium tables for any plan and age on our <Link to="/premium-table" className="text-signal">Age-Wise Premium Table</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">2. Sum Assured (SA) Rebate</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>LIC offers a discount on the tabular rate for higher Sum Assured. This incentivizes buying more coverage. The rebate structure varies by plan but typically follows:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">SA ₹1L – ₹1.99L:</strong> No rebate</li>
            <li><strong className="text-white/80">SA ₹2L – ₹4.99L:</strong> ₹1.00 per ₹1,000 SA rebate</li>
            <li><strong className="text-white/80">SA ₹5L – ₹9.99L:</strong> ₹2.00 per ₹1,000 SA rebate</li>
            <li><strong className="text-white/80">SA ₹10L+:</strong> ₹3.00 per ₹1,000 SA rebate (some plans offer ₹2.50)</li>
          </ul>
          <p>Example: For ₹10 lakh SA with ₹2.00 rebate → effective rate becomes ₹52.35 − ₹2.00 = ₹50.35 per ₹1,000.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">3. Mode of Premium Payment</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>LIC offers four payment modes with different pricing:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Yearly:</strong> Base annual premium (cheapest — includes ~2% mode rebate)</li>
            <li><strong className="text-white/80">Half-yearly:</strong> Annual premium × 0.5130 × 2 = 2.60% more than yearly (~1% rebate)</li>
            <li><strong className="text-white/80">Quarterly:</strong> Annual premium × 0.2615 × 4 = 4.60% more than yearly</li>
            <li><strong className="text-white/80">Monthly (ECS/NACH):</strong> Annual premium × 0.0886 × 12 = 6.32% more than yearly</li>
          </ul>
          <p>Recommendation: Pay yearly if possible — it saves 6% compared to monthly over the entire policy term. For a ₹50,000 annual premium over 20 years, the savings is ₹60,000+.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">4. GST on LIC Premium</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>GST at 18% applies to LIC premiums, but the calculation differs by plan type:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Term plans:</strong> 18% on full premium (all years)</li>
            <li><strong className="text-white/80">Endowment/whole life (Year 1):</strong> 4.50% of premium (effectively 18% of 25% commission component)</li>
            <li><strong className="text-white/80">Endowment/whole life (Year 2+):</strong> 2.25% of premium</li>
            <li><strong className="text-white/80">Single premium plans:</strong> 1.80% of premium</li>
            <li><strong className="text-white/80">ULIPs:</strong> 18% on fund management and other charges</li>
          </ul>
          <p>Note: From FY 2025-26 onwards, LIC may quote premium inclusive of GST. Verify with the latest circular.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">5. Rider Premiums</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Optional riders add additional coverage at extra cost:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Accident Benefit Rider:</strong> ₹1.00 per ₹1,000 SA — doubles the death benefit on accidental death</li>
            <li><strong className="text-white/80">Term Rider:</strong> Additional term cover at a lower rate than a separate term plan. Rate depends on age</li>
            <li><strong className="text-white/80">Premium Waiver Benefit:</strong> Available on child plans — waives future premiums if the parent/proposer dies</li>
          </ul>
          <p>Calculate rider premiums in our <Link to="/rider-premium-calculator" className="text-signal">Rider Premium Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Worked Example: Jeevan Anand Premium Calculation</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="text-white/70 font-medium">Scenario: Male, age 30, Jeevan Anand (815), SA ₹10 lakh, term 20 years, yearly mode, with Accident Benefit Rider</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white/80">Tabular premium:</strong> ₹52.35 per ₹1,000 SA</li>
            <li><strong className="text-white/80">SA rebate:</strong> ₹2.00 per ₹1,000 (for SA ≥ ₹5 lakh)</li>
            <li><strong className="text-white/80">Effective rate:</strong> ₹52.35 − ₹2.00 = ₹50.35 per ₹1,000</li>
            <li><strong className="text-white/80">Base premium:</strong> ₹50.35 × (10,00,000 ÷ 1,000) = ₹50,350</li>
            <li><strong className="text-white/80">AB Rider:</strong> ₹1.00 × 1,000 = ₹1,000</li>
            <li><strong className="text-white/80">Total before GST:</strong> ₹50,350 + ₹1,000 = ₹51,350</li>
            <li><strong className="text-white/80">Year 1 GST (4.50%):</strong> ₹51,350 × 0.045 = ₹2,311</li>
            <li><strong className="text-white/80">Year 1 total:</strong> ₹51,350 + ₹2,311 = <strong className="text-signal">₹53,661</strong></li>
            <li><strong className="text-white/80">Year 2+ GST (2.25%):</strong> ₹51,350 × 0.0225 = ₹1,155</li>
            <li><strong className="text-white/80">Year 2+ total:</strong> ₹51,350 + ₹1,155 = <strong className="text-signal">₹52,505</strong></li>
          </ol>
          <p>Verify this calculation instantly with our <Link to="/premium-calculator" className="text-signal">Premium Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Factors That Affect Your Premium</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Age:</strong> Premium increases 3-8% for every year of age. A 25-year-old pays 15-20% less than a 35-year-old for the same plan and SA</li>
            <li><strong className="text-white/80">Gender:</strong> Female lives pay slightly lower premiums than male lives for most plans (lower mortality rates)</li>
            <li><strong className="text-white/80">Sum Assured:</strong> Higher SA means more premium but lower per-₹1000 rate due to SA rebate</li>
            <li><strong className="text-white/80">Policy term:</strong> 15-year term has higher annual premium than 25-year term but lower total outgo</li>
            <li><strong className="text-white/80">Health loading:</strong> If medical exam shows health issues, LIC may charge extra premium (25-50% loading) or decline coverage</li>
            <li><strong className="text-white/80">Smoker status:</strong> Applies to some term plans — smokers pay higher premiums</li>
            <li><strong className="text-white/80">Occupation:</strong> Hazardous occupations may attract extra premium loading</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tips for LIC Agents</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li>Always quote premiums inclusive of GST — clients get confused by ex-GST quotes</li>
            <li>Show the yearly premium first (cheapest), then monthly as a daily equivalent (&quot;just ₹150/day&quot;)</li>
            <li>For SA above ₹5 lakh, highlight the SA rebate savings to the client</li>
            <li>Use the <Link to="/premium-table" className="text-signal">Premium Table</Link> to show age-wise comparison and create urgency (&quot;next birthday your premium goes up by ₹X&quot;)</li>
            <li>For couple presentations, use <Link to="/family-mix" className="text-signal">Family Mix</Link> to show combined plans</li>
            <li>Always include term plan in the mix — it shows you care about protection, not just commission</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Premium Calculator Tools</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li><Link to="/premium-calculator" className="text-signal">Premium Calculator</Link> — instant premium for any plan, age, term, and mode</li>
            <li><Link to="/premium-table" className="text-signal">Age-Wise Premium Table</Link> — full grid for comparing premiums across ages</li>
            <li><Link to="/rider-premium-calculator" className="text-signal">Rider Premium Calculator</Link> — AB and Term Rider costs</li>
            <li><Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> — projected returns with IRR</li>
            <li><Link to="/tax-calculator" className="text-signal">Tax Benefit Calculator</Link> — 80C savings on premium</li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm">
        <Link to="/premium-calculator" className="text-signal font-medium">Calculate your LIC premium now →</Link>
      </div>
    </div>
  );
}
