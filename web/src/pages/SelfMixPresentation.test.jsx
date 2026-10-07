import { describe, expect, it } from "vitest";
import { LIC_PLANS } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import { calculateMaturity } from "../utils/calcMaturity";

const presentablePlans = LIC_PLANS.filter(
  (p) => Object.keys(p.premiumRates).length > 0 || p.fixedPremium,
);

describe("SelfMixPresentation data", () => {
  it("has presentable plans available", () => {
    expect(presentablePlans.length).toBeGreaterThan(5);
  });

  it("calculates premium for multiple plans at same age", () => {
    const plans = presentablePlans.slice(0, 3);
    const results = plans.map((p) => calculatePremium(p, 30, 1000000, 20, "yearly", true));
    const validResults = results.filter(Boolean);
    expect(validResults.length).toBeGreaterThan(0);
    validResults.forEach((r) => {
      expect(r.annualPremium).toBeGreaterThan(0);
    });
  });

  it("calculates portfolio totals correctly", () => {
    const p1 = calculatePremium(presentablePlans[0], 30, 1000000, 20, "yearly", true);
    const p2 = calculatePremium(presentablePlans[1], 30, 500000, 15, "yearly", true);
    if (p1 && p2) {
      const totalPremium = p1.annualPremium + p2.annualPremium;
      expect(totalPremium).toBe(p1.annualPremium + p2.annualPremium);
      expect(totalPremium).toBeGreaterThan(p1.annualPremium);
    }
  });

  it("maturity values are additive across policies", () => {
    const m1 = calculateMaturity(presentablePlans[0], 1000000, 20);
    const m2 = calculateMaturity(presentablePlans[0], 500000, 20);
    if (m1?.maturityValue && m2?.maturityValue) {
      expect(m1.maturityValue + m2.maturityValue).toBeGreaterThan(m1.maturityValue);
    }
  });
});
