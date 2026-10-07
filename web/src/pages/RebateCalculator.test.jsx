import { describe, expect, it } from "vitest";
import { SA_REBATES, MODE_REBATES } from "../data/licPlans";

function getSARebate(sa) {
  for (const r of SA_REBATES) {
    if (sa >= r.minSA) return r.rate;
  }
  return 0;
}

describe("RebateCalculator data", () => {
  it("no SA rebate below 5 lakh", () => {
    expect(getSARebate(300000)).toBe(0);
  });

  it("₹2.50 rebate for SA ≥ 5 lakh", () => {
    expect(getSARebate(500000)).toBe(2.5);
  });

  it("₹4.00 rebate for SA ≥ 10 lakh", () => {
    expect(getSARebate(1000000)).toBe(4.0);
  });

  it("yearly mode has 2% rebate", () => {
    expect(MODE_REBATES.yearly).toBe(0.02);
  });

  it("half-yearly has 1% rebate", () => {
    expect(MODE_REBATES.halfYearly).toBe(0.01);
  });

  it("quarterly and monthly have no rebate", () => {
    expect(MODE_REBATES.quarterly).toBe(0);
    expect(MODE_REBATES.monthly).toBe(0);
  });

  it("calculates SA rebate savings correctly", () => {
    const tabularRate = 48.40;
    const sa = 1000000;
    const rebate = getSARebate(sa);
    const withoutRebate = Math.round((tabularRate / 1000) * sa);
    const withRebate = Math.round(((tabularRate - rebate) / 1000) * sa);
    expect(withoutRebate - withRebate).toBe(4000);
  });
});
