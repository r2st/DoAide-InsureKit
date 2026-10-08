import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";
import WhatsAppShare from "../../components/WhatsAppShare";

const SITE_URL = "https://insure.doaide.com";

const COMPARISON = [
  { feature: "Purpose", term: "Pure life cover", endowment: "Savings + life cover" },
  { feature: "Maturity Benefit", term: "None (no payout if you survive)", endowment: "SA + Bonuses paid at maturity" },
  { feature: "Death Benefit", term: "Full sum assured", endowment: "Full sum assured + bonuses" },
  { feature: "Premium (30M, ₹10L SA, 20yr)", term: "~₹1,500/yr", endowment: "~₹45,000/yr" },
  { feature: "Returns (IRR)", term: "0% (pure cost)", endowment: "4.5-6%" },
  { feature: "Tax Benefit (80C)", term: "Yes (on premium)", endowment: "Yes (on premium)" },
  { feature: "Tax-free Maturity (10D)", term: "N/A", endowment: "Yes (if premium < 10% of SA)" },
  { feature: "Surrender Value", term: "None", endowment: "Available after 3 years" },
  { feature: "Loan Against Policy", term: "Not available", endowment: "Available after 3 years" },
  { feature: "Best For", term: "Maximising life cover on budget", endowment: "Guaranteed savings with protection" },
  { feature: "Risk", term: "No investment risk", endowment: "No investment risk" },
  { feature: "Flexibility", term: "Level or increasing cover", endowment: "Fixed SA and term" },
  { feature: "Popular LIC Plans", term: "Tech Term (854), Jeevan Amar (855)", endowment: "Jeevan Anand (815), Jeevan Labh (836)" },
];

const FAQ_ITEMS = [
  {
    q: "Is term insurance better than endowment plan?",
    a: "It depends on your goal. Term insurance gives maximum life cover at minimum cost — ideal if you already have other savings/investments. Endowment plans combine savings with protection and give guaranteed returns. Most financial planners recommend a term plan for life cover + separate investments (SIP/PPF) for savings.",
  },
  {
    q: "Why is term insurance premium so low compared to endowment?",
    a: "Term insurance has no savings component. It pays out only on death during the policy term. Since statistically most policyholders survive the term, the insurer's payout liability is low, resulting in very low premiums. Endowment plans are expensive because the insurer guarantees a maturity payout to every surviving policyholder.",
  },
  {
    q: "Can I have both term and endowment plans?",
    a: "Yes, and this is often the recommended approach. Buy a term plan for adequate life cover (10-15x annual income) at low cost, and a smaller endowment plan for guaranteed savings and tax benefits. This way you get maximum protection without paying high premiums on the entire cover amount.",
  },
  {
    q: "Do I get money back from term insurance if I survive?",
    a: "In a regular term plan, no — if you survive the term, no payout is made. Some insurers offer 'Return of Premium' (ROP) term plans where premiums are returned at maturity, but these cost 2-3x more than regular term plans, reducing the cost advantage.",
  },
  {
    q: "What is the ideal term insurance cover amount?",
    a: "Financial planners recommend 10-15 times your annual income as term insurance cover. For a person earning ₹10 LPA, a cover of ₹1-1.5 crore is recommended. This ensures your family can maintain their lifestyle and meet financial goals in your absence. Use our Insurance Needs Calculator for a personalized recommendation.",
  },
  {
    q: "Which LIC endowment plan gives the best returns?",
    a: "Among LIC endowment plans, Jeevan Labh (836) offers the highest bonus rates (SRB ₹51/1000 SA) with an estimated IRR of 5.5-6%. Jeevan Lakshya (833) follows with an IRR of 5-6%. Jeevan Anand (815) is popular for its whole-life cover benefit after maturity. Use our Maturity Calculator to compare returns.",
  },
];

export default function TermVsEndowment() {
  useEffect(() => {
    const title = "Term Insurance vs Endowment Plan — Which is Better? 2026 Guide | InsureKit";
    const desc = "Detailed comparison of term insurance and endowment plans. Compare premiums, returns, benefits, tax savings, and which plan type is right for your financial goals.";
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
    setMeta("name", "keywords", "term insurance vs endowment plan, term vs endowment comparison, best insurance plan India, LIC term plan, LIC endowment plan");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE_URL}/compare/term-vs-endowment`);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}/compare/term-vs-endowment`);

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
        headline: title,
        description: desc,
        url: `${SITE_URL}/compare/term-vs-endowment`,
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
        Term Insurance vs Endowment Plan — Which is Better?
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Understand the key differences, costs, and when to choose each type. Updated October 2026.
      </p>

      <section className="grid grid-cols-2 gap-3 mb-8">
        <div className="panel p-5 text-center">
          <div className="text-signal text-lg font-bold">Term Plan</div>
          <div className="text-xs text-white/40 mt-1">Pure Protection</div>
          <div className="text-[10px] text-signal/60 mt-0.5">Low cost, high cover</div>
        </div>
        <div className="panel p-5 text-center">
          <div className="text-white/70 text-lg font-bold">Endowment Plan</div>
          <div className="text-xs text-white/40 mt-1">Savings + Protection</div>
          <div className="text-[10px] text-white/30 mt-0.5">Guaranteed returns</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What is a Term Insurance Plan?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            A term insurance plan provides <strong className="text-white/80">pure life cover</strong> for a
            specified period (term). If the policyholder dies during the term, the nominee receives the
            sum assured. If the policyholder survives the term, <strong className="text-white/80">no payout
            is made</strong>. This makes term plans the most affordable way to get high life cover.
          </p>
          <p>
            For example, a 30-year-old male can get ₹1 crore cover for 30 years for just ₹8,500/year with
            LIC Tech Term (854). The same cover through an endowment plan would cost ₹4-5 lakh/year.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What is an Endowment Plan?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            An endowment plan combines <strong className="text-white/80">life insurance with savings</strong>.
            If the policyholder dies during the term, the nominee receives the sum assured plus bonuses.
            If the policyholder survives, they receive the <strong className="text-white/80">maturity value
            (SA + accumulated bonuses)</strong>.
          </p>
          <p>
            Premiums are significantly higher than term plans because a large portion goes toward the savings
            component. LIC Jeevan Labh (836) with ₹10 lakh SA for 16 years costs approximately ₹55,000/year
            but gives a maturity value of ₹17-19 lakh.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Side-by-Side Comparison</h2>
        <div className="panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white/50 text-xs uppercase">Feature</th>
                  <th className="text-left py-3 px-3 text-signal text-xs uppercase">Term Plan</th>
                  <th className="text-left py-3 px-3 text-white/40 text-xs uppercase">Endowment Plan</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-t border-white/5">
                    <td className="py-2.5 px-4 text-white/50 text-sm">{row.feature}</td>
                    <td className="py-2.5 px-3 text-white/70 text-sm">{row.term}</td>
                    <td className="py-2.5 px-3 text-white/70 text-sm">{row.endowment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Premium Comparison Example</h2>
        <p className="text-sm text-white/40 mb-3">For a 30-year-old male, ₹10 lakh sum assured, 20-year term:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Plan Type</th>
                <th className="text-left py-2 px-3">LIC Plan</th>
                <th className="text-right py-2 px-3">Annual Premium</th>
                <th className="text-right py-2 px-3">Total Paid (20yr)</th>
                <th className="text-right py-2 px-3">Maturity</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 text-white/80">Term</td>
                <td className="py-2 px-3">Tech Term (854)</td>
                <td className="py-2 px-3 text-right text-signal">~₹1,500</td>
                <td className="py-2 px-3 text-right">₹30,000</td>
                <td className="py-2 px-3 text-right">₹0</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 px-3 text-white/80">Endowment</td>
                <td className="py-2 px-3">Jeevan Anand (815)</td>
                <td className="py-2 px-3 text-right">~₹45,000</td>
                <td className="py-2 px-3 text-right">₹9,00,000</td>
                <td className="py-2 px-3 text-right text-signal">~₹17-18L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">The Smart Combination Strategy</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            Most financial advisors recommend <strong className="text-white/80">combining both plan types</strong>:
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-white/80">Term plan for full life cover:</strong> Buy ₹1 crore term cover (LIC Tech Term) for ~₹8,500/year to protect your family</li>
            <li><strong className="text-white/80">Endowment for guaranteed savings:</strong> Buy Jeevan Labh (₹5-10L SA) for ~₹30,000-55,000/year for guaranteed maturity + tax benefits</li>
            <li><strong className="text-white/80">SIP for wealth creation:</strong> Invest the premium difference in equity mutual funds for higher long-term returns</li>
          </ol>
          <p>
            This approach gives you adequate life cover, guaranteed savings, and market-linked growth — all at a reasonable total cost.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Who Should Buy a Term Plan?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>You have dependents who rely on your income</li>
            <li>You want <strong className="text-white/80">maximum cover at minimum cost</strong></li>
            <li>You have separate investment plans (MF SIP, PPF, NPS)</li>
            <li>You have outstanding loans (home loan, car loan)</li>
            <li>You are the <strong className="text-white/80">sole earner</strong> in your family</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Who Should Buy an Endowment Plan?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>You want <strong className="text-white/80">guaranteed returns</strong> with zero market risk</li>
            <li>You are a <strong className="text-white/80">conservative investor</strong> uncomfortable with equity</li>
            <li>You want forced disciplined savings with life cover</li>
            <li>You need <strong className="text-white/80">tax benefits</strong> under 80C and 10(10D)</li>
            <li>You are saving for a specific goal like <strong className="text-white/80">child education or retirement</strong></li>
          </ul>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="flex flex-wrap gap-3 my-6">
        <WhatsAppShare text={"Term vs Endowment — which insurance type is right for you?\n\ninsure.doaide.com/compare/term-vs-endowment"} />
      </div>

      <div className="panel-inner p-6 text-center my-8">
        <p className="text-white/50 text-sm mb-3">Calculate premiums and maturity for any LIC plan</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/premium-calculator" className="btn-primary no-underline text-sm">
            Premium Calculator
          </Link>
          <Link to="/maturity-calculator" className="btn-secondary no-underline text-sm">
            Maturity Calculator
          </Link>
          <Link to="/insurance-needs-calculator" className="btn-secondary no-underline text-sm">
            Insurance Needs Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
