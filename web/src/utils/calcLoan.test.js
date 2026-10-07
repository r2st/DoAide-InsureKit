import { describe, it, expect } from "vitest";
import { calculateLoanAgainstPolicy } from "./calcLoan";

describe("calculateLoanAgainstPolicy", () => {
  it("returns ineligible when less than 3 years paid", () => {
    const result = calculateLoanAgainstPolicy(50000, 1000000, 20, 2, 45);
    expect(result.eligible).toBe(false);
    expect(result.reason).toContain("3");
  });

  it("calculates max loan as 90% of surrender value", () => {
    const result = calculateLoanAgainstPolicy(50000, 1000000, 20, 10, 45);
    expect(result.eligible).toBe(true);
    expect(result.maxLoanAmount).toBeGreaterThan(0);
    expect(result.maxLoanAmount).toBe(Math.round(result.surrenderValue * 0.9));
  });

  it("calculates annual interest correctly", () => {
    const result = calculateLoanAgainstPolicy(50000, 1000000, 20, 10, 45);
    expect(result.eligible).toBe(true);
    const expectedInterest = Math.round(result.maxLoanAmount * result.loanInterestRate);
    expect(result.annualInterest).toBe(expectedInterest);
  });

  it("generates interest comparison table", () => {
    const result = calculateLoanAgainstPolicy(50000, 1000000, 20, 10, 45);
    expect(result.eligible).toBe(true);
    expect(result.interestComparison).toBeDefined();
    expect(result.interestComparison.length).toBeGreaterThan(0);
    const row = result.interestComparison[0];
    expect(row).toHaveProperty("loanAmount");
    expect(row).toHaveProperty("policyInterest");
    expect(row).toHaveProperty("bankInterest");
    expect(row).toHaveProperty("goldInterest");
    expect(row).toHaveProperty("savingsVsBank");
    expect(row.bankInterest).toBeGreaterThan(row.policyInterest);
  });

  it("includes a note about loan vs surrender", () => {
    const result = calculateLoanAgainstPolicy(50000, 1000000, 20, 10, 45);
    expect(result.note).toBeDefined();
    expect(result.note.length).toBeGreaterThan(0);
  });
});
