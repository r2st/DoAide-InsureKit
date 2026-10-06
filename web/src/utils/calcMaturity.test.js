import { describe, it, expect } from "vitest";
import { calculateMaturity, calculateIRR, calculateTotalPremiumsPaid, calculateSurvivalBenefits } from "./calcMaturity";
import { getPlan } from "../data/licPlans";

describe("calculateMaturity", () => {
  it("calculates Jeevan Anand maturity with default bonus", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculateMaturity(plan, 1000000, 20);
    expect(result.sumAssured).toBe(1000000);
    expect(result.totalBonus).toBe(1000000); // 50/1000 * 1000000 * 20
    expect(result.fab).toBe(200000); // 20% of 1000000
    expect(result.maturityValue).toBe(2200000);
  });

  it("calculates Jeevan Labh maturity with high bonus", () => {
    const plan = getPlan("jeevan_labh_836");
    const result = calculateMaturity(plan, 500000, 21);
    expect(result.totalBonus).toBe(819000); // 78/1000 * 500000 * 21
    expect(result.fab).toBe(204750); // 25% of 819000
    expect(result.maturityValue).toBe(500000 + 819000 + 204750);
  });

  it("handles Dhan Sanchay non-par plan", () => {
    const plan = getPlan("dhan_sanchay_871");
    const result = calculateMaturity(plan, 1000000, 18);
    expect(result.totalBonus).toBe(0);
    expect(result.guaranteedAdditions).toBe(900000); // 50/1000 * 1000000 * 18
    expect(result.maturityValue).toBe(1900000);
  });

  it("uses custom bonus rate when provided", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculateMaturity(plan, 1000000, 20, 60);
    expect(result.totalBonus).toBe(1200000); // 60/1000 * 1000000 * 20
  });
});

describe("calculateIRR", () => {
  it("returns a reasonable IRR for typical endowment", () => {
    const irr = calculateIRR(48400, 2200000, 20);
    expect(irr).toBeGreaterThan(0.04);
    expect(irr).toBeLessThan(0.10);
  });
});

describe("calculateTotalPremiumsPaid", () => {
  it("calculates total for yearly mode", () => {
    expect(calculateTotalPremiumsPaid(50000, 20, "yearly")).toBe(1000000);
  });

  it("total is higher for non-yearly modes due to loading", () => {
    const yearly = calculateTotalPremiumsPaid(50000, 20, "yearly");
    const halfYearly = calculateTotalPremiumsPaid(50000, 20, "halfYearly");
    expect(halfYearly).toBeGreaterThan(yearly);
  });
});

describe("calculateSurvivalBenefits", () => {
  it("returns survival benefits for money back plan", () => {
    const plan = getPlan("money_back_20_820");
    const benefits = calculateSurvivalBenefits(plan, 1000000);
    expect(benefits).toHaveLength(3);
    expect(benefits[0]).toEqual({ year: 5, percent: 20, amount: 200000 });
  });

  it("returns empty for endowment plan", () => {
    const plan = getPlan("jeevan_anand_815");
    expect(calculateSurvivalBenefits(plan, 1000000)).toEqual([]);
  });
});
