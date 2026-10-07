import { describe, expect, it } from "vitest";
import { validateClient } from "../utils/clientStore";
import { validatePolicy } from "../utils/policyStore";

describe("ReportGenerator data dependencies", () => {
  it("module exports a default component", async () => {
    const mod = await import("./ReportGenerator");
    expect(typeof mod.default).toBe("function");
  });

  it("policyStore validatePolicy works", () => {
    expect(validatePolicy({}).length).toBeGreaterThan(0);
  });

  it("clientStore validateClient works", () => {
    expect(validateClient({}).length).toBeGreaterThan(0);
    expect(validateClient({ name: "Test", phone: "12345" }).length).toBe(0);
  });
});
