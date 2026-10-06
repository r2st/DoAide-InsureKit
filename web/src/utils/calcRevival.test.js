import { describe, it, expect } from "vitest";
import { calculateRevival } from "./calcRevival";

describe("calculateRevival", () => {
  it("calculates revival for yearly mode", () => {
    const result = calculateRevival(50000, "yearly", 12, 1000000);
    expect(result.missedInstalments).toBe(1);
    expect(result.totalArrears).toBe(50000);
    expect(result.interest).toBeGreaterThan(0);
    expect(result.gstOnArrears).toBe(Math.round(50000 * 0.0225));
    expect(result.totalRevivalAmount).toBe(
      result.totalArrears + result.interest + result.gstOnArrears + result.lateFee,
    );
    expect(result.medicalRequired).toBe(false);
  });

  it("calculates revival for monthly mode", () => {
    const result = calculateRevival(50000, "monthly", 6, 1000000);
    expect(result.missedInstalments).toBe(6);
    expect(result.premiumPerInstalment).toBe(Math.round(50000 * 0.0875));
    expect(result.totalArrears).toBe(result.premiumPerInstalment * 6);
  });

  it("requires medical for lapse > 24 months", () => {
    const short = calculateRevival(50000, "yearly", 18, 1000000);
    expect(short.medicalRequired).toBe(false);

    const long = calculateRevival(50000, "yearly", 30, 1000000);
    expect(long.medicalRequired).toBe(true);
    expect(long.medicalNote).toContain("medical examination required");
  });

  it("handles quarterly mode correctly", () => {
    const result = calculateRevival(50000, "quarterly", 12, 500000);
    expect(result.missedInstalments).toBe(4);
    expect(result.premiumPerInstalment).toBe(Math.round(50000 * 0.2615));
  });

  it("interest increases with longer lapse", () => {
    const short = calculateRevival(50000, "yearly", 6, 1000000);
    const long = calculateRevival(50000, "yearly", 24, 1000000);
    expect(long.interest).toBeGreaterThan(short.interest);
  });

  it("total revival includes all components", () => {
    const result = calculateRevival(30000, "yearly", 12, 500000);
    expect(result.totalRevivalAmount).toBe(
      result.totalArrears + result.interest + result.gstOnArrears + result.lateFee,
    );
  });
});
