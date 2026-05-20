"use client";

import { useState } from "react";
import { slugify } from "@/lib/blog";

const RANDOM_TOPICS = [
  "How artificial intelligence is reshaping digital banking",
  "The evolution of payment gateways in e-commerce",
  "Building robust microservices for financial platforms",
  "Understanding PCI DSS compliance in modern web apps",
  "The role of blockchain in cross-border transactions",
  "Strategies for scaling high-throughput APIs",
  "Machine learning for real-time fraud detection",
  "Designing accessible and secure fintech user interfaces",
  "A guide to webhook security in payment processing",
  "Exploring the benefits of serverless architecture for startups",
  "Implementing zero-trust security in financial applications",
  "The impact of open banking on traditional financial institutions",
  "Best practices for database migrations with zero downtime",
  "Using WebSockets for real-time financial market data",
];

export function AIGenerator({ id }: { id: string }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRandomTopic = () => {
    const random = RANDOM_TOPICS[Math.floor(Math.random() * RANDOM_TOPICS.length)];
    setPrompt(random);
  };

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

      const categoryEl = document.getElementById(`category-${id}`) as HTMLSelectElement;
      if (categoryEl && data.category) categoryEl.value = data.category;

      const contentEl = document.getElementById(`content-${id}`) as HTMLTextAreaElement;
      if (contentEl && data.content) contentEl.value = data.content;

      const readTimeEl = document.getElementById(`readTime-${id}`) as HTMLInputElement;
      if (readTimeEl && data.readTime) readTimeEl.value = data.readTime;

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to generate content";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ops-panel frame-card" style={{ marginBottom: "1rem", background: "var(--color-bg-alt, #111)", padding: "1.5rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 600 }}>✨ AI Content Generator</h3>
        <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem", opacity: 0.7 }}>
          Enter a topic and let AI draft the blog post for you.
        </p>
      </div>

      <div className="ops-ai-bar">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. The future of scalable payment ledgers..."
          disabled={loading}
        />
        <div className="ops-ai-actions">
          <button
          type="button"
          onClick={handleRandomTopic}
          className="button button-secondary"
          disabled={loading}
          title="Pick a random topic"
          style={{ padding: "0 1rem" }}
        >
          🎲
        </button>
        <button
          type="button"
          onClick={handleGenerate}
          className="button button-primary"
          disabled={loading}
          >
            {loading ? "Generating..." : "Generate Draft"}
          </button>
        </div>
      </div>

      {error && <div style={{ color: "#ef4444", fontSize: "0.875rem", marginTop: "0.5rem" }}>{error}</div>}
    </div>
  );
}
