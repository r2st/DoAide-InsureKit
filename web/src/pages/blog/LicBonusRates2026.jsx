import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  { q: "What is LIC bonus?", a: "LIC bonus is a share of the profits declared by LIC on participating (with-profits) policies. It's added to the Sum Assured and paid at maturity or death. LIC declares bonuses annually based on its investment returns. There are three types: Simple Reversionary Bonus (SRB), Final Additional Bonus (FAB), and Loyalty Addition." },
  { q: "Are LIC bonuses guaranteed?", a: "No, bonuses are not guaranteed. They depend on LIC's investment performance and are declared by LIC's Board of Directors annually. However, once declared, a bonus is 'vested' — it becomes part of the guaranteed payout. Historically, LIC has declared bonuses every year without exception since 1956." },
  { q: "How is LIC bonus calculated?", a: "SRB is calculated as (bonus rate per ₹1,000 SA) × (SA ÷ 1,000) per year. For example, ₹51 per ₹1,000 SA for Jeevan Labh means ₹51,000 annual bonus for ₹10 lakh SA. Over 16 years, that's ₹8,16,000 in bonuses alone." },
  { q: "Which LIC plan has the highest bonus?", a: "Jeevan Labh (836) has the highest SRB at ₹51 per ₹1,000 SA. Jeevan Lakshya (833) and Jeevan Anand (815) follow at ₹44-49 per ₹1,000 SA. Limited premium plans generally have higher bonus rates than regular premium plans because the premium paying term is shorter than the policy term." },
  { q: "When does LIC declare bonuses?", a: "LIC typically declares bonuses in February-March each year at its Board meeting after reviewing the financial year's performance. The bonus rates are then published on licindia.in and communicated to policyholders via their next premium receipt or online statement." },
];

export default function LicBonusRates2026() {
  useEffect(() => {
    document.title = "LIC Bonus Rates 2026 — Complete Plan-Wise List | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Latest LIC bonus rates for 2026 — Simple Reversionary Bonus, Final Additional Bonus, and Loyalty Addition for all active LIC plans with historical trends and calculation examples.";

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
        headline: "LIC Bonus Rates 2026 — Complete Plan-Wise List",
        description: "Latest LIC bonus rates for all active plans in 2026, including SRB, FAB, and Loyalty Addition with historical trends.",
        url: "https://insurekit.doaide.com/blog/lic-bonus-rates-2026",
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
        Bonus Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">LIC Bonus Rates 2026 — Complete Plan-Wise List</h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 12 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>LIC declares bonuses annually on its participating (with-profits) plans. These bonuses significantly boost the maturity value — for a 20-year Jeevan Anand policy, bonuses can contribute 40-50% of the total maturity amount. Understanding bonus rates helps agents project accurate maturity values and helps policyholders estimate their returns.</p>
          <p>View interactive bonus charts for any plan on our <Link to="/bonus-history" className="text-signal">Bonus History</Link> page, or calculate projected maturity with bonuses using our <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Types of LIC Bonuses</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Simple Reversionary Bonus (SRB):</strong> Declared annually as ₹X per ₹1,000 SA. Calculated on the original SA (not on accumulated bonuses). Once declared, it&apos;s guaranteed and cannot be reduced. This forms the bulk of bonus payouts</li>
            <li><strong className="text-white/80">Final Additional Bonus (FAB):</strong> A one-time bonus added at the time of maturity or death claim, for policies with a term of 15+ years. The amount depends on the year of policy inception and total term. FAB rewards long-term policyholders</li>
            <li><strong className="text-white/80">Loyalty Addition:</strong> Available on some newer plans instead of FAB. Added at maturity for policies with 10+ years of premium payment. Usually a percentage of total bonuses accumulated</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">SRB Rates for Endowment Plans (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">SRB (₹/1000 SA)</th>
                <th className="text-right py-2 px-3">For ₹10L SA/yr</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Labh</td><td className="py-2 px-3 text-right">836</td><td className="py-2 px-3 text-right text-signal">₹51</td><td className="py-2 px-3 text-right">₹51,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Lakshya</td><td className="py-2 px-3 text-right">833</td><td className="py-2 px-3 text-right text-signal">₹49</td><td className="py-2 px-3 text-right">₹49,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Anand</td><td className="py-2 px-3 text-right">815</td><td className="py-2 px-3 text-right text-signal">₹44-45</td><td className="py-2 px-3 text-right">₹44,000-45,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Endowment</td><td className="py-2 px-3 text-right">814</td><td className="py-2 px-3 text-right text-signal">₹41-42</td><td className="py-2 px-3 text-right">₹41,000-42,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Azad</td><td className="py-2 px-3 text-right">868</td><td className="py-2 px-3 text-right text-signal">₹55</td><td className="py-2 px-3 text-right">₹55,000/yr</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Amritbaal</td><td className="py-2 px-3 text-right">874</td><td className="py-2 px-3 text-right text-signal">₹57</td><td className="py-2 px-3 text-right">₹57,000/yr</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">SRB Rates for Money-Back Plans (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">SRB (₹/1000 SA)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Umang</td><td className="py-2 px-3 text-right">845</td><td className="py-2 px-3 text-right text-signal">₹49</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Money Back 25yr</td><td className="py-2 px-3 text-right">821</td><td className="py-2 px-3 text-right text-signal">₹41</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">New Money Back 20yr</td><td className="py-2 px-3 text-right">820</td><td className="py-2 px-3 text-right text-signal">₹43</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Tarun (Child)</td><td className="py-2 px-3 text-right">834</td><td className="py-2 px-3 text-right text-signal">₹54</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Child Money Back</td><td className="py-2 px-3 text-right">832</td><td className="py-2 px-3 text-right text-signal">₹52</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-white/40 mt-2">Note: Money-back plans have lower SRB rates because survival benefits are paid periodically, reducing the corpus on which bonuses are calculated.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">SRB Rates for Whole Life Plans (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan</th>
                <th className="text-right py-2 px-3">Table</th>
                <th className="text-right py-2 px-3">SRB (₹/1000 SA)</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Umang (Whole Life)</td><td className="py-2 px-3 text-right">845</td><td className="py-2 px-3 text-right text-signal">₹49</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3 text-white/80">Jeevan Anand (post-maturity)</td><td className="py-2 px-3 text-right">815</td><td className="py-2 px-3 text-right text-signal">SA continues</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">How Bonuses Impact Maturity Value</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p className="text-white/70 font-medium">Worked Example: Jeevan Labh (836)</p>
          <p>SA: ₹10,00,000 | Term: 16 years | PPT: 10 years | SRB: ₹51/1000 SA</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong className="text-white/80">Annual bonus:</strong> ₹51 × 1,000 = ₹51,000 per year</li>
            <li><strong className="text-white/80">Total SRB (16 years):</strong> ₹51,000 × 16 = ₹8,16,000</li>
            <li><strong className="text-white/80">FAB (estimated):</strong> ~₹1,50,000 (for 16-year term)</li>
            <li><strong className="text-white/80">Maturity value:</strong> SA + Total SRB + FAB = ₹10,00,000 + ₹8,16,000 + ₹1,50,000 = <strong className="text-signal">₹19,66,000</strong></li>
          </ol>
          <p>Against total premium paid of ~₹11,00,000 (approximate), this gives an IRR of approximately 5.5-6%.</p>
          <p>Get exact projections for your age and SA using our <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link>.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Historical Bonus Trend (Last 5 Years)</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>LIC bonus rates have been relatively stable over the past 5 years, with minor adjustments:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">2022-23:</strong> SRB rates maintained or slightly increased for most plans</li>
            <li><strong className="text-white/80">2023-24:</strong> No major changes — LIC maintained rates post-IPO</li>
            <li><strong className="text-white/80">2024-25:</strong> Marginal reduction across most plans as LIC adjusted for market conditions</li>
            <li><strong className="text-white/80">2025-26:</strong> Rates reduced by ₹1/1000 SA across most plans — LIC&apos;s bonus allocation at record ₹59,725 crore in FY26</li>
          </ul>
          <p>LIC&apos;s massive investment corpus (largest institutional investor in India) provides stability in bonus declarations even during market downturns. The corporation has never missed declaring a bonus since its establishment in 1956.</p>
          <p>View year-by-year bonus data with charts on our <Link to="/bonus-history" className="text-signal">Bonus History</Link> page.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Final Additional Bonus (FAB) Rates</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>FAB is a one-time bonus paid at maturity or death for policies with a term of 15+ years. The amount depends on the inception year and policy term:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">15-19 year term:</strong> ₹10-15 per ₹1,000 SA (one-time)</li>
            <li><strong className="text-white/80">20-24 year term:</strong> ₹15-25 per ₹1,000 SA</li>
            <li><strong className="text-white/80">25+ year term:</strong> ₹25-35 per ₹1,000 SA</li>
          </ul>
          <p>FAB rates are declared separately from SRB and may vary based on the year of policy commencement. Older policies (commencement before 2010) generally receive higher FAB.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Bonus Tips for Agents</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white/80">Use exact bonus rates:</strong> Don&apos;t estimate — use current SRB rates when projecting maturity to clients. Our <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> uses the latest declared rates</li>
            <li><strong className="text-white/80">Show the bonus breakdown:</strong> Clients are more impressed when you show SA + SRB + FAB separately instead of just the maturity lump sum</li>
            <li><strong className="text-white/80">Compare across plans:</strong> Higher SRB doesn&apos;t always mean higher maturity — the premium also matters. Compare IRR, not just bonus rates. Use <Link to="/compare-plans" className="text-signal">Compare Plans</Link></li>
            <li><strong className="text-white/80">Highlight bonus vesting:</strong> Once declared, bonuses are guaranteed — this is a key selling point over mutual funds</li>
            <li><strong className="text-white/80">Show historical consistency:</strong> LIC has declared bonuses every year for 70 years — share the <Link to="/bonus-history" className="text-signal">Bonus History</Link> with skeptical clients</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Plans That Don&apos;t Get Bonuses</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>Not all LIC plans are bonus-eligible. The following are non-participating plans:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-white/80">Term plans:</strong> Tech Term (854), Jeevan Amar (855), Saral Jeevan Bima (860) — pure protection, no maturity benefit</li>
            <li><strong className="text-white/80">ULIPs:</strong> New Pension Plus (867) — returns are market-linked, not bonus-based</li>
            <li><strong className="text-white/80">Immediate Annuity plans:</strong> Jeevan Akshay (857) — pays pension immediately, no bonus</li>
            <li><strong className="text-white/80">Group insurance plans:</strong> Typically non-participating</li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Bonus Tools</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li><Link to="/bonus-history" className="text-signal">Bonus History</Link> — year-by-year bonus rates with charts</li>
            <li><Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> — projected maturity with latest bonus rates</li>
            <li><Link to="/compare-plans" className="text-signal">Compare Plans</Link> — compare bonus rates and IRR across plans</li>
            <li><Link to="/premium-calculator" className="text-signal">Premium Calculator</Link> — calculate exact premium for any plan</li>
          </ul>
        </div>
      </section>

      <div className="panel-inner p-4 text-center text-sm">
        <Link to="/bonus-history" className="text-signal font-medium">View detailed bonus history on InsureKit →</Link>
      </div>
    </div>
  );
}
