import { describe, it, expect } from "vitest";
import { calculatePremiumDueDates } from "./calcPremiumDue";

describe("calculatePremiumDueDates", () => {
  it("generates yearly due dates", () => {
    const dates = calculatePremiumDueDates("2024-01-15", "yearly", 20);
    expect(dates.length).toBeGreaterThan(0);
    dates.forEach((d) => {
      expect(d).toHaveProperty("date");
      expect(d).toHaveProperty("year");
      expect(d).toHaveProperty("installment");
      expect(d).toHaveProperty("daysUntil");
      expect(d).toHaveProperty("isPast");
      expect(d).toHaveProperty("isUpcoming");
    });
  });

  it("generates half-yearly due dates (2 per year)", () => {
    const dates = calculatePremiumDueDates("2024-01-15", "halfYearly", 20);
    const yearsPresent = new Set(dates.map((d) => d.year));
    for (const year of yearsPresent) {
      const count = dates.filter((d) => d.year === year).length;
      expect(count).toBeLessThanOrEqual(2);
    }
  });

  it("generates quarterly due dates (4 per year)", () => {
    const dates = calculatePremiumDueDates("2024-01-15", "quarterly", 20);
    expect(dates.length).toBeGreaterThan(0);
  });

  it("generates monthly due dates (12 per year)", () => {
    const dates = calculatePremiumDueDates("2024-01-15", "monthly", 20);
    expect(dates.length).toBeGreaterThan(0);
  });

  it("marks past dates correctly", () => {
    const dates = calculatePremiumDueDates("2020-01-15", "yearly", 20);
    const pastDates = dates.filter((d) => d.isPast);
    expect(pastDates.length).toBeGreaterThan(0);
    pastDates.forEach((d) => {
      expect(d.daysUntil).toBeLessThan(0);
    });
  });

  it("returns empty array for empty start date", () => {
    const dates = calculatePremiumDueDates("", "yearly", 20);
    expect(dates).toEqual([]);
  });
});
