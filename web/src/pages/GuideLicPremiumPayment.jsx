import { Link } from "react-router-dom";
import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "Can I pay LIC premium online without registering on the LIC portal?",
    a: "Yes. LIC allows guest payments through the 'Pay Direct' option on licindia.in. You only need your policy number, date of birth, and email ID. However, registering gives you access to premium history, receipts, and other policy services.",
  },
  {
    q: "How do I download my LIC premium payment receipt?",
    a: "After a successful online payment, a receipt is generated instantly. You can download it from the payment confirmation screen. If you missed it, log in to your LIC customer portal, go to Policy Info > Premium Paid Statement, and download past receipts in PDF format.",
  },
  {
    q: "What should I do if my LIC premium payment failed but money was deducted?",
    a: "If money was debited but the payment did not reflect on LIC's system, wait 3-5 working days for an automatic refund. If the refund doesn't appear, raise a complaint on the LIC portal under 'Grievance Redressal' with your transaction reference number and bank statement screenshot.",
  },
  {
    q: "Is there any extra charge for paying LIC premium online?",
    a: "No. LIC does not charge any convenience fee for online premium payments through its website, app, or UPI. However, payments made through Common Service Centres (CSCs) may attract a nominal service charge of around Rs 20.",
  },
  {
    q: "Does LIC premium include GST? Can I claim it?",
    a: "Yes, LIC premiums include GST at 18% on the risk portion and 4.5% on the balance. The GST amount is shown on your premium receipt. Salaried individuals can claim the full premium (including GST) under Section 80C, up to the Rs 1.5 lakh limit.",
  },
  {
    q: "Can I pay LIC premium for someone else's policy?",
    a: "Yes. LIC's online payment system only requires the policy number and basic details. You can pay from any bank account or UPI ID regardless of whose name the policy is in. The payment will be credited to the correct policy.",
  },
];

const TOC = [
  { id: "why-pay-online", label: "Why Pay Premium Online" },
  { id: "method-lic-website", label: "Method 1: LIC Official Website" },
  { id: "method-lic-app", label: "Method 2: LIC Customer App (ANANDA)" },
  { id: "method-upi-wallets", label: "Method 3: PayTM, PhonePe, Google Pay" },
  { id: "method-net-banking", label: "Method 4: Net Banking / NEFT" },
  { id: "method-csc", label: "Method 5: Common Service Centres" },
  { id: "payment-modes-charges", label: "Payment Modes & Charges" },
  { id: "grace-period", label: "Grace Period Rules" },
  { id: "troubleshooting", label: "Troubleshooting Common Issues" },
  { id: "tips-timely-payment", label: "Tips for Timely Payment" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-policy-status-check", title: "How to Check LIC Policy Status Online" },
  { path: "/guides/lic-surrender-value", title: "LIC Surrender Value Guide" },
];

const RELATED_TOOLS = [
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/premium-calendar", label: "Premium Calendar" },
  { path: "/policy-tracker", label: "Policy Tracker" },
];

export default function GuideLicPremiumPayment() {
  return (
    <GuideLayout
      tag="How-To Guide"
      title="How to Pay LIC Premium Online: Complete Guide 2026"
      subtitle="Step-by-step instructions for every online payment method available to LIC policyholders in India."
      publishDate="Oct 2026"
      readTime="10 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      {/* --- Why Pay Online --- */}
      <section id="why-pay-online" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Pay Premium Online</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Paying your LIC premium online is the fastest, safest, and most convenient way to keep
          your policies in force. Gone are the days of visiting LIC branch offices, standing in
          queues, or depending on your agent to deposit cheques on time. With digital payment
          options, you can pay from anywhere, at any time, and receive instant confirmation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="panel-inner p-4 text-center">
            <p className="text-signal text-2xl font-bold mb-1">24/7</p>
            <p className="text-white/50 text-xs">Pay anytime, even on holidays and weekends</p>
          </div>
          <div className="panel-inner p-4 text-center">
            <p className="text-signal text-2xl font-bold mb-1">Instant</p>
            <p className="text-white/50 text-xs">Receipt generated immediately after payment</p>
          </div>
          <div className="panel-inner p-4 text-center">
            <p className="text-signal text-2xl font-bold mb-1">Free</p>
            <p className="text-white/50 text-xs">No convenience fee on official LIC channels</p>
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          Online payments also give you a clear digital trail. Every transaction is recorded with a
          reference number, and you can download premium paid statements at any time. This is
          especially useful during income tax filing when you need proof of premium payments for
          Section 80C deductions. You also eliminate the risk of your agent delaying or mishandling
          your premium payment.
        </p>
      </section>

      {/* --- Method 1: LIC Website --- */}
      <section id="method-lic-website" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 1: LIC Official Website (licindia.in)</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The LIC customer portal is the most reliable way to pay your premium online. You can
          either register for a full account or use the quick Pay Direct option for one-time payments.
        </p>

        <h3 className="text-sm font-semibold text-white/80 mb-2">Option A: Registered User Login</h3>
        <div className="space-y-2 mb-5">
          {[
            "Visit licindia.in and click 'Customer Login' at the top of the page.",
            "Enter your registered User ID and Password. Complete the CAPTCHA verification.",
            "After logging in, click 'Online Premium Payment' from the left menu or dashboard.",
            "Select the policy you want to pay for. If you have multiple policies, each will be listed with its premium amount and due date.",
            "Choose your payment mode: Credit Card, Debit Card, Net Banking, or UPI. Enter the required payment details.",
            "Verify the premium amount (including GST) and click 'Pay'. You will be redirected to the payment gateway.",
            "After successful payment, download or print the receipt. A confirmation SMS and email will also be sent.",
          ].map((step, i) => (
            <div key={i} className="panel-inner p-3 flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-signal/10 text-signal text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-white/60 text-sm">{step}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-semibold text-white/80 mb-2">Option B: Pay Direct (No Registration)</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          If you don't want to create an account, LIC offers a quick payment option. On the
          licindia.in homepage, click 'Pay Premium Online' and then select 'Pay Direct'. Enter your
          policy number, date of birth, and email address. The system will fetch your policy details
          and display the premium due. Proceed with payment using any supported mode. This is ideal
          for first-time users or those paying on behalf of a family member.
        </p>
        <div className="panel p-4 border-l-4 border-l-signal mb-4">
          <p className="text-white/60 text-sm">
            <span className="text-signal font-semibold">Tip:</span> We recommend registering on the
            LIC portal even if you use Pay Direct now. A registered account gives you access to
            premium history, bonus details, loan statements, and nominee information all in one place.
          </p>
        </div>
      </section>

      {/* --- Method 2: LIC App --- */}
      <section id="method-lic-app" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 2: LIC Customer App (ANANDA)</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC's official mobile app, called My LIC (previously ANANDA), is available on both
          Android (Google Play) and iOS (App Store). It offers a streamlined mobile experience for
          premium payments and policy management.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Download the 'My LIC' app from Google Play Store or Apple App Store. Look for the official LIC of India developer listing.",
            "Register using your mobile number linked to your LIC policies. You will receive an OTP for verification.",
            "After verification, your policies will be automatically linked to the app. You can also manually add policies using the policy number.",
            "Tap on 'Pay Premium' from the home screen. Select the policy and review the premium amount.",
            "Choose your payment method (UPI, Debit Card, Credit Card, or Net Banking) and complete the transaction.",
            "The payment receipt is saved in the app and can be shared or downloaded as PDF.",
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
          The app also sends push notifications before your premium due date, which helps you avoid
          lapsing. You can enable auto-reminders in the app settings. For users who prefer mobile
          banking, the app integrates well with UPI apps already installed on your phone.
        </p>
      </section>

      {/* --- Method 3: UPI / Wallets --- */}
      <section id="method-upi-wallets" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 3: PayTM, PhonePe, Google Pay</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Major UPI and wallet apps in India support LIC premium payments directly. This is one of
          the most popular methods because most people already have these apps installed and linked
          to their bank accounts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">PayTM</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Open PayTM and go to 'Insurance' under the Bills & Recharges section. Select 'LIC of
              India', enter your policy number and date of birth, and the premium amount will be
              fetched automatically. Pay via PayTM wallet, UPI, or linked bank account.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">PhonePe</p>
            <p className="text-white/50 text-xs leading-relaxed">
              In PhonePe, tap 'Insurance' from the home screen. Select LIC as the provider, enter
              your policy number and DOB. The app will display the due amount. Pay using UPI or
              your PhonePe wallet. Cashback offers are occasionally available.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Google Pay</p>
            <p className="text-white/50 text-xs leading-relaxed">
              Open Google Pay and navigate to 'Bill Payments'. Search for 'LIC' and select 'Life
              Insurance Corporation of India'. Enter your policy number and date of birth. Confirm
              the premium amount and pay directly from your linked bank account via UPI.
            </p>
          </div>
        </div>

        <div className="panel p-4 border-l-4 border-l-warn mb-4">
          <p className="text-white/60 text-sm">
            <span className="text-warn font-semibold">Note:</span> When paying through third-party
            apps, always verify that the amount shown matches your actual premium due (check on
            licindia.in if unsure). Also ensure the payment is marked as 'LIC of India' and not a
            third-party insurance aggregator. Keep the UPI transaction ID for your records.
          </p>
        </div>
      </section>

      {/* --- Method 4: Net Banking / NEFT --- */}
      <section id="method-net-banking" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 4: Net Banking / NEFT</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Most Indian banks provide a direct LIC premium payment option within their internet
          banking portals. This method is convenient if you prefer managing all payments from your
          bank's dashboard.
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Log in to your bank's internet banking portal (SBI, HDFC, ICICI, PNB, etc.).",
            "Navigate to 'Bill Payments' or 'Insurance' section. Most banks list LIC under insurance billers.",
            "Select 'LIC of India' as the biller and enter your policy number.",
            "The system will fetch your premium details. Verify the amount and due date.",
            "Confirm the payment. The debit will happen from your bank account immediately.",
            "Save the transaction receipt. The payment reflects on LIC's system within 1-2 working days.",
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
          For NEFT/RTGS payments, you would need LIC's bank account details which are available on
          the premium notice or from your branch. However, this method is not recommended for
          regular premium payments as matching the payment to your policy may take time. Direct
          biller payment through net banking is faster and more reliable.
        </p>
      </section>

      {/* --- Method 5: CSC --- */}
      <section id="method-csc" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Method 5: Common Service Centres (CSCs)</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Common Service Centres, operated under the Digital India programme, are available across
          India, especially in rural and semi-urban areas. If you are not comfortable with online
          payments or don't have access to internet banking, you can visit a CSC near you.
        </p>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          The CSC operator will collect your policy number and premium amount, process the payment
          digitally, and provide you with a printed receipt. A nominal service charge of
          approximately Rs 20 may apply. CSCs are particularly useful for senior citizens and those
          in areas with limited banking access.
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          You can find your nearest CSC by visiting the official CSC locator at
          locator.csccloud.in or by calling the CSC helpline. Carry your policy document and a
          valid ID when visiting.
        </p>
      </section>

      {/* --- Payment Modes & Charges --- */}
      <section id="payment-modes-charges" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Payment Modes & Charges</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Here's a comparison of all available payment channels, their processing time, and any
          applicable charges.
        </p>
        <div className="space-y-2">
          {[
            { mode: "LIC Website / App", charge: "Free", time: "Instant", note: "Most reliable method" },
            { mode: "UPI (GPay, PhonePe, PayTM)", charge: "Free", time: "Instant", note: "Convenient for mobile users" },
            { mode: "Credit / Debit Card", charge: "Free", time: "Instant", note: "Via LIC portal or bank" },
            { mode: "Net Banking (Biller)", charge: "Free", time: "1-2 days", note: "Through bank's bill pay" },
            { mode: "NEFT / RTGS", charge: "Bank charges may apply", time: "2-5 days", note: "Not recommended for regular payments" },
            { mode: "Common Service Centre", charge: "~Rs 20", time: "Instant", note: "Ideal for offline users" },
            { mode: "LIC Branch (Cash/Cheque)", charge: "Free", time: "Same day (cash) / 3-5 days (cheque)", note: "Traditional method" },
          ].map((row, i) => (
            <div key={i} className="panel-inner p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              <span className="text-white/80 font-medium">{row.mode}</span>
              <span className={row.charge === "Free" ? "text-good" : "text-warn"}>{row.charge}</span>
              <span className="text-white/50">{row.time}</span>
              <span className="text-white/40 text-xs">{row.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- Grace Period --- */}
      <section id="grace-period" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Grace Period Rules</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC provides a grace period after the premium due date during which you can pay without
          any penalty or lapse. The grace period depends on your premium payment frequency.
          Understanding these timelines is critical to keeping your policy active.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { freq: "Yearly (Annual)", grace: "30 days", note: "From the due date of the premium" },
            { freq: "Half-Yearly", grace: "30 days", note: "From the due date of the premium" },
            { freq: "Quarterly", grace: "15 days", note: "Shorter grace period applies" },
            { freq: "Monthly (SSS/ECS)", grace: "15 days", note: "Auto-debit modes included" },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-4">
              <p className="text-white font-semibold text-sm">{item.freq}</p>
              <p className="text-signal text-lg font-bold">{item.grace}</p>
              <p className="text-white/40 text-xs mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          If the premium is not paid within the grace period, the policy lapses. A lapsed policy
          loses its risk cover and bonus accumulation. While lapsed policies can be revived within
          5 years by paying all overdue premiums with interest, it is always better to pay on time
          and avoid the hassle.
        </p>
        <div className="panel p-4 border-l-4 border-l-bad">
          <p className="text-white/60 text-sm">
            <span className="text-bad font-semibold">Important:</span> If the policyholder passes
            away during the grace period and the premium is unpaid, LIC will still honour the death
            claim. The overdue premium will be deducted from the claim amount before settlement.
          </p>
        </div>
      </section>

      {/* --- Troubleshooting --- */}
      <section id="troubleshooting" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Troubleshooting Common Issues</h2>
        <div className="space-y-3">
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Payment Failed but Money Deducted</p>
            <p className="text-white/50 text-sm leading-relaxed">
              This usually happens due to a timeout between your bank and LIC's payment gateway.
              Wait 3-5 working days for the bank to auto-reverse the transaction. If it doesn't
              reverse, contact your bank with the transaction ID. You can also raise a grievance
              on the LIC portal under &apos;Customer Services&apos; &gt; &apos;Grievance Redressal&apos; with a
              screenshot of the bank debit.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Receipt Not Generated After Payment</p>
            <p className="text-white/50 text-sm leading-relaxed">
              If the payment was successful but no receipt appeared, log in to the LIC portal and
              check 'Premium Paid Statement'. The payment should appear within 24 hours. If it
              doesn't show up even after 48 hours, contact LIC at 022-68276827 with your
              transaction details.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">Wrong Policy Number Entered</p>
            <p className="text-white/50 text-sm leading-relaxed">
              If you accidentally paid for the wrong policy, the payment cannot be transferred
              between policies online. You will need to visit your LIC branch with both policy
              documents and the payment receipt to request a reallocation. In some cases, LIC may
              refund the incorrect payment and ask you to repay for the correct policy.
            </p>
          </div>
          <div className="panel-inner p-4">
            <p className="text-white font-semibold text-sm mb-2">LIC Website Not Loading or Timing Out</p>
            <p className="text-white/50 text-sm leading-relaxed">
              The LIC portal experiences heavy traffic on the last few days of the month and at
              quarter-end. Try paying during off-peak hours (early morning or late night). Clear
              your browser cache, or try a different browser. Alternatively, use the LIC mobile app
              or a UPI app as a fallback. Avoid peak traffic on March 31st, the financial year
              deadline.
            </p>
          </div>
        </div>
      </section>

      {/* --- Tips --- */}
      <section id="tips-timely-payment" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Tips for Timely Premium Payment</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          Missing a premium due date can lead to policy lapse, loss of bonus, and loss of life
          cover. Here are some practical tips to ensure you never miss a payment.
        </p>
        <div className="space-y-2 mb-4">
          {[
            {
              title: "Set Up Auto-Debit (ECS/NACH)",
              desc: "Register for auto-debit through your bank so premiums are deducted automatically on the due date. You can set this up at your LIC branch or through the portal.",
            },
            {
              title: "Use Calendar Reminders",
              desc: "Set reminders on your phone 7 days and 1 day before each premium due date. This gives you enough time to arrange funds if needed.",
            },
            {
              title: "Switch to Annual Mode",
              desc: "If possible, switch from monthly/quarterly to annual payment. You pay less overall (LIC offers a rebate for annual mode) and have fewer due dates to track.",
            },
            {
              title: "Keep Your Contact Details Updated",
              desc: "Ensure your mobile number and email are updated on the LIC portal. LIC sends SMS and email reminders before premium due dates.",
            },
            {
              title: "Use InsureKit Premium Calendar",
              desc: "Our free Premium Calendar tool tracks all your policy due dates in one place and sends you timely reminders.",
            },
          ].map((tip, i) => (
            <div key={i} className="panel-inner p-4">
              <p className="text-white font-semibold text-sm mb-1">{tip.title}</p>
              <p className="text-white/50 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
        <div className="panel-inner p-5 text-center">
          <p className="text-white/60 text-sm mb-3">
            Track all your LIC premium due dates in one place
          </p>
          <Link
            to="/premium-calendar"
            className="text-signal text-sm font-semibold hover:underline no-underline"
          >
            Open Premium Calendar Tool &rarr;
          </Link>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
