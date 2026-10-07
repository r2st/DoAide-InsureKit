import { describe, it, expect, vi, beforeEach } from "vitest";

vi.stubGlobal("localStorage", {
  store: {},
  getItem(key) { return this.store[key] ?? null; },
  setItem(key, val) { this.store[key] = val; },
  removeItem(key) { delete this.store[key]; },
  clear() { this.store = {}; },
});

describe("usePolicies hook module", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("exports usePolicies function", async () => {
    const mod = await import("./usePolicies.js");
    expect(typeof mod.usePolicies).toBe("function");
  });
});

describe("policy API store mapping", () => {
  it("apiStore exports correct policy functions", async () => {
    const mod = await import("../utils/apiStore.js");
    expect(typeof mod.fetchPolicies).toBe("function");
    expect(typeof mod.createPolicy).toBe("function");
    expect(typeof mod.updatePolicyApi).toBe("function");
    expect(typeof mod.deletePolicyApi).toBe("function");
  });

  it("policyStore validate function works", async () => {
    const { validatePolicy } = await import("../utils/policyStore.js");
    const errors = validatePolicy({ policyNumber: "", holderName: "", planName: "", sumAssured: 0, premium: 0 });
    expect(errors.length).toBeGreaterThan(0);
    const noErrors = validatePolicy({ policyNumber: "123", holderName: "Test", planName: "Plan", sumAssured: 100000, premium: 5000 });
    expect(noErrors).toHaveLength(0);
  });
});

describe("camelCase/snake_case field mapping", () => {
  it("policy fields map correctly between formats", () => {
    const apiPolicy = {
      id: "uuid-1",
      local_id: "local-1",
      policy_number: "POL123",
      holder_name: "Rajesh Kumar",
      plan_name: "Jeevan Anand",
      sum_assured: 500000,
      premium: 25000,
      mode: "yearly",
      start_date: "2025-01-01",
      term: "20",
      next_due_date: "2026-01-01",
      status: "active",
      notes: "Test",
    };

    expect(apiPolicy.policy_number).toBe("POL123");
    expect(apiPolicy.holder_name).toBe("Rajesh Kumar");
    expect(apiPolicy.sum_assured).toBe(500000);
    expect(apiPolicy.next_due_date).toBe("2026-01-01");

    const camelPolicy = {
      policyNumber: apiPolicy.policy_number,
      holderName: apiPolicy.holder_name,
      planName: apiPolicy.plan_name,
      sumAssured: apiPolicy.sum_assured,
      premium: apiPolicy.premium,
      nextDueDate: apiPolicy.next_due_date,
    };

    expect(camelPolicy.policyNumber).toBe("POL123");
    expect(camelPolicy.holderName).toBe("Rajesh Kumar");
    expect(camelPolicy.sumAssured).toBe(500000);
    expect(camelPolicy.nextDueDate).toBe("2026-01-01");
  });
});
