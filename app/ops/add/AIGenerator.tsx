"use client";

import { useState } from "react";
import { slugify } from "@/lib/blog";

export function AIGenerator({ id }: { id: string }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a topic first.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate content");
      }

      // Update the DOM elements directly
      const titleEl = document.getElementById(`title-${id}`) as HTMLInputElement;
      if (titleEl && data.title) titleEl.value = data.title;

      const slugEl = document.getElementById(`slug-${id}`) as HTMLInputElement;
      if (slugEl && data.title) slugEl.value = slugify(data.title);

      const excerptEl = document.getElementById(`excerpt-${id}`) as HTMLTextAreaElement;
      if (excerptEl && data.excerpt) excerptEl.value = data.excerpt;

      const calloutEl = document.getElementById(`callout-${id}`) as HTMLInputElement;
      if (calloutEl && data.callout) calloutEl.value = data.callout;

      const contentEl = document.getElementById(`content-${id}`) as HTMLTextAreaElement;
      if (contentEl && data.content) contentEl.value = data.content;

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ops-panel frame-card" style={{ marginBottom: "1rem", background: "var(--color-bg-alt, #111)", padding: "1.5rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>✨ AI Content Generator</h3>
        <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", opacity: 0.7 }}>
          Enter a topic and let Groq AI draft the blog post for you.
        </p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. The future of scalable payment ledgers..."
          style={{ flex: 1 }}
          disabled={loading}
        />
        <button
          type="button"
          onClick={handleGenerate}
          className="button button-primary"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Draft"}
        </button>
      </div>

      {error && <div style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.5rem" }}>{error}</div>}
    </div>
  );
}
