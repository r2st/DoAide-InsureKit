import { describe, it, expect } from "vitest";

describe("AuthCallbackHandler", () => {
  it("does not import useSearchParams", async () => {
    const raw = (await import("./AuthCallbackHandler?raw")).default;
    expect(raw).not.toContain("useSearchParams");
  });

  it("exports a default component", async () => {
    const mod = await import("./AuthCallbackHandler");
    expect(typeof mod.default).toBe("function");
  });
});
