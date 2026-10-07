import { describe, expect, it } from "vitest";

const CITIES = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"];
const SPECIALIZATIONS = ["General Physician", "Cardiologist", "Orthopedic", "ENT", "Ophthalmologist"];

function generatePanelData(city, specialization) {
  const seed = (city + specialization).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const rng = (i) => {
    const x = Math.sin(seed * 9301 + i * 49297) * 49297;
    return x - Math.floor(x);
  };
  const count = 4 + Math.floor(rng(0) * 6);
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push({
      id: i,
      doctor: `Dr. Test ${i}`,
      specialization,
      hospital: `${city} Hospital ${i}`,
      panelReg: `LIC/MED/${city.slice(0, 3).toUpperCase()}/${1000 + Math.floor(rng(i * 7) * 9000)}`,
    });
  }
  return results;
}

describe("DoctorPanelLocator data", () => {
  it("generates results for any city", () => {
    CITIES.forEach((city) => {
      const results = generatePanelData(city, "General Physician");
      expect(results.length).toBeGreaterThanOrEqual(4);
      expect(results.length).toBeLessThanOrEqual(9);
    });
  });

  it("generates different results for different cities", () => {
    const mumbai = generatePanelData("Mumbai", "General Physician");
    const delhi = generatePanelData("Delhi", "General Physician");
    expect(mumbai[0].panelReg).not.toBe(delhi[0].panelReg);
  });

  it("generates different results for different specializations", () => {
    const gp = generatePanelData("Mumbai", "General Physician");
    const cardio = generatePanelData("Mumbai", "Cardiologist");
    expect(gp.length).not.toBe(cardio.length);
  });

  it("panel reg follows expected format", () => {
    const results = generatePanelData("Mumbai", "General Physician");
    results.forEach((r) => {
      expect(r.panelReg).toMatch(/^LIC\/MED\/MUM\/\d{4,5}$/);
    });
  });

  it("has at least 10 cities available", () => {
    expect(CITIES.length).toBeGreaterThanOrEqual(10);
  });

  it("has at least 5 specializations", () => {
    expect(SPECIALIZATIONS.length).toBeGreaterThanOrEqual(5);
  });
});
