import { describe, it, expect } from "vitest";
import { calculateCommission, calculateCommissionByYear } from "./calcCommission";
import { getPlan } from "../data/licPlans";

describe("calculateCommission", () => {
  it("calculates endowment commission correctly", () => {
    const plan = getPlan("jeevan_anand_815");
    const result = calculateCommission(plan, 50000, 20);
    expect(result.firstYearRate).toBe(0.25);
    expect(result.renewalRate).toBe(0.075);
    expect(result.firstYearComm).toBe(12500);
    expect(result.renewalComm).toBe(3750);
    expect(result.renewalYears).toBe(19);
    expect(result.totalRenewalComm).toBe(71250);
    expect(result.totalCommission).toBe(83750);
  });

  it("calculates term plan commission with higher FY rate", () => {
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
    const plan = getPlan("jeevan_anand_815");
    const years = calculateCommissionByYear(plan, 50000, 20);
    expect(years).toHaveLength(20);
    expect(years[0].rate).toBe(0.25);
    expect(years[1].rate).toBe(0.075);
    expect(years[19].rate).toBe(0.075);
  });
});
