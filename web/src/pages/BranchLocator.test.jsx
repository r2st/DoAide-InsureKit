import { describe, expect, it } from "vitest";

describe("BranchLocator", () => {
  it("module exports a default component", async () => {
    const mod = await import("./BranchLocator");
    expect(typeof mod.default).toBe("function");
  });
});
