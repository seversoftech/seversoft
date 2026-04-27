"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const channels = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email Support",
    value: "info@seversoftech.com",
    href: "mailto:info@seversoftech.com",
    sla: "Response within 24 hours",
    accent: "#5eaefe",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+234 704 907 6570",
    href: "https://wa.me/2347049076570",
    sla: "Response within a few hours",
    accent: "#25d366",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "Schedule a Call",
    value: "Book a session",
    href: "https://calendly.com",
    sla: "Available Mon–Fri",
    accent: "#9b78ff",
  },
];

const faqs: { q: string; a: string; category: string }[] = [
  {
    category: "Getting Started",
    q: "How do I start a project with Seversoft?",
    a: "Fill out our Build With Us form with your project details. We'll review it and get back to you within one business day to discuss scope, timeline, and next steps.",
  },
  {
    category: "Getting Started",
    q: "What types of projects does Seversoft take on?",
    a: "We work on web and mobile apps, fintech platforms, AI-powered systems, APIs, business automation, cloud infrastructure, and more. If you're unsure, reach out and we'll let you know.",
  },
  {
    category: "Getting Started",
    q: "Do you work with startups or only established companies?",
    a: "Both. We work with early-stage startups, growth-stage companies, and established enterprises. Our approach adapts to your stage and budget.",
  },
  {
    category: "Billing & Payments",
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, card payments via Paystack/Monnify, and can accommodate other arrangements for larger engagements. All payment details are outlined in your project proposal.",
  },
  {
    category: "Billing & Payments",
    q: "Are your prices fixed or negotiable?",
    a: "Project quotes are based on scope and complexity. We're happy to discuss budget constraints — just be upfront about them in your project brief and we'll find a workable structure.",
  },
  {
    category: "Billing & Payments",
    q: "Do you offer refunds?",
    a: "Refund eligibility depends on the stage of the project and the terms in your service agreement. If you have a concern, contact us and we'll work toward a fair resolution.",
  },
  {
    category: "Technical",
    q: "Who owns the code and deliverables?",
    a: "Upon full payment, you own the custom code and deliverables built specifically for your project. Pre-existing Seversoft frameworks or licensed third-party components are licensed to you, not transferred.",
  },
  {
    category: "Technical",
    q: "Can I request changes after delivery?",
    a: "Yes. We offer a post-delivery revision window as specified in your project agreement. For ongoing support and maintenance, we also offer retainer arrangements.",
  },
  {
    category: "Technical",
    q: "Do you provide API documentation?",
    a: "Yes. All API integrations we build come with documentation covering endpoints, authentication, request/response formats, and error handling.",
  },
  {
    category: "Account & Access",
    q: "I forgot my account credentials. How do I recover them?",
    a: "Use the 'Forgot Password' flow on the relevant platform. If you're locked out entirely, contact us at info@seversoftech.com with your account details and we'll assist you.",
  },
  {
    category: "Account & Access",
    q: "How do I report a security issue?",
    a: "Please email info@seversoftech.com with 'Security Disclosure' in the subject line. Do not share vulnerability details publicly before we've had a chance to investigate. We aim to acknowledge all reports within 48 hours.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(15,20,26,0.08)",
        padding: "20px 0",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <strong style={{ fontSize: "1rem", color: "#1e293b", lineHeight: "1.5" }}>{q}</strong>
        <span style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: open ? "#2563eb" : "#f1f5f9",
          color: open ? "#fff" : "#64748b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: "1.2rem",
          fontWeight: 300,
          transition: "all 0.2s ease",
        }}>
          {open ? "−" : "+"}
        </span>
      </div>
      {open && (
        <p style={{ margin: "14px 0 0", color: "#475569", fontSize: "0.95rem", lineHeight: "1.75" }}>{a}</p>
      )}
    </div>
  );
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started");

  return (
    <main className="light-page">
      <Navbar />

      {/* ── Hero ── */}
      <section className="section section-light" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="shell" style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <span className="section-kicker kicker-with-dot">Support</span>
          <h1 style={{ marginTop: "20px", marginBottom: "16px", color: "var(--text-dark)" }}>
            How can we help you?
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(15,20,26,0.65)", lineHeight: "1.8" }}>
            Whether you have a technical question, billing concern, or just need guidance on starting a project — we&apos;re here and responsive. Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* ── Support Channels ── */}
      <section className="section section-light" style={{ paddingTop: "0" }}>
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  padding: "28px",
                  background: "#fff",
                  borderRadius: "20px",
                  border: "1px solid rgba(15,20,26,0.07)",
                  boxShadow: "0 4px 20px rgba(15,20,26,0.05)",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(15,20,26,0.1)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(15,20,26,0.05)"; }}
              >
                <span style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: `${ch.accent}15`,
                  color: ch.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {ch.icon}
                </span>
                <div>
                  <strong style={{ display: "block", fontSize: "1.05rem", color: "#1e293b", marginBottom: "4px" }}>{ch.label}</strong>
                  <span style={{ fontSize: "0.9rem", color: ch.accent, fontWeight: 600 }}>{ch.value}</span>
                </div>
                <span style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: 500, marginTop: "auto" }}>⏱ {ch.sla}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section section-light" style={{ paddingTop: "40px" }}>
        <div className="shell">
          <div className="section-heading centered reveal" style={{ maxWidth: "600px", margin: "0 auto 40px" }}>
            <span className="section-kicker kicker-with-dot">FAQ</span>
            <h2 style={{ color: "var(--text-dark)" }}>Frequently asked questions</h2>
            <p style={{ color: "rgba(15,20,26,0.65)" }}>Quick answers to the most common questions we receive.</p>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "40px" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border: activeCategory === cat ? "none" : "1px solid rgba(15,20,26,0.1)",
                  background: activeCategory === cat ? "#2563eb" : "#fff",
                  color: activeCategory === cat ? "#fff" : "#64748b",
                  fontFamily: "inherit",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            {faqs
              .filter((f) => f.category === activeCategory)
              .map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
          </div>
        </div>
      </section>

      {/* ── Still need help CTA ── */}
      <section className="section section-light" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
        <div className="shell">
          <div style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
            padding: "56px 40px",
            background: "linear-gradient(135deg, #f0f7ff, #f5f3ff)",
            borderRadius: "24px",
            border: "1px solid rgba(37,99,235,0.1)",
          }}>
            <h2 style={{ color: "#1e293b", marginBottom: "16px", fontSize: "2rem" }}>Still need help?</h2>
            <p style={{ color: "#475569", lineHeight: "1.75", marginBottom: "32px" }}>
              If you didn&apos;t find what you were looking for, send us a message directly. Our team typically responds within one business day.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/build-with-us" className="button button-primary">Send a Message</a>
              <a href="mailto:info@seversoftech.com" className="button button-secondary" style={{ background: "#fff", color: "#334155", borderColor: "rgba(15,20,26,0.15)" }}>
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
