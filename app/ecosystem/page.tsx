"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  {
    tag: "Fintech Infrastructure",
    name: "Softpay",
    desc: "A high-throughput digital wallet and payment engine built for businesses. Power bill payments, fund transfers, and utility transactions at scale.",
    features: ["Digital Wallets", "Bill Payments", "Utility APIs", "Transaction Monitoring"],
    accent: "#5eaefe",
  },
  {
    tag: "Developer Platform",
    name: "Seversoft API",
    desc: "A clean, RESTful API layer that lets businesses integrate Seversoft infrastructure directly into their own products. Built API-first for speed and reliability.",
    features: ["REST & Webhook APIs", "Sandbox Environment", "Authentication & Tokens", "Rate Limiting"],
    accent: "#4fd2c3",
  },
  {
    tag: "Business Automation",
    name: "Workflow Engine",
    desc: "An intelligent automation layer that connects your business logic, triggers, and integrations. Reduce manual operations with self-running systems.",
    features: ["Event-Driven Triggers", "Multi-step Automations", "Third-party Connectors", "Audit Logs"],
    accent: "#9b78ff",
  },
];

const stack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs"] },
  { category: "Infrastructure", items: ["AWS", "Google Cloud", "Docker"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "AI & ML", items: ["OpenAI", "LangChain", "Custom Models"] },
  { category: "Security", items: ["JWT Auth", "OAuth 2.0", "RBAC"] },
];

const integrations = [
  { name: "Paystack", type: "Payments" },
  { name: "Monnify", type: "Payments" },
  { name: "Flutterwave", type: "Payments" },
  { name: "AWS", type: "Cloud" },
  { name: "Google Cloud", type: "Cloud" },
  { name: "Twilio", type: "Communications" },
  { name: "Sendgrid", type: "Email" },
  { name: "Firebase", type: "Auth & DB" },
  { name: "BVN / NIN APIs", type: "Identity" },
  { name: "NIBSS", type: "Banking" },
  { name: "Stripe", type: "Payments" },
  { name: "Cloudinary", type: "Media" },
];

export default function EcosystemPage() {
  return (
    <main id="top">
      <Navbar />

      <section className="section section-dark ecosystem-hero" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <div className="shell" style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
          <span className="section-kicker kicker-with-dot">The Seversoft Ecosystem</span>
          <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
            One Connected Infrastructure.<br />
            <span className="text-gradient">Built for Modern Business.</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-soft)", lineHeight: "1.8", marginBottom: "40px" }}>
            Seversoft is more than a software agency. We build and expand a connected ecosystem of fintech tools, developer APIs, and business automation systems — all engineered to help ambitious companies grow with confidence.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/build-with-us" className="button button-primary">Build With Us</a>
            <a href="/services" className="button button-secondary">Explore Services</a>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading reveal">
            <span className="section-kicker kicker-with-dot">Core Products</span>
            <h2>Products we own and operate</h2>
            <p>Proprietary platforms built by Seversoft and deployed for real-world business use cases across payments, automation, and developer infrastructure.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "48px" }}>
            {products.map((p) => (
              <article key={p.name} className="frame-card" style={{ padding: "32px" }}>
                <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: p.accent, marginBottom: "14px", border: `1px solid ${p.accent}30`, padding: "4px 12px", borderRadius: "999px" }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px", color: "var(--text)" }}>{p.name}</h3>
                <p style={{ color: "var(--text-soft)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "24px" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: p.accent, flexShrink: 0, display: "inline-block" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <div className="section-heading reveal">
            <span className="section-kicker kicker-with-dot">Technology Stack</span>
            <h2 style={{ color: "var(--text-dark)" }}>What we build with</h2>
            <p style={{ color: "rgba(15,20,26,0.7)" }}>We choose tools based on performance, scalability, and long-term maintainability — not trends.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "48px" }}>
            {stack.map((s) => (
              <div key={s.category} style={{ padding: "24px", background: "#fff", borderRadius: "16px", border: "1px solid rgba(15,20,26,0.07)", boxShadow: "0 4px 20px rgba(15,20,26,0.04)" }}>
                <h3 style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: "14px" }}>{s.category}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.items.map((item) => (
                    <span key={item} style={{ fontSize: "0.84rem", fontWeight: 600, color: "#1e293b", background: "#f1f5f9", padding: "4px 12px", borderRadius: "8px" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "80px" }}>
        <div className="shell">
          <div className="section-heading reveal">
            <span className="section-kicker kicker-with-dot">Integration Partners</span>
            <h2 style={{ color: "var(--text-dark)" }}>Connected to what powers modern business</h2>
            <p style={{ color: "rgba(15,20,26,0.7)" }}>Our ecosystem integrates with leading platforms across payments, cloud, identity, communications, and banking infrastructure.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "14px", marginTop: "40px" }}>
            {integrations.map((int) => (
              <div key={int.name} style={{ padding: "18px 20px", background: "#fff", borderRadius: "12px", border: "1px solid rgba(15,20,26,0.07)", boxShadow: "0 2px 10px rgba(15,20,26,0.04)" }}>
                <strong style={{ fontSize: "0.95rem", color: "#1e293b", display: "block", marginBottom: "4px" }}>{int.name}</strong>
                <span style={{ fontSize: "0.76rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{int.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: '140px' }}>
        <div className="shell">
          <div className="dev-first-grid">
            <div>
              <span className="section-kicker kicker-with-dot" style={{ marginTop: '20px' }}>Developer First</span>
              <h2 style={{ marginTop: "20px" }}>API-first. Built for builders.</h2>
              <p style={{ color: "var(--text-soft)", lineHeight: "1.8", marginBottom: "28px" }}>
                Every product in the Seversoft ecosystem is designed with developers in mind. Clean REST APIs, predictable responses, webhooks, and sandbox environments — so your team can integrate fast and ship with confidence.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {["RESTful APIs with versioned endpoints", "Webhook events for real-time updates", "Sandbox environments for safe testing", "API keys with scoped permissions", "Detailed request/response logging"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-soft)", fontSize: "0.95rem" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--teal)", flexShrink: 0, display: "inline-block", boxShadow: "0 0 8px rgba(79,210,195,0.5)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/build-with-us" className="button button-primary">Request API Access</a>
            </div>
            <div className="frame-card" style={{ padding: "28px" }}>
              <div style={{ color: "var(--text-muted)", marginBottom: "16px", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Sample API Request</div>
              <pre style={{ margin: 0, color: "var(--text-soft)", lineHeight: "1.7", fontFamily: "monospace", fontSize: "0.82rem", overflowX: "auto" }}>{`POST /v1/wallets/transfer
Authorization: Bearer sk_live_xxxx

{
  "from": "wallet_abc123",
  "to":   "wallet_xyz789",
  "amount": 5000,
  "currency": "NGN",
  "narration": "Invoice #1042"
}

// Response 200
{
  "status": "success",
  "reference": "TXN_20260427",
  "balance": 45000
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section">
        <div className="shell">
          <div className="cta-panel reveal">
            <span className="section-kicker kicker-with-dot">Join the Ecosystem</span>
            <h2>Build on infrastructure that scales with you</h2>
            <p>Whether you&apos;re integrating our APIs, launching on our platforms, or building something entirely new — Seversoft is ready to power your next move.</p>
            <a className="button button-primary" href="/build-with-us">
              Start Building
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "0.45em", verticalAlign: "middle" }}>
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
