import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const SITE_URL = "https://insure.doaide.com";

const FEATURES = [
  { feature: "Premium Calculator", insurekit: true, competitor: true },
  { feature: "Maturity Calculator", insurekit: true, competitor: false },
  { feature: "Surrender Value Calculator", insurekit: true, competitor: false },
  { feature: "Loan Against Policy Calculator", insurekit: true, competitor: false },
  { feature: "Revival Calculator", insurekit: true, competitor: false },
  { feature: "Commission Calculator", insurekit: true, competitor: true },
  { feature: "Plan Comparison (Side by Side)", insurekit: true, competitor: false },
  { feature: "Plan Recommender (AI-based)", insurekit: true, competitor: false },
  { feature: "Claim Estimator", insurekit: true, competitor: false },
  { feature: "Tax Benefit Calculator", insurekit: true, competitor: false },
  { feature: "Bonus History (10 years)", insurekit: true, competitor: false },
  { feature: "Policy Tracker", insurekit: true, competitor: true },
  { feature: "Client Birthday Reminders", insurekit: true, competitor: true },
  { feature: "Marketing Templates", insurekit: true, competitor: true },
  { feature: "Receipt Generator", insurekit: true, competitor: false },
  { feature: "Premium Calendar", insurekit: true, competitor: false },
  { feature: "Individual Plan Detail Pages", insurekit: true, competitor: false },
  { feature: "Free (No Registration)", insurekit: true, competitor: false },
  { feature: "Works Offline", insurekit: true, competitor: false },
  { feature: "No Ads", insurekit: true, competitor: false },
  { feature: "WhatsApp Sharing", insurekit: true, competitor: true },
  { feature: "Print / PDF Export", insurekit: true, competitor: false },
];

const FAQ_ITEMS = [
  {
    q: "Is InsureKit really free?",
    a: "Yes, 100% free. No login, no registration, no hidden charges, no ads. InsureKit is built by DoAide to help LIC agents serve their clients better.",
  },
  {
    q: "How many LIC plans does InsureKit support?",
    a: "InsureKit supports 30+ LIC plans including all popular plans like Jeevan Anand, Jeevan Lakshya, Jeevan Labh, Tech Term, Jeevan Umang, Money Back plans, and more.",
  },
  {
    q: "Can I use InsureKit without internet?",
    a: "Yes! Once loaded, InsureKit works offline. All calculations run in your browser. No data is sent to any server.",
  },
  {
    q: "Does InsureKit store my client data?",
    a: "Client data (policy tracker, reminders) is stored only in your browser's local storage. It never leaves your device. No server, no cloud, no tracking.",
  },
];

export default function VsLicSuperSalesSaathi() {
  useEffect(() => {
    const title = "InsureKit vs LIC Super Sales Saathi — Feature Comparison 2026 | DoAide";
    const desc = "Compare DoAide InsureKit with LIC Super Sales Saathi. See which LIC agent tool has more calculators, better features, and is truly free. Side-by-side comparison.";
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
    setMeta("name", "keywords", "InsureKit vs LIC Super Sales Saathi, LIC agent tools comparison, best LIC agent app, free LIC calculator");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `${SITE_URL}/compare/lic-super-sales-saathi`);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}/compare/lic-super-sales-saathi`);
  }, []);

  const ikCount = FEATURES.filter((f) => f.insurekit).length;
  const compCount = FEATURES.filter((f) => f.competitor).length;

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
        InsureKit vs LIC Super Sales Saathi
      </h1>
      <p className="text-white/40 text-sm mb-8">
        Side-by-side feature comparison for LIC agents. See which tool gives you more for free.
      </p>

      {/* Score Cards */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="panel p-5 text-center">
          <div className="text-signal text-3xl font-bold">{ikCount}</div>
          <div className="text-xs text-white/40 mt-1">InsureKit Features</div>
          <div className="text-[10px] text-signal/60 mt-0.5">FREE, No Login</div>
        </div>
        <div className="panel p-5 text-center">
          <div className="text-white/50 text-3xl font-bold">{compCount}</div>
          <div className="text-xs text-white/40 mt-1">Super Sales Saathi</div>
          <div className="text-[10px] text-white/30 mt-0.5">Paid / Login Required</div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="panel overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-white/50 text-xs uppercase">Feature</th>
                <th className="text-center py-3 px-3 text-signal text-xs uppercase">InsureKit</th>
                <th className="text-center py-3 px-3 text-white/40 text-xs uppercase">Super Sales Saathi</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f) => (
                <tr key={f.feature} className="border-t border-white/5">
                  <td className="py-2.5 px-4 text-white/70 text-sm">{f.feature}</td>
                  <td className="py-2.5 px-3 text-center">
                    {f.insurekit ? (
                      <span className="text-good text-lg">&#10003;</span>
                    ) : (
                      <span className="text-white/20 text-lg">&#10007;</span>
                    )}
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    {f.competitor ? (
                      <span className="text-good text-lg">&#10003;</span>
                    ) : (
                      <span className="text-white/20 text-lg">&#10007;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Why InsureKit */}
      <section className="panel p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Why LIC Agents Choose InsureKit</h2>
        <div className="space-y-3 text-sm text-white/70">
          <p>
            InsureKit offers {ikCount} features completely free, with no registration or login required.
            Every tool works offline once loaded, keeping your client data private on your device.
          </p>
          <p>
            With calculators for premium, maturity, surrender, revival, loan, commission, tax, and claims,
            plus a plan recommender, side-by-side comparison, bonus history, and marketing templates,
            InsureKit is the most comprehensive free toolkit for LIC agents.
          </p>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      {/* CTA */}
      <div className="panel p-6 text-center mb-8">
        <p className="text-white/50 text-sm mb-4">Ready to try InsureKit?</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary no-underline text-sm">
            Explore All Tools
          </Link>
          <Link to="/plans" className="btn-secondary no-underline text-sm">
            Browse LIC Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
