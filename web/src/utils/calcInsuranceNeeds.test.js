import { describe, it, expect } from "vitest";
import { calculateInsuranceNeeds } from "./calcInsuranceNeeds";

describe("calculateInsuranceNeeds", () => {
  it("calculates basic needs for a 30-year-old with dependents", () => {
    const result = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 2,
      childrenCount: 1,
    });
    expect(result.yearsToRetire).toBe(30);
    expect(result.incomeReplacement).toBe(Math.round(800000 * 30 * 0.7));
    expect(result.childEducation).toBe(2500000);
    expect(result.childMarriage).toBe(1500000);
    expect(result.emergencyFund).toBe(1600000);
    expect(result.funeralAndSettlement).toBe(500000);
    expect(result.recommendedCover).toBeGreaterThan(0);
    expect(result.recommendedCover % 500000).toBe(0);
  });

  it("subtracts existing cover and savings", () => {
    const base = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 2,
      childrenCount: 1,
    });
    const withCover = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 2,
      childrenCount: 1,
      existingCover: 5000000,
      savings: 2000000,
    });
    expect(withCover.recommendedCover).toBeLessThan(base.recommendedCover);
  });

  it("returns zero cover when savings exceed needs", () => {
    const result = calculateInsuranceNeeds({
      age: 55,
      income: 500000,
      dependents: 0,
      childrenCount: 0,
      existingCover: 50000000,
      savings: 50000000,
    });
    expect(result.recommendedCover).toBe(0);
  });

  it("handles zero children", () => {
    const result = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 1,
      childrenCount: 0,
    });
    expect(result.childEducation).toBe(0);
    expect(result.childMarriage).toBe(0);
  });

  it("includes outstanding loans in total needs", () => {
    const withoutLoans = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 2,
      childrenCount: 1,
      outstandingLoans: 0,
    });
    const withLoans = calculateInsuranceNeeds({
      age: 30,
      income: 800000,
      dependents: 2,
      childrenCount: 1,
      outstandingLoans: 3000000,
    });
    expect(withLoans.totalNeeds).toBe(withoutLoans.totalNeeds + 3000000);
  });

  it("calculates income multiplier correctly", () => {
    const result = calculateInsuranceNeeds({
      age: 30,
      income: 1000000,
      dependents: 2,
      childrenCount: 1,
    });
    expect(result.multiplier).toBe(+(result.recommendedCover / 1000000).toFixed(1));
  });

  it("rounds cover to nearest 5 lakh", () => {
    const result = calculateInsuranceNeeds({
      age: 35,
      income: 600000,
      dependents: 2,
      childrenCount: 1,
    });
    expect(result.recommendedCover % 500000).toBe(0);
  });
});
