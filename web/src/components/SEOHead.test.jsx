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
});
