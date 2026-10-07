import { describe, it, expect } from "vitest";
import { calculateTaxBenefit, calculate80DBenefit } from "./calcTax";

describe("calculateTaxBenefit", () => {
  it("calculates 80C benefit under old regime", () => {
    const result = calculateTaxBenefit(50000, 1000000, 1000000, false);
    expect(result.sec80cDeduction).toBe(50000);
    expect(result.taxSaved).toBeGreaterThan(0);
    expect(result.maturityExempt).toBe(true);
  });

  it("caps deduction at 10% of SA", () => {
    const result = calculateTaxBenefit(200000, 1000000, 2000000, false);
    expect(result.sec80cDeduction).toBe(100000); // 10% of 10L = 1L
  });

  it("caps deduction at 1.5L max", () => {
    const result = calculateTaxBenefit(200000, 50000000, 2000000, false);
    expect(result.sec80cDeduction).toBe(150000);
  });

  it("returns zero deduction under new regime", () => {
    const result = calculateTaxBenefit(50000, 1000000, 1000000, true);
    expect(result.sec80cDeduction).toBe(0);
    expect(result.taxSaved).toBe(0);
  });

  it("maturity is taxable when premium > 10% of SA", () => {
    const result = calculateTaxBenefit(150000, 1000000, 1500000, false);
    expect(result.maturityExempt).toBe(false);
  });

  it("maturity exempt when premium <= 10% of SA", () => {
    const result = calculateTaxBenefit(90000, 1000000, 1500000, false);
    expect(result.maturityExempt).toBe(true);
  });
});

describe("calculate80DBenefit", () => {
  it("calculates 80D for non-senior self and non-senior parents", () => {
    const result = calculate80DBenefit(20000, 15000, false, false, 1000000, false);
    expect(result.selfDeduction).toBe(20000);
    expect(result.parentsDeduction).toBe(15000);
    expect(result.totalDeduction).toBe(35000);
    expect(result.selfLimit).toBe(25000);
    expect(result.parentsLimit).toBe(25000);
    expect(result.taxSaved).toBeGreaterThan(0);
  });

  it("caps self deduction at 25000 for non-senior", () => {
    const result = calculate80DBenefit(40000, 0, false, false, 1000000, false);
    expect(result.selfDeduction).toBe(25000);
  });

  it("allows 50000 limit for senior citizen self", () => {
    const result = calculate80DBenefit(50000, 0, true, false, 1000000, false);
    expect(result.selfDeduction).toBe(50000);
    expect(result.selfLimit).toBe(50000);
  });

  it("allows 50000 limit for senior citizen parents", () => {
    const result = calculate80DBenefit(0, 50000, false, true, 1000000, false);
    expect(result.parentsDeduction).toBe(50000);
    expect(result.parentsLimit).toBe(50000);
  });

  it("maximum deduction is 100000 when both are seniors", () => {
    const result = calculate80DBenefit(60000, 60000, true, true, 2000000, false);
    expect(result.selfDeduction).toBe(50000);
    expect(result.parentsDeduction).toBe(50000);
    expect(result.totalDeduction).toBe(100000);
  });

  it("returns zero deduction under new regime", () => {
    const result = calculate80DBenefit(25000, 25000, false, false, 1000000, true);
    expect(result.selfDeduction).toBe(0);
    expect(result.parentsDeduction).toBe(0);
    expect(result.totalDeduction).toBe(0);
    expect(result.taxSaved).toBe(0);
  });

  it("handles zero health premiums", () => {
    const result = calculate80DBenefit(0, 0, false, false, 1000000, false);
    expect(result.totalDeduction).toBe(0);
    expect(result.taxSaved).toBe(0);
  });

  it("calculates correct tax saved at 30% slab", () => {
    const result = calculate80DBenefit(25000, 25000, false, false, 2000000, false);
    expect(result.totalDeduction).toBe(50000);
    expect(result.taxSaved).toBe(Math.round(50000 * 0.3 * 1.04));
  });
});
