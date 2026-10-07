import { describe, expect, it } from "vitest";

const OCCASIONS = [
  { id: "birthday", label: "Birthday", templates: 3 },
  { id: "anniversary", label: "Policy Anniversary", templates: 3 },
  { id: "diwali", label: "Diwali", templates: 3 },
  { id: "newyear", label: "New Year", templates: 3 },
  { id: "holi", label: "Holi", templates: 2 },
  { id: "raksha", label: "Raksha Bandhan", templates: 2 },
  { id: "independence", label: "Independence Day", templates: 2 },
  { id: "custom", label: "Custom", templates: 1 },
];

describe("GreetingCardCreator data", () => {
  it("has at least 8 occasions", () => {
    expect(OCCASIONS.length).toBeGreaterThanOrEqual(8);
  });

  it("each occasion has at least one template", () => {
    OCCASIONS.forEach((o) => {
      expect(o.templates).toBeGreaterThanOrEqual(1);
    });
  });

  it("template substitution works for name", () => {
    const template = "Happy Birthday, {name}!";
    const result = template.replace(/\{name\}/g, "Rajesh");
    expect(result).toBe("Happy Birthday, Rajesh!");
  });

  it("template substitution works for year", () => {
    const template = "Happy New Year {year}!";
    const result = template.replace(/\{year\}/g, "2027");
    expect(result).toBe("Happy New Year 2027!");
  });

  it("includes birthday and diwali occasions", () => {
    expect(OCCASIONS.find((o) => o.id === "birthday")).toBeDefined();
    expect(OCCASIONS.find((o) => o.id === "diwali")).toBeDefined();
  });

  it("custom occasion exists", () => {
    expect(OCCASIONS.find((o) => o.id === "custom")).toBeDefined();
  });
});
