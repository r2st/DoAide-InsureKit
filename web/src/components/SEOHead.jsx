import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://insure.doaide.com";
const SITE_NAME = "DoAide InsureKit";

const META = {
  "/": {
    title: "DoAide InsureKit — Free LIC Insurance Calculators & Agent Tools",
    description: "Free LIC premium calculator, maturity calculator, plan comparison, commission calculator, tax benefit tools, revival & surrender calculators for LIC agents and policyholders.",
    keywords: "LIC calculator, LIC premium calculator, LIC agent tools, LIC maturity calculator, LIC commission calculator, insurance calculator India, free LIC tools",
    faq: [
      { q: "Is InsureKit free to use?", a: "Yes, completely free. No login, no registration, no hidden charges." },
      { q: "Are the calculations accurate?", a: "Calculations are based on LIC's published premium rates and bonus rates. Always verify with LIC before making financial decisions." },
      { q: "Which LIC plans are supported?", a: "InsureKit supports 24+ LIC plans including Jeevan Anand, New Endowment, Jeevan Labh, Jeevan Lakshya, Tech Term, and more." },
    ],
  },
  "/premium-calculator": {
    title: "LIC Premium Calculator 2025 — Calculate Exact Premium with GST | DoAide InsureKit",
    description: "Free LIC premium calculator. Select any LIC plan, enter age, sum assured, term — get exact premium with GST. Jeevan Anand, Jeevan Labh, Tech Term & more.",
    keywords: "LIC premium calculator, LIC premium rate, Jeevan Anand premium, LIC plan premium, LIC GST calculator",
    faq: [
      { q: "How is LIC premium calculated?", a: "LIC premium is calculated based on the tabular rate per ₹1000 of Sum Assured, which varies by plan, age, and term. SA rebate and mode rebate are applied, then GST is added." },
      { q: "What is the GST rate on LIC premium?", a: "First year GST is 4.5% and renewal year GST is 2.25% of the premium amount." },
      { q: "How can I reduce my LIC premium?", a: "Choose yearly payment mode for 2% rebate, opt for higher sum assured to get SA rebate (₹2.50/1000 for SA ≥5L, ₹4/1000 for SA ≥10L), and consider limited premium paying terms." },
    ],
  },
  "/maturity-calculator": {
    title: "LIC Maturity Value Calculator 2025 — Bonus, FAB & IRR | DoAide InsureKit",
    description: "Calculate LIC policy maturity value with reversionary bonus, FAB, and IRR. Compare returns across Jeevan Anand, Jeevan Labh, New Endowment plans.",
    keywords: "LIC maturity calculator, LIC maturity value, LIC bonus rate, LIC IRR, LIC returns calculator",
    faq: [
      { q: "How is LIC maturity value calculated?", a: "Maturity value = Sum Assured + Total SRB (Simple Reversionary Bonus) + FAB (Final Additional Bonus). Some plans have maturity multipliers." },
      { q: "What is a good IRR for LIC plans?", a: "Most LIC endowment plans deliver an IRR of 4-6%. Compare this with bank FD rates (6-7%) and PPF (7.1%) to evaluate returns." },
    ],
  },
  "/plan-comparison": {
    title: "LIC Plan Comparison 2025 — Compare Premium, Maturity & Benefits | DoAide InsureKit",
    description: "Compare LIC plans side by side — premium, maturity value, death benefit, features. Find the best LIC policy for your needs.",
    keywords: "LIC plan comparison, best LIC plan, compare LIC policies, LIC plan features, which LIC plan is best",
    faq: [
      { q: "Which is the best LIC plan in 2025?", a: "It depends on your needs. Jeevan Anand (715/815) is best for savings + whole life cover, Tech Term (854) for pure protection, Jeevan Labh (736) for limited premium payment." },
    ],
  },
  "/commission-calculator": {
    title: "LIC Agent Commission Calculator 2025 — FY, Renewal & Total | DoAide InsureKit",
    description: "Calculate LIC agent commission — first year, renewal, and total commission over policy term. Updated with Oct 2024 commission rates.",
    keywords: "LIC agent commission, LIC commission calculator, LIC FY commission, LIC renewal commission, LIC agent income",
    faq: [
      { q: "What is the first year commission rate for LIC agents?", a: "FY commission depends on Premium Paying Term: 25% for PPT 15+, 20% for PPT 12-14, 15% for PPT 8-11, 10% for PPT 5-7. Term plans get 28%." },
    ],
  },
  "/tax-calculator": {
    title: "LIC Tax Benefit Calculator — Section 80C, 10(10D) | DoAide InsureKit",
    description: "Calculate tax benefits on LIC premiums under Section 80C. Check maturity exemption under 10(10D). Compare old vs new tax regime.",
    keywords: "LIC tax benefit, Section 80C LIC, LIC 10(10D), LIC tax exemption, insurance tax saving",
    faq: [
      { q: "How much tax can I save with LIC?", a: "Under Section 80C, you can save up to ₹46,800/year in tax (30% slab × ₹1.5L deduction). The actual saving depends on your income tax slab." },
    ],
  },
  "/policy-tracker": {
    title: "LIC Policy Tracker — Track Renewals & Premium Reminders | DoAide InsureKit",
    description: "Free policy tracker for LIC agents. Add client policies, track renewal dates, get premium reminders. No login required — works offline.",
    keywords: "LIC policy tracker, LIC renewal reminder, LIC premium reminder, policy management, LIC agent tool",
    faq: [
      { q: "Is the policy tracker free?", a: "Yes, completely free with no login required. Data is stored locally in your browser for privacy." },
    ],
  },
  "/bonus-history": {
    title: "LIC Bonus History 2015-2025 — SRB Rates by Plan & Year | DoAide InsureKit",
    description: "View historical LIC bonus rates (SRB) from 2015 to 2025. Compare bonus trends across Jeevan Anand, Jeevan Labh, New Endowment and other plans.",
    keywords: "LIC bonus rate, LIC SRB rate, LIC bonus history, LIC reversionary bonus, LIC bonus 2025",
    faq: [
      { q: "What is the current LIC bonus rate?", a: "Bonus rates vary by plan. For 2024-25: Jeevan Anand ₹45-46/1000, New Endowment ₹42-43/1000, Jeevan Umang ₹50/1000, Amritbaal ₹58/1000." },
    ],
  },
  "/marketing": {
    title: "LIC Marketing Content Generator — WhatsApp & Social Media Templates | DoAide InsureKit",
    description: "Ready-made WhatsApp messages and social media post templates for LIC agents. Generate professional marketing content for any LIC plan.",
    keywords: "LIC marketing, LIC WhatsApp message, LIC agent marketing, insurance social media, LIC promotion",
    faq: [
      { q: "Are these templates compliant with IRDAI guidelines?", a: "Templates are designed to be informational. Always verify compliance with current IRDAI advertising guidelines before use." },
    ],
  },
  "/client-reminders": {
    title: "Client Birthday & Anniversary Reminders for LIC Agents | DoAide InsureKit",
    description: "Track client birthdays and anniversaries. Send WhatsApp greetings directly. Free tool for LIC agents to build stronger client relationships.",
    keywords: "LIC client management, birthday reminder, anniversary reminder, LIC agent CRM, client relationship",
    faq: [
      { q: "Why should LIC agents track client birthdays?", a: "Personal greetings build rapport, increase client retention, and generate referrals. Successful agents consistently maintain personal connections." },
    ],
  },
  "/receipt-generator": {
    title: "LIC Premium Receipt Generator — Printable PDF Receipt | DoAide InsureKit",
    description: "Generate printable premium payment receipts for LIC policies. Fill in policy details, agent info, and print or save as PDF. Unofficial reference receipt.",
    keywords: "LIC premium receipt, LIC payment receipt, premium receipt generator, LIC receipt PDF",
    faq: [
      { q: "Is this an official LIC receipt?", a: "No, this is an unofficial reference receipt for record-keeping. For official receipts, contact LIC or use their portal." },
    ],
  },
  "/revival-calculator": {
    title: "LIC Revival Calculator 2025 — Lapsed Policy Revival Amount | DoAide InsureKit",
    description: "Calculate the amount needed to revive a lapsed LIC policy. Includes arrears, interest, GST, and medical requirement check. Free revival quote tool.",
    keywords: "LIC revival calculator, LIC lapsed policy, policy revival amount, LIC revival interest, revive LIC policy",
    faq: [
      { q: "How do I revive a lapsed LIC policy?", a: "Pay all arrears with interest (approx 9.25% p.a.) plus GST. Revival within 2 years usually doesn't need medical tests. Contact your LIC branch with the revival amount." },
      { q: "What is the time limit for revival?", a: "LIC allows revival within 5 years from the date of first unpaid premium. Beyond that, the policy cannot be revived." },
      { q: "Is medical examination required for revival?", a: "For policies lapsed more than 2 years, medical examination is generally required. For shorter lapse periods, revival without medical is usually possible." },
    ],
  },
  "/surrender-calculator": {
    title: "LIC Surrender Value Calculator 2025 — GSV & SSV | DoAide InsureKit",
    description: "Calculate LIC policy surrender value — both Guaranteed Surrender Value (GSV) and Special Surrender Value (SSV). Know what you'll receive before surrendering.",
    keywords: "LIC surrender value, LIC GSV calculator, LIC SSV calculator, LIC policy surrender, surrender value calculation",
    faq: [
      { q: "When can I surrender my LIC policy?", a: "You can surrender after paying premiums for at least 3 full years. Before 3 years, no surrender value is payable." },
      { q: "What is the difference between GSV and SSV?", a: "GSV is a guaranteed percentage of premiums paid. SSV is based on paid-up value with a multiplier. LIC pays whichever is higher." },
      { q: "Should I surrender my LIC policy?", a: "Surrendering usually results in significant financial loss. Consider making it paid-up or taking a loan against it instead." },
    ],
  },
  "/loan-calculator": {
    title: "Loan Against LIC Policy Calculator 2026 — Max Amount & Interest | DoAide InsureKit",
    description: "Calculate maximum loan amount against your LIC policy. Compare policy loan interest (9%) vs personal loan (12%) vs gold loan (8.5%). Free loan calculator.",
    keywords: "LIC loan calculator, loan against LIC policy, LIC policy loan interest rate, LIC surrender vs loan, policy loan amount",
    faq: [
      { q: "How much can I borrow against my LIC policy?", a: "You can borrow up to 90% of the surrender value of your policy. The surrender value depends on years of premium paid and bonus accrued." },
      { q: "What is the interest rate on LIC policy loan?", a: "LIC charges approximately 9% p.a. on policy loans, which is lower than personal loan rates (12-18%)." },
    ],
  },
  "/premium-calendar": {
    title: "LIC Premium Due Date Calendar — Track All Instalments | DoAide InsureKit",
    description: "Generate a complete premium due date calendar for any LIC policy. Track yearly, half-yearly, quarterly, or monthly premium due dates. Share via WhatsApp.",
    keywords: "LIC premium due date, LIC premium calendar, LIC payment schedule, LIC premium reminder, premium instalment dates",
    faq: [
      { q: "How are premium due dates calculated?", a: "Due dates are based on the policy start date and payment mode — yearly, half-yearly, quarterly, or monthly." },
      { q: "What is the grace period?", a: "30 days for yearly/half-yearly payments, 15 days for quarterly/monthly payments." },
    ],
  },
  "/claim-estimator": {
    title: "LIC Claim Amount Estimator 2026 — Maturity & Death Claim | DoAide InsureKit",
    description: "Estimate LIC maturity or death claim amount with bonus projections. Three scenarios: conservative, current, and optimistic. Free claim amount calculator.",
    keywords: "LIC claim amount, LIC maturity claim, LIC death claim calculator, LIC bonus projection, LIC claim estimator",
    faq: [
      { q: "How is LIC maturity claim calculated?", a: "Maturity claim = Sum Assured + Total SRB (Simple Reversionary Bonus) + FAB (Final Additional Bonus). Some plans have maturity multipliers." },
      { q: "What is included in a death claim?", a: "Death claim is the higher of (SA + Bonus) or guaranteed minimum death benefit. Plus any accrued reversionary bonus." },
    ],
  },
  "/plan-recommender": {
    title: "LIC Plan Recommender 2026 — Best Plan for Your Age & Budget | DoAide InsureKit",
    description: "Get personalized LIC plan recommendations. Answer 3 questions — age, budget, goal — and get the top 3 LIC plans ranked by returns, affordability, and features.",
    keywords: "best LIC plan, LIC plan recommendation, which LIC plan to buy, LIC plan for 30 year old, LIC plan suggestion",
    faq: [
      { q: "How are plans recommended?", a: "Plans are scored based on IRR (returns), budget affordability, bonus rates, and goal alignment. Top 3 matches are shown." },
      { q: "Which LIC plan is best for savings?", a: "Jeevan Labh (836) and Jeevan Lakshya (833) offer the highest IRR among endowment plans. Use the recommender for personalized results." },
    ],
  },
  "/compare-plans": {
    title: "Compare Any Two LIC Plans 2026 — Custom Parameters | DoAide InsureKit",
    description: "Compare any two LIC plans with different age, sum assured, and term for each. Side-by-side comparison of premium, maturity, IRR, and features.",
    keywords: "compare LIC plans, LIC plan vs plan, LIC policy comparison, best LIC plan comparison, compare two LIC policies",
    faq: [
      { q: "Can I compare plans with different parameters?", a: "Yes! Unlike the standard comparison tool, this lets you set different age, SA, and term for each plan." },
    ],
  },
  "/guides": {
    title: "LIC Insurance Guides & Articles — DoAide InsureKit",
    description: "In-depth guides on LIC plans, bonus rates, policy revival, and more. Expert articles for LIC agents and policyholders.",
    keywords: "LIC guides, LIC articles, LIC plan guide, LIC bonus rates guide, LIC revival guide",
  },
  "/guides/best-lic-plans-2026": {
    title: "Best LIC Plans 2026 — Complete Comparison Guide | DoAide InsureKit",
    description: "Comprehensive guide to the best LIC plans in 2026. Compare endowment, term, whole life, and limited premium plans by returns, features, and suitability.",
    keywords: "best LIC plan 2026, top LIC plans, LIC plan comparison guide, best endowment plan, best term plan LIC",
    faq: [
      { q: "Which LIC plan gives the highest returns?", a: "Among endowment plans, Jeevan Labh (836) and Jeevan Lakshya (833) typically offer the highest IRR of 5-6%." },
      { q: "Which LIC plan is best for a salaried person?", a: "Jeevan Anand (815) for savings + whole life cover, or Tech Term (854) for pure protection at the lowest premium." },
    ],
  },
  "/guides/check-policy-status": {
    title: "How to Check LIC Policy Status Online — Step by Step | DoAide InsureKit",
    description: "Complete guide to check LIC policy status online via website, app, SMS, and helpline. Check premium payment status, maturity date, and bonus details.",
    keywords: "check LIC policy status, LIC policy status online, LIC premium status, LIC policy details, LIC customer portal",
    faq: [
      { q: "Can I check policy status without registration?", a: "Yes, via SMS (send ASKLIC to 56677) or by calling the LIC helpline at 022-68276827." },
    ],
  },
  "/guides/bonus-rates-history": {
    title: "LIC Bonus Rates History 2024-2026 — SRB Rates by Plan | DoAide InsureKit",
    description: "Complete history of LIC Simple Reversionary Bonus (SRB) rates from 2024 to 2026. Track bonus trends for Jeevan Anand, Jeevan Labh, New Endowment, and more.",
    keywords: "LIC bonus rate history, LIC SRB rate 2025, LIC bonus rate 2026, LIC reversionary bonus history, LIC plan bonus",
    faq: [
      { q: "How is LIC bonus calculated?", a: "LIC declares SRB as ₹X per ₹1000 of Sum Assured. Annual bonus = (SRB rate / 1000) × Sum Assured." },
      { q: "Is LIC bonus guaranteed?", a: "Bonus declared and added to a policy becomes guaranteed. But future bonus rates are not guaranteed and depend on LIC's annual surplus." },
    ],
  },
  "/plans": {
    title: "All LIC Plans 2026 — Complete Directory with Details & Premium | DoAide InsureKit",
    description: "Browse all LIC plans — Endowment, Money Back, Term, Whole Life, Child, Pension, ULIP. Compare features, check eligibility, calculate premium. Free, no login.",
    keywords: "LIC plans, all LIC plans, LIC plan list, LIC plan directory, LIC endowment plans, LIC term plans",
    faq: [
      { q: "How many LIC plans are currently available?", a: "LIC currently offers 30+ plans across categories: Endowment, Money Back, Term, Whole Life, Child, Pension, ULIP, and Government Schemes." },
      { q: "Which LIC plan is best for savings?", a: "Jeevan Labh (736) and Jeevan Lakshya (833) offer the highest IRR among endowment plans. Use our Plan Recommender for personalized suggestions." },
    ],
  },
  "/compare/lic-super-sales-saathi": {
    title: "InsureKit vs LIC Super Sales Saathi — Feature Comparison 2026 | DoAide",
    description: "Compare DoAide InsureKit with LIC Super Sales Saathi. See which LIC agent tool has more calculators, better features, and is truly free.",
    keywords: "InsureKit vs LIC Super Sales Saathi, LIC agent tools comparison, best LIC agent app",
  },
  "/compare/perfect-agent-plus": {
    title: "InsureKit vs Perfect Agent Plus — Feature Comparison 2026 | DoAide",
    description: "Compare DoAide InsureKit with Perfect Agent Plus. Free vs paid, feature-by-feature comparison for LIC agents.",
    keywords: "InsureKit vs Perfect Agent Plus, LIC agent tools comparison, best free LIC calculator",
  },
  "/best-lic-agent-tools-2026": {
    title: "Best LIC Agent Tools 2026 — Top 4 Apps Compared | DoAide InsureKit",
    description: "Comprehensive comparison of the best LIC agent tools in 2026. InsureKit vs Perfect Agent Plus vs Super Sales Saathi vs LIC MF App.",
    keywords: "best LIC agent tools 2026, LIC calculator app, LIC agent app, free LIC tools",
    faq: [
      { q: "Which is the best free LIC agent tool in 2026?", a: "DoAide InsureKit is the most comprehensive free tool with 22+ features. No registration needed." },
      { q: "Do I need to pay for LIC agent tools?", a: "Not necessarily. InsureKit offers all essential tools for free." },
    ],
  },
  "/guides/revive-lapsed-policy": {
    title: "How to Revive a Lapsed LIC Policy — Complete Guide | DoAide InsureKit",
    description: "Step-by-step guide to reviving a lapsed LIC policy. Eligibility, documents needed, revival amount calculation, online & offline methods, and tips to avoid future lapses.",
    keywords: "revive lapsed LIC policy, LIC policy revival, lapsed policy revival amount, LIC revival process, how to revive LIC",
    faq: [
      { q: "Can I revive a policy after 5 years?", a: "Generally no. LIC's standard revival period is 5 years from the first unpaid premium. Special revival schemes may extend this." },
      { q: "Is interest charged on revival?", a: "Yes, approximately 9.25% p.a. on unpaid premiums plus GST." },
    ],
  },
};

function buildStructuredData(pathname, meta) {
  const base = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Free LIC insurance calculators and agent tools",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    creator: { "@type": "Organization", name: "DoAide", url: "https://doaide.com" },
  };

  const schemas = [base];

  if (meta?.faq?.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: meta.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return schemas;
}

export default function SEOHead() {
  const { pathname } = useLocation();
  const meta = META[pathname];

  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", meta.description);
    setMeta("name", "keywords", meta.keywords);

    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);

    const schemas = buildStructuredData(pathname, meta);

    document.querySelectorAll("script[data-seo-ld]").forEach((el) => el.remove());

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-ld", String(i));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [pathname, meta]);

  return null;
}
