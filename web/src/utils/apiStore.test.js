import { describe, it, expect, vi, beforeEach } from "vitest";
import { migrateLocalData, fetchClients, fetchPolicies } from "./apiStore";

const mockStorage = {};
beforeEach(() => {
  vi.restoreAllMocks();
  Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  vi.stubGlobal("localStorage", {
    getItem: (key) => mockStorage[key] ?? null,
    setItem: (key, val) => { mockStorage[key] = val; },
    removeItem: (key) => { delete mockStorage[key]; },
    clear: () => { Object.keys(mockStorage).forEach((k) => delete mockStorage[k]); },
  });
});

describe("migrateLocalData", () => {
  it("returns zeros when localStorage is empty", async () => {
    const result = await migrateLocalData();
    expect(result.clients_added).toBe(0);
    expect(result.policies_added).toBe(0);
  });

  it("sends local clients and policies to /api/migrate", async () => {
    mockStorage["insurekit_clients"] = JSON.stringify([
      { id: "c1", name: "Ravi", phone: "9999" },
    ]);
    mockStorage["insurekit_policies"] = JSON.stringify([
      { id: "p1", policyNumber: "123", holderName: "Ravi", planName: "Jeevan Anand", sumAssured: 500000, premium: 25000 },
    ]);

    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ clients_added: 1, policies_added: 1 }),
    });

    const result = await migrateLocalData();
    expect(result.clients_added).toBe(1);
    expect(result.policies_added).toBe(1);

    const call = globalThis.fetch.mock.calls[0];
    expect(call[0]).toBe("/api/migrate");
    const body = JSON.parse(call[1].body);
    expect(body.clients).toHaveLength(1);
    expect(body.clients[0].local_id).toBe("c1");
    expect(body.policies).toHaveLength(1);
    expect(body.policies[0].policy_number).toBe("123");
  });
});

describe("fetchClients", () => {
  it("calls /api/clients with credentials", async () => {
    const mockClients = [{ id: "1", name: "Test" }];
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockClients),
    });
    const result = await fetchClients();
    expect(result).toEqual(mockClients);
    expect(globalThis.fetch).toHaveBeenCalledWith("/api/clients", expect.objectContaining({ credentials: "include" }));
  });

  it("throws on non-ok response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({ ok: false, status: 401 });
    await expect(fetchClients()).rejects.toThrow("API 401");
  });
});

describe("fetchPolicies", () => {
  it("calls /api/policies with credentials", async () => {
    const mockPolicies = [{ id: "1", policy_number: "P1" }];
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockPolicies),
    });
    const result = await fetchPolicies();
    expect(result).toEqual(mockPolicies);
  });
});
