import { describe, it, expect } from "vitest";
import { calculateCommission, calculateCommissionByYear } from "./calcCommission";
import { getPlan } from "../data/licPlans";

describe("calculateCommission", () => {
  it("calculates endowment commission with 20yr PPT → 25% FY", () => {
    const plan = getPlan("jeevan_anand_715");
    const result = calculateCommission(plan, 50000, 20);
    expect(result.firstYearRate).toBe(0.25);
    expect(result.renewalRate).toBe(0.075);
    expect(result.firstYearComm).toBe(12500);
    expect(result.renewalComm).toBe(3750);
    expect(result.renewalYears).toBe(19);
    expect(result.totalRenewalComm).toBe(71250);
    expect(result.totalCommission).toBe(83750);
  });

  it("calculates limited pay endowment with 10yr PPT → 15% FY (PPT 8-11 bracket)", () => {
    const plan = getPlan("jeevan_labh_736");
    const result = calculateCommission(plan, 50000, 16, 10);
    expect(result.firstYearRate).toBe(0.15);
    expect(result.renewalRate).toBe(0.075);
    expect(result.ppt).toBe(10);
  });

  it("calculates endowment with 15yr PPT → 25% FY", () => {
    const plan = getPlan("jeevan_labh_736");
    const result = calculateCommission(plan, 50000, 21, 15);
    expect(result.firstYearRate).toBe(0.25);
  });

  it("calculates term plan commission with 28% FY (override)", () => {
    const plan = getPlan("tech_term_854");
    const result = calculateCommission(plan, 36500, 20);
    expect(result.firstYearRate).toBe(0.28);
    expect(result.firstYearComm).toBe(10220);
  });

  it("returns zero commission for govt plans", () => {
    const plan = getPlan("pmjjby");
    const result = calculateCommission(plan, 436, 1);
    expect(result.totalCommission).toBe(0);
  });
});

describe("calculateCommissionByYear", () => {
  it("returns correct year-wise breakdown", () => {
    const plan = getPlan("jeevan_anand_715");
    const years = calculateCommissionByYear(plan, 50000, 20);
    expect(years).toHaveLength(20);
    expect(years[0].rate).toBe(0.25);
    expect(years[1].rate).toBe(0.075);
    expect(years[19].rate).toBe(0.075);
  });
});
