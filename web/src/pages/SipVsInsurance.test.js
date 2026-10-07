import { describe, it, expect } from "vitest";

function computeSIP(monthlyAmount, annualRate, years) {
  const monthlyRate = annualRate / 12;
  const months = years * 12;
  if (monthlyRate === 0) return monthlyAmount * months;
  return monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
}

function computeEndowmentMaturity(annualPremium, term, irrRate) {
  let fv = 0;
  for (let y = 1; y <= term; y++) {
    fv += annualPremium * Math.pow(1 + irrRate, term - y);
  }
  return fv;
}

describe("SIP vs Insurance calculations", () => {
  it("SIP with 0% return equals total invested", () => {
    const result = computeSIP(10000, 0, 20);
    expect(result).toBe(10000 * 240);
  });

  it("SIP with 12% return for 20 years produces expected corpus", () => {
    const result = computeSIP(10000, 0.12, 20);
    expect(result).toBeGreaterThan(9000000);
    expect(result).toBeLessThan(11000000);
  });

  it("endowment maturity at 5% IRR for 20 years is reasonable", () => {
    const annual = 120000;
    const result = computeEndowmentMaturity(annual, 20, 0.05);
    expect(result).toBeGreaterThan(annual * 20);
    expect(result).toBeLessThan(annual * 20 * 2);
  });

  it("SIP always beats endowment at same budget when SIP return > endowment IRR", () => {
    const budget = 10000;
    const term = 20;
    const sipReturn = 0.12;
    const endowmentIRR = 0.05;
    const termPremium = 500;
    const sipAmount = budget - termPremium;

    const sipCorpus = computeSIP(sipAmount, sipReturn, term);
    const endowmentMaturity = computeEndowmentMaturity(budget * 12, term, endowmentIRR);

    expect(sipCorpus).toBeGreaterThan(endowmentMaturity);
  });

  it("SIP returns scale linearly with monthly amount at 0%", () => {
    const r1 = computeSIP(5000, 0, 10);
    const r2 = computeSIP(10000, 0, 10);
    expect(r2).toBe(r1 * 2);
  });
});
