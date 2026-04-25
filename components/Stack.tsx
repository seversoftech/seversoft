"use client";

const stackItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path>
      </svg>
    ),
    title: "Fintech Solutions",
    desc: "Architecting API-driven microservices for payments, banking, and real-time infrastructure optimized for ultra-high volume transactions and sub-second latency.",
    colSpan: 1,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
      </svg>
    ),
    title: "AI/ML Intelligence",
    desc: "Custom machine learning models, NLP, predictive analytics, and seamless generative AI integration to transform raw data into automated decision-making engines.",
    colSpan: 1,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
      </svg>
    ),
    title: "Web 3.0/Blockchain",
    desc: "Engineering next-gen dApps with high-fidelity, native multi-chain experiences for iOS and Android.",
    colSpan: 1,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1192 20.1553 10.1718 17.8288 10.0135C17.3828 6.6186 14.4539 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2386 4.0119 11.4746 4.03492 11.7067C1.76182 12.1818 0 14.1508 0 16.5C0 18.9853 2.01472 21 4.5 21H17.5V19Z"></path>
      </svg>
    ),
    title: "Cloud Infra",
    desc: "Resilient, scalable cloud architectures with automated CI/CD and serverless computing.",
    colSpan: 1,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: "Automation",
    desc: "Enterprise workflows built with RPA and advanced scripting to eliminate manual tasks and streamline operations.",
    colSpan: 1,
  },
];

export default function Stack() {
  return (
    <section id="services" style={{ padding: "100px 0", background: "var(--color-bg-primary)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "16px" }}>
            Our Specialized Stack
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Core competencies driving the next generation of enterprise software.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
          className="stack-grid"
        >
          {stackItems.map((item, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                gridColumn: item.colSpan > 1 ? `span ${item.colSpan}` : "auto",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(148, 189, 248, 0.1)",
                  color: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "12px", color: "var(--color-text-primary)" }}>{item.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (min-width: 1024px) {
          .stack-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .stack-grid > div:nth-child(1) { grid-column: span 2; }
          .stack-grid > div:nth-child(2) { grid-column: span 1; }
          .stack-grid > div:nth-child(3) { grid-column: span 1; }
          .stack-grid > div:nth-child(4) { grid-column: span 1; }
          .stack-grid > div:nth-child(5) { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}
