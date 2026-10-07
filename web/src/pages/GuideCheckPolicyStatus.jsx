import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  { q: "Can I check policy status without registration?", a: "Yes, you can check basic policy status via SMS (send ASKLIC to 56677 or 9222492224) or by calling the LIC helpline at 022-68276827. For detailed status, registration on the LIC portal is required." },
  { q: "How do I check if my LIC premium is paid?", a: "Login to licindia.in > My Policies > select your policy > Premium Calendar. It shows all paid and due premiums. You can also check via the LIC Customer app." },
  { q: "What information do I need to check status?", a: "You need your policy number. For online registration, you'll also need the registered mobile number and date of birth. For SMS, just the policy number is sufficient." },
  { q: "How do I find my LIC policy number?", a: "The policy number is printed on your LIC policy bond (first page). It's also on premium receipts, renewal notices, and any correspondence from LIC. Contact your agent if you've lost all documents." },
  { q: "Can I check someone else's policy status?", a: "No, policy status can only be checked by the policyholder or their registered nominee. You need the registered mobile number for OTP verification." },
];

export default function GuideCheckPolicyStatus() {
  return (
    <div className="animate-fade-up">
      <span className="text-[10px] px-2 py-0.5 rounded bg-signal/10 text-signal font-medium uppercase tracking-wide">
        How-To Guide
      </span>
      <h1 className="text-2xl font-bold text-white mt-3 mb-1">How to Check LIC Policy Status Online</h1>
      <p className="text-white/40 text-sm mb-8">
        Step-by-step guide for checking your LIC policy status, premium payment, and maturity details
      </p>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 1: LIC Official Website</h2>
        <div className="space-y-3">
          {[
            { step: 1, title: "Register on LIC Portal", desc: "Visit licindia.in and click 'New User' under Customer Portal. Enter your policy number, mobile number, and date of birth. You'll receive an OTP for verification." },
            { step: 2, title: "Login to Your Account", desc: "After registration, login with your User ID and password. Go to 'My Policies' section." },
            { step: 3, title: "View Policy Details", desc: "Click on your policy number to see: policy status (in force/lapsed/paid-up), premium details, sum assured, bonus accrued, nominee details, and maturity date." },
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
        <h2 className="text-lg font-semibold text-white mb-3">Method 2: LIC Customer App (ANANDA)</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed space-y-2">
          <p>Download the <strong className="text-white/80">LIC Customer App</strong> from Play Store or App Store. Login with the same credentials as the LIC website.</p>
          <p>The app shows all your policies with real-time status, upcoming premium dates, loan details, and allows you to pay premiums directly.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 3: Via SMS</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <p>Send <strong className="text-white/80">ASKLIC &lt;Policy Number&gt;</strong> to <strong className="text-signal">56677</strong> or <strong className="text-signal">9222492224</strong> from your registered mobile number.</p>
          <p className="mt-2">You'll receive an SMS with basic policy details including status, next premium due date, and amount.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 4: Call LIC Helpline</h2>
        <div className="panel-inner p-4 text-sm text-white/60 leading-relaxed">
          <p>Call <strong className="text-signal">022-68276827</strong> (LIC toll-free helpline). Available Monday to Saturday, 9:30 AM to 5:30 PM.</p>
          <p className="mt-2">Keep your policy number ready. The IVR system can provide basic status, or you can speak to a representative for detailed queries.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Understanding Policy Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { status: "In Force", desc: "All premiums paid. Policy is active with full benefits.", color: "text-good" },
            { status: "Lapsed", desc: "Premium not paid within grace period. Can be revived within 5 years.", color: "text-bad" },
            { status: "Paid-Up", desc: "Premium payment stopped after 3+ years. Reduced benefits continue.", color: "text-warn" },
            { status: "Discharged", desc: "Maturity paid or claim settled. Policy has ended.", color: "text-white/50" },
          ].map(({ status, desc, color }) => (
            <div key={status} className="panel-inner p-3">
              <div className={`text-sm font-medium ${color}`}>{status}</div>
              <div className="text-xs text-white/40 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="panel p-4 border-l-4 border-l-signal mb-6">
        <div className="text-sm font-medium text-white mb-1">Related Tools</div>
        <div className="text-sm text-white/50">
          <Link to="/policy-tracker" className="text-signal">Track Your Policies</Link> locally &middot;{" "}
          <Link to="/revival-calculator" className="text-signal">Revival Calculator</Link> for lapsed policies &middot;{" "}
          <Link to="/surrender-calculator" className="text-signal">Surrender Calculator</Link> to check surrender value
        </div>
      </div>

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
