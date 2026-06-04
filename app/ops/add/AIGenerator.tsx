"use client";

import { useState } from "react";
import { slugify } from "@/lib/blog";

const RANDOM_TOPICS = [
  // AI & Machine Learning
  "How artificial intelligence is reshaping digital banking",
  "Machine learning for real-time fraud detection",
  "The rise of generative AI in customer support",
  "Building LLM-powered applications: A practical guide",
  "AI-driven personalization in e-commerce platforms",
  "Ethical considerations in algorithmic decision making",
  "Predictive analytics for modern inventory management",
  "Leveraging AI for automated code reviews and testing",
  "Vector databases: The backbone of modern AI apps",
  "Demystifying RAG (Retrieval-Augmented Generation)",

  // Fintech & Payments
  "The evolution of payment gateways in e-commerce",
  "The role of blockchain in cross-border transactions",
  "The impact of open banking on traditional financial institutions",
  "Designing accessible and secure fintech user interfaces",
  "A guide to webhook security in payment processing",
  "Building compliant onboarding flows for financial apps",
  "The future of decentralized finance (DeFi)",
  "Integrating multi-currency wallets in mobile apps",
  "Smart contracts and the future of escrow services",
  "Navigating regulatory compliance in fintech startups",

  // Software Engineering & Architecture
  "Building robust microservices for financial platforms",
  "Strategies for scaling high-throughput APIs",
  "Using WebSockets for real-time financial market data",
  "Event-driven architecture: When and why to use it",
  "The transition from monoliths to serverless microservices",
  "GraphQL vs REST: Choosing the right API paradigm",
  "Managing state in large-scale React applications",
  "Building offline-first progressive web apps (PWAs)",
  "Effective caching strategies for high-traffic websites",
  "Optimizing frontend performance for better Core Web Vitals",

  // DevOps & Cloud Infrastructure
  "Exploring the benefits of serverless architecture for startups",
  "Best practices for database migrations with zero downtime",
  "Infrastructure as Code: Managing deployments with Terraform",
  "Implementing continuous integration for mobile apps",
  "Kubernetes for beginners: Orchestrating containers",
  "Monitoring and observability in distributed systems",
  "The shift towards multi-cloud and hybrid environments",
  "Chaos engineering: Building resilient infrastructure",
  "Automating database backups and disaster recovery",
  "Understanding edge computing and its use cases",

  // Security & Compliance
  "Understanding PCI DSS compliance in modern web apps",
  "Implementing zero-trust security in financial applications",
  "Defending against OWASP Top 10 vulnerabilities",
  "Best practices for secure user authentication and authorization",
  "The role of penetration testing in software delivery",
  "Securing supply chains in modern software development",
  "Data privacy laws: GDPR, CCPA, and building compliant apps",
  "Strategies for managing API rate limiting and DDoS attacks",
  "End-to-end encryption in real-time messaging apps",
  "OAuth 2.0 and OpenID Connect explained simply",

  // Product Strategy & Operations
  "Bridging the gap between engineering and product teams",
  "The importance of user-centered design in enterprise software",
  "Agile methodologies: Finding the right fit for your team",
  "Measuring technical debt and when to refactor",
  "Building a culture of engineering excellence",
  "The economics of technical decisions in early-stage startups",
  "Effective strategies for developer onboarding",
  "Open source contributions and building a tech brand",
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
