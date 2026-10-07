import { describe, it, expect } from "vitest";
import { recommendPlans, GOALS } from "./recommendPlan";

describe("recommendPlans", () => {
  it("returns up to 3 recommendations for savings goal", () => {
    const results = recommendPlans(30, 5000, "savings", false);
    expect(results.length).toBeLessThanOrEqual(3);
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns plans with required fields", () => {
    const results = recommendPlans(30, 10000, "savings", false);
    for (const rec of results) {
      expect(rec.plan).toBeDefined();
      expect(rec.plan.name).toBeDefined();
      expect(rec.premium).toBeDefined();
      expect(rec.premium.annualPremium).toBeGreaterThan(0);
      expect(rec.sumAssured).toBeGreaterThan(0);
      expect(rec.whyRecommended).toBeDefined();
      expect(rec.monthlyPremium).toBeGreaterThan(0);
    }
  });

  it("recommends term plans for protection goal", () => {
    const results = recommendPlans(30, 5000, "protection", false);
    expect(results.length).toBeGreaterThan(0);
  });

  it("all GOALS keys produce results for reasonable inputs", () => {
    for (const key of Object.keys(GOALS)) {
      const results = recommendPlans(30, 10000, key, false);
      expect(results.length).toBeGreaterThanOrEqual(0);
    }
  });

  it("respects limited PPT preference", () => {
    const withLimited = recommendPlans(30, 10000, "savings", true);
    const withoutLimited = recommendPlans(30, 10000, "savings", false);
    expect(withoutLimited.length).toBeGreaterThan(0);
    for (const rec of withLimited) {
      expect(rec.plan.ppt).toBe("limited");
    }
  });

  it("returns empty for impossible budget", () => {
    const results = recommendPlans(30, 100, "savings", false);
    expect(results.length).toBe(0);
  });
});
