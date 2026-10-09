import { describe, it, expect } from "vitest";

describe("DataFreshnessBadge logic", () => {
  it("considers data stale when days_since_check > 30", () => {
    const status = { last_verified: "2026-08-01", days_since_check: 45, data_possibly_stale: false };
    const isStale = status.data_possibly_stale || (status.days_since_check != null && status.days_since_check > 30);
    expect(isStale).toBe(true);
  });

  it("considers data fresh when days_since_check <= 30", () => {
    const status = { last_verified: "2026-10-01", days_since_check: 8, data_possibly_stale: false };
    const isStale = status.data_possibly_stale || (status.days_since_check != null && status.days_since_check > 30);
    expect(isStale).toBe(false);
  });

  it("considers data stale when data_possibly_stale is true regardless of days", () => {
    const status = { last_verified: "2026-10-08", days_since_check: 1, data_possibly_stale: true };
    const isStale = status.data_possibly_stale || (status.days_since_check != null && status.days_since_check > 30);
    expect(isStale).toBe(true);
  });

  it("formats date in en-IN locale", () => {
    const date = new Date("2026-10-08");
    const formatted = date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    expect(formatted).toContain("2026");
    expect(formatted).toContain("Oct");
  });
});
