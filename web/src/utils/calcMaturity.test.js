import { describe, it, expect } from "vitest";
import { calculateMaturity, calculateIRR, calculateTotalPremiumsPaid, calculateSurvivalBenefits } from "./calcMaturity";
import { getPlan } from "../data/licPlans";

describe("calculateMaturity", () => {
  it("calculates Jeevan Anand maturity with SRB ₹45/1000", () => {
    const plan = getPlan("jeevan_anand_715");
    const result = calculateMaturity(plan, 1000000, 20);
    expect(result.srbRate).toBe(45);
    // With SA ≥ 10L, no extra slab bonus for Jeevan Anand (it has no saSlabBonus)
    expect(result.totalBonus).toBe(900000); // 45/1000 * 1000000 * 20
    // FAB for 20yr term = 25/1000 of total bonus = 25/1000 * 900000 = 22500
    expect(result.fab).toBe(22500);
    expect(result.maturityValue).toBe(1000000 + 900000 + 22500);
  });

  it("calculates New Endowment 714 with term-dependent SRB", () => {
    const plan = getPlan("new_endowment_714");
    // 20yr term → base SRB ₹42, SA 5L gets +₹1 slab bonus = ₹43
    const r20 = calculateMaturity(plan, 500000, 20);
    expect(r20.srbRate).toBe(43);
    expect(r20.saSlabBonus).toBe(1);
    expect(r20.totalBonus).toBe(430000); // 43/1000 * 500000 * 20

    // 25yr term → base SRB ₹48 + ₹1 slab = ₹49
    const r25 = calculateMaturity(plan, 500000, 25);
    expect(r25.srbRate).toBe(49);
    expect(r25.totalBonus).toBe(612500); // 49/1000 * 500000 * 25

    // Small SA (no slab bonus)
    const r20small = calculateMaturity(plan, 200000, 20);
    expect(r20small.srbRate).toBe(42);
  });

  it("calculates Jeevan Labh with slab bonus for SA ≥ 10L", () => {
    const plan = getPlan("jeevan_labh_736");
    const result = calculateMaturity(plan, 1000000, 21);
    // base SRB 37 + slab bonus 2 for SA ≥ 10L = 39
    expect(result.srbRate).toBe(39);
    expect(result.saSlabBonus).toBe(2);
    expect(result.totalBonus).toBe(819000); // 39/1000 * 1000000 * 21
  });

  it("calculates Jeevan Labh FAB per 1000 of total bonus", () => {
    const plan = getPlan("jeevan_labh_736");
    const result = calculateMaturity(plan, 500000, 21);
    // SRB 37/1000, no slab bonus at 5L
    expect(result.totalBonus).toBe(388500); // 37 * 500 * 21
    // FAB 80/1000 of totalBonus = 80/1000 * 388500 = 31080
    expect(result.fab).toBe(31080);
  });

  it("handles Dhan Sanchay non-par plan", () => {
    const plan = getPlan("dhan_sanchay_871");
    const result = calculateMaturity(plan, 1000000, 18);
    expect(result.totalBonus).toBe(0);
    expect(result.guaranteedAdditions).toBe(900000); // 50/1000 * 1000000 * 18
    expect(result.maturityValue).toBe(1900000);
  });

  it("applies Jeevan Lakshya 110% maturity multiplier", () => {
    const plan = getPlan("jeevan_lakshya_733");
    const result = calculateMaturity(plan, 1000000, 21);
    expect(result.maturityMultiplier).toBe(1.10);
    expect(result.baseSA).toBe(1100000);
    // SRB 49/1000, FAB 60/1000 of total bonus
    const expectedBonus = 49 * 1000 * 21; // 1029000
    expect(result.totalBonus).toBe(expectedBonus);
    expect(result.maturityValue).toBe(1100000 + expectedBonus + Math.round(60 / 1000 * expectedBonus));
  });

  it("uses custom SRB rate when provided", () => {
    const plan = getPlan("jeevan_anand_715");
    const result = calculateMaturity(plan, 1000000, 20, 55);
    expect(result.srbRate).toBe(55);
    expect(result.totalBonus).toBe(1100000);
  });
});

describe("calculateIRR", () => {
  it("returns a reasonable IRR for typical endowment", () => {
    const irr = calculateIRR(44000, 1922500, 20);
    expect(irr).toBeGreaterThan(0.03);
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
    const plan = getPlan("money_back_20_720");
    const benefits = calculateSurvivalBenefits(plan, 1000000);
    expect(benefits).toHaveLength(3);
    expect(benefits[0]).toEqual({ year: 5, percent: 20, amount: 200000 });
  });

  it("returns empty for endowment plan without survival benefits", () => {
    const plan = getPlan("jeevan_anand_715");
    expect(calculateSurvivalBenefits(plan, 1000000)).toEqual([]);
  });
});
