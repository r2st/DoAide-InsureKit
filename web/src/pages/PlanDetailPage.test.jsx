import { describe, it, expect, vi } from "vitest";
import { getPlanBySlug, getRelatedPlans, LIC_PLANS } from "../data/licPlans";

describe("PlanDetailPage data integration", () => {
  it("every plan has a valid slug for routing", () => {
    for (const plan of LIC_PLANS) {
      expect(plan.slug).toBeTruthy();
      expect(plan.slug).toMatch(/^[a-z0-9-]+$/);
      expect(plan.slug).not.toContain("_");
    }
  });

  it("getPlanBySlug resolves for every plan", () => {
    for (const plan of LIC_PLANS) {
      const found = getPlanBySlug(plan.slug);
      expect(found).toBeTruthy();
      expect(found.id).toBe(plan.id);
    }
  });

  it("getRelatedPlans returns plans of the same type", () => {
    const plan = getPlanBySlug("jeevan-anand-715");
    const related = getRelatedPlans(plan);
    expect(related.length).toBeGreaterThan(0);
    for (const rp of related) {
      expect(rp.type).toBe(plan.type);
      expect(rp.id).not.toBe(plan.id);
    }
  });

  it("priority plans all have slugs that can be looked up", () => {
    const prioritySlugs = [
      "jeevan-anand-715",
      "jeevan-lakshya-733",
      "tech-term-854",
      "jeevan-umang-745",
      "money-back-20-720",
      "money-back-25-721",
      "jeevan-amar-855",
      "new-endowment-714",
      "jeevan-azad-868",
      "saral-pension-862",
      "new-jeevan-shanti-858",
      "siip-852",
      "jeevan-tarun-734",
      "micro-bachat-851",
      "dhan-sanchay-871",
      "pmjjby",
      "aam-aadmi-bima-yojana",
      "bima-jyoti-860",
      "jeevan-labh-736",
    ];
    for (const slug of prioritySlugs) {
      expect(getPlanBySlug(slug), `Missing plan for slug: ${slug}`).toBeTruthy();
    }
  });

  it("every plan description is non-empty", () => {
    for (const plan of LIC_PLANS) {
      expect(plan.description.length).toBeGreaterThan(10);
    }
  });
});
