import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesFlashcards from "@/components/ServicesFlashcards";
import Image from "next/image";
import type { CSSProperties } from "react";

type PartnerLogoStyle = CSSProperties & {
  "--hover-color": string;
};

const coreCapabilities = [
  "Web, mobile, desktop, and cross-platform software solutions",
  "AI tools, workflow automation, and intelligent product systems",
  "Fintech infrastructure for payments, utilities, and digital transactions",
];

const benefits = [
  {
    title: "Fast & Reliable",
    description: "Built for quick response times, stable flows, and dependable uptime across core transactions.",
  },
  {
    title: "Secure Infrastructure",
    description: "Security-first architecture with hardened systems, clean access control, and resilient integrations.",
  },
  {
    title: "Affordable Pricing",
    description: "Practical pricing models that help startups and established businesses grow without heavy overhead.",
  },
  {
    title: "Scalable Systems",
    description: "From MVP launches to higher transaction volumes, the stack is designed to grow with demand.",
  },
  {
    title: "24/7 Availability",
    description: "Always-on systems and responsive support designed for modern digital operations.",
  },
];

const reviews = [
  {
    quote:
      "Seversoft helped us launch a cleaner payment experience in weeks, not months. The platform felt stable from day one.",
    name: "Alex Johnson",
    role: "Operations Lead, Retail Logistics",
  },
  {
    quote:
      "Their team combines fintech understanding with strong engineering discipline. Integration was smooth and support has been excellent.",
    name: "Sarah Williams",
    role: "Founder, Fintech Startup",
  },
  {
    quote:
      "We needed something reliable, affordable, and scalable. Seversoft delivered all three without adding unnecessary complexity.",
    name: "Michael Chen",
    role: "Product Manager, Tech Solutions",
  },
];

const partners = [
  { name: "AWS", color: "#ff9900", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg" },
  { name: "Cloudinary", color: "#3448c5", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudinary.svg" },
  { name: "Docker", color: "#2496ed", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg" },
  { name: "Firebase", color: "#ffca28", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg" },
  { name: "Flutterwave", color: "#fb9129", logo: "https://www.google.com/s2/favicons?sz=128&domain=flutterwave.com" },
  { name: "GitHub", color: "#181717", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" },
  { name: "Google Cloud", color: "#4285f4", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecloud.svg" },
  { name: "MongoDB", color: "#47a248", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg" },
  { name: "Monnify", color: "#003399", logo: "https://www.google.com/s2/favicons?sz=128&domain=monnify.com" },
  { name: "OneSignal", color: "#eb4b26", logo: "https://www.google.com/s2/favicons?sz=128&domain=onesignal.com" },
  { name: "OpenAI", color: "#10a37f", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" },
  { name: "Paystack", color: "#00a3d9", logo: "https://www.google.com/s2/favicons?sz=128&domain=paystack.com" },
  { name: "Plaid", color: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Plaid_logo.svg" },
  { name: "PostgreSQL", color: "#336791", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg" },
  { name: "Redis", color: "#d82c20", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redis.svg" },
  { name: "Sentry", color: "#362d59", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sentry.svg" },
  { name: "Stripe", color: "#635bff", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg" },
  { name: "Supabase", color: "#3ecf8e", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/supabase.svg" },
  { name: "Twilio", color: "#f22f46", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twilio.svg" },
  { name: "Vercel", color: "#000000", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg" },
];

const codeSnippets = [
  {
    label: "Payments",
    lang: "javascript",
    code: `const express = require('express');
const { seversoft } = require('@seversoft/sdk');
const app = express();

// Create a high-throughput payment endpoint
app.post('/api/pay', async (req, res) => {
  const payment = await seversoft.payments.create({
    amount: req.body.amount,
    currency: 'NGN',
    recipient: req.body.bankCode
  });
  
  res.status(201).json(payment);
});`,
  },
  {
    label: "Wallets",
    lang: "javascript",
    code: `// Provision a dedicated business wallet
const wallet = await seversoft.wallets.provision({
  ownerId: "biz_8821",
  currency: "NGN",
  features: ["payouts", "inbound"],
  tier: "premium"
});

return wallet.accountNumber;
`,
  },
  {
    label: "Workflows",
    lang: "javascript",
    code: `// Automate bill payments
seversoft.workflows.on('invoice.created', async (event) => {
  await seversoft.bills.pay({
    provider: event.provider,
    amount: event.total,
    autoApprove: true
  });
});
`,
  },
];



function HeroVisual() {
  return (
    <div className="hero-metrics">
      <div className="uptime-card">
        <strong>Enterprise</strong>
        <span>Engineering Scale</span>
      </div>
      <div className="uptime-card">
        <strong>AI-Driven</strong>
        <span>Modern Intelligence</span>
      </div>
      <div className="uptime-card">
        <strong>99.9%</strong>
        <span>System Reliability</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Navbar />

      <section className="hero section section-dark">
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Innovation First</span>
            <h1>
              Software Solutions
              <br />
              for Every Platform.
              <br />
              <span className="text-gradient">AI Solutions for Modern Growth.</span>
            </h1>
            <div className="hero-trustline">
              <span>Software engineering</span>
              <span>AI systems</span>
              <span>Fintech products</span>
              <span>Registration & Compliance </span>
            </div>

            <div className="hero-status-card reveal reveal-delay-2">
              <div className="status-header">
                <span className="status-pulse"></span>
                <span>Live System Status</span>
              </div>
              <div className="status-grid">
                <div className="status-item">
                  <span className="status-label">Uptime</span>
                  <span className="status-value">99.99%</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Avg. Latency</span>
                  <span className="status-value">1.2ms</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Global Nodes</span>
                  <span className="status-value">24+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-content reveal reveal-delay">
            <p className="hero-subtitle">
              Designing and building modern software, fintech products, and AI-powered systems for businesses
              that want to grow with clarity, speed, and confidence.
            </p>
            <ul className="hero-points">
              {coreCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="button button-primary" href="/build-with-us">
                Get Started
              </a>
              <a className="button button-secondary" href="/services">
                Explore Services
              </a>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: "20px", paddingBottom: "72px" }}>
        <div className="shell">
          <div style={{ textAlign: "center", marginBottom: "42px" }}>
            <span style={{ fontSize: "0.70rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", opacity: 0.7 }}>
              Powering integrations with leading platforms and tools.
            </span>
          </div>
          <div className="logo-cloud">
            {partners.map((p, i) => (
              <div 
                key={p.name} 
                className="logo-item" 
                style={{ "--hover-color": p.color, animationDelay: `${i * 0.05}s` } as PartnerLogoStyle}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={18}
                  height={18}
                  className="partner-logo"
                  unoptimized
                  style={{ height: "18px", width: "auto", marginRight: "10px", opacity: 0.6, filter: "invert(1) brightness(2)", transition: "all 0.35s ease" }}
                />
                <span>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section-light about-section">
        <div className="shell about-grid">
          <div className="about-label reveal">
            <span className="eyebrow about-eyebrow">Inside Seversoft</span>
          </div>

          <div className="about-copy reveal reveal-delay">
            <h2>
              We engineer high-performance digital systems that empower ambitious businesses to scale with clarity,
              confidence, and modern execution.
            </h2>
            <p className="about-lead">
              Think of Seversoft as your technology partner, blending strategy, creativity, product thinking, and
              engineering discipline to turn bold ideas into dependable digital products.
            </p>
            <p>
              We support fintech teams, lenders, startups, and growth-focused businesses with solutions that simplify
              operations, sharpen customer experiences, and create room to scale with confidence.
            </p>
          </div>
        </div>

        <div className="shell about-panels">
          <article className="about-mission reveal">
            <div className="about-mission-copy">
              <span className="about-mini-kicker">Built with purpose</span>
              <h3>We build for real progress</h3>
              <p>
                We create practical digital solutions that solve meaningful problems, open new opportunities, and help
                ambitious teams grow with confidence...
              </p>

              <div className="visual-progress-chart">
                <svg viewBox="0 0 400 150" className="progress-svg">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--teal)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    className="chart-path-area"
                    d="M0,150 Q50,140 100,100 T200,80 T300,40 T400,10 L400,150 L0,150 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    className="chart-path-line"
                    d="M0,150 Q50,140 100,100 T200,80 T300,40 T400,10"
                    fill="none"
                    stroke="var(--teal)"
                    strokeWidth="3"
                  />
                  <circle cx="400" cy="10" r="4" fill="var(--teal)" className="chart-point">
                    <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </article>

          <article className="about-impact reveal reveal-delay">
            <span className="about-mini-kicker">Wider reach</span>
            <h3>Built to create impact across markets</h3>
            <p>
              From fintech products to business platforms, we design systems that adapt across industries,
              support growing teams, and deliver value wherever thoughtful technology is needed—across borders and in every part of the world.
            </p>

            <figure className="impact-photo">
              <Image
                src="/media/it_collaborators.png"
                alt="A diverse group of happy IT collaborators working together in a modern office"
                width={720}
                height={480}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </figure>

            <div className="impact-footer">
              <a className="button about-button" href="/build-with-us">
                Let&apos;s Talk
              </a>
            </div>
          </article>
        </div>
      </section>

      <ServicesFlashcards />

      <section className="section section-dark">
        <div className="shell">
          <div className="dev-preview-grid">
            <div className="reveal">
              <span className="section-kicker kicker-with-dot">Developer First</span>
              <h2>Built for builders. Designed for scale.</h2>
              <p style={{ color: "var(--text-soft)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "32px" }}>
                Our infrastructure is built API-first. Integrate payment flows, wallet systems, and automation triggers
                into your existing product with just a few lines of code.
              </p>
              <div style={{ display: "grid", gap: "20px" }}>
                {[
                  { title: "Clean REST APIs", desc: "Predictable, versioned JSON APIs." },
                  { title: "Webhook Events", desc: "Real-time updates for every transaction." },
                  { title: "Sandbox Mode", desc: "Test your logic before going live." }
                ].map(item => (
                  <div key={item.title} style={{ display: "flex", gap: "12px" }}>
                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--teal)", flexShrink: 0, marginTop: "4px", opacity: 0.3 }} />
                    <div>
                      <strong style={{ display: "block", color: "var(--text)", marginBottom: "4px" }}>{item.title}</strong>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-soft)" }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/documentation" className="button button-secondary" style={{ marginTop: "40px" }}>Explore Documentation</a>
            </div>

            <div className="terminal-window reveal reveal-delay">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span /> <span /> <span />
                </div>
                <div className="terminal-title">server.js</div>
              </div>
              <div className="terminal-body">
                <pre>
                  <code>{codeSnippets[0].code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="store" className="section section-light">
        <div className="shell">
          <div className="marketplace">
            <div className="marketplace-copy reveal">
              <span className="section-kicker kicker-with-dot">Our Ecosystem</span>
              <h2>Powering the next generation of digital infrastructure</h2>
              <p>
                Seversoft develops high-performance software, AI systems, and fintech infrastructure designed to
                scale with modern business demands across every industry.
              </p>
              <ul className="check-list">
                <li>Build Smart. Scale Fast. Grow Confidently.</li>
                <li>High-throughput transaction engines and secure payment flows</li>
                <li>AI-driven workflow automation and intelligent product systems</li>
              </ul>
              <a className="button button-primary" href="/services">
                Explore Our Solutions
              </a>
            </div>

            <div className="marketplace-panel reveal reveal-delay">
              <div className="marketplace-orb" />
              <div className="store-card store-card-main">
                <span className="store-tag">Infrastructure</span>
                <strong>Scalable. Secure. Reliable.</strong>
                <p>Enterprise-grade software and fintech infrastructure built for speed and long-term stability.</p>
              </div>
              <div className="store-card store-card-side">
                <span className="store-tag">AI Systems</span>
                <strong>Intelligent Workflows</strong>
                <p>Custom AI solutions designed to automate complex processes and drive data-led growth.</p>
              </div>
              <div className="store-card store-card-bottom">
                <span className="store-tag">Development</span>
                <strong>API-First Approach</strong>
                <p>Robust developer tools and APIs that integrate seamlessly into your existing product stack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="how-it-works frame-card reveal">
            <div className="section-heading compact">
              <span className="section-kicker kicker-with-dot">How It Works</span>
              <h2>Start transacting in four simple steps</h2>
            </div>

            <div className="steps-grid">
              {[
                ["Account Setup", "Register your enterprise or personal account and verify your identity for secure, full-scale access."],
                ["Instant Wallet", "Generate a business or personal wallet with unique identifiers in seconds."],
                ["Secure Funding", "Load your wallet through multiple payment channels to power your transactions and API tools."],
                ["Go Live", "Pay bills, automate operations, and connect your products to our high-throughput transaction engine."],
              ].map(([title, text], index) => (
                <article key={title} className="step-card">
                  <span className="step-number">{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <div className="section-heading reveal">
            <span className="section-kicker kicker-with-dot">Why Seversoft</span>
            <h2>Dependable systems with a premium operating standard</h2>
            <p>
              Seversoft combines modern engineering, practical business understanding, and reliable delivery across
              software platforms, AI systems, and fintech products.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <article key={item.title} className="benefit-card reveal" style={{ animationDelay: `${index * 70}ms` }}>
                <span className="benefit-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-light testimonials-section">
        <div className="shell">
          <div className="section-heading centered reveal">
            <span className="section-kicker kicker-with-dot">Testimonials</span>
            <h2>Trusted by teams that value speed and clarity</h2>
            <p>Clients choose Seversoft for thoughtful execution across software delivery, AI integration, and fintech systems.</p>
          </div>

          <div className="testimonials-grid">
            {reviews.map((review, index) => (
              <article key={review.name} className="testimonial-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
                <p className="testimonial-quote">“{review.quote}”</p>
                <div className="testimonial-meta">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-dark cta-section">
        <div className="shell">
          <div className="cta-panel reveal">
            <span className="section-kicker kicker-with-dot">Build With Us</span>
            <h2>Start Building or Transacting with Ease Today</h2>
            <p>
              Build with Seversoft for modern software solutions, AI-powered systems, and scalable infrastructure that
              propels your business forward.
            </p>
            <a className="button button-primary" href="/build-with-us">
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ marginLeft: "0.45em", verticalAlign: "middle", flexShrink: 0 }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
