"use client";

const trustItems = [
  {
    title: "Fast & Reliable",
    desc: "99.9% uptime SLA with load-balanced enterprise infrastructure and rapid agile development cycles.",
  },
  {
    title: "Secure Infrastructure",
    desc: "Bank-grade encryption and automated threat detection to protect data at rest and in transit.",
  },
  {
    title: "Cost Optimized",
    desc: "Serverless architectures and right-sized deployments eliminate hardware overhead.",
  },
  {
    title: "24/7 Global Support",
    desc: "Dedicated maintenance teams and technical support available across all global timezones.",
  },
];

export default function Trust() {
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="section-container">
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", marginBottom: "16px" }}>
            Why Leaders Trust Seversoft
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
            We combine tech mastery with a deep understanding of business scalability.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "24px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                background: "transparent",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", color: "var(--color-text-primary)" }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
