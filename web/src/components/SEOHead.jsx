import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const META = {
  "/premium-calculator": {
    title: "LIC Premium Calculator 2025 — Calculate Exact Premium with GST | DoAide InsureKit",
    description: "Free LIC premium calculator. Select any LIC plan, enter age, sum assured, term — get exact premium with GST. Jeevan Anand, Jeevan Labh, Tech Term & more.",
    keywords: "LIC premium calculator, LIC premium rate, Jeevan Anand premium, LIC plan premium, LIC GST calculator",
  },
  "/maturity-calculator": {
    title: "LIC Maturity Value Calculator 2025 — Bonus, FAB & IRR | DoAide InsureKit",
    description: "Calculate LIC policy maturity value with reversionary bonus, FAB, and IRR. Compare returns across Jeevan Anand, Jeevan Labh, New Endowment plans.",
    keywords: "LIC maturity calculator, LIC maturity value, LIC bonus rate, LIC IRR, LIC returns calculator",
  },
  "/plan-comparison": {
    title: "LIC Plan Comparison 2025 — Compare Premium, Maturity & Benefits | DoAide InsureKit",
    description: "Compare LIC plans side by side — premium, maturity value, death benefit, features. Find the best LIC policy for your needs.",
    keywords: "LIC plan comparison, best LIC plan, compare LIC policies, LIC plan features, which LIC plan is best",
  },
  "/commission-calculator": {
    title: "LIC Agent Commission Calculator 2025 — FY, Renewal & Total | DoAide InsureKit",
    description: "Calculate LIC agent commission — first year, renewal, and total commission over policy term. Updated with Oct 2024 commission rates.",
    keywords: "LIC agent commission, LIC commission calculator, LIC FY commission, LIC renewal commission, LIC agent income",
  },
  "/tax-calculator": {
    title: "LIC Tax Benefit Calculator — Section 80C, 80D, 10(10D) | DoAide InsureKit",
    description: "Calculate tax benefits on LIC premiums under Section 80C. Check maturity exemption under 10(10D). Compare old vs new tax regime.",
    keywords: "LIC tax benefit, Section 80C LIC, LIC 10(10D), LIC tax exemption, insurance tax saving",
  },
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DoAide InsureKit",
  url: "https://insure.doaide.com",
  description: "Free LIC insurance calculators for agents and policyholders",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  creator: { "@type": "Organization", name: "DoAide", url: "https://doaide.com" },
};

export default function SEOHead() {
  const { pathname } = useLocation();
  const meta = META[pathname];

  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("keywords", meta.keywords);

    let script = document.querySelector("#structured-data");
    if (!script) {
      script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(STRUCTURED_DATA);
  }, [pathname, meta]);

  return null;
}
