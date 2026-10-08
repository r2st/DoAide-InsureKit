import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  { q: "Is LIC better than FD for long-term savings?", a: "It depends on your goal. FD gives guaranteed 7-8% return with full liquidity. LIC endowment plans give 5-6% IRR but include life cover worth 10-20x the annual premium. For pure returns, FD wins. For savings + protection + tax-free maturity, LIC can be better, especially for 15+ year horizons." },
  { q: "Is FD interest taxable?", a: "Yes, FD interest is fully taxable at your income tax slab rate. TDS of 10% is deducted if interest exceeds ₹40,000/year (₹50,000 for senior citizens). You must declare the total interest income in your ITR. Tax-saving FDs (5-year lock-in) qualify for Section 80C deduction but the interest is still taxable." },
  { q: "Can I get loan against LIC policy?", a: "Yes, LIC offers loans up to 90% of the surrender value at interest rates of 9-10%. The loan can be taken after 3 years of premium payment. Interest is charged on reducing balance. The loan doesn't need to be repaid separately — it's adjusted against maturity/death proceeds." },
  { q: "Which gives higher returns — RD or SIP?", a: "SIP in equity mutual funds has historically given 12-15% CAGR over 10+ years, while RD gives 6.5-7.5% guaranteed. However, SIP carries market risk — you could get negative returns in short periods. RD is ideal for 1-5 year goals with no risk tolerance. SIP is better for 7+ year goals." },
  { q: "What is the minimum FD amount in banks?", a: "Most banks accept FD from ₹1,000 (SBI, PNB, BOB). Some private banks require ₹5,000-₹10,000 minimum. Post office term deposits start at ₹1,000. Digital banks and small finance banks may have lower minimums of ₹500-₹1,000." },
];

export default function FdVsRdVsLic() {
  useEffect(() => {
    document.title = "FD vs RD vs LIC Comparison — Which Gives Better Returns? | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Detailed comparison of FD, RD, and LIC plans. Compare returns, tax benefits, liquidity, risk, and lock-in period to choose the best savings option for your goals.";

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
        headline: "FD vs RD vs LIC Comparison — Which Gives Better Returns?",
        description: "Compare Fixed Deposits, Recurring Deposits, and LIC plans for returns, tax, liquidity, risk, and lock-in to choose the best savings option.",
        url: "https://insurekit.doaide.com/blog/fd-vs-rd-vs-lic-comparison",
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
        Investment Comparison
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">FD vs RD vs LIC — Which Gives Better Returns?</h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 14 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Fixed Deposits (FD), Recurring Deposits (RD), and LIC plans are the three most popular savings instruments among Indian households. Together they hold over ₹200 lakh crore of India&apos;s household savings. But which one is right for you? The answer depends on your financial goals, investment horizon, tax bracket, and need for life insurance.</p>
          <p>This guide compares all three instruments across returns, taxation, liquidity, risk, and suitability — with worked examples and a decision framework to help you allocate your savings optimally.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Quick Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Parameter</th>
                <th className="text-center py-2 px-3">Fixed Deposit</th>
                <th className="text-center py-2 px-3">Recurring Deposit</th>
                <th className="text-center py-2 px-3">LIC Endowment</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Returns (2026)</td><td className="py-2 px-3 text-center text-signal">7.0-8.5%</td><td className="py-2 px-3 text-center text-signal">6.5-7.5%</td><td className="py-2 px-3 text-center text-signal">5.0-6.0% IRR</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Risk</td><td className="py-2 px-3 text-center">Very low</td><td className="py-2 px-3 text-center">Very low</td><td className="py-2 px-3 text-center">Very low</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Tax on returns</td><td className="py-2 px-3 text-center">Slab rate</td><td className="py-2 px-3 text-center">Slab rate</td><td className="py-2 px-3 text-center">Tax-free*</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">80C benefit</td><td className="py-2 px-3 text-center">5yr FD only</td><td className="py-2 px-3 text-center">No</td><td className="py-2 px-3 text-center">Yes</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Life cover</td><td className="py-2 px-3 text-center">No</td><td className="py-2 px-3 text-center">No</td><td className="py-2 px-3 text-center">Yes (10x+ SA)</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Liquidity</td><td className="py-2 px-3 text-center">High</td><td className="py-2 px-3 text-center">Medium</td><td className="py-2 px-3 text-center">Low</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Lock-in</td><td className="py-2 px-3 text-center">7 days - 10yr</td><td className="py-2 px-3 text-center">6 mo - 10yr</td><td className="py-2 px-3 text-center">15-35yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Min investment</td><td className="py-2 px-3 text-center">₹1,000</td><td className="py-2 px-3 text-center">₹100/mo</td><td className="py-2 px-3 text-center">~₹3,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Guaranteed returns</td><td className="py-2 px-3 text-center">Yes</td><td className="py-2 px-3 text-center">Yes</td><td className="py-2 px-3 text-center">Partially*</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30 mt-2">*LIC maturity is tax-free under Section 10(10D) if annual premium ≤ 10% of SA. Returns include guaranteed SA plus non-guaranteed bonuses.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Returns Comparison — ₹10,000/month for 15 Years</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Let&apos;s compare what happens when you invest ₹10,000/month for 15 years in each:</p>
          <p><strong className="text-white/80">Total investment:</strong> ₹10,000 × 12 × 15 = ₹18,00,000</p>
        </div>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Instrument</th>
                <th className="text-right py-2 px-3">Rate</th>
                <th className="text-right py-2 px-3">Maturity Value</th>
                <th className="text-right py-2 px-3">Tax on Returns</th>
                <th className="text-right py-2 px-3">Post-Tax Value</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">RD (7.5%)</td><td className="py-2 px-3 text-right">7.5%</td><td className="py-2 px-3 text-right">₹33.5L</td><td className="py-2 px-3 text-right">~₹4.6L (30% slab)</td><td className="py-2 px-3 text-right text-signal">~₹28.9L</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">FD (rolling 1yr, 7.5%)</td><td className="py-2 px-3 text-right">7.5%</td><td className="py-2 px-3 text-right">₹34.2L</td><td className="py-2 px-3 text-right">~₹4.9L (30% slab)</td><td className="py-2 px-3 text-right text-signal">~₹29.3L</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">LIC Jeevan Labh (6% IRR)</td><td className="py-2 px-3 text-right">~6%</td><td className="py-2 px-3 text-right">~₹31L</td><td className="py-2 px-3 text-right">₹0 (tax-free)</td><td className="py-2 px-3 text-right text-signal">~₹31L</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-4 mt-3 text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Key insight:</strong> For taxpayers in the 30% bracket, LIC&apos;s post-tax returns can exceed FD/RD returns despite the lower IRR, because the maturity is tax-free. Plus, LIC provides ₹10-15 lakh life cover throughout the 15 years — FD and RD don&apos;t provide this.
        </div>
        <p className="text-sm text-white/40 mt-2">Compare with your actual numbers using our <Link to="/fd-rd-calculator" className="text-signal">FD/RD Calculator</Link> and <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link>.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Fixed Deposit — Pros and Cons</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="text-white/70 font-medium">Pros:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Highest guaranteed returns among the three (6.5-8.5% in 2026)</li>
            <li>Flexible tenure — 7 days to 10 years</li>
            <li>Easy premature withdrawal (with 0.5-1% penalty)</li>
            <li>Loan available against FD (up to 90% of FD value)</li>
            <li>DICGC insured up to ₹5 lakh per depositor per bank</li>
            <li>Senior citizens get 0.25-0.50% extra interest</li>
          </ul>
          <p className="text-white/70 font-medium mt-3">Cons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Interest is fully taxable at slab rate — a 30% taxpayer&apos;s effective return is only ~5.3% on a 7.5% FD</li>
            <li>TDS deducted if interest exceeds ₹40,000/year</li>
            <li>No life cover — need separate term plan</li>
            <li>Section 80C benefit only for 5-year tax-saving FD (which has lower rates)</li>
            <li>Returns decline when RBI cuts interest rates (rate risk)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Recurring Deposit — Pros and Cons</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="text-white/70 font-medium">Pros:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Disciplined monthly saving habit (like SIP but guaranteed)</li>
            <li>Low minimum — start from ₹100/month in most banks</li>
            <li>Guaranteed returns (6.5-7.5% in 2026)</li>
            <li>Good for short-to-medium term goals (1-5 years)</li>
            <li>Auto-debit from salary account makes it effortless</li>
          </ul>
          <p className="text-white/70 font-medium mt-3">Cons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Slightly lower rate than FD (0.25-0.50% less)</li>
            <li>Interest fully taxable at slab rate</li>
            <li>Premature closure attracts penalty</li>
            <li>No 80C deduction</li>
            <li>No life cover</li>
            <li>Missing even one instalment can attract penalties</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">LIC Endowment Plans — Pros and Cons</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="text-white/70 font-medium">Pros:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Life cover (10-20x annual premium) throughout the term</li>
            <li>Maturity amount is tax-free under Section 10(10D)</li>
            <li>Premium qualifies for Section 80C deduction (up to ₹1.5 lakh)</li>
            <li>Forced savings discipline — missing premiums can lapse the policy</li>
            <li>Loan facility (up to 90% of surrender value after 3 years)</li>
            <li>LIC&apos;s claim settlement ratio of 98.5%+ is the industry&apos;s highest</li>
            <li>Bonus accumulation over long terms significantly boosts maturity value</li>
          </ul>
          <p className="text-white/70 font-medium mt-3">Cons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Lower pre-tax returns (5-6% IRR) compared to FD (7-8%)</li>
            <li>Very long lock-in (15-35 years) — surrendering early gives poor value</li>
            <li>Low liquidity — partial withdrawal not available (only policy loan)</li>
            <li>Returns include non-guaranteed bonus — actual maturity may vary</li>
            <li>Complex premium structure with GST, mode loading, etc.</li>
            <li>First 3 years — surrender value is zero (complete lock-in)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">When to Choose What</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Choose FD when:</strong> You have a lump sum to park for 1-5 years, want highest guaranteed returns, need flexibility to withdraw, or are in a low tax bracket (below 20%)</li>
            <li><strong className="text-white/80">Choose RD when:</strong> You want to save monthly from salary, have a specific short-term goal (vacation, down payment), prefer zero risk, or want to build an emergency fund</li>
            <li><strong className="text-white/80">Choose LIC when:</strong> You need life insurance cover, want long-term savings (15+ years) with tax-free maturity, are in the 30% tax bracket (where FD post-tax returns drop to ~5%), want Section 80C benefit, or are planning for child&apos;s education/marriage</li>
            <li><strong className="text-white/80">Best combination:</strong> Term plan (for pure cover at low cost) + FD/RD (for short-term goals) + LIC endowment (for long-term tax-free savings) + SIP (for wealth creation)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">FD Interest Rates 2026 (Major Banks)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Bank</th>
                <th className="text-right py-2 px-3">1 Year</th>
                <th className="text-right py-2 px-3">3 Year</th>
                <th className="text-right py-2 px-3">5 Year</th>
                <th className="text-right py-2 px-3">Senior (+)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">SBI</td><td className="py-2 px-3 text-right">6.80%</td><td className="py-2 px-3 text-right">6.75%</td><td className="py-2 px-3 text-right">6.50%</td><td className="py-2 px-3 text-right text-signal">+0.50%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">HDFC Bank</td><td className="py-2 px-3 text-right">6.25%</td><td className="py-2 px-3 text-right">6.45%</td><td className="py-2 px-3 text-right">6.40%</td><td className="py-2 px-3 text-right text-signal">+0.50%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">ICICI Bank</td><td className="py-2 px-3 text-right">6.25%</td><td className="py-2 px-3 text-right">6.45%</td><td className="py-2 px-3 text-right">6.50%</td><td className="py-2 px-3 text-right text-signal">+0.50%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Post Office</td><td className="py-2 px-3 text-right">6.90%</td><td className="py-2 px-3 text-right">7.10%</td><td className="py-2 px-3 text-right">7.50%</td><td className="py-2 px-3 text-right text-signal">—</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Small Finance Banks</td><td className="py-2 px-3 text-right">7.50-8.50%</td><td className="py-2 px-3 text-right">7.75-8.25%</td><td className="py-2 px-3 text-right">7.50-8.00%</td><td className="py-2 px-3 text-right text-signal">+0.50%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-white/30 mt-2">Rates are indicative and subject to change. Check bank websites for latest rates.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">The Optimal Strategy</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Most financial planners recommend splitting your savings across instruments:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white/80">Emergency fund (6 months expenses):</strong> FD or liquid fund — needs to be accessible immediately</li>
            <li><strong className="text-white/80">Life insurance (10x income):</strong> Term plan (cheapest) — our <Link to="/premium-calculator" className="text-signal">Premium Calculator</Link> shows LIC Tech Term rates</li>
            <li><strong className="text-white/80">Short-term goals (1-5 years):</strong> RD or FD — guaranteed, no market risk</li>
            <li><strong className="text-white/80">Long-term guaranteed savings:</strong> LIC endowment (Jeevan Labh/Anand) — tax-free maturity + 80C</li>
            <li><strong className="text-white/80">Wealth creation (10+ years):</strong> SIP in equity mutual funds — highest long-term returns but with volatility</li>
          </ol>
          <p>Calculate your optimal allocation with our tools: <Link to="/fd-rd-calculator" className="text-signal">FD/RD Calculator</Link> for bank returns, <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> for LIC projections.</p>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm">
        <Link to="/" className="text-signal font-medium">Compare all options on InsureKit →</Link>
      </div>
    </div>
  );
}
