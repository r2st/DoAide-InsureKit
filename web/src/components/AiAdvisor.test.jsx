import { describe, it, expect, vi, beforeEach } from "vitest";
import { SUGGESTED_QUESTIONS } from "./AiAdvisor";

describe("AiAdvisor", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("has four suggested questions", () => {
    expect(SUGGESTED_QUESTIONS).toHaveLength(4);
    expect(SUGGESTED_QUESTIONS).toContain("Which LIC plan has highest bonus?");
    expect(SUGGESTED_QUESTIONS).toContain("How to revive lapsed policy?");
    expect(SUGGESTED_QUESTIONS).toContain("Tax benefits on LIC premium?");
    expect(SUGGESTED_QUESTIONS).toContain("Best plan for child education?");
  });

  it("sends correct payload to backend proxy", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: "Test reply" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { askAdvisor } = await import("./AiAdvisor");
    const reply = await askAdvisor("Hello", []);

    expect(reply).toBe("Test reply");
    expect(mockFetch).toHaveBeenCalledOnce();

    const [url, opts] = mockFetch.mock.calls[0];
    expect(url).toBe("/api/advisor/ask");
    expect(opts.method).toBe("POST");

    const body = JSON.parse(opts.body);
    expect(body.message).toBe("Hello");
    expect(body.history).toEqual([]);
  });

  it("passes conversation history", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: "OK" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const history = [
      { role: "user", text: "Q1" },
      { role: "assistant", text: "A1" },
    ];

    const { askAdvisor } = await import("./AiAdvisor");
    await askAdvisor("Q2", history);

    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.message).toBe("Q2");
    expect(body.history).toEqual(history);
  });

  it("handles API error gracefully", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 502,
      text: () => Promise.resolve("Bad Gateway"),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { askAdvisor } = await import("./AiAdvisor");
    await expect(askAdvisor("Hi", [])).rejects.toThrow("Advisor API error 502");
  });

  it("returns fallback when reply is empty", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ reply: "" }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { askAdvisor } = await import("./AiAdvisor");
    const reply = await askAdvisor("Test", []);
    expect(reply).toBe("Sorry, I couldn't generate a response.");
  });
});
