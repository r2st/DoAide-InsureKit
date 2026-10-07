import { describe, expect, it } from "vitest";
import { calculatePaidUpValue } from "./calcPaidUp";

const MOCK_PLAN = {
  id: "test",
  name: "Test Plan",
  type: "endowment",
  srbRate: 45,
  premiumRates: {
    30: { 20: 48.40 },
  },
};

describe("calculatePaidUpValue", () => {
  it("returns ineligible for less than 3 years paid", () => {
    const r = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 2);
    expect(r.eligible).toBe(false);
  });

  it("calculates paid-up SA correctly", () => {
    const r = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 10);
    expect(r.eligible).toBe(true);
    expect(r.paidUpSA).toBe(500000);
    expect(r.paidUpRatio).toBe(0.5);
  });

  it("calculates bonus accrued", () => {
    const r = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 10);
    expect(r.totalBonusAccrued).toBe(450000);
  });

  it("calculates paid-up maturity as SA + bonus", () => {
    const r = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 10);
    expect(r.paidUpMaturity).toBe(950000);
  });

  it("calculates GSV factor based on ratio", () => {
    const r3 = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 3);
    expect(r3.gsvFactor).toBe(0.30);

    const r10 = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 10);
    expect(r10.gsvFactor).toBe(0.50);

    const r16 = calculatePaidUpValue(MOCK_PLAN, 30, 1000000, 20, 16);
    expect(r16.gsvFactor).toBe(0.90);
  });

  it("handles plans with srbByTerm", () => {
    const plan = { ...MOCK_PLAN, srbRate: undefined, srbByTerm: { 15: 42, 20: 48 } };
    const r = calculatePaidUpValue(plan, 30, 1000000, 20, 10);
    expect(r.srbRate).toBe(48);
    expect(r.totalBonusAccrued).toBe(480000);
  });
});
