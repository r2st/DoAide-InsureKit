import { describe, it, expect } from "vitest";
import { calculateSurrenderValue } from "./calcSurrender";

describe("calculateSurrenderValue", () => {
  it("returns ineligible for < 3 years paid", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 2, 45);
    expect(result.eligible).toBe(false);
    expect(result.reason).toContain("3 full years");
  });

  it("returns eligible for 3+ years paid", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 3, 45);
    expect(result.eligible).toBe(true);
    expect(result.gsv).toBeGreaterThan(0);
    expect(result.ssv).toBeGreaterThan(0);
    expect(result.surrenderValue).toBe(Math.max(result.gsv, result.ssv));
  });

  it("calculates GSV correctly", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 5, 45);
    expect(result.totalPremiumsPaid).toBe(250000);
    expect(result.gsv).toBe(Math.round(250000 * result.gsvFactor));
  });

  it("calculates paid-up SA correctly", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 10, 45);
    expect(result.paidUpSA).toBe(Math.round(1000000 * (10 / 20)));
  });

  it("calculates total bonus correctly", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 10, 45);
    expect(result.totalBonus).toBe(Math.round((45 / 1000) * 1000000 * 10));
  });

  it("surrender value is max of GSV and SSV", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 8, 45);
    expect(result.surrenderValue).toBe(Math.max(result.gsv, result.ssv));
  });

  it("recommends correctly", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 8, 45);
    if (result.ssv >= result.gsv) {
      expect(result.recommended).toBe("SSV");
    } else {
      expect(result.recommended).toBe("GSV");
    }
  });

  it("loss on surrender is positive with zero bonus", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 5, 0);
    expect(result.lossOnSurrender).toBeGreaterThan(0);
  });

  it("handles zero bonus rate", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 5, 0);
    expect(result.eligible).toBe(true);
    expect(result.totalBonus).toBe(0);
    expect(result.surrenderValue).toBeGreaterThan(0);
  });

  it("remaining years computed correctly", () => {
    const result = calculateSurrenderValue(50000, 1000000, 20, 12, 45);
    expect(result.remainingYears).toBe(8);
  });
});
