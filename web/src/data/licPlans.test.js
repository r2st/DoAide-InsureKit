import { describe, it, expect } from "vitest";
import { LIC_PLANS, getPlan, getPlansForComparison, getSRBRate, getFABRate, getSASlabBonus } from "./licPlans";

describe("LIC_PLANS data integrity", () => {
  it("has at least 15 plans", () => {
    expect(LIC_PLANS.length).toBeGreaterThanOrEqual(15);
  });

  it("each plan has required fields", () => {
    for (const plan of LIC_PLANS) {
      expect(plan.id).toBeTruthy();
      expect(plan.name).toBeTruthy();
      expect(typeof plan.tableNo).toBe("number");
      expect(plan.type).toBeTruthy();
      expect(typeof plan.minAge).toBe("number");
      expect(typeof plan.maxAge).toBe("number");
      expect(plan.description).toBeTruthy();
      expect(plan.features?.length).toBeGreaterThan(0);
    }
  });

  it("plan IDs are unique", () => {
    const ids = LIC_PLANS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("new plans", () => {
  it("includes Jeevan Tarun 734", () => {
    const plan = getPlan("jeevan_tarun_734");
    expect(plan).toBeTruthy();
    expect(plan.tableNo).toBe(734);
    expect(plan.type).toBe("child");
    expect(plan.srbRate).toBe(55);
  });

  it("includes Bima Jyoti 860", () => {
    const plan = getPlan("bima_jyoti_860");
    expect(plan).toBeTruthy();
    expect(plan.tableNo).toBe(860);
  });

  it("includes New Children's Money Back 732", () => {
    const plan = getPlan("new_children_money_back_732");
    expect(plan).toBeTruthy();
    expect(plan.survivalBenefits).toHaveLength(3);
  });

  it("includes Aadhaar Shila 744", () => {
    const plan = getPlan("aadhaar_shila_744");
    expect(plan).toBeTruthy();
    expect(plan.isForWomen).toBe(true);
  });

  it("includes Aadhaar Stambh 743", () => {
    const plan = getPlan("aadhaar_stambh_743");
    expect(plan).toBeTruthy();
    expect(plan.maxSA).toBe(300000);
  });

  it("includes Jeevan Amar 855", () => {
    const plan = getPlan("jeevan_amar_855");
    expect(plan).toBeTruthy();
    expect(plan.type).toBe("term");
  });
});

describe("getPlan", () => {
  it("returns plan by id", () => {
    expect(getPlan("jeevan_anand_715")?.name).toBe("New Jeevan Anand");
  });

  it("returns undefined for unknown id", () => {
    expect(getPlan("nonexistent")).toBeUndefined();
  });
});

describe("getPlansForComparison", () => {
  it("excludes govt and pension plans", () => {
    const plans = getPlansForComparison();
    expect(plans.every((p) => p.type !== "govt" && p.type !== "pension")).toBe(true);
  });
});

describe("getSRBRate", () => {
  it("returns fixed SRB rate", () => {
    const plan = getPlan("jeevan_anand_715");
    expect(getSRBRate(plan, 20)).toBe(45);
  });

  it("returns term-dependent SRB rate", () => {
    const plan = getPlan("new_endowment_714");
    expect(getSRBRate(plan, 15)).toBe(42);
    expect(getSRBRate(plan, 25)).toBe(48);
  });
});

describe("getFABRate", () => {
  it("returns FAB rate by term", () => {
    const plan = getPlan("jeevan_anand_715");
    expect(getFABRate(plan, 20)).toBe(25);
    expect(getFABRate(plan, 25)).toBe(180);
  });

  it("returns 0 for plans without FAB", () => {
    const plan = getPlan("tech_term_854");
    expect(getFABRate(plan, 20)).toBe(0);
  });
});

describe("getSASlabBonus", () => {
  it("returns slab bonus for Jeevan Labh SA >= 10L", () => {
    const plan = getPlan("jeevan_labh_736");
    expect(getSASlabBonus(plan, 1000000)).toBe(2);
  });

  it("returns 0 for SA below threshold", () => {
    const plan = getPlan("jeevan_labh_736");
    expect(getSASlabBonus(plan, 200000)).toBe(0);
  });
});
