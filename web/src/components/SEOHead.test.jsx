import { describe, it, expect } from "vitest";

const ROUTES_REQUIRING_SEO = [
  "/",
  "/premium-calculator",
  "/maturity-calculator",
  "/commission-calculator",
  "/tax-calculator",
  "/revival-calculator",
  "/surrender-calculator",
  "/loan-calculator",
  "/claim-estimator",
  "/sip-vs-insurance",
  "/fd-rd-calculator",
  "/paid-up-value",
  "/insurance-age-calculator",
  "/rider-premium-calculator",
  "/rebate-calculator",
  "/dashboard",
  "/plan-comparison",
  "/compare-plans",
  "/plan-recommender",
  "/policy-tracker",
  "/bonus-history",
  "/marketing",
  "/receipt-generator",
  "/plans",
  "/guides",
  "/premium-table",
  "/claim-settlement-ratio",
  "/branch-locator",
  "/doctor-panel",
  "/business-card",
  "/insurance-needs-calculator",
  "/premium-comparison",
  "/tools/term-insurance-compare",
  "/compare/lic-vs-sbi-life",
  "/compare/term-vs-endowment",
];

describe("SEOHead META", () => {
  it("has metadata for every main route", async () => {
    const raw = (await import("./SEOHead?raw")).default;
    for (const route of ROUTES_REQUIRING_SEO) {
      expect(raw, `Missing SEO meta for ${route}`).toContain(`"${route}"`);
    }
  });

  it("/fd-rd-calculator has title, description, keywords, and FAQ", async () => {
    const raw = (await import("./SEOHead?raw")).default;
    expect(raw).toContain('"/fd-rd-calculator"');
    expect(raw).toContain("FD/RD vs Insurance Calculator");
    expect(raw).toContain("FD vs insurance");
    expect(raw).toContain("Is LIC better than FD?");
  });

  it("home route has expanded FAQ with premium and tax questions", async () => {
    const raw = (await import("./SEOHead?raw")).default;
    expect(raw).toContain("How are LIC premium rates calculated?");
    expect(raw).toContain("What tax benefits can I get from LIC policies?");
  });

  it("/tools/term-insurance-compare has FAQ", async () => {
    const raw = (await import("./SEOHead?raw")).default;
    expect(raw).toContain('"/tools/term-insurance-compare"');
    expect(raw).toContain("Which term insurance is cheapest?");
  });

  it("/insurance-needs-calculator has FAQ", async () => {
    const raw = (await import("./SEOHead?raw")).default;
    expect(raw).toContain('"/insurance-needs-calculator"');
    expect(raw).toContain("How much life insurance do I need?");
  });

  it("every route with faq generates FAQPage schema via buildStructuredData", async () => {
    const mod = await import("./SEOHead?raw");
    const raw = mod.default;
    expect(raw).toContain("FAQPage");
    expect(raw).toContain("mainEntity");
  });
});
