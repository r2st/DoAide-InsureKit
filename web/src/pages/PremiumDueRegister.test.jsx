import { describe, expect, it } from "vitest";
import { validatePolicy } from "../utils/policyStore";

describe("PremiumDueRegister data", () => {
  it("validates required policy fields", () => {
    const errors = validatePolicy({});
    expect(errors.length).toBeGreaterThan(0);
    expect(errors).toContain("Policy number is required");
    expect(errors).toContain("Policy holder name is required");
  });

  it("accepts a valid policy", () => {
    const errors = validatePolicy({
      policyNumber: "123456789",
      holderName: "Test Client",
      planName: "Jeevan Anand",
      sumAssured: 1000000,
      premium: 50000,
    });
    expect(errors.length).toBe(0);
  });

  it("rejects negative sum assured", () => {
    const errors = validatePolicy({
      policyNumber: "123",
      holderName: "Test",
      planName: "Test Plan",
      sumAssured: -100,
      premium: 5000,
    });
    expect(errors).toContain("Sum assured must be positive");
  });

  it("rejects zero premium", () => {
    const errors = validatePolicy({
      policyNumber: "123",
      holderName: "Test",
      planName: "Test Plan",
      sumAssured: 100000,
      premium: 0,
    });
    expect(errors).toContain("Premium must be positive");
  });
});
