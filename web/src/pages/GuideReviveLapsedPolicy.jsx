import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  { q: "What does 'lapsed policy' mean?", a: "A policy is considered lapsed when premium is not paid within the grace period (30 days for yearly/half-yearly, 15 days for quarterly/monthly). The policy loses all benefits including death cover." },
  { q: "Can I revive a policy after 5 years?", a: "Generally no. LIC's revival period is 5 years from the first unpaid premium. After 5 years, the policy can either be surrendered (if eligible) or treated as paid-up. Some special revival schemes may extend this period — check with your LIC branch." },
  { q: "Is interest charged on revival?", a: "Yes. LIC charges approximately 9.25% p.a. interest on all unpaid premiums from their respective due dates to the date of revival. GST is also applicable on the arrears." },
  { q: "Do I need a medical test for revival?", a: "For policies lapsed less than 2 years: No medical test is usually required (Ordinary Revival). For 2-5 years lapse: Medical examination may be required, and LIC may ask for a personal health statement. Medical requirements increase with age and sum assured." },
  { q: "What happens to bonuses during lapse?", a: "Bonuses already declared and attached to the policy before lapse are preserved. However, no new bonus is added during the lapse period. Reviving the policy resumes future bonus accrual." },
  { q: "Can I revive online?", a: "For policies lapsed less than 2 years with no medical requirement, you can revive online via licindia.in or the LIC Customer app. For others, visit your LIC branch." },
];

export default function GuideReviveLapsedPolicy() {
  return (
    <div className="animate-fade-up">
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        How-To Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">How to Revive a Lapsed LIC Policy</h1>
      <p className="text-white/40 text-sm mb-8">
        Complete guide to reviving your lapsed LIC policy — eligibility, documents, costs, and step-by-step process
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">When Can You Revive?</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <p>A lapsed LIC policy can be revived <strong className="text-white/80">within 5 years</strong> from the date of the first unpaid premium, provided:</p>
          <ul className="mt-2 space-y-1 list-disc pl-4">
            <li>The policy has acquired surrender value (premiums paid for at least 3 years)</li>
            <li>The policyholder is alive and in good health</li>
            <li>All arrear premiums with interest are paid</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Types of Revival</h2>
        <div className="space-y-3">
          {[
            { type: "Ordinary Revival", lapse: "< 2 years", medical: "Not required (usually)", desc: "Simplest method. Pay all arrears with interest and the policy is revived immediately." },
            { type: "Revival with Medical", lapse: "2-5 years", medical: "Required", desc: "Submit Declaration of Good Health + medical reports. LIC may require additional tests based on age and SA." },
            { type: "Special Revival Scheme", lapse: "Extended period", medical: "Varies", desc: "LIC occasionally announces special revival schemes with relaxed conditions and reduced interest. Watch for announcements." },
          ].map(({ type, lapse, medical, desc }) => (
            <div key={type} className="panel-inner p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-white">{type}</div>
                <span className="text-xs px-2 py-0.5 rounded bg-signal/10 text-signal">{lapse}</span>
              </div>
              <div className="text-xs text-white/40 mb-1">Medical: {medical}</div>
              <div className="text-xs text-white/50">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Step-by-Step Revival Process</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "Calculate Revival Amount", desc: "Use our Revival Calculator to estimate the total amount needed — arrear premiums + interest + GST. This gives you an approximate figure before visiting the branch." },
            { step: 2, title: "Gather Documents", desc: "Policy bond (original), Photo ID (Aadhaar/PAN), Declaration of Good Health form, Latest medical reports (if lapsed > 2 years), Cancelled cheque for bank details." },
            { step: 3, title: "Visit LIC Branch", desc: "Go to your nearest LIC branch or the servicing branch. Submit the revival application form along with documents. For short-duration lapses, online revival may be possible." },
            { step: 4, title: "Pay Revival Amount", desc: "Pay all arrear premiums with interest and current premium. Payment can be made via cheque, demand draft, or online transfer." },
            { step: 5, title: "Receive Confirmation", desc: "After processing, LIC will issue a revival endorsement on your policy bond. The policy is restored with full benefits from the revival date." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="panel-inner p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-signal/10 text-signal font-bold text-sm flex items-center justify-center shrink-0">{step}</div>
              <div>
                <div className="text-sm font-medium text-white">{title}</div>
                <div className="text-xs text-white/50 mt-0.5 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tips to Avoid Future Lapses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { tip: "Set up ECS/NACH", desc: "Auto-debit premium from your bank account. Never miss a payment." },
            { tip: "Use premium calendar", desc: "Track all due dates and set reminders well in advance." },
            { tip: "Switch to yearly mode", desc: "Fewer payments = fewer chances to miss. Also saves on mode loading." },
            { tip: "Keep contact updated", desc: "Update your mobile and email with LIC to receive renewal reminders." },
          ].map(({ tip, desc }) => (
            <div key={tip} className="panel-inner p-3">
              <div className="text-sm font-medium text-white">{tip}</div>
              <div className="text-xs text-white/40 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="panel p-4 border-l-4 border-l-signal mb-6">
        <div className="text-sm font-medium text-white mb-1">Related Tools</div>
        <div className="text-sm text-white/50">
          <Link to="/revival-calculator" className="text-signal">Revival Calculator</Link> — estimate revival amount &middot;{" "}
          <Link to="/premium-calendar" className="text-signal">Premium Calendar</Link> — track due dates &middot;{" "}
          <Link to="/surrender-calculator" className="text-signal">Surrender Calculator</Link> — compare vs surrender value
        </div>
      </div>

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
