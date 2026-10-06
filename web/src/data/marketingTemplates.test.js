import { describe, it, expect } from "vitest";
import { fillTemplate, getTemplatesByCategory, MARKETING_TEMPLATES, TEMPLATE_CATEGORIES } from "./marketingTemplates";

describe("marketingTemplates", () => {
  it("has all template categories", () => {
    expect(TEMPLATE_CATEGORIES).toHaveLength(4);
    expect(TEMPLATE_CATEGORIES.map((c) => c.id)).toContain("whatsapp");
    expect(TEMPLATE_CATEGORIES.map((c) => c.id)).toContain("social");
    expect(TEMPLATE_CATEGORIES.map((c) => c.id)).toContain("festival");
    expect(TEMPLATE_CATEGORIES.map((c) => c.id)).toContain("reminder");
  });

  it("has templates in each category", () => {
    for (const cat of TEMPLATE_CATEGORIES) {
      const templates = getTemplatesByCategory(cat.id);
      expect(templates.length).toBeGreaterThan(0);
    }
  });

  it("each template has required fields", () => {
    for (const t of MARKETING_TEMPLATES) {
      expect(t.id).toBeTruthy();
      expect(t.category).toBeTruthy();
      expect(t.title).toBeTruthy();
      expect(t.template).toBeTruthy();
      expect(t.placeholders).toBeTruthy();
      expect(Array.isArray(t.placeholders)).toBe(true);
    }
  });
});

describe("fillTemplate", () => {
  it("replaces placeholders with values", () => {
    const result = fillTemplate("Hello {name}, your phone is {phone}", {
      name: "Rajesh",
      phone: "9876543210",
    });
    expect(result).toBe("Hello Rajesh, your phone is 9876543210");
  });

  it("replaces multiple occurrences", () => {
    const result = fillTemplate("{name} says hello. {name} is here.", { name: "Test" });
    expect(result).toBe("Test says hello. Test is here.");
  });

  it("leaves unreferenced placeholders intact", () => {
    const result = fillTemplate("Hello {name}", {});
    expect(result).toBe("Hello {name}");
  });

  it("replaces with empty string when value is explicitly empty", () => {
    const result = fillTemplate("Hello {name}", { name: "" });
    expect(result).toBe("Hello ");
  });
});

describe("getTemplatesByCategory", () => {
  it("filters by category", () => {
    const whatsapp = getTemplatesByCategory("whatsapp");
    expect(whatsapp.length).toBeGreaterThan(0);
    expect(whatsapp.every((t) => t.category === "whatsapp")).toBe(true);
  });

  it("returns empty for unknown category", () => {
    expect(getTemplatesByCategory("unknown")).toHaveLength(0);
  });
});
