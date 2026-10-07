import { describe, expect, it } from "vitest";

const RIDERS = [
  { id: "adb", rates: { 18: 1.00, 30: 1.00, 35: 1.50, 40: 2.00 }, gstRate: 0.18 },
  { id: "ci_rider", rates: { 18: 1.20, 30: 2.20, 35: 3.50 }, gstRate: 0.18 },
];

function getRiderRate(rider, age) {
  const ages = Object.keys(rider.rates).map(Number).sort((a, b) => a - b);
  let ageKey = ages[0];
  for (const a of ages) { if (a <= age) ageKey = a; else break; }
  return rider.rates[ageKey];
}

describe("RiderPremiumCalculator data", () => {
  it("gets correct ADB rate for age 30", () => {
    const rate = getRiderRate(RIDERS[0], 30);
    expect(rate).toBe(1.00);
  });

  it("gets nearest lower age bracket", () => {
    const rate = getRiderRate(RIDERS[0], 33);
    expect(rate).toBe(1.00);
  });

  it("calculates annual rider premium", () => {
    const rate = getRiderRate(RIDERS[0], 30);
    const sa = 1000000;
    const premium = Math.round((rate / 1000) * sa);
    expect(premium).toBe(1000);
  });

  it("calculates GST on rider", () => {
    const rider = RIDERS[0];
    const premium = 1000;
    const gst = Math.round(premium * rider.gstRate);
    expect(gst).toBe(180);
  });

  it("critical illness rider costs more at older age", () => {
    const ci = RIDERS[1];
    expect(getRiderRate(ci, 35)).toBeGreaterThan(getRiderRate(ci, 30));
  });

  it("calculates total over term", () => {
    const rate = getRiderRate(RIDERS[0], 30);
    const annual = Math.round((rate / 1000) * 1000000);
    const gst = Math.round(annual * 0.18);
    const total = (annual + gst) * 20;
    expect(total).toBe(23600);
  });
});
