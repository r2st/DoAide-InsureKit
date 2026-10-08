import { describe, it, expect } from "vitest";

const EXPECTED_ROUTES = [
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
  "/client-reminders",
  "/premium-calendar",
  "/plan-presentation",
  "/self-mix",
  "/family-mix",
  "/budget-presentation",
  "/premium-due-register",
  "/report-generator",
  "/maturity-tracker",
  "/club-qualification",
  "/greeting-cards",
  "/business-card",
  "/bonus-history",
  "/marketing",
  "/receipt-generator",
  "/plans",
  "/guides",
  "/branch-locator",
  "/doctor-panel",
  "/premium-table",
  "/claim-settlement-ratio",
  "/best-lic-agent-tools-2026",
];

describe("Breadcrumb ROUTE_NAMES", () => {
  it("has a display name for every main route", async () => {
    const src = await import("./Breadcrumb");
    const module = await import("./Breadcrumb?raw");
    const raw = module.default;

    for (const route of EXPECTED_ROUTES) {
      expect(raw).toContain(`"${route}"`);
    }
  });

  it("has /fd-rd-calculator in ROUTE_NAMES", async () => {
    const raw = (await import("./Breadcrumb?raw")).default;
    expect(raw).toContain('"/fd-rd-calculator"');
    expect(raw).toContain("FD/RD vs Insurance");
  });
});
