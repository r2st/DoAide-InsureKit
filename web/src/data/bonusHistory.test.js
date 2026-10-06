import { describe, it, expect } from "vitest";
import { BONUS_HISTORY, getBonusHistory, getAllBonusPlans } from "./bonusHistory";

describe("bonusHistory", () => {
  it("has bonus data for multiple plans", () => {
    expect(BONUS_HISTORY.length).toBeGreaterThan(5);
  });

  it("each plan has required fields", () => {
    for (const plan of BONUS_HISTORY) {
      expect(plan.planId).toBeTruthy();
      expect(plan.planName).toBeTruthy();
      expect(plan.tableNo).toBeTruthy();
      expect(plan.history.length).toBeGreaterThan(0);
    }
  });

  it("history entries have year and rate", () => {
    for (const plan of BONUS_HISTORY) {
      for (const entry of plan.history) {
        expect(entry.year).toMatch(/^\d{4}-\d{2}$/);
        expect(entry.rate).toBeGreaterThan(0);
      }
    }
  });

  it("history is in descending year order", () => {
    for (const plan of BONUS_HISTORY) {
      for (let i = 1; i < plan.history.length; i++) {
        expect(plan.history[i - 1].year > plan.history[i].year).toBe(true);
      }
    }
  });
});

describe("getBonusHistory", () => {
  it("returns plan by id", () => {
    const plan = getBonusHistory("jeevan_anand_715");
    expect(plan).toBeTruthy();
    expect(plan.planName).toBe("New Jeevan Anand");
    expect(plan.tableNo).toBe(715);
  });

  it("returns undefined for unknown plan", () => {
    expect(getBonusHistory("nonexistent")).toBeUndefined();
  });
});

describe("getAllBonusPlans", () => {
  it("returns all plans", () => {
    expect(getAllBonusPlans()).toEqual(BONUS_HISTORY);
  });
});
