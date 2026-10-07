import { Link } from "react-router-dom";
import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "How often should I check my LIC policy status?",
    a: "It is recommended to check your policy status at least once every quarter, and always after making a premium payment. Regular checks help you catch issues like lapsed status or incorrect nominee details early.",
  },
  {
    q: "What does 'In Force' status mean on LIC portal?",
    a: "'In Force' means your policy is active, all premiums are paid up to date, and the full risk cover and bonus accumulation are in effect. This is the ideal status for any life insurance policy.",
  },
  {
    q: "Can I check my LIC policy status without the policy number?",
    a: "Yes, if you have registered on the LIC portal, all your linked policies are visible after login. You can also call the LIC helpline (022-68276827) with your name, date of birth, and PAN to retrieve your policy details.",
  },
  {
    q: "My policy shows 'Lapsed' status. What should I do?",
    a: "A lapsed policy means premiums are overdue beyond the grace period. You can revive it within 5 years by paying all overdue premiums with interest. Use our Revival Calculator to estimate the revival cost, and visit your LIC branch to initiate the process.",
  },
  {
    q: "How do I link all my policies to the LIC portal?",
    a: "After logging in to the LIC customer portal, go to 'New User Registration' or 'Link Policy' section. Enter your policy number, date of birth, and the mobile number registered with LIC. An OTP verification will link the policy to your account.",
  },
  {
    q: "What is the difference between 'Paid-Up' and 'Lapsed'?",
    a: "A 'Paid-Up' policy has stopped premium payments but retains a reduced sum assured based on premiums already paid. A 'Lapsed' policy has no cover at all and must be revived to get any benefits. Paid-up policies still earn bonus and pay out at maturity, while lapsed ones may not.",
  },
  {
    q: "Can I check the policy status of a deceased family member?",
    a: "Yes. As a nominee or legal heir, you can check the status by visiting the LIC branch with the death certificate, policy document, and your identity proof. You can also call the helpline for initial status information.",
  },
];

const TOC = [
  { id: "why-check-status", label: "Why Check Policy Status Regularly" },
  { id: "method-portal", label: "Method 1: LIC Customer Portal" },
  { id: "method-app", label: "Method 2: LIC Customer App (ANANDA)" },
  { id: "method-sms", label: "Method 3: SMS Service" },
  { id: "method-helpline", label: "Method 4: LIC Helpline" },
  { id: "method-agent", label: "Method 5: Through Your LIC Agent" },
  { id: "method-branch", label: "Method 6: Visit LIC Branch Office" },
  { id: "status-types", label: "Understanding Policy Status Types" },
  { id: "what-info", label: "What Information You Can Check" },
  { id: "common-issues", label: "Common Issues & Solutions" },
  { id: "keep-updated", label: "Keep Your Policy Details Updated" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-premium-payment-online", title: "How to Pay LIC Premium Online" },
  { path: "/guides/lic-maturity-amount-check", title: "How to Check LIC Maturity Amount Online" },
];

const RELATED_TOOLS = [
  { path: "/policy-tracker", label: "Policy Tracker" },
  { path: "/revival-calculator", label: "Revival Calculator" },
  { path: "/surrender-calculator", label: "Surrender Calculator" },
];

export default function GuideLicPolicyStatus() {
  return (
    <GuideLayout
      tag="How-To Guide"
      title="How to Check LIC Policy Status Online"
      subtitle="A comprehensive guide covering every method to check your LIC policy status, understand status types, and keep your policy details updated."
      publishDate="Oct 2026"
      readTime="8 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      {/* --- Why Check Status --- */}
      <section id="why-check-status" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Check Policy Status Regularly</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Your LIC policy is a long-term financial commitment that can span 15 to 35 years.
          Over such a long period, many things can go wrong if you don't actively monitor
          your policy. Premiums can be missed due to bank mandate failures, nominee details may
          become outdated after life events, and bonus accumulation may not be as expected.
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Regularly checking your policy status helps you confirm that premiums are being applied
          correctly, the policy is in force, and your nominee and contact details are current. It
          also helps you plan for maturity by knowing the accumulated bonus and projected maturity
          value. For policies with loan facilities, you can monitor the outstanding loan balance
          to ensure it doesn't erode your policy value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Verify Premium Credit", desc: "Confirm that your payments are reflected and no premium is marked as overdue." },
            { label: "Track Bonus Accumulation", desc: "Check Simple Reversionary Bonus credited each year to estimate maturity value." },
            { label: "Monitor Nominee Details", desc: "Ensure nominee information is current, especially after marriage, birth, or death events." },
            { label: "Catch Lapse Early", desc: "If a policy lapses due to missed payment, early detection allows quick revival." },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4">
              <p className="text-signal text-sm font-semibold mb-1">{item.label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Method 1: Portal --- */}
      <section id="method-portal" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 1: LIC Customer Portal (licindia.in)</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The LIC customer portal provides the most comprehensive policy information online. You
          need to register once, after which all your policies are accessible from a single
          dashboard.
        </p>

        <h3 className="text-sm font-semibold text-white/80 mb-2">First-Time Registration</h3>
        <div className="space-y-2 mb-5">
          {[
            "Visit licindia.in and click 'Customer Login' at the top navigation bar.",
            "Click 'New User? Register Here' below the login form.",
            "Enter your policy number, date of birth, mobile number (registered with LIC), and email address.",
            "Set a strong password and choose your security questions.",
            "An OTP will be sent to your registered mobile number. Enter the OTP to verify.",
            "Your account is now active. You can log in and see all policies linked to that mobile number.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-white/80 mb-2">Checking Policy Status After Login</h3>
        <div className="space-y-2 mb-4">
          {[
            "Log in with your User ID and password. Complete the CAPTCHA verification.",
            "On the dashboard, you will see a list of all linked policies with a quick status summary.",
            "Click on any policy number to view detailed information: status, premium details, sum assured, bonus, nominee, and loan details.",
            "To see premium payment history, click 'Premium Paid Statement' in the policy details.",
            "You can also download a consolidated policy statement for all your policies.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Method 2: App --- */}
      <section id="method-app" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 2: LIC Customer App (ANANDA)</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The My LIC mobile app provides a convenient way to check policy status on the go. The
          app mirrors most of the portal functionality and is available for both Android and iOS.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Download the 'My LIC' app from Google Play Store or Apple App Store.",
            "Register with your LIC-linked mobile number. Verify via OTP.",
            "After login, the home screen shows all linked policies with their current status (In Force, Lapsed, etc.).",
            "Tap any policy to view full details including premium due date, bonus, sum assured, and nominee information.",
            "The app also provides premium payment reminders via push notifications.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          The app stores your login credentials securely and supports biometric login (fingerprint
          or face recognition) for quick access. It is particularly useful for tracking multiple
          family policies from a single device.
        </p>
      </section>

      {/* --- Method 3: SMS --- */}
      <section id="method-sms" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 3: SMS Service</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC offers an SMS-based service for quick policy status checks. This is the simplest
          method and works on any mobile phone, even without internet access.
        </p>
        <div className="panel-inner p-4 mb-4">
          <p className="text-white/80 text-sm font-semibold mb-2">How to use LIC SMS Service:</p>
          <div className="space-y-3">
            <div>
              <p className="text-white/60 text-sm">
                Send an SMS in this format from your registered mobile number:
              </p>
              <p className="text-signal text-sm font-mono mt-1 bg-signal/10 inline-block px-3 py-1 rounded">
                ASKLIC STAT &lt;Policy Number&gt;
              </p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Send to either of these numbers:</p>
              <div className="flex gap-3 mt-1">
                <span className="text-signal text-sm font-mono bg-signal/10 px-3 py-1 rounded">56677</span>
                <span className="text-signal text-sm font-mono bg-signal/10 px-3 py-1 rounded">9222492224</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          You will receive a reply SMS with basic policy details: policy status (In Force /
          Lapsed / Paid-Up), next premium due date, and sum assured. The SMS must be sent from
          the mobile number registered with LIC for that policy.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Other SMS commands include ASKLIC PREMIUM (for premium details), ASKLIC BONUS (for
          bonus details), and ASKLIC LOAN (for loan details). Standard SMS charges apply.
        </p>
      </section>

      {/* --- Method 4: Helpline --- */}
      <section id="method-helpline" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 4: LIC Helpline</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC operates a centralized customer helpline for policy-related queries. You can call
          to check your policy status and get information about premiums, bonus, maturity, and claims.
        </p>
        <div className="panel-inner p-4 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Toll-Free Number</p>
              <p className="text-signal text-lg font-bold">1800-227-717</p>
              <p className="text-white/40 text-xs">Available Mon-Sat, 9:30 AM - 5:30 PM</p>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Paid Helpline</p>
              <p className="text-signal text-lg font-bold">022-68276827</p>
              <p className="text-white/40 text-xs">Available Mon-Sat, 9:30 AM - 5:30 PM</p>
            </div>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          When calling, keep your policy number, date of birth, and registered mobile number
          ready. The IVR system will guide you to the right department. You can also request a
          callback by selecting the appropriate option. For faster service, call during non-peak
          hours (before 11 AM or after 3 PM).
        </p>
      </section>

      {/* --- Method 5: Agent --- */}
      <section id="method-agent" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 5: Through Your LIC Agent</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Your LIC agent has access to your policy details through the Agent Portal. You can
          contact your agent directly to check policy status, premium due dates, bonus details,
          and maturity information. This is particularly helpful for senior policyholders who
          prefer personal assistance.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          If you don't know your agent's contact details or your agent has retired/transferred,
          you can find your current servicing agent by calling the LIC helpline or visiting
          your LIC branch. LIC reassigns policies to active agents when the original agent
          is no longer serving.
        </p>
      </section>

      {/* --- Method 6: Branch --- */}
      <section id="method-branch" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 6: Visit LIC Branch Office</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          You can visit any LIC branch office to check your policy status in person. Carry your
          policy document (or at least the policy number), a valid government ID, and your PAN
          card. The branch staff can provide a comprehensive status report including premium
          history, bonus, loan, and nominee details.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          Branch visits are recommended when you need to make changes to your policy (nominee
          update, address change, mode change) or when you need certified copies of policy
          documents. You can find your nearest LIC branch using the branch locator on
          licindia.in.
        </p>
      </section>

      {/* --- Status Types --- */}
      <section id="status-types" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Understanding Policy Status Types</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          When you check your LIC policy status, you'll see one of these status indicators. Each
          has specific implications for your coverage and benefits.
        </p>
        <div className="space-y-2">
          {[
            {
              status: "In Force",
              color: "text-good",
              desc: "All premiums paid up to date. Full risk cover and bonus accumulation are active. This is the ideal status.",
            },
            {
              status: "In Force - Paid-Up",
              color: "text-warn",
              desc: "Premium payments stopped, but the policy retains a reduced sum assured proportional to premiums paid. Bonus continues to accrue on the reduced amount. Maturity benefit will be paid at the end of the term.",
            },
            {
              status: "Lapsed",
              color: "text-bad",
              desc: "Premiums unpaid beyond the grace period. No risk cover, no bonus accumulation. Must be revived within 5 years by paying all dues with interest.",
            },
            {
              status: "Discharged / Matured",
              color: "text-white/50",
              desc: "The policy has completed its term and the maturity amount has been paid. Or a death claim / surrender has been settled. No further benefits remain.",
            },
            {
              status: "Foreclosed",
              color: "text-bad",
              desc: "The policy was terminated by LIC, usually because the outstanding loan exceeded the surrender value. No further benefits unless the policy is reinstated.",
            },
            {
              status: "Cancelled / Withdrawn",
              color: "text-white/40",
              desc: "The policy was cancelled during the free-look period (15 days from receipt) or withdrawn by the insured. Premium refund (minus proportional risk and stamp duty charges) would have been processed.",
            },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4 flex gap-3 items-start">
              <span className={`shrink-0 text-sm font-bold ${item.color}`}>●</span>
              <div>
                <p className="text-white font-semibold text-sm">{item.status}</p>
                <p className="text-white/50 text-xs leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- What Info --- */}
      <section id="what-info" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">What Information You Can Check</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The LIC portal and app provide a wealth of information about your policy. Here's what
          you can access once logged in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Policy Status", desc: "Current status (In Force, Lapsed, Paid-Up, etc.) and effective date" },
            { label: "Premium Details", desc: "Premium amount, frequency, next due date, and payment history" },
            { label: "Sum Assured", desc: "Original and current sum assured (reduced if paid-up)" },
            { label: "Bonus Accumulation", desc: "Year-wise Simple Reversionary Bonus credited to the policy" },
            { label: "Nominee Information", desc: "Current nominee name, relationship, and appointment details" },
            { label: "Loan Details", desc: "Outstanding loan amount, interest accrued, and repayment history" },
            { label: "Maturity Date", desc: "Expected maturity date and projected maturity value" },
            { label: "Assignment Details", desc: "Whether the policy is assigned to any institution (bank, etc.)" },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-3">
              <p className="text-signal text-sm font-semibold">{item.label}</p>
              <p className="text-white/50 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Common Issues --- */}
      <section id="common-issues" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Common Issues & Solutions</h2>
        <div className="space-y-3">
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Unable to Register on LIC Portal</p>
            <p className="text-white/50 text-sm leading-relaxed">
              The most common reason for registration failure is a mismatch between the mobile
              number you're entering and the number registered with LIC for that policy. Visit
              your LIC branch to update your mobile number first, then try registering again.
              Carry your policy document and Aadhaar card for the update.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Policy Not Showing After Login</p>
            <p className="text-white/50 text-sm leading-relaxed">
              If you have multiple policies on different mobile numbers, only policies linked to
              the registered number will appear. Use the 'Link Policy' option to add policies
              from other numbers. You may need to update those policies' mobile numbers to match
              your current number at the branch.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Premium Paid but Status Shows Lapsed</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Online payments can take 1-3 working days to reflect on the LIC system. If the
              status doesn't update within a week, contact the LIC branch with your payment
              receipt. For payments made through agents, confirm with the agent that the payment
              was deposited to LIC and ask for the deposit number.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Forgotten Login Credentials</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Use the 'Forgot Password' option on the login page. LIC will send a reset link to
              your registered email. If you've also forgotten your User ID, click 'Forgot User
              ID' and verify using your policy number and registered mobile number.
            </p>
          </div>
        </div>
      </section>

      {/* --- Keep Updated --- */}
      <section id="keep-updated" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Keep Your Policy Details Updated</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Outdated policy details can cause problems during claims, maturity, and premium
          payments. Here are the key details you should keep current with LIC.
        </p>
        <div className="space-y-2 mb-4">
          {[
            {
              title: "Mobile Number & Email",
              desc: "Essential for receiving premium reminders, OTPs, and important policy communications. Update by visiting your LIC branch with Aadhaar or by calling the helpline.",
            },
            {
              title: "Nominee Details",
              desc: "Update your nominee after major life events like marriage, birth of a child, or death of the existing nominee. This ensures smooth claim settlement.",
            },
            {
              title: "Address",
              desc: "Keep your correspondence address current so you receive policy bonds, premium notices, and maturity intimation letters. Submit Form 3756 at your branch.",
            },
            {
              title: "PAN and Aadhaar Linking",
              desc: "LIC requires PAN for policies with annual premium above Rs 50,000. Aadhaar linking helps with eKYC and faster claim processing. Both can be updated online.",
            },
            {
              title: "Bank Account (NEFT Mandate)",
              desc: "Register your current bank account with LIC for direct credit of maturity, survival benefit, and claim amounts. Submit a cancelled cheque at your branch.",
            },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4">
              <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="panel-inner p-5 text-center">
          <p className="text-white/60 text-sm mb-3">
            Track all your LIC policies and their status in one dashboard
          </p>
          <Link
            to="/policy-tracker"
            className="text-signal text-sm font-semibold hover:underline no-underline"
          >
            Open Policy Tracker &rarr;
          </Link>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
