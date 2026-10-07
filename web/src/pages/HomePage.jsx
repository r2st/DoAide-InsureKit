import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

const POPULAR_TOOLS = [
  { path: "/dashboard", name: "Agent Dashboard", icon: "📋" },
  { path: "/premium-calculator", name: "Premium Calculator", icon: "₹" },
  { path: "/premium-table", name: "Premium Table", icon: "📊" },
  { path: "/commission-calculator", name: "Commission Calculator", icon: "💰" },
  { path: "/compare-plans", name: "Compare Plans", icon: "⚖️" },
];

const TOOL_CATEGORIES = [
  {
    title: "Calculators",
    description: "Essential tools for premium, maturity, and commission calculations",
    tools: [
      {
        path: "/premium-calculator",
        name: "Premium Calculator",
        desc: "Calculate exact premium for any LIC plan with GST, SA rebate & mode rebate",
        icon: "₹",
      },
      {
        path: "/premium-table",
        name: "Age-Wise Premium Table",
        desc: "Full premium grid — see rates for every age and term combination at a glance",
        icon: "📊",
      },
      {
        path: "/maturity-calculator",
        name: "Maturity Calculator",
        desc: "Estimate maturity value with SRB bonus, FAB, and IRR returns",
        icon: "📈",
      },
      {
        path: "/commission-calculator",
        name: "Commission Calculator",
        desc: "Calculate first year, renewal, and total agent commission",
        icon: "💰",
      },
      {
        path: "/tax-calculator",
        name: "Tax Benefit Calculator",
        desc: "Section 80C + 80D deductions & 10(10D) maturity exemption — old vs new regime",
        icon: "📋",
      },
      {
        path: "/revival-calculator",
        name: "Revival Calculator",
        desc: "Estimate amount needed to revive a lapsed policy — arrears + interest",
        icon: "🔄",
      },
      {
        path: "/surrender-calculator",
        name: "Surrender Value Calculator",
        desc: "Calculate GSV & SSV — know what you'll get before surrendering",
        icon: "📉",
      },
      {
        path: "/loan-calculator",
        name: "Loan Against Policy",
        desc: "Calculate max loan amount, interest, and compare with bank rates",
        icon: "🏦",
      },
      {
        path: "/claim-estimator",
        name: "Claim Estimator",
        desc: "Estimate maturity or death claim with 3 bonus projection scenarios",
        icon: "📝",
      },
      {
        path: "/premium-calendar",
        name: "Premium Calendar",
        desc: "See all upcoming premium due dates — share via WhatsApp",
        icon: "📅",
      },
      {
        path: "/sip-vs-insurance",
        name: "SIP vs Insurance",
        desc: "Compare endowment returns vs term + SIP strategy — show the wealth gap",
        icon: "📊",
      },
    ],
  },
  {
    title: "Client Tools",
    description: "Manage clients, track policies, and share plan comparisons",
    tools: [
      {
        path: "/dashboard",
        name: "Agent Dashboard",
        desc: "Your portfolio at a glance — track policies, clients, renewals, and performance",
        icon: "📋",
      },
      {
        path: "/plan-comparison",
        name: "Plan Comparison",
        desc: "Compare 2-3 LIC plans side by side — premium, maturity, IRR, features",
        icon: "⚖️",
      },
      {
        path: "/compare-plans",
        name: "Compare Any Plans",
        desc: "Compare any two plans with different age, SA, and term for each",
        icon: "🔍",
      },
      {
        path: "/plan-recommender",
        name: "Plan Recommender",
        desc: "Quiz-style tool — answer 3 questions, get the best LIC plan for you",
        icon: "🎯",
      },
      {
        path: "/client-reminders",
        name: "Birthday Reminders",
        desc: "Track client birthdays & anniversaries — send WhatsApp greetings",
        icon: "🎂",
      },
      {
        path: "/policy-tracker",
        name: "Policy Tracker",
        desc: "Track client policies, renewal dates, and premium due reminders",
        icon: "📄",
      },
      {
        path: "/maturity-tracker",
        name: "Maturity Tracker",
        desc: "Track policies nearing maturity — countdown, estimated payouts",
        icon: "⏰",
      },
    ],
  },
  {
    title: "Resources",
    description: "Bonus history, marketing templates, guides, and more",
    tools: [
      {
        path: "/bonus-history",
        name: "Bonus History",
        desc: "Historical SRB rates from 2015-2025 — track bonus trends by plan",
        icon: "📊",
      },
      {
        path: "/marketing",
        name: "Marketing Generator",
        desc: "Ready-made WhatsApp & social media templates for LIC agents",
        icon: "📣",
      },
      {
        path: "/receipt-generator",
        name: "Receipt Generator",
        desc: "Generate printable premium payment receipts for your records",
        icon: "🧾",
      },
      {
        path: "/plans",
        name: "All LIC Plans",
        desc: "Browse 30+ LIC plans with details, eligibility, bonus rates & premium info",
        icon: "📑",
      },
      {
        path: "/guides",
        name: "Guides & Articles",
        desc: "In-depth guides on best plans, bonus history, policy revival, and more",
        icon: "📖",
      },
      {
        path: "/claim-settlement-ratio",
        name: "Claim Settlement Ratio",
        desc: "Compare IRDAI claim settlement ratios for 20+ life insurance companies",
        icon: "📊",
      },
      {
        path: "/best-lic-agent-tools-2026",
        name: "Best LIC Agent Tools",
        desc: "Compare top LIC agent tools — InsureKit vs competitors",
        icon: "🏆",
      },
    ],
  },
];

const FAQ_ITEMS = [
  { q: "Is InsureKit free to use?", a: "Yes, completely free! No login, no registration, no hidden charges. All tools work offline once loaded. InsureKit is made by DoAide to help LIC agents serve their clients better." },
  { q: "Is my data safe?", a: "Absolutely. InsureKit runs entirely in your browser. No data is sent to any server. Policy tracker and client reminder data is stored in your browser's local storage — only you can access it." },
  { q: "Are the calculations accurate?", a: "Calculations are based on LIC's published premium rates, bonus rates, and commission structures. However, always verify with LIC before making financial decisions. Actual values may vary slightly." },
  { q: "Which LIC plans are supported?", a: "InsureKit supports 24+ LIC plans including Jeevan Anand (715/815), New Endowment (714/814), Jeevan Labh (736), Jeevan Lakshya (733/833), Jeevan Umang (745), Money Back (720/721), Tech Term (854), Jeevan Amar (855), and more." },
  { q: "Can I use this on my phone?", a: "Yes! InsureKit is fully mobile-friendly. Use it on your phone to show clients premium quotes, maturity estimates, and plan comparisons on the go." },
  { q: "How do I share results with clients?", a: "Every calculator has a 'Share on WhatsApp' button that creates a pre-formatted message with the calculation results. You can also use 'Print/PDF' to save or print results." },
];

export default function HomePage() {
  return (
    <div className="animate-fade-up">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Free LIC Agent Tools
        </h1>
        <p className="text-white/40 text-sm sm:text-base max-w-xl mx-auto">
          Premium calculators, maturity estimates, commission tools, and client management — everything an LIC agent needs, no login required
        </p>
      </div>

      <section className="mb-10">
        <div className="mb-3">
          <h2 className="text-sm font-medium text-signal uppercase tracking-wide">Popular Tools</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TOOLS.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-signal/10 hover:bg-signal/20 transition-colors no-underline group"
            >
              <span className="text-base">{tool.icon}</span>
              <span className="text-sm font-medium text-white group-hover:text-signal transition-colors">{tool.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {TOOL_CATEGORIES.map((category) => (
        <section key={category.title} className="mb-10">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-white">{category.title}</h2>
            <p className="text-xs text-white/30">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.tools.map((tool) => (
              <Link
                key={tool.path}
                to={tool.path}
                className="panel p-4 hover:border-signal/30 transition-all group no-underline"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-signal/10 flex items-center justify-center text-lg shrink-0 group-hover:bg-signal/20 transition-colors">
                    {tool.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white group-hover:text-signal transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-xs text-white/35 mt-0.5 leading-relaxed">
                      {tool.desc}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <FAQ items={FAQ_ITEMS} />
    </div>
  );
}
