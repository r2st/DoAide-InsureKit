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
