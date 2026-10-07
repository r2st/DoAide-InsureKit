import { describe, it, expect } from "vitest";
import { calculateFD, calculateRD, compareWithInsurance } from "./calcFdRd";

describe("calculateFD", () => {
  it("calculates simple FD maturity", () => {
    const result = calculateFD({ principal: 100000, ratePercent: 7, years: 5 });
    expect(result.maturity).toBeGreaterThan(100000);
    expect(result.interest).toBeGreaterThan(0);
    expect(result.maturity).toBe(result.principal + result.interest);
  });

  it("with 0% rate returns principal", () => {
    const result = calculateFD({ principal: 100000, ratePercent: 0, years: 5 });
    expect(result.maturity).toBe(100000);
    expect(result.interest).toBe(0);
  });

  it("quarterly compounding beats annual", () => {
    const quarterly = calculateFD({ principal: 100000, ratePercent: 7, years: 5, compounding: "quarterly" });
    const annual = calculateFD({ principal: 100000, ratePercent: 7, years: 5, compounding: "yearly" });
    expect(quarterly.maturity).toBeGreaterThan(annual.maturity);
  });

  it("calculates post-tax values", () => {
    const result = calculateFD({ principal: 100000, ratePercent: 7, years: 5 });
    expect(result.postTax25).toBeLessThan(result.maturity);
    expect(result.postTax30).toBeLessThan(result.postTax25);
  });

  it("effective rate is close to nominal for annual compounding", () => {
    const result = calculateFD({ principal: 100000, ratePercent: 7, years: 5, compounding: "yearly" });
    expect(result.effectiveRate).toBeCloseTo(7, 0);
  });
});

describe("calculateRD", () => {
  it("calculates RD maturity", () => {
    const result = calculateRD({ monthly: 5000, ratePercent: 7, years: 5 });
    expect(result.invested).toBe(300000);
    expect(result.maturity).toBeGreaterThan(300000);
    expect(result.interest).toBeGreaterThan(0);
  });

  it("with 0% rate returns total invested", () => {
    const result = calculateRD({ monthly: 5000, ratePercent: 0, years: 5 });
    expect(result.maturity).toBe(300000);
    expect(result.interest).toBe(0);
  });

  it("interest increases with higher rate", () => {
    const low = calculateRD({ monthly: 5000, ratePercent: 5, years: 5 });
    const high = calculateRD({ monthly: 5000, ratePercent: 8, years: 5 });
    expect(high.interest).toBeGreaterThan(low.interest);
  });
});

describe("compareWithInsurance", () => {
  it("compares FD and insurance", () => {
    const fdResult = calculateFD({ principal: 500000, ratePercent: 7, years: 20 });
    const comparison = compareWithInsurance({
      fdResult,
      insuranceSA: 500000,
      insurancePremium: 25000,
      insuranceTerm: 20,
      bonusRate: 45,
    });

    expect(comparison.fdMaturity).toBe(fdResult.maturity);
    expect(comparison.insuranceMaturity).toBeGreaterThan(0);
    expect(comparison.lifeCover).toBe(500000);
    expect(comparison.taxFreeInsurance).toBe(true);
    expect(comparison.taxableFD).toBe(true);
  });

  it("insurance provides life cover FD does not", () => {
    const fdResult = calculateFD({ principal: 500000, ratePercent: 7, years: 20 });
    const comparison = compareWithInsurance({
      fdResult,
      insuranceSA: 500000,
      insurancePremium: 25000,
      insuranceTerm: 20,
    });
    expect(comparison.lifeCover).toBe(500000);
  });
});
