import { describe, it, expect } from "vitest";
import { TERM_PLANS, estimateTermPremium } from "../data/termInsuranceData";

describe("Term Insurance Compare", () => {
  it("TERM_PLANS has at least 5 plans with required fields", () => {
    expect(TERM_PLANS.length).toBeGreaterThanOrEqual(5);
    for (const plan of TERM_PLANS) {
      expect(plan).toHaveProperty("id");
      expect(plan).toHaveProperty("insurer");
      expect(plan).toHaveProperty("planName");
      expect(plan).toHaveProperty("claimSettlementRatio");
      expect(plan).toHaveProperty("features");
      expect(plan.claimSettlementRatio).toBeGreaterThan(90);
    }
  });

  it("estimateTermPremium returns a positive number for valid input", () => {
    const premium = estimateTermPremium({
      planId: "lic-jeevan-amar",
      age: 30,
      gender: "male",
      isSmoker: false,
      coverAmount: 10000000,
      term: 30,
    });
    expect(premium).toBeGreaterThan(0);
  });

  it("returns null for unknown plan", () => {
    const premium = estimateTermPremium({
      planId: "unknown-plan",
      age: 30,
      gender: "male",
      isSmoker: false,
      coverAmount: 10000000,
      term: 30,
    });
    expect(premium).toBeNull();
  });

  it("female premium is lower than male premium", () => {
    const params = { planId: "hdfc-click2protect", age: 35, isSmoker: false, coverAmount: 10000000, term: 25 };
    const male = estimateTermPremium({ ...params, gender: "male" });
    const female = estimateTermPremium({ ...params, gender: "female" });
    expect(female).toBeLessThan(male);
  });

  it("smoker premium is higher than non-smoker", () => {
    const params = { planId: "max-life-smart-secure", age: 30, gender: "male", coverAmount: 10000000, term: 25 };
    const nonSmoker = estimateTermPremium({ ...params, isSmoker: false });
    const smoker = estimateTermPremium({ ...params, isSmoker: true });
    expect(smoker).toBeGreaterThan(nonSmoker);
  });

  it("higher age results in higher premium", () => {
    const params = { planId: "icici-iprotect", gender: "male", isSmoker: false, coverAmount: 10000000, term: 25 };
    const young = estimateTermPremium({ ...params, age: 25 });
    const older = estimateTermPremium({ ...params, age: 45 });
    expect(older).toBeGreaterThan(young);
  });
});
