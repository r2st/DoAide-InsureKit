import { describe, it, expect } from "vitest";
import { calculateCommission, calculateCommissionByYear, getBonusCommissionRate, calculatePortfolioCommission, BONUS_COMMISSION_SLABS } from "./calcCommission";
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

describe("getBonusCommissionRate", () => {
  it("returns no club for FYC below 3L", () => {
    const slab = getBonusCommissionRate(200000);
    expect(slab.rate).toBe(0);
    expect(slab.label).toBe("No Club");
  });

  it("returns Star Club for FYC 3L+", () => {
    const slab = getBonusCommissionRate(300000);
    expect(slab.rate).toBe(0.20);
    expect(slab.label).toContain("Star Club");
  });

  it("returns MDRT for FYC 6L+", () => {
    const slab = getBonusCommissionRate(600000);
    expect(slab.rate).toBe(0.30);
    expect(slab.label).toContain("MDRT");
  });

  it("returns COT for FYC 12L+", () => {
    const slab = getBonusCommissionRate(1200000);
    expect(slab.rate).toBe(0.35);
    expect(slab.label).toContain("COT");
  });

  it("returns TOT for FYC 24L+", () => {
    const slab = getBonusCommissionRate(2400000);
    expect(slab.rate).toBe(0.40);
    expect(slab.label).toContain("TOT");
  });
});

describe("calculatePortfolioCommission", () => {
  it("calculates total FYC and bonus for a portfolio", () => {
    const plan1 = getPlan("jeevan_anand_715");
    const plan2 = getPlan("tech_term_854");
    const result = calculatePortfolioCommission([
      { plan: plan1, annualPremium: 50000, term: 20 },
      { plan: plan2, annualPremium: 36500, term: 20 },
    ]);

    expect(result.policyCount).toBe(2);
    expect(result.totalFYC).toBe(12500 + 10220);
    expect(result.totalRenewal).toBeGreaterThan(0);
    expect(result.details).toHaveLength(2);
  });

  it("returns zero bonus for small portfolio", () => {
    const plan = getPlan("jeevan_anand_715");
    const result = calculatePortfolioCommission([
      { plan, annualPremium: 10000, term: 20 },
    ]);
    expect(result.bonusCommission).toBe(0);
    expect(result.grandTotal).toBe(result.totalFYC + result.totalRenewal);
  });

  it("handles empty portfolio", () => {
    const result = calculatePortfolioCommission([]);
    expect(result.policyCount).toBe(0);
    expect(result.totalFYC).toBe(0);
    expect(result.grandTotal).toBe(0);
  });
});

describe("BONUS_COMMISSION_SLABS", () => {
  it("has slabs in descending order of minFYC", () => {
    for (let i = 1; i < BONUS_COMMISSION_SLABS.length; i++) {
      expect(BONUS_COMMISSION_SLABS[i - 1].minFYC).toBeGreaterThan(BONUS_COMMISSION_SLABS[i].minFYC);
    }
  });

  it("has rates in descending order", () => {
    for (let i = 1; i < BONUS_COMMISSION_SLABS.length; i++) {
      expect(BONUS_COMMISSION_SLABS[i - 1].rate).toBeGreaterThanOrEqual(BONUS_COMMISSION_SLABS[i].rate);
    }
  });
});
