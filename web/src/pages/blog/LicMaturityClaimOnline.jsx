import { useEffect } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "How long does it take to receive LIC maturity amount?",
    a: "If NEFT details are registered and all documents are in order, LIC credits the maturity amount within 7-10 working days after the maturity date. If you need to submit documents manually, it can take 15-30 working days from the date of document submission.",
  },
  {
    q: "What if I lost my original policy bond?",
    a: "You can still claim the maturity amount. File an FIR or a lost declaration affidavit, submit Form 3816 (Indemnity Bond) along with the Discharge Voucher. LIC may ask for a newspaper advertisement for policies with higher sum assured. The process takes 2-4 weeks extra.",
  },
  {
    q: "Is TDS deducted from LIC maturity amount?",
    a: "TDS of 5% is deducted if the maturity amount exceeds ₹1 lakh AND the annual premium exceeds 10% of sum assured (for policies issued after 01-04-2012). Submit Form 15G/15H if your total income is below the taxable limit to avoid TDS.",
  },
  {
    q: "Can I track my LIC maturity claim status?",
    a: "Yes, you can track it through: (1) LIC Customer Portal at licindia.in, (2) SMS service — send LICINDIA POL <Policy Number> to 9222492224, (3) LIC WhatsApp service at 8976862090, or (4) Visit your servicing branch.",
  },
  {
    q: "What happens if the policyholder dies before maturity?",
    a: "The nominee receives the death benefit (Sum Assured + accumulated bonuses) immediately upon submitting the death claim. The death benefit is always tax-free regardless of premium-to-SA ratio. File the claim as soon as possible — within 3 years of death for smooth processing.",
  },
  {
    q: "Can I get maturity amount credited to a different bank account?",
    a: "Yes, submit a fresh NEFT mandate form (available at the LIC branch or licindia.in) with a cancelled cheque of the new bank account. Update this at least 2-3 months before maturity to ensure timely credit.",
  },
];

const STEPS = [
  {
    title: "Register on LIC Customer Portal",
    desc: "Go to licindia.in → Customer Portal → New User. Register with your policy number, date of birth, and mobile number linked to the policy. Verify via OTP.",
  },
  {
    title: "Update NEFT / Bank Details",
    desc: "Log in → My Policies → Select Policy → Update NEFT Details. Enter your bank account number, IFSC code, and upload a cancelled cheque. This ensures the maturity amount is credited directly to your account.",
  },
  {
    title: "Verify Your Contact Details",
    desc: "Ensure your mobile number, email, and address are updated on the portal. LIC sends the Discharge Voucher and maturity intimation to the registered address 2-3 months before maturity.",
  },
  {
    title: "Download & Sign the Discharge Voucher",
    desc: "2-3 months before maturity, LIC sends a Discharge Voucher by post. You can also download it from the portal. Sign it with revenue stamp (₹1) and get it attested by your LIC agent or branch manager.",
  },
  {
    title: "Submit Documents to LIC Branch",
    desc: "Submit: (1) Signed Discharge Voucher, (2) Original Policy Bond, (3) ID proof (Aadhaar/PAN), (4) Cancelled cheque or NEFT mandate, (5) Form 15G/15H if applicable for TDS exemption.",
  },
  {
    title: "Receive Maturity Amount",
    desc: "If NEFT details are already registered and documents are complete, the amount is credited automatically within 7-10 working days after the maturity date. You receive an SMS confirmation from LIC.",
  },
];

export default function LicMaturityClaimOnline() {
  useEffect(() => {
    document.title = "How to Claim LIC Maturity Amount Online — Step-by-Step Guide 2026 | InsureKit";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = "Complete step-by-step guide on how to claim LIC maturity amount online. Learn about documents needed, NEFT registration, Discharge Voucher, TDS, and timeline.";

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
        "@type": "HowTo",
        name: "How to Claim LIC Maturity Amount Online",
        description: "Step-by-step guide to claim your LIC policy maturity amount online through the LIC customer portal.",
        step: STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.desc,
        })),
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
        Step-by-Step Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">
        How to Claim LIC Maturity Amount Online
      </h1>
      <p className="text-white/40 text-sm mb-8">Updated October 2026 · 8 min read</p>

      <section className="mb-8">
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-3">
          <p>
            When your LIC policy completes its term, you are entitled to receive the <strong className="text-white/80">maturity
            amount (Sum Assured + Accumulated Bonuses + Final Additional Bonus)</strong>. This guide walks
            you through the complete process of claiming your LIC maturity amount online, including
            document requirements, NEFT registration, and timeline.
          </p>
          <p>
            <strong className="text-white/80">Key point:</strong> If your NEFT details are already registered
            with LIC, the maturity amount may be credited automatically without requiring any action from
            your end. Check your registration status on the LIC portal first.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Step-by-Step Process</h2>
        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-signal/20 text-signal flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div className="flex-1 panel-inner p-4">
                <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Documents Required</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <ul className="list-disc pl-5 space-y-1">
            <li>Signed Discharge Voucher (with ₹1 revenue stamp)</li>
            <li>Original Policy Bond</li>
            <li>ID Proof (Aadhaar card or PAN card)</li>
            <li>Cancelled cheque or NEFT mandate form</li>
            <li>Form 15G / 15H (for TDS exemption, if applicable)</li>
            <li>Nominee&apos;s ID proof (if claiming on behalf of nominee)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Maturity Amount Components</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <p>Your LIC maturity payout consists of:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong className="text-white/80">Sum Assured (SA):</strong> The guaranteed amount chosen at policy inception</li>
            <li><strong className="text-white/80">Simple Reversionary Bonus (SRB):</strong> Declared annually by LIC, accumulated over the policy term</li>
            <li><strong className="text-white/80">Final Additional Bonus (FAB):</strong> One-time bonus paid at maturity for policies with 15+ year term</li>
            <li><strong className="text-white/80">Loyalty Addition:</strong> For eligible plans, an additional loyalty bonus at maturity</li>
          </ol>
          <p className="mt-2">
            Use our <Link to="/maturity-calculator" className="text-signal">Maturity Calculator</Link> to estimate
            your policy&apos;s maturity value based on current bonus rates.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tax on Maturity Amount</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-white/80">Tax-free:</strong> If annual premium does not exceed 10% of
              Sum Assured (Section 10(10D)). For policies issued before 01-04-2012, the limit is 20%.
            </li>
            <li>
              <strong className="text-white/80">Taxable:</strong> If annual premium exceeds the above limit,
              the maturity amount is taxed as &quot;Income from Other Sources&quot;. TDS of 5% is deducted
              if the amount exceeds ₹1 lakh.
            </li>
            <li>
              <strong className="text-white/80">TDS exemption:</strong> Submit Form 15G (below 60 years) or
              Form 15H (60 years and above) if your total income is below the taxable limit.
            </li>
          </ul>
          <p className="mt-2">
            Use our <Link to="/tax-calculator" className="text-signal">Tax Calculator</Link> to check whether
            your maturity is tax-free.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Timeline Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-white/40 uppercase tracking-wide">
                <th className="text-left py-2 px-3">Event</th>
                <th className="text-left py-2 px-3">Timeline</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5"><td className="py-2 px-3">Maturity intimation letter from LIC</td><td className="py-2 px-3">2-3 months before maturity</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3">Submit Discharge Voucher &amp; documents</td><td className="py-2 px-3">At least 1 month before maturity</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3">Auto-credit (if NEFT registered)</td><td className="py-2 px-3 text-signal">7-10 working days after maturity</td></tr>
              <tr className="border-b border-white/5"><td className="py-2 px-3">Manual processing (documents at branch)</td><td className="py-2 px-3">15-30 working days</td></tr>
              <tr><td className="py-2 px-3">Lost policy bond processing</td><td className="py-2 px-3">30-45 working days</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      <div className="panel-inner p-4 text-center text-sm mt-8">
        <p className="text-white/50 mb-3">Estimate your LIC maturity value</p>
        <Link to="/maturity-calculator" className="btn-primary no-underline text-sm">
          Maturity Calculator
        </Link>
      </div>
    </div>
  );
}
