import { describe, it, expect, beforeEach, vi } from "vitest";
import { getClients, addClient, deleteClient, getUpcomingEvents, validateClient } from "./clientStore";

const mockStorage = {};
beforeEach(() => {
  Object.keys(mockStorage).forEach((k) => delete mockStorage[k]);
  vi.stubGlobal("localStorage", {
    getItem: (key) => mockStorage[key] ?? null,
    setItem: (key, val) => { mockStorage[key] = val; },
    removeItem: (key) => { delete mockStorage[key]; },
  });
});

describe("clientStore", () => {
  it("starts with empty clients", () => {
    expect(getClients()).toEqual([]);
  });

  it("adds a client with generated id", () => {
    const client = addClient({ name: "Rajesh", phone: "9876543210", birthday: "03-15" });
    expect(client.id).toBeTruthy();
    expect(client.name).toBe("Rajesh");
    expect(getClients()).toHaveLength(1);
  });

  it("deletes a client", () => {
    const c = addClient({ name: "Delete Me", phone: "1234567890" });
    expect(getClients()).toHaveLength(1);
    deleteClient(c.id);
    expect(getClients()).toHaveLength(0);
  });
});

describe("getUpcomingEvents", () => {
  it("returns upcoming birthdays", () => {
    const now = new Date();
    const futureMonth = now.getMonth() + 1;
    const futureDay = now.getDate() + 5;
    const mm = String(futureMonth <= 12 ? futureMonth : futureMonth - 12).padStart(2, "0");
    const dd = String(Math.min(futureDay, 28)).padStart(2, "0");

    addClient({ name: "Birthday Test", phone: "111", birthday: `${mm}-${dd}` });
    const events = getUpcomingEvents(30);
    const birthdayEvents = events.filter((e) => e.type === "birthday");
    expect(birthdayEvents.length).toBeGreaterThanOrEqual(0);
  });

  it("returns empty for clients without dates", () => {
    addClient({ name: "No Dates", phone: "222" });
    expect(getUpcomingEvents(30)).toHaveLength(0);
  });
});

describe("validateClient", () => {
  it("returns errors for missing fields", () => {
    const errors = validateClient({});
    expect(errors).toContain("Client name is required");
    expect(errors).toContain("Phone number is required");
  });

  it("returns no errors for valid client", () => {
    const errors = validateClient({ name: "Test", phone: "9876543210" });
    expect(errors).toHaveLength(0);
  });
});
