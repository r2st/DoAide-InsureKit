import { describe, it, expect, vi, beforeEach } from "vitest";

vi.stubGlobal("localStorage", {
  store: {},
  getItem(key) { return this.store[key] ?? null; },
  setItem(key, val) { this.store[key] = val; },
  removeItem(key) { delete this.store[key]; },
  clear() { this.store = {}; },
});

describe("useClients hook module", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("exports useClients function", async () => {
    const mod = await import("./useClients.js");
    expect(typeof mod.useClients).toBe("function");
  });
});

describe("client API store mapping", () => {
  it("apiStore exports correct client functions", async () => {
    const mod = await import("../utils/apiStore.js");
    expect(typeof mod.fetchClients).toBe("function");
    expect(typeof mod.createClient).toBe("function");
    expect(typeof mod.updateClientApi).toBe("function");
    expect(typeof mod.deleteClientApi).toBe("function");
  });

  it("clientStore validate function works", async () => {
    const { validateClient } = await import("../utils/clientStore.js");
    expect(validateClient({ name: "", phone: "" })).toHaveLength(2);
    expect(validateClient({ name: "Test", phone: "123" })).toHaveLength(0);
  });
});
