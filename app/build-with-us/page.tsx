"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const roles = [
  "Startup Founder",
  "Product Manager",
  "Business Owner",
  "Developer / Engineer",
  "Enterprise / Corporate",
  "Non-profit / NGO",
  "Other",
];

const services = [
  "Mobile App Development",
  "Web Platform / Dashboard",
  "Fintech & Utility Systems",
  "Design & UI/UX",
  "APIs & Developer Tooling",
  "White-label Solutions",
  "Registration & Compliance",
  "Business Automation",
  "Not sure yet — need consultation",
];

const budgets = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $10,000",
  "$10,000 – $50,000",
  "$50,000+",
  "Open to discussion",
];

const timelines = [
  "ASAP (within 2 weeks)",
  "1 – 3 months",
  "3 – 6 months",
  "6+ months",
  "Flexible / Not sure",
];

const sources = [
  "Google Search",
  "Social Media",
  "Referral from a friend",
  "LinkedIn",
  "Twitter / X",
  "A previous project",
  "Other",
];

export default function BuildWithUsPage() {
  const [commChannel, setCommChannel] = useState<"email" | "whatsapp">("email");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="top" className="light-page">
      <Navbar />

      <section className="section section-light bwu-section">
        <div className="shell bwu-grid">
          {/* ── Left panel ── */}
          <div className="bwu-left reveal">
            <span className="section-kicker kicker-with-dot">Let&apos;s Build Together</span>
            <h1 className="bwu-heading">
              Turn Your Vision Into a
              <span className="text-gradient"> Product That Performs.</span>
            </h1>
            <p className="bwu-lead">
              Whether you&apos;re launching from scratch, scaling an existing platform, or integrating
              smarter tech into your operations — Seversoft has the team, the tools, and the track
              record to make it happen.
            </p>

            <div className="bwu-trust">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                  title: "Fast turnaround",
                  desc: "From brief to build in days, not months.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  ),
                  title: "Secure by design",
                  desc: "Security-first architecture across every project.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="10" x2="6" y2="14" />
                      <line x1="18" y1="10" x2="18" y2="14" />
                    </svg>
                  ),
                  title: "Built to scale",
                  desc: "Systems that grow with your ambition.",
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bwu-trust-item">
                  <span className="bwu-trust-icon">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bwu-contact-links">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary button-small"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: "0.5em" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule a Call
              </a>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp button-small"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginRight: "0.5em" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right panel: Form ── */}
          <div className="bwu-right reveal reveal-delay">
            {submitted ? (
              <div className="bwu-success">
                <div className="bwu-success-icon">✓</div>
                <h2>Message received!</h2>
                <p>
                  We&apos;ve got your details and will be in touch within 24 hours. Expect something great.
                </p>
                <a href="/" className="button button-primary" style={{ marginTop: "24px" }}>
                  Back to Home
                </a>
              </div>
            ) : (
              <form className="bwu-form frame-card" onSubmit={handleSubmit} noValidate>
                <h2 className="bwu-form-title">Start a Project</h2>
                <p className="bwu-form-sub">
                  Fill in your details and we&apos;ll get back to you within one business day.
                </p>

                <div className="bwu-row">
                  <div className="bwu-field">
                    <label htmlFor="bwu-name">Full Name *</label>
                    <input id="bwu-name" type="text" placeholder="e.g. Amina Yusuf" required />
                  </div>
                  <div className="bwu-field">
                    <label htmlFor="bwu-email">Email Address *</label>
                    <input id="bwu-email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="bwu-row">
                  <div className="bwu-field">
                    <label htmlFor="bwu-phone">Phone Number</label>
                    <input id="bwu-phone" type="tel" placeholder="+234 800 000 0000" />
                  </div>
                  <div className="bwu-field">
                    <label htmlFor="bwu-role">Who are you? *</label>
                    <select id="bwu-role" required defaultValue="">
                      <option value="" disabled>Select your role</option>
                      {roles.map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div className="bwu-field">
                  <label>Preferred Communication Channel *</label>
                  <div className="bwu-toggle">
                    <button
                      type="button"
                      className={`bwu-toggle-btn${commChannel === "email" ? " active" : ""}`}
                      onClick={() => setCommChannel("email")}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      className={`bwu-toggle-btn${commChannel === "whatsapp" ? " active" : ""}`}
                      onClick={() => setCommChannel("whatsapp")}
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>

                <div className="bwu-row">
                  <div className="bwu-field">
                    <label htmlFor="bwu-service">What do you need help with? *</label>
                    <select id="bwu-service" required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="bwu-field">
                    <label htmlFor="bwu-budget">Budget Range</label>
                    <select id="bwu-budget" defaultValue="">
                      <option value="" disabled>Select budget range</option>
                      {budgets.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className="bwu-row">
                  <div className="bwu-field">
                    <label htmlFor="bwu-timeline">Timeline</label>
                    <select id="bwu-timeline" defaultValue="">
                      <option value="" disabled>Select timeline</option>
                      {timelines.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="bwu-field">
                    <label htmlFor="bwu-source">How did you hear about us?</label>
                    <select id="bwu-source" defaultValue="">
                      <option value="" disabled>Select an option</option>
                      {sources.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="bwu-field">
                  <label htmlFor="bwu-referral">
                    Referral Code <span className="bwu-optional">(Optional)</span>
                  </label>
                  <input id="bwu-referral" type="text" placeholder="e.g. ABC123XY" />
                  <span className="bwu-hint">If someone referred you, enter their referral code here.</span>
                </div>

                <div className="bwu-field">
                  <label htmlFor="bwu-message">Tell us about your project *</label>
                  <textarea
                    id="bwu-message"
                    rows={4}
                    placeholder="Describe what you're building, your goals, and any key challenges you're facing..."
                    required
                  />
                </div>

                <button type="submit" className="button button-primary bwu-submit">
                  Send My Project Brief
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "0.5em" }}>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-bottom">
          <span>© 2026 Seversoft Technologies. Built for confident digital growth.</span>
          <span className="status-pill"><i />Systems operational</span>
        </div>
      </footer>
    </main>
  );
}
