import { describe, expect, it } from "vitest";
import { LIC_PLANS } from "../data/licPlans";
import { calculatePremium } from "../utils/calcPremium";
import { calculateMaturity } from "../utils/calcMaturity";

const presentablePlans = LIC_PLANS.filter(
  (p) => Object.keys(p.premiumRates).length > 0 && !p.fixedPremium,
);

function getPremiumRate(plan, age, term) {
  const ages = Object.keys(plan.premiumRates).map(Number).sort((a, b) => a - b);
  let ageKey = ages[0];
  for (const a of ages) {
    if (a <= age) ageKey = a;
    else break;
  }
  return plan.premiumRates[ageKey]?.[term] || null;
}

describe("BudgetPresentation data", () => {
  it("finds plans within a 50K budget", () => {
    const budget = 50000;
    const matching = presentablePlans.filter((plan) => {
      const rate = getPremiumRate(plan, 30, 20);
      if (!rate) return false;
      const sa = Math.floor((budget / rate) * 1000 / 10000) * 10000;
      if (sa < 100000) return false;
      const p = calculatePremium(plan, 30, sa, 20, "yearly", true);
      return p && p.annualPremium <= budget * 1.05;
    });
    expect(matching.length).toBeGreaterThan(0);
  });

  it("can reverse-calculate SA for a target maturity", () => {
    const plan = presentablePlans[0];
    const testMaturity = calculateMaturity(plan, 1000000, 20);
    if (testMaturity?.maturityValue && testMaturity.maturityValue > 0) {
      const target = 2500000;
      const ratio = target / testMaturity.maturityValue;
      const neededSA = Math.ceil((1000000 * ratio) / 10000) * 10000;
      expect(neededSA).toBeGreaterThan(1000000);
      const actualMaturity = calculateMaturity(plan, neededSA, 20);
      if (actualMaturity?.maturityValue) {
        expect(actualMaturity.maturityValue).toBeGreaterThan(testMaturity.maturityValue);
      }
    }
  });

  it("SA-wise comparison shows same SA for all plans", () => {
    const targetSA = 1000000;
    const results = presentablePlans.slice(0, 5).map((plan) => {
      const p = calculatePremium(plan, 30, targetSA, 20, "yearly", true);
      return p ? { name: plan.name, premium: p.annualPremium } : null;
    }).filter(Boolean);
    expect(results.length).toBeGreaterThan(0);
    const premiums = results.map((r) => r.premium);
    const uniquePremiums = new Set(premiums);
    expect(uniquePremiums.size).toBeGreaterThan(1);
  });

  it("premium-wise sorts by maturity descending", () => {
    const budget = 50000;
    const results = presentablePlans
      .map((plan) => {
        const rate = getPremiumRate(plan, 30, 20);
        if (!rate) return null;
        const sa = Math.floor((budget / rate) * 1000 / 10000) * 10000;
        if (sa < 100000) return null;
        const p = calculatePremium(plan, 30, sa, 20, "yearly", true);
        if (!p || p.annualPremium > budget * 1.05) return null;
        const m = calculateMaturity(plan, sa, 20);
        return { premium: p.annualPremium, maturity: m?.maturityValue || 0 };
      })
      .filter(Boolean)
      .sort((a, b) => b.maturity - a.maturity);
    if (results.length >= 2) {
      expect(results[0].maturity).toBeGreaterThanOrEqual(results[1].maturity);
    }
  });
});
