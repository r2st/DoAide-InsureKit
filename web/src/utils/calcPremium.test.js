import { describe, it, expect } from "vitest";
import { calculatePremium } from "./calcPremium";
import { getPlan } from "../data/licPlans";

describe("calculatePremium", () => {
  it("calculates Jeevan Anand premium for age 30, 20yr, 10L SA", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculatePremium(plan, 30, 1000000, 20, "yearly");
    expect(result).not.toBeNull();
    expect(result.annualPremium).toBe(48400);
    expect(result.basePremium).toBe(48400);
    expect(result.gst).toBe(8712);
    expect(result.totalPremium).toBe(57112);
  });

  it("applies half-yearly mode factor correctly", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculatePremium(plan, 30, 1000000, 20, "halfYearly");
    expect(result.basePremium).toBe(Math.round(48400 * 0.51));
  });

  it("applies quarterly mode factor correctly", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculatePremium(plan, 30, 1000000, 20, "quarterly");
    expect(result.basePremium).toBe(Math.round(48400 * 0.26));
  });

  it("applies monthly mode factor correctly", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculatePremium(plan, 30, 1000000, 20, "monthly");
    expect(result.basePremium).toBe(Math.round(48400 * 0.0875));
  });

  it("returns fixed premium for PMJJBY", () => {
    const plan = getPlan("pmjjby");
    const result = calculatePremium(plan, 30, 200000, 1, "yearly");
    expect(result.basePremium).toBe(436);
    expect(result.totalPremium).toBe(Math.round(436 * 1.18));
  });

  it("handles Jeevan Labh premium", () => {
    const plan = getPlan("jeevan_labh_836");
    const result = calculatePremium(plan, 25, 500000, 21, "yearly");
    expect(result).not.toBeNull();
    expect(result.annualPremium).toBe(Math.round(38.85 * 500));
  });

  it("handles Tech Term premium per lakh", () => {
    const plan = getPlan("tech_term_854");
    const result = calculatePremium(plan, 30, 10000000, 20, "yearly");
    expect(result).not.toBeNull();
    expect(result.ratePerThousand).toBe(3.65);
  });
});
