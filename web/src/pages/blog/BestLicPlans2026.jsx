import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  { q: "Which LIC plan has the highest maturity value?", a: "Among traditional plans, Jeevan Labh (836) and Jeevan Lakshya (833) offer the highest maturity returns with estimated IRR of 5-6%. For a ₹10 lakh SA with 16-year term, Jeevan Labh can give maturity of ₹17-19 lakhs. Use our Maturity Calculator for exact projections based on your age and term." },
  { q: "Is LIC better than SIP for long-term savings?", a: "SIP in equity mutual funds has historically delivered 12-15% CAGR over 15+ years, while LIC endowment plans give 5-6% IRR. However, LIC offers guaranteed returns + life cover + tax benefits under Section 80C/10(10D). For most people, a combination works best — LIC for protection and guaranteed savings, SIP for wealth creation." },
  { q: "Which is the cheapest LIC term plan?", a: "LIC Tech Term (854) offers the lowest premium among LIC term plans. A 30-year-old male can get ₹1 crore cover for approximately ₹8,000-10,000 per year. Online purchase gives additional premium discount. However, private insurers like ICICI Prudential and HDFC Life offer even lower term plan premiums." },
  { q: "Can I buy LIC policy online?", a: "Yes, selected LIC plans can be purchased online through licindia.in. Plans available online include Tech Term, Jeevan Anand, New Endowment, and Saral Jeevan Bima. Online purchase often gives a premium rebate of 1-2%. You'll need PAN, Aadhaar, bank account, and a medical report for higher sum assured." },
  { q: "How many LIC plans can I have?", a: "There is no limit on the number of LIC policies you can hold. Many advisors recommend a portfolio approach: a term plan for adequate life cover, an endowment plan for guaranteed savings, and a pension plan for retirement. However, the total premium should not exceed 15-20% of your annual income." },
];

export default function BestLicPlans2026() {
  useEffect(() => {
    document.title = "Best LIC Plans 2026 — Comparison Guide | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Compare the best LIC plans for 2026 — endowment, term, ULIP, and pension. Find the right plan for savings, protection, retirement, and child's future with premium and maturity details.";

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
        headline: "Best LIC Plans 2026 — Comparison Guide",
        description: "Compare the best LIC plans for 2026 with premium tables, maturity estimates, and category-wise recommendations.",
        url: "https://insurekit.doaide.com/blog/best-lic-plans-2026-comparison-guide",
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
        Comparison Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">Best LIC Plans 2026 — Complete Comparison Guide</h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 15 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Choosing the right LIC plan depends on your <strong className="text-white/80">financial goal</strong>, <strong className="text-white/80">budget</strong>, and <strong className="text-white/80">age</strong>. LIC offers over 30 active plans across endowment, term, money-back, pension, and ULIP categories. This guide compares the best plans in each category for 2026, with updated bonus rates, premium examples, and maturity projections to help you make an informed decision.</p>
          <p>Use our <Link to="/plan-recommender" className="text-signal">Plan Recommender</Link> for personalized suggestions based on your profile, or <Link to="/compare-plans" className="text-signal">Compare Any Plans</Link> side-by-side.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How to Choose the Right LIC Plan</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Before comparing plans, identify your primary goal:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Pure protection:</strong> If you only want life cover at the lowest cost → Term plan</li>
            <li><strong className="text-white/80">Savings + protection:</strong> If you want guaranteed returns with life cover → Endowment plan</li>
            <li><strong className="text-white/80">Regular income:</strong> If you want periodic payouts during the policy term → Money-back plan</li>
            <li><strong className="text-white/80">Retirement:</strong> If you want pension income after retirement → Pension/annuity plan</li>
            <li><strong className="text-white/80">Child&apos;s future:</strong> If you want to build a corpus for education/marriage → Child plan</li>
            <li><strong className="text-white/80">Market-linked growth:</strong> If you want equity exposure with insurance → ULIP</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Endowment Plans (Savings + Protection)</h2>
        <p className="text-sm text-white/40 mb-3">These plans offer guaranteed maturity benefits with bonuses and life cover. Best for conservative investors who want assured returns.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">Term</th>
                <th className="text-right py-2 px-3">SRB Rate</th>
                <th className="text-right py-2 px-3">IRR (est.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Anand</td><td className="py-2 px-3 text-right">815</td><td className="py-2 px-3 text-right">15-35yr</td><td className="py-2 px-3 text-right">₹44-45/1000</td><td className="py-2 px-3 text-right text-signal">4.5-5.5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Endowment</td><td className="py-2 px-3 text-right">814</td><td className="py-2 px-3 text-right">12-35yr</td><td className="py-2 px-3 text-right">₹41-42/1000</td><td className="py-2 px-3 text-right text-signal">4-5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Lakshya</td><td className="py-2 px-3 text-right">833</td><td className="py-2 px-3 text-right">13-25yr</td><td className="py-2 px-3 text-right">₹49/1000</td><td className="py-2 px-3 text-right text-signal">5-6%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-4 mt-3 text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Top pick — Jeevan Anand (815):</strong> Unique whole-life cover that continues even after maturity. You receive the full maturity amount (SA + bonuses) at the end of the term, and your family continues to receive the SA on death anytime afterwards. Ideal for long-term savings with lifelong protection.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Limited Premium Plans</h2>
        <p className="text-sm text-white/40 mb-3">Pay premiums for fewer years than the policy term. Popular among investors who want to finish payments early.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">PPT / Term</th>
                <th className="text-right py-2 px-3">SRB Rate</th>
                <th className="text-right py-2 px-3">IRR (est.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Labh</td><td className="py-2 px-3 text-right">836</td><td className="py-2 px-3 text-right">10/16yr</td><td className="py-2 px-3 text-right">₹51/1000</td><td className="py-2 px-3 text-right text-signal">5.5-6%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Amritbaal</td><td className="py-2 px-3 text-right">874</td><td className="py-2 px-3 text-right">7-10/25yr</td><td className="py-2 px-3 text-right">₹57/1000</td><td className="py-2 px-3 text-right text-signal">5-5.5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Azad</td><td className="py-2 px-3 text-right">868</td><td className="py-2 px-3 text-right">5-10/15-20yr</td><td className="py-2 px-3 text-right">₹55/1000</td><td className="py-2 px-3 text-right text-signal">5-5.5%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-4 mt-3 text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Top pick — Jeevan Labh (836):</strong> Highest bonus rates among all LIC plans. With the 10-pay/16-year term option, you pay premiums for just 10 years and get maturity after 16 years. The SRB of ₹51 per ₹1,000 SA is the highest in LIC&apos;s portfolio, making it the best for pure returns.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Term Plans (Pure Protection)</h2>
        <p className="text-sm text-white/40 mb-3">Maximum life cover at minimum premium. No maturity benefit — pure risk cover.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">Min SA</th>
                <th className="text-right py-2 px-3">Premium (30M, ₹1Cr, 30yr)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Tech Term</td><td className="py-2 px-3 text-right">854</td><td className="py-2 px-3 text-right">₹50L</td><td className="py-2 px-3 text-right text-signal">~₹8,500/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Amar</td><td className="py-2 px-3 text-right">855</td><td className="py-2 px-3 text-right">₹25L</td><td className="py-2 px-3 text-right text-signal">~₹11,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Saral Jeevan Bima</td><td className="py-2 px-3 text-right">860</td><td className="py-2 px-3 text-right">₹5L</td><td className="py-2 px-3 text-right text-signal">~₹12,000/yr</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-4 mt-3 text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Top pick — Tech Term (854):</strong> LIC&apos;s online-only term plan with the lowest premiums. Offers Level Cover and Increasing Cover options. Available only through licindia.in — no agent commission means lower premiums. Compare exact premiums using our <Link to="/premium-calculator" className="text-signal">Premium Calculator</Link>.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Pension Plans (Retirement)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">Type</th>
                <th className="text-right py-2 px-3">Annuity Options</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Shanti</td><td className="py-2 px-3 text-right">850</td><td className="py-2 px-3 text-right">Single premium</td><td className="py-2 px-3 text-right text-signal">9 options</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Pension Plus</td><td className="py-2 px-3 text-right">867</td><td className="py-2 px-3 text-right">ULIP pension</td><td className="py-2 px-3 text-right text-signal">4 funds</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Saral Pension</td><td className="py-2 px-3 text-right">862</td><td className="py-2 px-3 text-right">Single premium</td><td className="py-2 px-3 text-right text-signal">2 options</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Child Plans</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Amritbaal (874):</strong> Best for long-term child planning. Limited premium (7 or 10 years), maturity at 25 years from commencement. High bonus rates. Premium waiver on parent&apos;s death — policy continues without further premiums.</li>
            <li><strong className="text-white/80">Jeevan Tarun (834):</strong> Staggered survival benefits at ages 20, 22, 24 — ideal for education milestones. 20% + 20% + 20% as survival benefits, 40% on maturity.</li>
            <li><strong className="text-white/80">Child Money Back (832):</strong> Regular payouts at ages 18, 20, 22, and maturity at 25. Good for periodic education expenses.</li>
          </ul>
          <p>Use our <Link to="/plan-recommender" className="text-signal">Plan Recommender</Link> to find the best child plan based on your child&apos;s age and your budget.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Best Money-Back Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">Survival Benefits</th>
                <th className="text-right py-2 px-3">IRR (est.)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Umang</td><td className="py-2 px-3 text-right">845</td><td className="py-2 px-3 text-right">8% SA/yr after PPT</td><td className="py-2 px-3 text-right text-signal">4-5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Money Back 25yr</td><td className="py-2 px-3 text-right">821</td><td className="py-2 px-3 text-right">15%+20%+25%+40% SA</td><td className="py-2 px-3 text-right text-signal">4-4.5%</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Money Back 20yr</td><td className="py-2 px-3 text-right">820</td><td className="py-2 px-3 text-right">20%+20%+20%+40% SA</td><td className="py-2 px-3 text-right text-signal">3.5-4%</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel-inner p-4 mt-3 text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Top pick — Jeevan Umang (845):</strong> Whole-life plan with annual survival benefits of 8% of SA every year after the premium paying term ends. Continues for your entire lifetime. On death, nominee gets full SA + bonuses. Essentially pays you a &quot;pension&quot; plus gives a death benefit.
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Plan Selection Guide by Income</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">₹3-5 LPA:</strong> Tech Term (₹50L cover) + PPF for savings. Budget: ₹5,000-8,000/yr for term plan</li>
            <li><strong className="text-white/80">₹5-10 LPA:</strong> Tech Term (₹1Cr) + Jeevan Labh (₹5L SA). Budget: ₹20,000-30,000/yr total</li>
            <li><strong className="text-white/80">₹10-20 LPA:</strong> Tech Term (₹1.5Cr) + Jeevan Anand (₹10L SA) + NPS/ELSS. Budget: ₹40,000-60,000/yr</li>
            <li><strong className="text-white/80">₹20 LPA+:</strong> Tech Term (₹2Cr) + Jeevan Labh (₹15L SA) + ULIP/MF. Budget: ₹70,000-1,00,000/yr</li>
          </ul>
          <p>Calculate exact premiums for your age with our <Link to="/premium-calculator" className="text-signal">Premium Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax Benefits of LIC Plans</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Section 80C:</strong> Premium paid (up to ₹1.5 lakh) is deductible from taxable income under the old regime</li>
            <li><strong className="text-white/80">Section 10(10D):</strong> Maturity proceeds are tax-free if annual premium does not exceed 10% of SA (20% for policies before 01-04-2012)</li>
            <li><strong className="text-white/80">Section 80CCC:</strong> Pension plan premiums qualify for deduction under Section 80CCC (within the overall 80C limit of ₹1.5 lakh)</li>
            <li><strong className="text-white/80">Death benefit:</strong> Always tax-free regardless of premium-to-SA ratio</li>
          </ul>
          <p>Calculate your exact tax savings with our <Link to="/tax-calculator" className="text-signal">Tax Benefit Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Key Factors When Comparing Plans</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white/80">IRR (Internal Rate of Return):</strong> The real return accounting for time value of money. Higher IRR = better returns. Our <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> shows IRR for every plan</li>
            <li><strong className="text-white/80">Bonus rates:</strong> LIC declares bonuses annually. Check historical bonus trends on our <Link to="/bonus-history" className="text-signal">Bonus History</Link> page</li>
            <li><strong className="text-white/80">Premium affordability:</strong> Monthly premium should not exceed 10-15% of your monthly income</li>
            <li><strong className="text-white/80">Claim Settlement Ratio:</strong> LIC&apos;s CSR is 98.5%+ — the highest among Indian insurers. See details on our <Link to="/claim-settlement-ratio" className="text-signal">Claim Settlement Ratio</Link> page</li>
            <li><strong className="text-white/80">Riders:</strong> Accident Benefit and Term Rider can enhance coverage at low additional cost</li>
            <li><strong className="text-white/80">Lock-in period:</strong> Most plans have a 5-year lock-in. Surrendering early gives poor value</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tools for Plan Comparison</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li><Link to="/premium-calculator" className="text-signal">Premium Calculator</Link> — exact premium for any plan, age, and term</li>
            <li><Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> — projected maturity with bonuses and IRR</li>
            <li><Link to="/compare-plans" className="text-signal">Compare Any Plans</Link> — side-by-side comparison of 2-3 plans</li>
            <li><Link to="/plan-recommender" className="text-signal">Plan Recommender</Link> — AI-powered suggestions based on your profile</li>
            <li><Link to="/bonus-history" className="text-signal">Bonus History</Link> — historical bonus rates for all plans</li>
            <li><Link to="/tax-calculator" className="text-signal">Tax Calculator</Link> — 80C + 10(10D) tax benefit analysis</li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm">
        <Link to="/" className="text-signal font-medium">Start comparing plans on InsureKit →</Link>
      </div>
    </div>
  );
}
