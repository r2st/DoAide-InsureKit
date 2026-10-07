import GuideLayout from "../components/GuideLayout";
import FAQ from "../components/FAQ";

const FAQ_ITEMS = [
  {
    q: "What is the qualification required to become a LIC agent?",
    a: "Minimum 10th pass for rural areas and 12th pass for urban areas. Age 18+, Indian citizen. No upper age limit. No prior insurance experience needed.",
  },
  {
    q: "How long does it take to become a LIC agent?",
    a: "Typically 4-8 weeks: find a Development Officer (1 week), complete 25-hour training (1-2 weeks), prepare for IC-38 exam (2-3 weeks), pass exam and get license (1-2 weeks).",
  },
  {
    q: "Is there any fee to become a LIC agent?",
    a: "IC-38 exam fee is ₹250-500. Training is free (provided by LIC). IRDAI license fee is ₹250 for 3 years. Total cost under ₹1,000.",
  },
  {
    q: "Can I be a LIC agent part-time?",
    a: "Yes, many LIC agents work part-time alongside other jobs. There are no minimum working hours. You earn commission only when you sell policies.",
  },
  {
    q: "What is the IC-38 exam?",
    a: "IC-38 is the IRDAI pre-licensing exam for insurance agents. It has 50 MCQs, 1 hour duration, 35% passing marks. Topics: insurance basics, LIC products, regulations, and ethics.",
  },
  {
    q: "Can government employees become LIC agents?",
    a: "Government employees cannot be LIC agents as per service rules. However, family members (spouse, children, parents) can become agents.",
  },
  {
    q: "What is the income potential for LIC agents?",
    a: "Ranges widely: ₹1-3L for part-time agents, ₹5-15L for full-time agents, and ₹20L+ for top performers. Renewal commission from existing policies creates growing passive income.",
  },
  {
    q: "How do I renew my LIC agent license?",
    a: "Complete 25 hours of renewal training and pay ₹250 renewal fee before license expiry. License is valid for 3 years and must be renewed to continue selling.",
  },
];

const TOC = [
  { id: "overview", label: "Why Become a LIC Agent?" },
  { id: "eligibility", label: "Eligibility Criteria" },
  { id: "step-by-step", label: "Step-by-Step Process" },
  { id: "training", label: "Training Program" },
  { id: "ic38-exam", label: "IC-38 Exam Details" },
  { id: "license", label: "Getting Your IRDAI License" },
  { id: "first-steps", label: "First Steps After License" },
  { id: "income", label: "Income & Commission Structure" },
  { id: "career-growth", label: "Career Growth Path" },
  { id: "tools", label: "Essential Tools for New Agents" },
];

const RELATED_GUIDES = [
  { path: "/guides/lic-commission-structure", title: "LIC Agent Commission Structure 2026" },
  { path: "/guides/lic-agent-exam-preparation", title: "LIC Agent Exam Preparation Guide" },
  { path: "/guides/best-lic-plans-2026", title: "Best LIC Plans 2026" },
];

const RELATED_TOOLS = [
  { path: "/commission-calculator", label: "Commission Calculator" },
  { path: "/premium-calculator", label: "Premium Calculator" },
  { path: "/dashboard", label: "Agent Dashboard" },
  { path: "/client-reminders", label: "Client Reminders" },
];

export default function GuideHowToBecomeAgent() {
  return (
    <GuideLayout
      tag="Career Guide"
      title="How to Become a LIC Agent in 2026: Complete Guide"
      subtitle="Step-by-step process to become a LIC agent — eligibility, training, IC-38 exam, IRDAI license, and building your insurance career from day one."
      publishDate="Oct 2026"
      readTime="14 min read"
      toc={TOC}
      relatedGuides={RELATED_GUIDES}
      relatedTools={RELATED_TOOLS}
    >
      <section id="overview" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Why Become a LIC Agent?</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          LIC of India is the largest life insurance company in the world by number of policies.
          With over 280 million policyholders and a 65% market share, LIC agents have access to the
          most trusted insurance brand in India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { label: "Flexible hours", desc: "Work on your schedule — full-time or part-time" },
            { label: "Growing income", desc: "Renewal commission builds passive income over years" },
            { label: "Low investment", desc: "Under ₹1,000 total cost to start" },
            { label: "Brand trust", desc: "LIC is the most trusted brand — easier client conversations" },
            { label: "No cap on earnings", desc: "Top agents earn ₹20L+ annually with club bonuses" },
            { label: "Social impact", desc: "Help families secure their financial future" },
          ].map((item) => (
            <div key={item.label} className="panel-inner p-3">
              <div className="text-sm font-medium text-white/70">{item.label}</div>
              <div className="text-xs text-white/40 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="eligibility" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Eligibility Criteria</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 text-white/40 font-medium w-36">Age</td>
                <td className="py-2.5 px-3">18 years or above (no upper limit)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 text-white/40 font-medium">Education</td>
                <td className="py-2.5 px-3">10th pass (rural) / 12th pass (urban)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 text-white/40 font-medium">Nationality</td>
                <td className="py-2.5 px-3">Indian citizen</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 text-white/40 font-medium">Not eligible</td>
                <td className="py-2.5 px-3">Government employees, persons with criminal record, existing agents of other insurers (need NOC)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3 text-white/40 font-medium">Documents</td>
                <td className="py-2.5 px-3">Aadhaar, PAN, 10th/12th marksheet, 2 photos, bank passbook</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="step-by-step" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Step-by-Step Process</h2>
        <div className="space-y-3">
          {[
            {
              step: 1,
              title: "Find a LIC Development Officer",
              detail: "Visit your nearest LIC branch and ask for a Development Officer (DO). The DO will sponsor your application and guide the process. You can also search online for \"LIC agent recruitment\" in your city.",
              time: "1-3 days",
            },
            {
              step: 2,
              title: "Submit Application & Documents",
              detail: "Fill out the agent application form provided by the DO. Attach Aadhaar, PAN, education certificates, passport photos, and bank details. The DO submits your file to the branch.",
              time: "1-2 days",
            },
            {
              step: 3,
              title: "Complete 25-Hour Training",
              detail: "Attend the mandatory 25-hour pre-licensing training at the LIC branch or a designated center. Covers insurance fundamentals, LIC products, sales techniques, and IRDAI regulations. Training is free.",
              time: "1-2 weeks",
            },
            {
              step: 4,
              title: "Register for IC-38 Exam",
              detail: "Register on the IRDAI exam portal or through your DO. Pay the exam fee (₹250-500). Choose your exam date and center. The exam can be taken online at designated centers.",
              time: "1-2 days",
            },
            {
              step: 5,
              title: "Pass the IC-38 Exam",
              detail: "50 MCQs in 60 minutes. Passing marks: 35% (18/50). Available in Hindi, English, and regional languages. Multiple attempts allowed. Study the training material provided by LIC.",
              time: "1 day",
            },
            {
              step: 6,
              title: "Get IRDAI License",
              detail: "After passing, LIC applies for your IRDAI license. Pay ₹250 license fee. License is valid for 3 years. You receive your agent code and can start selling policies.",
              time: "1-2 weeks",
            },
          ].map((item) => (
            <div key={item.step} className="panel p-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-signal/15 flex items-center justify-center text-signal font-bold text-sm shrink-0">
                {item.step}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/30">{item.time}</span>
                </div>
                <p className="text-xs text-white/40 mt-1 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Training Program</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          The 25-hour pre-licensing training covers everything you need to know before the IC-38 exam
          and your career as an agent:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Module</th>
                <th className="text-right py-2 px-3 text-white/40 font-medium text-xs uppercase">Hours</th>
                <th className="text-left py-2 px-3 text-white/40 font-medium text-xs uppercase">Topics</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Insurance Basics</td>
                <td className="py-2.5 px-3 text-right">8</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Principles, types, risk management</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">LIC Products</td>
                <td className="py-2.5 px-3 text-right">8</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Plan features, benefits, eligibility</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">IRDAI Regulations</td>
                <td className="py-2.5 px-3 text-right">5</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Agent duties, compliance, anti-fraud</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2.5 px-3">Sales &amp; Ethics</td>
                <td className="py-2.5 px-3 text-right">4</td>
                <td className="py-2.5 px-3 text-xs text-white/40">Client needs analysis, ethical selling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="ic38-exam" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">IC-38 Exam Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            { label: "Format", value: "50 MCQs, Computer-Based Test" },
            { label: "Duration", value: "60 minutes" },
            { label: "Passing Marks", value: "35% (18 out of 50)" },
            { label: "Exam Fee", value: "₹250-500" },
            { label: "Languages", value: "Hindi, English, 11 regional" },
            { label: "Attempts", value: "Unlimited (with re-registration)" },
          ].map((item) => (
            <div key={item.label} className="panel-inner p-3 flex items-center justify-between">
              <span className="text-xs text-white/40">{item.label}</span>
              <span className="text-sm font-medium text-white/70">{item.value}</span>
            </div>
          ))}
        </div>
        <h3 className="text-base font-medium text-white/80 mb-2 mt-4">Exam Preparation Tips</h3>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-white/50 ml-2">
          <li>Focus on the training material provided by LIC — 80% of questions come from it</li>
          <li>Practice mock tests online — IRDAI publishes sample question papers</li>
          <li>Understand insurance basics thoroughly — they carry the most weightage (40%)</li>
          <li>Memorise key LIC plan features, especially top-selling plans</li>
          <li>Read about IRDAI regulations and agent duties — common exam topics</li>
          <li>Attempt all questions — there is no negative marking</li>
        </ul>
      </section>

      <section id="license" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Getting Your IRDAI License</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          After passing the IC-38 exam, your Development Officer processes the IRDAI license
          application. The license is typically issued within 1-2 weeks. Key details:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-white/50 ml-2">
          <li>License fee: ₹250 for 3 years</li>
          <li>Valid for: 3 years from date of issue</li>
          <li>Renewal: Complete 25 hours of training + ₹250 fee before expiry</li>
          <li>You receive a unique agent code (6-8 digits) from LIC</li>
          <li>License is specific to LIC — you cannot sell other companies&apos; policies</li>
        </ul>
      </section>

      <section id="first-steps" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">First Steps After Getting Your License</h2>
        <div className="space-y-2">
          {[
            { step: "Start with your circle", detail: "Family, friends, and colleagues are the easiest first clients. They trust you already." },
            { step: "Learn 5 plans deeply", detail: "Master Jeevan Anand (715/815), Tech Term (854), Jeevan Labh (736), Money Back (720), Jeevan Umang (745). These cover most client needs." },
            { step: "Use InsureKit calculators", detail: "Show clients exact premium quotes and maturity projections. Professional presentations close more policies." },
            { step: "Get a WhatsApp Business number", detail: "Create a professional presence. Use InsureKit's Marketing Generator for ready-made templates." },
            { step: "Track everything", detail: "Use InsureKit's Policy Tracker and Client Reminders from day one. Organized agents grow faster." },
            { step: "Set monthly targets", detail: "Start with 2 policies/month. Increase gradually. Consistency beats occasional large sales." },
          ].map((item, i) => (
            <div key={i} className="panel-inner p-3">
              <div className="text-sm font-medium text-white/70">{item.step}</div>
              <div className="text-xs text-white/40 mt-0.5">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="income" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Income &amp; Commission Structure</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          LIC agents earn through three channels: First Year Commission (FYC), Renewal Commission,
          and Bonus Commission for high performers. See our{" "}
          <a href="/guides/lic-commission-structure" className="text-signal hover:underline">
            detailed commission guide
          </a>{" "}
          for full rates and examples.
        </p>
        <div className="panel-inner p-4">
          <div className="text-sm font-medium text-white/70 mb-2">Quick Commission Summary</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-[10px] text-white/30 uppercase">First Year</div>
              <div className="text-lg font-bold text-signal">10-40%</div>
            </div>
            <div>
              <div className="text-[10px] text-white/30 uppercase">Renewal</div>
              <div className="text-lg font-bold text-signal">7.5%</div>
            </div>
            <div>
              <div className="text-[10px] text-white/30 uppercase">Club Bonus</div>
              <div className="text-lg font-bold text-signal">20-40%</div>
            </div>
          </div>
        </div>
      </section>

      <section id="career-growth" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Career Growth Path</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          A LIC agent career offers clear growth milestones:
        </p>
        <div className="space-y-3">
          {[
            { level: "New Agent", target: "Build base — 24 policies/year", income: "₹1-3L" },
            { level: "Star Club Agent", target: "₹3L+ FYC — regional recognition", income: "₹3-6L" },
            { level: "MDRT Agent", target: "₹6L+ FYC — international recognition", income: "₹7-15L" },
            { level: "Development Officer", target: "Recruit & train agents — LIC employee benefits", income: "₹6-15L salary" },
            { level: "COT/TOT Agent", target: "₹12L+ FYC — elite agent status", income: "₹20L+" },
          ].map((item) => (
            <div key={item.level} className="panel-inner p-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-medium text-white/70">{item.level}</div>
                <div className="text-xs text-white/40">{item.target}</div>
              </div>
              <div className="text-sm font-bold text-signal shrink-0">{item.income}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">Essential Tools for New Agents</h2>
        <p className="text-white/60 text-sm leading-relaxed mb-3">
          Every successful agent needs these tools. InsureKit provides all of them for free:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { tool: "Premium Calculator", path: "/premium-calculator", desc: "Show exact premium for any plan" },
            { tool: "Maturity Calculator", path: "/maturity-calculator", desc: "Project returns with bonus" },
            { tool: "Commission Calculator", path: "/commission-calculator", desc: "Know your earnings per policy" },
            { tool: "Plan Comparison", path: "/plan-comparison", desc: "Compare 2-3 plans side by side" },
            { tool: "Client Reminders", path: "/client-reminders", desc: "Track birthdays & anniversaries" },
            { tool: "Policy Tracker", path: "/policy-tracker", desc: "Manage all client policies" },
            { tool: "Receipt Generator", path: "/receipt-generator", desc: "Create premium receipts" },
            { tool: "Marketing Generator", path: "/marketing", desc: "WhatsApp templates for promotion" },
          ].map((item) => (
            <a key={item.tool} href={item.path} className="panel-inner p-3 no-underline hover:border-signal/30 transition-all block">
              <div className="text-sm font-medium text-signal">{item.tool}</div>
              <div className="text-xs text-white/40">{item.desc}</div>
            </a>
          ))}
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
