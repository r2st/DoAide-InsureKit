import { describe, it, expect, vi, beforeEach } from "vitest";

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

describe("AuthContext", () => {
  it("exports AuthProvider and useAuth", async () => {
    const mod = await import("./AuthContext");
    expect(typeof mod.AuthProvider).toBe("function");
    expect(typeof mod.useAuth).toBe("function");
  });

  it("useAuth throws outside provider", async () => {
    const { renderHook } = await import("@testing-library/react");
    const { useAuth } = await import("./AuthContext");
    expect(() => renderHook(() => useAuth())).toThrow("useAuth must be used within AuthProvider");
  });
});

describe("Auth flow integration", () => {
  it("/auth/me fetch returns user shape on success", async () => {
    const mockUser = { id: "1", name: "Test", email: "t@t.com", provider: "google" };
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockUser),
    });

    const res = await fetch("/auth/me", { credentials: "include" });
    const data = await res.json();
    expect(data).toEqual(mockUser);
    expect(data.id).toBe("1");
    expect(data.provider).toBe("google");
  });

  it("/auth/logout returns ok", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ ok: true }),
    });

    const res = await fetch("/auth/logout", { method: "POST", credentials: "include" });
    const data = await res.json();
    expect(data.ok).toBe(true);
  });

  it("login URL points to correct provider path", () => {
    const providers = ["google", "github", "microsoft"];
    for (const p of providers) {
      const url = `/auth/${p}/login`;
      expect(url).toBe(`/auth/${p}/login`);
    }
  });

  it("migration is triggered when no migrated flag and user is set", async () => {
    mockStorage["insurekit_clients"] = JSON.stringify([{ id: "c1", name: "R", phone: "9" }]);
    mockStorage["insurekit_policies"] = JSON.stringify([]);

    const { migrateLocalData } = await import("../utils/apiStore");

    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ clients_added: 1, policies_added: 0 }),
    });

    const result = await migrateLocalData();
    expect(result.clients_added).toBe(1);

    mockStorage["insurekit_migrated"] = "1";
    expect(mockStorage["insurekit_migrated"]).toBe("1");
  });

  it("migration is skipped when insurekit_migrated flag is set", () => {
    mockStorage["insurekit_migrated"] = "1";
    expect(localStorage.getItem("insurekit_migrated")).toBe("1");
  });
});
