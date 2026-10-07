import { describe, it, expect } from "vitest";
import { estimateClaimAmount } from "./calcClaim";
import { LIC_PLANS } from "../data/licPlans";

const endowmentPlan = LIC_PLANS.find((p) => p.type === "endowment" && Object.keys(p.premiumRates).length > 0);

describe("estimateClaimAmount", () => {
  describe("death claim", () => {
    it("calculates death claim with accrued bonus", () => {
      const result = estimateClaimAmount(endowmentPlan, 1000000, 20, 10, true);
      expect(result.type).toBe("death");
      expect(result.sumAssured).toBe(1000000);
      expect(result.accruedBonus).toBeGreaterThan(0);
      expect(result.claimAmount).toBeGreaterThanOrEqual(result.sumAssured);
    });

    it("claim is at least SA + bonus", () => {
      const result = estimateClaimAmount(endowmentPlan, 1000000, 20, 5, true);
      expect(result.claimAmount).toBeGreaterThanOrEqual(result.saWithBonus);
    });
  });

  describe("maturity claim", () => {
    it("calculates maturity value with bonus projections", () => {
      const result = estimateClaimAmount(endowmentPlan, 1000000, 20, 20, false);
      expect(result.type).toBe("maturity");
      expect(result.maturityValue).toBeGreaterThan(0);
      expect(result.totalBonus).toBeGreaterThan(0);
      expect(result.bonusProjections).toBeDefined();
      expect(result.bonusProjections.length).toBe(3);
    });

    it("projections are in order: conservative < current < optimistic", () => {
      const result = estimateClaimAmount(endowmentPlan, 1000000, 20, 20, false);
      const [conservative, current, optimistic] = result.bonusProjections;
      expect(conservative.maturityValue).toBeLessThanOrEqual(current.maturityValue);
      expect(current.maturityValue).toBeLessThanOrEqual(optimistic.maturityValue);
    });

    it("includes a note", () => {
      const result = estimateClaimAmount(endowmentPlan, 1000000, 20, 20, false);
      expect(result.note).toBeDefined();
      expect(result.note.length).toBeGreaterThan(0);
    });
  });
});
