import { describe, it, expect } from "vitest";
import { CSR_DATA } from "./claimSettlementData";

describe("CSR_DATA", () => {
  it("has at least 20 insurers", () => {
    expect(CSR_DATA.length).toBeGreaterThanOrEqual(20);
  });

  it("includes LIC", () => {
    const lic = CSR_DATA.find((d) => d.short === "LIC");
    expect(lic).toBeDefined();
    expect(lic.type).toBe("Public");
  });

  it("all entries have required fields", () => {
    for (const entry of CSR_DATA) {
      expect(entry.name).toBeTruthy();
      expect(entry.short).toBeTruthy();
      expect(entry.type).toMatch(/^(Public|Private)$/);
      expect(entry.csrIndividual).toBeGreaterThan(90);
      expect(entry.csrIndividual).toBeLessThanOrEqual(100);
      expect(entry.csrGroup).toBeGreaterThan(90);
      expect(entry.csrGroup).toBeLessThanOrEqual(100);
      expect(entry.claimsSettled).toBeGreaterThan(0);
      expect(entry.year).toBe("2023-24");
    }
  });

  it("group CSR is always >= individual CSR", () => {
    for (const entry of CSR_DATA) {
      expect(entry.csrGroup).toBeGreaterThanOrEqual(entry.csrIndividual);
    }
  });

  it("has exactly one public insurer (LIC)", () => {
    const public_ = CSR_DATA.filter((d) => d.type === "Public");
    expect(public_.length).toBe(1);
    expect(public_[0].short).toBe("LIC");
  });

  it("all short names are unique", () => {
    const shorts = CSR_DATA.map((d) => d.short);
    expect(new Set(shorts).size).toBe(shorts.length);
  });
});
