import { describe, expect, it } from "vitest";

const CARD_THEMES = [
  { id: "classic_blue", name: "Classic Blue", primary: "#1e3a5f", accent: "#4a90d9" },
  { id: "royal_gold", name: "Royal Gold", primary: "#2c1810", accent: "#d4a843" },
  { id: "modern_green", name: "Modern Green", primary: "#0d3b2e", accent: "#00b894" },
  { id: "professional_grey", name: "Professional Grey", primary: "#2d3436", accent: "#6c5ce7" },
  { id: "lic_brand", name: "LIC Blue", primary: "#003366", accent: "#0066cc" },
  { id: "warm_maroon", name: "Warm Maroon", primary: "#4a0e0e", accent: "#c0392b" },
];

const DESIGNATIONS = [
  "LIC Agent",
  "Senior Business Consultant",
  "Chartered Life Underwriter",
  "Development Officer",
  "Branch Manager",
  "Insurance Advisor",
];

describe("BusinessCardCreator data", () => {
  it("has at least 6 card themes", () => {
    expect(CARD_THEMES.length).toBeGreaterThanOrEqual(6);
  });

  it("each theme has valid hex colors", () => {
    CARD_THEMES.forEach((t) => {
      expect(t.primary).toMatch(/^#[0-9a-f]{6}$/);
      expect(t.accent).toMatch(/^#[0-9a-f]{6}$/);
    });
  });

  it("each theme has unique id", () => {
    const ids = CARD_THEMES.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has LIC-specific designations", () => {
    expect(DESIGNATIONS).toContain("LIC Agent");
    expect(DESIGNATIONS).toContain("Development Officer");
  });

  it("has at least 5 designation options", () => {
    expect(DESIGNATIONS.length).toBeGreaterThanOrEqual(5);
  });

  it("share text generation works", () => {
    const name = "Rajesh Kumar";
    const code = "12345678";
    const phone = "+91 98765 43210";
    const text = `${name}\nLIC Agent\nAgent Code: ${code}\nPhone: ${phone}`;
    expect(text).toContain("Rajesh Kumar");
    expect(text).toContain("12345678");
    expect(text).toContain("+91");
  });
});
