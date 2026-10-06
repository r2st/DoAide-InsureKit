import { describe, it, expect } from "vitest";
import { calculateTaxBenefit } from "./calcTax";

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
