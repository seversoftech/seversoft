"use client";

export default function Cta() {
  return (
    <section style={{ padding: "120px 0", position: "relative" }}>
      {/* Background Gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100%",
          background: "linear-gradient(to top, rgba(148, 189, 248, 0.05), transparent)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      
      <div className="section-container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.1, marginBottom: "24px" }}>
            Ready to Architect Your Digital Future?
          </h2>
          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", marginBottom: "48px" }}>
            Join forward-thinking companies building scalable AI-powered solutions with Seversoft engineering.
          </p>
          
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ padding: "14px 32px", fontSize: "1rem" }}>
              Consult Our Tech Leads
            </button>
            <button className="btn-outline" style={{ padding: "14px 32px", fontSize: "1rem" }}>
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
