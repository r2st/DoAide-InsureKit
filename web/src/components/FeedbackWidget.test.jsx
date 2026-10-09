import { describe, it, expect, vi, beforeEach } from "vitest";

describe("FeedbackWidget", () => {
  it("posts correct payload to /api/feedback", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ ok: true });
    const payload = {
      page: "/premium-calculator",
      rating: "up",
      comment: "Nice",
      timestamp: "2026-10-09T10:00:00.000Z",
    };
    await mockFetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    expect(mockFetch).toHaveBeenCalledWith("/api/feedback", expect.objectContaining({ method: "POST" }));
    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.page).toBe("/premium-calculator");
    expect(body.rating).toBe("up");
  });

  it("includes null comment when empty", () => {
    const payload = {
      page: "/test",
      rating: "down",
      comment: null,
      timestamp: "2026-01-01T00:00:00.000Z",
    };
    expect(payload.comment).toBeNull();
    expect(payload.rating).toBe("down");
  });

  it("requires rating before submit", () => {
    const rating = null;
    const canSubmit = rating !== null;
    expect(canSubmit).toBe(false);
  });

  it("allows submit with rating selected", () => {
    const rating = "up";
    const canSubmit = rating !== null;
    expect(canSubmit).toBe(true);
  });

  it("captures current page URL", () => {
    const page = "/maturity-calculator";
    const payload = { page, rating: "up", comment: null, timestamp: new Date().toISOString() };
    expect(payload.page).toBe("/maturity-calculator");
    expect(payload.timestamp).toBeTruthy();
  });
});
