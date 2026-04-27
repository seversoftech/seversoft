import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const detailedServices = [
  {
    id: "mobile-development",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform",
    description:
      "We build reliable iOS and Android applications engineered for clean user flows, unmatched performance, and robust security. Whether you need a native Swift/Kotlin app or a unified Flutter/React Native experience, our architecture is designed to scale with your user base.",
    highlights: ["Intuitive User Journeys", "Performance-Led Engineering", "Offline Synchronization", "Secure Payment Integrations"],
    accent: "purple",
    image: "/images/services/mobile-dev.jpg",
  },
  {
    id: "web-development",
    title: "Web Platforms & Dashboards",
    subtitle: "High-Performance Systems",
    description:
      "Modern websites, complex administrative dashboards, and business platforms designed for clarity and conversion. We utilize modern stacks like Next.js and React to deliver lightning-fast, SEO-optimized frontends paired with resilient backends.",
    highlights: ["Conversion-Focused UX", "Server-Side Rendering", "Real-Time Data Visualizations", "Headless CMS Integration"],
    accent: "teal",
    image: "/images/services/web-dev.jpg",
  },
  {
    id: "web-hosting",
    title: "Web Hosting Service",
    subtitle: "Reliable & High Performance",
    description:
      "Reliable, high-speed hosting and domain management to keep your business online 24/7 with zero friction. We provide managed cloud hosting solutions with 99.9% uptime guarantee, SSL certification, and automated backups.",
    highlights: ["99.9% Uptime Guarantee", "Managed Server Security", "Cloud Infrastructure", "24/7 System Monitoring"],
    accent: "blue",
    image: "/images/services/hosting.jpg",
  },
  {
    id: "fintech-solutions",
    title: "Fintech & Utility Systems",
    subtitle: "Transact with Confidence",
    description:
      "Our core expertise lies in building financial technology infrastructure. From wallet systems and VTU platforms to bill payment orchestration and transaction ledgers, we provide secure, high-throughput systems that power modern digital finance.",
    highlights: ["Wallet & Ledger Systems", "VTU & Utility Flows", "Automated Reconciliation", "Fraud Prevention Layers"],
    accent: "blue",
    image: "/images/services/fintech.jpg",
  },
  {
    id: "ui-ux-design",
    title: "Design & UI/UX",
    subtitle: "Aesthetics Meets Functionality",
    description:
      "Clean, conversion-focused product design that speaks trust and authority. We craft interface systems and user experiences that minimise friction, keeping your customers engaged and guiding them naturally toward key actions.",
    highlights: ["UX Strategy & Research", "Interactive Prototyping", "Design Systems", "Conversion Rate Optimization"],
    accent: "purple",
    image: "/images/services/ui-ux.jpg",
  },
  {
    id: "developer-tools",
    title: "APIs & Developer Tooling",
    subtitle: "Empower Your Engineering",
    description:
      "Powerful APIs, comprehensive documentation, and tooling that help internal and external developers integrate faster. We design RESTful and GraphQL APIs that are predictable, secure, and a joy to build upon.",
    highlights: ["API Gateway Design", "Webhook Infrastructure", "Developer Portals", "SDK Generation"],
    accent: "blue",
    image: "/images/services/apis.jpg",
  },
  {
    id: "white-label",
    title: "White-label Solutions",
    subtitle: "Launch Under Your Brand",
    description:
      "Launch branded fintech products faster with flexible platforms built for your market and workflow. We provide fully customisable, reseller-ready systems that allow you to go to market instantly without building from scratch.",
    highlights: ["Custom Branding", "Reseller-Ready Systems", "Quick Go-To-Market", "Scalable Architecture"],
    accent: "purple",
    image: "/images/services/whitelabel.jpg",
  },
  {
    id: "registration-compliance",
    title: "Registration & Compliance",
    subtitle: "Navigate Regulations",
    description:
      "Company registration, Trademark, SCUML, TIN and other regulatory compliance services for growing businesses. We handle the legal and bureaucratic heavy lifting so you can focus entirely on scaling your core product.",
    highlights: ["CAC Registration", "Trademark Filing", "SCUML & TIN Setup", "Regulatory Advisory"],
    accent: "blue",
    image: "/images/services/compliance.jpg",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    subtitle: "Streamline Operations",
    description:
      "Automate repetitive business processes, payment reconciliation, reporting, and customer operations. We build dependable robotic process automations and workflow engines that free up your team to focus on strategic growth.",
    highlights: ["Workflow Automation", "CRM/ERP Integrations", "Automated Reporting", "Custom AI Agents"],
    accent: "teal",
    image: "/images/services/automation.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main id="top">
      <Navbar />

      <section className="section section-dark services-hero">
        <div className="shell">
          <div className="section-heading centered reveal">
            <span className="section-kicker kicker-with-dot">Our Expertise</span>
            <h1>
              Engineered for <span className="text-gradient">Impact.</span>
            </h1>
            <p>
              From fintech infrastructure to immersive mobile experiences, Seversoft delivers
              specialised capabilities designed to help ambitious businesses launch faster and scale
              with absolute confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light services-list-section">
        <div className="shell">
          <div className="services-list">
            {detailedServices.map((service, index) => (
              <div
                key={service.id}
                className={`svc-card frame-card reveal${index % 2 !== 0 ? " svc-card-reverse" : ""}`}
              >
                <div className="svc-copy">
                  <span className="store-tag">{service.subtitle}</span>
                  <h2 className="svc-title">{service.title}</h2>
                  <p className="svc-desc">{service.description}</p>

                  <div className="svc-highlights">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="svc-highlight-item">
                        <span
                          className="svc-dot"
                          style={{
                            background:
                              service.accent === "blue"
                                ? "var(--blue)"
                                : service.accent === "purple"
                                ? "var(--purple)"
                                : "var(--teal)",
                          }}
                        />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <a href="/build-with-us" className="button button-primary button-small">
                    Discuss Your Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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

                <div
                  className="svc-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                >
                  <div
                    className="svc-image-overlay"
                    style={{
                      background:
                        service.accent === "blue"
                          ? "rgba(143,198,255,0.18)"
                          : service.accent === "purple"
                          ? "rgba(155,120,255,0.18)"
                          : "rgba(79,210,195,0.18)",
                    }}
                  />
                  <div className="svc-image-fade" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section">
        <div className="shell">
          <div className="cta-panel reveal">
            <span className="section-kicker">Ready to Scale?</span>
            <h2>Let&apos;s build something extraordinary together</h2>
            <p>Partner with Seversoft to turn your vision into a reliable, high-performance digital product.</p>
            <a className="button button-primary" href="/build-with-us">
              Contact Our Team
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
