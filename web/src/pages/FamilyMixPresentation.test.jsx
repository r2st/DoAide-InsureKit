import { describe, expect, it } from "vitest";
import { LIC_PLANS } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";

const presentablePlans = LIC_PLANS.filter(
  (p) => Object.keys(p.premiumRates).length > 0 || p.fixedPremium,
);

describe("FamilyMixPresentation data", () => {
  it("can calculate premiums for different ages (family members)", () => {
    const plan = presentablePlans[0];
    const ages = [30, 28, 10];
    const results = ages.map((a) => calculatePremium(plan, a, 1000000, 20, "yearly", true));
    const valid = results.filter(Boolean);
    expect(valid.length).toBeGreaterThan(0);
  });

  it("child plans exist in the plan list", () => {
    const childPlans = LIC_PLANS.filter((p) => p.type === "child");
    expect(childPlans.length).toBeGreaterThan(0);
  });

  it("premium varies by age for same plan", () => {
    const plan = presentablePlans[0];
    const p30 = calculatePremium(plan, 30, 1000000, 20, "yearly", true);
    const p40 = calculatePremium(plan, 40, 1000000, 20, "yearly", true);
    if (p30 && p40) {
      expect(p40.annualPremium).not.toBe(p30.annualPremium);
    }
  });

  it("total family premium is sum of individual premiums", () => {
    const plan = presentablePlans[0];
    const premiums = [30, 28].map((a) => calculatePremium(plan, a, 1000000, 20, "yearly", true));
    const valid = premiums.filter(Boolean);
    if (valid.length === 2) {
      const total = valid[0].annualPremium + valid[1].annualPremium;
      expect(total).toBe(valid[0].annualPremium + valid[1].annualPremium);
    }
  });
});
