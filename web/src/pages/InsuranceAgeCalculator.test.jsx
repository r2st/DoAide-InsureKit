import { describe, expect, it } from "vitest";

function calcInsuranceAge(dobStr, refStr) {
  const d = new Date(dobStr);
  const r = new Date(refStr);
  let years = r.getFullYear() - d.getFullYear();
  let months = r.getMonth() - d.getMonth();
  let days = r.getDate() - d.getDate();
  if (days < 0) { months--; days += new Date(r.getFullYear(), r.getMonth(), 0).getDate(); }
  if (months < 0) { years--; months += 12; }
  return months > 6 || (months === 6 && days > 0) ? years + 1 : years;
}

describe("InsuranceAgeCalculator data", () => {
  it("returns completed years when within 6 months of birthday", () => {
    expect(calcInsuranceAge("1994-06-15", "2024-10-01")).toBe(30);
  });

  it("rounds up when past 6 months from birthday", () => {
    expect(calcInsuranceAge("1994-06-15", "2025-02-01")).toBe(31);
  });

  it("returns exact years on birthday", () => {
    expect(calcInsuranceAge("1994-06-15", "2024-06-15")).toBe(30);
  });

  it("rounds up at exactly 6 months + 1 day", () => {
    expect(calcInsuranceAge("1994-01-01", "2024-07-02")).toBe(31);
  });

  it("stays same age at exactly 6 months", () => {
    expect(calcInsuranceAge("1994-01-01", "2024-07-01")).toBe(30);
  });

  it("handles young ages", () => {
    expect(calcInsuranceAge("2020-01-01", "2024-04-01")).toBe(4);
  });
});
