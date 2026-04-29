"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const upcomingDocs = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "REST API Reference",
    desc: "Full endpoint documentation covering authentication, requests, responses, and error codes for all Seversoft APIs.",
    status: "In Development",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Quick Start Guide",
    desc: "Step-by-step guide to making your first API call, setting up authentication, and handling webhook events.",
    status: "In Development",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "SDKs & Libraries",
    desc: "Official client libraries for Node.js, Python, and PHP to help you integrate Seversoft APIs into your stack faster.",
    status: "Planned",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
    title: "Webhook Events",
    desc: "Documentation for all real-time webhook events — transaction updates, wallet events, and system notifications.",
    status: "In Development",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Error Codes & Troubleshooting",
    desc: "A complete reference of error codes, their meanings, and recommended resolutions for common integration issues.",
    status: "Planned",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Security & Authentication",
    desc: "Best practices for API key management, request signing, IP whitelisting, and securing your integration.",
    status: "In Development",
  },
];

const overviewSections = [
  {
    heading: "How Seversoft APIs Work",
    body: "Seversoft exposes its infrastructure through a RESTful HTTP API. Every request requires an API key passed in the Authorization header. Responses are returned as JSON. We use standard HTTP status codes to indicate success or failure.",
  },
  {
    heading: "Environments",
    body: "We provide two environments: a Sandbox (for testing, no real transactions) and a Live environment (for production). API keys are environment-specific — sandbox keys will never affect real data.",
  },
  {
    heading: "Authentication",
    body: "All API requests must include your secret key in the Authorization header as a Bearer token. API keys are generated from your Seversoft dashboard. Keep your secret key confidential and never expose it client-side.",
  },
  {
    heading: "Rate Limits",
    body: "API rate limits are applied per API key. Exceeding a rate limit returns a 429 Too Many Requests response. Limits and quotas will be clearly defined per endpoint in the full API reference documentation.",
  },
];

export default function DocumentationPage() {
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState("");

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (email) setNotified(true);
  }

  return (
    <main className="light-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="section section-light" style={{ paddingTop: "80px", paddingBottom: "60px" }}>
        <div className="shell" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <span className="section-kicker kicker-with-dot">Documentation</span>
          <h1 style={{ marginTop: "20px", marginBottom: "16px", color: "var(--text-dark)" }}>
            Developer Documentation
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(15,20,26,0.65)", lineHeight: "1.8", maxWidth: "640px" }}>
            Everything you need to integrate Seversoft&apos;s infrastructure into your products — API references, guides, webhooks, SDKs, and more.
          </p>
        </div>
      </section>

      {/* ── API Under Development Banner ── */}
      <section style={{ background: "linear-gradient(135deg, #fff7ed, #fef3c7)", borderTop: "1px solid #fde68a", borderBottom: "1px solid #fde68a", padding: "28px 0" }}>
        <div className="shell" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <span style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#f59e0b20",
              color: "#d97706",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <div>
              <strong style={{ display: "block", fontSize: "1rem", color: "#92400e", marginBottom: "6px" }}>
                API Currently Under Development
              </strong>
              <p style={{ margin: 0, fontSize: "0.95rem", color: "#b45309", lineHeight: "1.7" }}>
                The Seversoft API is actively being built and is not yet available for public access. The documentation sections below reflect what will be available on launch. If you&apos;re interested in early access or want to be notified when the API goes live, register your interest below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="section section-light" style={{ paddingTop: "60px" }}>
        <div className="shell" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-dark)", marginBottom: "32px", fontSize: "1.8rem" }}>API Overview</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {overviewSections.map((s) => (
              <div key={s.heading} style={{
                padding: "24px 28px",
                background: "#fff",
                borderRadius: "14px",
                border: "1px solid rgba(15,20,26,0.07)",
                boxShadow: "0 2px 10px rgba(15,20,26,0.04)",
              }}>
                <h3 style={{ color: "#1e293b", fontSize: "1.05rem", marginBottom: "10px" }}>{s.heading}</h3>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.75", margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>

          {/* Sample snippet */}
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ color: "#1e293b", marginBottom: "16px" }}>Sample Request (Preview)</h3>
            <div style={{
              background: "#0f172a",
              borderRadius: "16px",
              padding: "28px",
              border: "1px solid rgba(255,255,255,0.06)",
              overflow: "auto",
            }}>
              <div style={{ fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                POST /v1/wallets/transfer
              </div>
              <pre style={{ margin: 0, color: "#94a3b8", lineHeight: "1.75", fontFamily: "monospace", fontSize: "0.85rem" }}>{`// Request headers
Authorization: Bearer sk_sandbox_xxxxxxxxxxxx
Content-Type: application/json

// Request body
{
  "from":      "wallet_abc123",
  "to":        "wallet_xyz789",
  "amount":    5000,
  "currency":  "NGN",
  "narration": "Payment for Invoice #1042"
}

// Response — 200 OK
{
  "status":    "success",
  "reference": "TXN_20260427_001",
  "amount":    5000,
  "currency":  "NGN",
  "balance":   45000,
  "timestamp": "2026-04-27T13:00:00Z"
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming Docs ── */}
      <section className="section section-light" style={{ paddingTop: "20px" }}>
        <div className="shell" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <h2 style={{ color: "var(--text-dark)", marginBottom: "8px", fontSize: "1.8rem" }}>What&apos;s Coming</h2>
          <p style={{ color: "rgba(15,20,26,0.6)", marginBottom: "36px" }}>These documentation sections are actively being written and will be published when the API launches.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
            {upcomingDocs.map((doc) => (
              <div key={doc.title} style={{
                padding: "24px",
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(15,20,26,0.07)",
                boxShadow: "0 2px 10px rgba(15,20,26,0.04)",
                opacity: 0.85,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ color: "#2563eb", background: "#eff6ff", padding: "10px", borderRadius: "10px", display: "flex" }}>
                    {doc.icon}
                  </span>
                  <span style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: doc.status === "In Development" ? "#fef3c7" : "#f1f5f9",
                    color: doc.status === "In Development" ? "#d97706" : "#64748b",
                  }}>
                    {doc.status}
                  </span>
                </div>
                <h3 style={{ color: "#1e293b", fontSize: "1rem", marginBottom: "8px" }}>{doc.title}</h3>
                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: "1.65", margin: 0 }}>{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notify Me ── */}
      <section className="section section-light" style={{ paddingTop: "20px", paddingBottom: "100px" }}>
        <div className="shell" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{
            padding: "48px 40px",
            background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
            borderRadius: "24px",
            border: "1px solid rgba(37,99,235,0.1)",
            textAlign: "center",
          }}>
            {notified ? (
              <>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #5eaefe, #4fd2c3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "1.5rem", color: "#0e141a" }}>✓</div>
                <h3 style={{ color: "#1e293b", marginBottom: "10px" }}>You&apos;re on the list!</h3>
                <p style={{ color: "#475569" }}>We&apos;ll notify you as soon as the Seversoft API is available for access.</p>
              </>
            ) : (
              <>
                <h2 style={{ color: "#1e293b", marginBottom: "12px", fontSize: "1.8rem" }}>Get Notified at Launch</h2>
                <p style={{ color: "#475569", marginBottom: "28px", lineHeight: "1.7" }}>
                  Enter your email and we&apos;ll let you know the moment the API and full documentation go live. No spam — just the launch update.
                </p>
                <form onSubmit={handleNotify} style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{
                      padding: "12px 20px",
                      borderRadius: "12px",
                      border: "1px solid rgba(15,20,26,0.12)",
                      background: "#fff",
                      fontSize: "0.95rem",
                      fontFamily: "inherit",
                      outline: "none",
                      width: "280px",
                      color: "#1e293b",
                    }}
                  />
                  <button type="submit" className="button button-primary">Notify Me</button>
                </form>
                <p style={{ marginTop: "16px", fontSize: "0.82rem", color: "#94a3b8" }}>
                  Or <a href="/build-with-us" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "underline" }}>contact us directly</a> to discuss early API access.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
