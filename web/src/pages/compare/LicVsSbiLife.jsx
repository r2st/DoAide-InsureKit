import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const SITE_URL = "https://insure.doaide.com";

const COMPARISON = [
  { feature: "Ownership", lic: "Government-owned (100% by GoI)", sbi: "Joint venture (SBI + BNP Paribas)" },
  { feature: "Claim Settlement Ratio", lic: "98.5%+", sbi: "95.2%" },
  { feature: "Number of Plans", lic: "30+ active plans", sbi: "20+ active plans" },
  { feature: "Term Insurance (Online)", lic: "Tech Term — from ₹8,500/yr", sbi: "eShield Next — from ₹7,500/yr" },
  { feature: "Best Endowment Plan", lic: "Jeevan Anand (815)", sbi: "Smart Swadhan Supreme" },
  { feature: "Best ULIP", lic: "New Pension Plus (867)", sbi: "Smart Wealth Builder" },
  { feature: "Best Child Plan", lic: "Amritbaal (874)", sbi: "Smart Champ Insurance" },
  { feature: "Best Pension Plan", lic: "Jeevan Shanti (850)", sbi: "Retire Smart Plus" },
  { feature: "Bonus Rates (SRB)", lic: "₹41-57 per ₹1,000 SA", sbi: "₹35-45 per ₹1,000 SA" },
  { feature: "Branch Network", lic: "4,700+ branches pan-India", sbi: "900+ branches" },
  { feature: "Agent Network", lic: "12+ lakh agents", sbi: "1.5 lakh agents" },
  { feature: "Tax Benefits", lic: "80C + 10(10D)", sbi: "80C + 10(10D)" },
  { feature: "Online Purchase", lic: "Limited plans online", sbi: "Most plans available online" },
  { feature: "Sovereign Guarantee", lic: "Yes (Government-backed)", sbi: "No (regulated by IRDAI)" },
  { feature: "Minimum Sum Assured", lic: "₹1 lakh (most plans)", sbi: "₹1 lakh (most plans)" },
  { feature: "Premium Paying Modes", lic: "Yearly, Half-yearly, Quarterly, Monthly", sbi: "Yearly, Half-yearly, Quarterly, Monthly" },
];

const FAQ_ITEMS = [
  {
    q: "Is LIC better than SBI Life Insurance?",
    a: "LIC has a higher claim settlement ratio (98.5% vs 95.2%), a sovereign guarantee from the Government of India, and a larger network. SBI Life offers more online-friendly plans and slightly lower term insurance premiums. For guaranteed returns and trust, LIC is generally preferred. For market-linked (ULIP) plans, SBI Life is competitive.",
  },
  {
    q: "Which has cheaper term insurance — LIC or SBI Life?",
    a: "SBI Life eShield Next typically has slightly lower premiums than LIC Tech Term for the same cover and age. For a 30-year-old male, ₹1 crore cover for 30 years: SBI Life starts around ₹7,500/yr while LIC Tech Term starts around ₹8,500/yr. However, LIC has a higher claim settlement ratio.",
  },
  {
    q: "Does SBI Life Insurance have sovereign guarantee like LIC?",
    a: "No. Only LIC has a sovereign guarantee from the Government of India under Section 37 of the LIC Act. SBI Life is a joint venture between SBI and BNP Paribas, regulated by IRDAI but without a government guarantee on policy payouts.",
  },
  {
    q: "Which company gives better returns on endowment plans?",
    a: "LIC generally offers higher bonus rates (SRB of ₹41-57 per ₹1,000 SA) compared to SBI Life (₹35-45 per ₹1,000 SA). Plans like Jeevan Labh (836) offer estimated IRR of 5.5-6%, while SBI Life endowment plans typically offer 4.5-5.5% IRR. Use our Maturity Calculator for exact comparisons.",
  },
  {
    q: "Can I buy both LIC and SBI Life policies?",
    a: "Yes, there is no restriction on holding policies from multiple insurers. Many financial advisors recommend a combination: LIC for guaranteed savings and sovereign-backed protection, and private insurers like SBI Life for ULIPs or cheaper online term plans.",
  },
  {
    q: "Which is better for child education — LIC or SBI Life?",
    a: "LIC Amritbaal (874) and Jeevan Tarun (834) are purpose-built child plans with premium waiver on parent's death and high bonus rates. SBI Life Smart Champ offers similar features with more flexibility. For guaranteed maturity, LIC is preferred. Compare using our Plan Recommender with the Child's Future goal.",
  },
];

export default function LicVsSbiLife() {
  useEffect(() => {
    const title = "LIC vs SBI Life Insurance 2026 — Detailed Comparison | InsureKit";
    const desc = "Compare LIC and SBI Life Insurance plans, claim settlement ratio, bonus rates, term insurance premiums, and features. Find which insurer is better for your needs.";
    document.title = title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", desc);
    setMeta("name", "keywords", "LIC vs SBI Life Insurance, LIC vs SBI Life comparison, best life insurance India, LIC claim settlement ratio, SBI Life plans");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE_URL}/compare/lic-vs-sbi-life`);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}/compare/lic-vs-sbi-life`);

    let script = document.getElementById("compare-ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "compare-ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "LIC vs SBI Life Insurance 2026 — Detailed Comparison",
        description: desc,
        url: `${SITE_URL}/compare/lic-vs-sbi-life`,
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
        Comparison Guide
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-2">
        LIC vs SBI Life Insurance — 2026 Comparison
      </h1>
      <p className="text-white/40 text-sm mb-8">
        A detailed head-to-head comparison of India&apos;s two largest life insurers. Updated October 2026.
      </p>

      <section className="grid grid-cols-2 gap-3 mb-8">
        <div className="panel p-5 text-center">
          <div className="text-signal text-2xl font-bold">98.5%</div>
          <div className="text-xs text-white/40 mt-1">LIC Claim Ratio</div>
          <div className="text-[10px] text-signal/60 mt-0.5">Government-backed</div>
        </div>
        <div className="panel p-5 text-center">
          <div className="text-white/50 text-2xl font-bold">95.2%</div>
          <div className="text-xs text-white/40 mt-1">SBI Life Claim Ratio</div>
          <div className="text-[10px] text-white/30 mt-0.5">IRDAI regulated</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            <strong className="text-white/80">LIC (Life Insurance Corporation of India)</strong> is the largest
            life insurer in India, fully owned by the Government of India. Established in 1956, LIC manages
            over ₹40 lakh crore in assets and has a policyholder base of 30+ crore. It is the only insurer
            with a sovereign guarantee on policy payouts.
          </p>
          <p>
            <strong className="text-white/80">SBI Life Insurance</strong> is a joint venture between State Bank
            of India (70%) and BNP Paribas Cardif (26%). Founded in 2001, it is one of the largest private
            life insurers in India with a strong bank distribution network through SBI branches.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Feature-by-Feature Comparison</h2>
        <div className="panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/50 text-xs uppercase">Feature</th>
                  <th className="text-left py-3 px-3 text-signal text-xs uppercase">LIC</th>
                  <th className="text-left py-3 px-3 text-white/40 text-xs uppercase">SBI Life</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-t border-white/5">
                    <td className="py-2.5 px-4 text-white/50 text-sm">{row.feature}</td>
                    <td className="py-2.5 px-3 text-white/70 text-sm">{row.lic}</td>
                    <td className="py-2.5 px-3 text-white/70 text-sm">{row.sbi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Term Insurance Comparison</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>For pure life cover at the lowest cost, both offer competitive term plans:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-3">
              <thead>
                <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                  <th className="text-left py-2 px-3">Parameter</th>
                  <th className="text-left py-2 px-3">LIC Tech Term (854)</th>
                  <th className="text-left py-2 px-3">SBI eShield Next</th>
                </tr>
              </thead>
              <tbody className="text-white/60">
                <tr className="border-b border-white/5"><td className="py-2 px-3">Premium (30M, ₹1Cr, 30yr)</td><td className="py-2 px-3">~₹8,500/yr</td><td className="py-2 px-3">~₹7,500/yr</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3">Max Cover</td><td className="py-2 px-3">₹50 crore</td><td className="py-2 px-3">₹25 crore</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3">Purchase Mode</td><td className="py-2 px-3">Online only</td><td className="py-2 px-3">Online + Offline</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3">Cover Options</td><td className="py-2 px-3">Level, Increasing</td><td className="py-2 px-3">Level, Increasing, Decreasing</td></tr>
                <tr className="border-b border-white/5"><td className="py-2 px-3">Claim Settlement</td><td className="py-2 px-3 text-signal">98.5%+</td><td className="py-2 px-3">95.2%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-white/80">Verdict:</strong> SBI Life offers lower term premiums, but LIC
            has a significantly higher claim settlement ratio. For pure cost, SBI Life wins. For trust and
            claim reliability, LIC wins.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Savings Plans Comparison</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>For guaranteed savings with life cover:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-white/80">LIC Jeevan Labh (836):</strong> SRB of ₹51/1000 SA, highest
              bonus rate in the industry. Limited pay (10 years), maturity at 16 years. Estimated IRR: 5.5-6%.
            </li>
            <li>
              <strong className="text-white/80">SBI Life Smart Swadhan Supreme:</strong> Limited pay option,
              maturity benefit = 105% of total premiums + loyalty additions. Estimated IRR: 4.5-5%.
            </li>
          </ul>
          <p>
            <strong className="text-white/80">Verdict:</strong> LIC offers higher guaranteed returns through
            better bonus rates. The sovereign guarantee adds an extra layer of safety that no private insurer
            can match.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">When to Choose LIC</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>You want a <strong className="text-white/80">sovereign guarantee</strong> on your investment</li>
            <li>Guaranteed savings with the <strong className="text-white/80">highest bonus rates</strong></li>
            <li>You prioritise <strong className="text-white/80">claim settlement ratio</strong></li>
            <li>You want a <strong className="text-white/80">wide branch network</strong> for offline service</li>
            <li>You are investing for <strong className="text-white/80">child education or retirement</strong> with guaranteed returns</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">When to Choose SBI Life</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>You want <strong className="text-white/80">lower term insurance premiums</strong></li>
            <li>You prefer <strong className="text-white/80">online purchasing</strong> with digital servicing</li>
            <li>You want <strong className="text-white/80">ULIP plans</strong> with equity exposure</li>
            <li>You already bank with SBI and want <strong className="text-white/80">integrated servicing</strong></li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-6 text-center my-8">
        <p className="text-white/50 text-sm mb-3">Compare LIC plan premiums and maturity values</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/premium-calculator" className="btn-primary no-underline text-sm">
            Premium Calculator
          </Link>
          <Link to="/compare-plans" className="btn-secondary no-underline text-sm">
            Compare LIC Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
