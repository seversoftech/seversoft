import Navbar from "@/components/Navbar";
import ServicesFlashcards from "@/components/ServicesFlashcards";

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
    name: "Amina Yusuf",
    role: "Operations Lead, Lagos retail brand",
  },
  {
    quote:
      "Their team combines fintech understanding with strong engineering discipline. Integration was smooth and support has been excellent.",
    name: "Tunde Afolabi",
    role: "Founder, digital services startup",
  },
  {
    quote:
      "We needed something reliable, affordable, and scalable. Seversoft delivered all three without adding unnecessary complexity.",
    name: "Ifeoma Nnadi",
    role: "Product Manager, business automation firm",
  },
];

const footerLinks = {
  company: ["About", "Services", "Store", "Testimonials"],
  resources: ["Documentation", "API Access", "Support", "Contact"],
  legal: ["Privacy Policy", "Terms of Service", "Compliance", "Cookies"],
};

function HeroVisual() {
  return (
    <div className="hero-visual frame-card">
      <div className="hero-visual-glow hero-visual-glow-a" />
      <div className="hero-visual-glow hero-visual-glow-b" />
      <img 
        src="/media/hero_tech_team.png" 
        alt="Seversoft technology team collaborating with modern gadgets"
        className="hero-image"
      />
      <div className="uptime-card">
        <strong>99.9%</strong>
        <span>Transaction uptime</span>
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
            <p className="hero-subtitle">
              Seversoft designs and builds modern software, fintech products, and AI-powered systems for businesses
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
            <div className="hero-trustline">
              <span>Software engineering</span>
              <span>AI systems</span>
              <span>Fintech products</span>
            </div>
          </div>

          <div className="reveal reveal-delay">
            <HeroVisual />
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
              We&apos;re crafting digital experiences that propel ambitious businesses forward with clarity,
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
                ambitious teams grow with confidence.
              </p>
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
              <img
                src="https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="A joyful multiracial group of people laughing together indoors"
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

      <section id="store" className="section section-light">
        <div className="shell">
          <div className="marketplace">
            <div className="marketplace-copy reveal">
              <span className="section-kicker kicker-with-dot">Featured Product</span>
              <h2>Meet Softpay, one of the products powering the Seversoft ecosystem</h2>
              <p>
                Softpay brings Seversoft&apos;s fintech thinking to life with a faster way to handle digital payments,
                utility services, and transaction-led experiences for users and resellers.
              </p>
              <ul className="check-list">
                <li>Pay Smart. Pay Fast. Pay Soft.</li>
                <li>VTU apps and utility payments designed for smooth customer flows</li>
                <li>API subscriptions and developer tools for payment-led products</li>
              </ul>
              <a className="button button-primary" href="https://softpay.seversoftech.com" target="_blank" rel="noreferrer">
                Visit Softpay
              </a>
            </div>

            <div className="marketplace-panel reveal reveal-delay">
              <div className="marketplace-orb" />
              <div className="store-card store-card-main">
                <span className="store-tag">Softpay</span>
                <strong>Pay Smart. Pay Fast. Pay Soft.</strong>
                <p>Fast utility payments, wallet flows, and digital transaction tools wrapped in a premium experience.</p>
              </div>
              <div className="store-card store-card-side">
                <span className="store-tag">Product</span>
                <strong>VTU & Bill Payments</strong>
                <p>Built for airtime, data, electricity, cable, and other everyday digital payment needs.</p>
              </div>
              <div className="store-card store-card-bottom">
                <span className="store-tag">Developers</span>
                <strong>APIs & Tools</strong>
                <p>Connect Softpay capabilities into your product with developer-friendly access and support.</p>
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
              <h2>Start transacting in five simple steps</h2>
            </div>

            <div className="steps-grid">
              {[
                ["Secure Registration", "Create your enterprise or personal account to join the Seversoft ecosystem."],
                ["Verify Identity", "Complete a quick KYC verification to ensure bank-grade security and full access to our financial tools."],
                ["Generate Wallet", "Instantly spin up a personal or business wallet with multi-currency support and unique identifiers."],
                ["Fund & Activate", "Load your wallet securely via multiple payment channels to fuel your transactions and API integrations."],
                ["Go Live", "Pay bills, automate operations, or connect your own products to our high-throughput transaction engine."],
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

      <section className="section section-dark">
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
              Build with Seversoft for modern software solutions, AI-powered systems, and products like Softpay that
              make digital transactions feel easier.
            </p>
            <a className="button button-primary" href="/build-with-us">
              Let's Talk
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

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-mark-dot" />
              </span>
              <span className="brand-name">Seversoft</span>
            </a>
            <p>
              Seversoft builds software solutions for every platform, AI-powered systems, and fintech products for
              modern businesses.
            </p>
            <div className="footer-socials">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                X
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:hello@seversofttechnologies.com">Email</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-column">
              <h3>{group}</h3>
              {links.map((link) => (
                <a key={link} href="#top">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="shell footer-bottom">
          <span>© 2026 Seversoft Technologies. Built for confident digital growth.</span>
          <span className="status-pill">
            <i />
            Systems operational
          </span>
        </div>
      </footer>
    </main>
  );
}
