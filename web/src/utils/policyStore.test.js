import { describe, it, expect, beforeEach, vi } from "vitest";
import { getPolicies, addPolicy, updatePolicy, deletePolicy, getUpcomingRenewals, validatePolicy } from "./policyStore";

const mockStorage = {};
beforeEach(() => {
  Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  vi.stubGlobal("localStorage", {
    getItem: (key) => mockStorage[key] ?? null,
    setItem: (key, val) => { mockStorage[key] = val; },
    removeItem: (key) => { delete mockStorage[key]; },
  });
});

describe("policyStore", () => {
  it("starts with empty policies", () => {
    expect(getPolicies()).toEqual([]);
  });

  it("adds a policy with generated id", () => {
    const policy = addPolicy({ policyNumber: "123", holderName: "Test", planName: "Plan A", sumAssured: 100000, premium: 5000 });
    expect(policy.id).toBeTruthy();
    expect(policy.policyNumber).toBe("123");
    expect(getPolicies()).toHaveLength(1);
  });

  it("deletes a policy", () => {
    const p = addPolicy({ policyNumber: "456", holderName: "Del", planName: "Plan B", sumAssured: 200000, premium: 10000 });
    expect(getPolicies()).toHaveLength(1);
    deletePolicy(p.id);
    expect(getPolicies()).toHaveLength(0);
  });

  it("updates a policy", () => {
    const p = addPolicy({ policyNumber: "789", holderName: "Upd", planName: "Plan C", sumAssured: 300000, premium: 15000 });
    const updated = updatePolicy(p.id, { holderName: "Updated Name" });
    expect(updated.holderName).toBe("Updated Name");
    expect(updated.policyNumber).toBe("789");
  });

  it("returns null when updating non-existent policy", () => {
    expect(updatePolicy("nonexistent", { holderName: "X" })).toBeNull();
  });
});

describe("getUpcomingRenewals", () => {
  it("returns policies with upcoming due dates", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);
    addPolicy({
      policyNumber: "REN1",
      holderName: "Renewal Test",
      planName: "Plan R",
      sumAssured: 500000,
      premium: 25000,
      nextDueDate: futureDate.toISOString().slice(0, 10),
    });
    const upcoming = getUpcomingRenewals(30);
    expect(upcoming).toHaveLength(1);
    expect(upcoming[0].daysUntil).toBeLessThanOrEqual(5);
    expect(upcoming[0].daysUntil).toBeGreaterThanOrEqual(4);
  });

  it("excludes policies with far future due dates", () => {
    const farFuture = new Date();
    farFuture.setDate(farFuture.getDate() + 60);
    addPolicy({
      policyNumber: "FAR1",
      holderName: "Far Future",
      planName: "Plan F",
      sumAssured: 500000,
      premium: 25000,
      nextDueDate: farFuture.toISOString().slice(0, 10),
    });
    expect(getUpcomingRenewals(30)).toHaveLength(0);
  });
});

describe("validatePolicy", () => {
  it("returns errors for missing fields", () => {
    const errors = validatePolicy({});
    expect(errors).toContain("Policy number is required");
    expect(errors).toContain("Policy holder name is required");
    expect(errors).toContain("Plan name is required");
  });

  it("returns no errors for valid policy", () => {
    const errors = validatePolicy({
      policyNumber: "123",
      holderName: "Test",
      planName: "Plan",
      sumAssured: 100000,
      premium: 5000,
    });
    expect(errors).toHaveLength(0);
  });

  it("validates positive amounts", () => {
    const errors = validatePolicy({
      policyNumber: "123",
      holderName: "Test",
      planName: "Plan",
      sumAssured: -1,
      premium: 0,
    });
    expect(errors).toContain("Sum assured must be positive");
    expect(errors).toContain("Premium must be positive");
  });
});
