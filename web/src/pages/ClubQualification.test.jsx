import { describe, expect, it } from "vitest";

const CLUBS = [
  { id: "branch_manager", criteria: { minPolicies: 12, minFirstYearPremium: 200000, minLives: 8 } },
  { id: "divisional_manager", criteria: { minPolicies: 24, minFirstYearPremium: 500000, minLives: 16 } },
  { id: "zonal_manager", criteria: { minPolicies: 40, minFirstYearPremium: 1000000, minLives: 25 } },
  { id: "chairman", criteria: { minPolicies: 70, minFirstYearPremium: 2000000, minLives: 45 } },
  { id: "mdrt", criteria: { minPolicies: 0, minFirstYearPremium: 3500000, minLives: 0 } },
];

function getQualification(policies, fyp, lives) {
  return CLUBS.map((club) => {
    const c = club.criteria;
    const qualified = policies >= c.minPolicies && fyp >= c.minFirstYearPremium && lives >= c.minLives;
    return { id: club.id, qualified };
  });
}

describe("ClubQualification data", () => {
  it("no club qualified with zero progress", () => {
    const results = getQualification(0, 0, 0);
    expect(results.every((r) => !r.qualified)).toBe(true);
  });

  it("qualifies for branch manager club", () => {
    const results = getQualification(12, 200000, 8);
    expect(results.find((r) => r.id === "branch_manager").qualified).toBe(true);
  });

  it("does not qualify for divisional with only branch-level numbers", () => {
    const results = getQualification(12, 200000, 8);
    expect(results.find((r) => r.id === "divisional_manager").qualified).toBe(false);
  });

  it("qualifies for all clubs with chairman-level numbers", () => {
    const results = getQualification(70, 2000000, 45);
    expect(results.find((r) => r.id === "branch_manager").qualified).toBe(true);
    expect(results.find((r) => r.id === "divisional_manager").qualified).toBe(true);
    expect(results.find((r) => r.id === "zonal_manager").qualified).toBe(true);
    expect(results.find((r) => r.id === "chairman").qualified).toBe(true);
  });

  it("MDRT only requires FYP", () => {
    const results = getQualification(0, 3500000, 0);
    expect(results.find((r) => r.id === "mdrt").qualified).toBe(true);
  });

  it("clubs are in ascending order of difficulty", () => {
    for (let i = 1; i < CLUBS.length - 1; i++) {
      expect(CLUBS[i].criteria.minFirstYearPremium).toBeGreaterThan(CLUBS[i - 1].criteria.minFirstYearPremium);
    }
  });
});
