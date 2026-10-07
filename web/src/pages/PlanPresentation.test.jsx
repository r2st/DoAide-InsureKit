import { describe, expect, it } from "vitest";
import { LIC_PLANS, MODE_LABELS } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import { calculateMaturity } from "../utils/calcMaturity";

describe("PlanPresentation data", () => {
  const presentablePlans = LIC_PLANS.filter(
    (p) => Object.keys(p.premiumRates).length > 0 || p.fixedPremium,
  );

  it("has presentable plans available", () => {
    expect(presentablePlans.length).toBeGreaterThan(5);
  });

  it("can calculate premium for the first presentable plan", () => {
    const plan = presentablePlans[0];
    const result = calculatePremium(plan, 30, 1000000, 20, "yearly", true);
    expect(result).toBeTruthy();
    expect(result.totalPremium).toBeGreaterThan(0);
    expect(result.gst).toBeGreaterThan(0);
  });

  it("can calculate maturity for an endowment plan", () => {
    const plan = presentablePlans.find((p) => p.type === "endowment");
    if (!plan) return;
    const result = calculateMaturity(plan, 1000000, 20);
    expect(result).toBeTruthy();
    expect(result.maturityValue).toBeGreaterThan(0);
  });

  it("MODE_LABELS has all four modes", () => {
    expect(MODE_LABELS.yearly).toBeTruthy();
    expect(MODE_LABELS.halfYearly).toBeTruthy();
    expect(MODE_LABELS.quarterly).toBeTruthy();
    expect(MODE_LABELS.monthly).toBeTruthy();
  });

  it("all plans have required fields for presentation", () => {
    for (const plan of presentablePlans) {
      expect(plan.name).toBeTruthy();
      expect(plan.tableNo !== undefined).toBe(true);
      expect(plan.type).toBeTruthy();
    }
  });

  it("premium calculation returns all needed fields", () => {
    const plan = presentablePlans[0];
    const result = calculatePremium(plan, 30, 500000, 15, "halfYearly", true);
    if (!result) return;
    expect(result).toHaveProperty("basePremium");
    expect(result).toHaveProperty("gst");
    expect(result).toHaveProperty("totalPremium");
    expect(result).toHaveProperty("annualPremium");
    expect(result).toHaveProperty("modeFactor");
  });
});
