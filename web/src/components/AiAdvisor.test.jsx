import { describe, it, expect, vi, beforeEach } from "vitest";
import { SUGGESTED_QUESTIONS, SYSTEM_PROMPT } from "./AiAdvisor";

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

  it("system prompt mentions LIC", () => {
    expect(SYSTEM_PROMPT).toContain("LIC");
    expect(SYSTEM_PROMPT).toContain("80C");
    expect(SYSTEM_PROMPT).toContain("bonus rates");
  });

  it("sends correct payload to Gemini API", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          candidates: [{ content: { parts: [{ text: "Test reply" }] } }],
        }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { sendToGemini } = await import("./AiAdvisor");
    const reply = await sendToGemini([{ role: "user", text: "Hello" }]);

    expect(reply).toBe("Test reply");
    expect(mockFetch).toHaveBeenCalledOnce();

    const [url, opts] = mockFetch.mock.calls[0];
    expect(url).toContain("generativelanguage.googleapis.com");
    expect(url).toContain("gemini-3.8-flash");
    expect(opts.method).toBe("POST");

    const body = JSON.parse(opts.body);
    expect(body.systemInstruction.parts[0].text).toContain("LIC");
    expect(body.contents[0].role).toBe("user");
    expect(body.contents[0].parts[0].text).toBe("Hello");
  });

  it("handles API error gracefully", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: () => Promise.resolve("Internal error"),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { sendToGemini } = await import("./AiAdvisor");
    await expect(sendToGemini([{ role: "user", text: "Hi" }])).rejects.toThrow("Gemini API error 500");
  });

  it("maps assistant role to model for Gemini", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          candidates: [{ content: { parts: [{ text: "OK" }] } }],
        }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { sendToGemini } = await import("./AiAdvisor");
    await sendToGemini([
      { role: "user", text: "Q1" },
      { role: "assistant", text: "A1" },
      { role: "user", text: "Q2" },
    ]);

    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.contents[0].role).toBe("user");
    expect(body.contents[1].role).toBe("model");
    expect(body.contents[2].role).toBe("user");
  });

  it("returns fallback when response has no candidates", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ candidates: [] }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const { sendToGemini } = await import("./AiAdvisor");
    const reply = await sendToGemini([{ role: "user", text: "Test" }]);
    expect(reply).toBe("Sorry, I couldn't generate a response.");
  });
});
