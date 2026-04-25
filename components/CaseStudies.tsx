"use client";

const caseStudies = [
  {
    tag: "FINTECH",
    title: "NeoBank Core System",
    desc: "Built a robust transaction engine processing 10M+ daily settlements with sub-second latency.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "HEALTHCARE",
    title: "MediSync AI Platform",
    desc: "AI-driven diagnostic tool helping doctors identify anomalies in imaging data with 98% accuracy.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "LOGISTICS",
    title: "RouteOptima Tracker",
    desc: "Automated route optimization engine reducing delivery times by 32% for a global logistics firm.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?q=80&w=600&auto=format&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "24px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>Impact Case Studies</h2>
          <a href="#projects" style={{ color: "var(--color-accent-light)", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
            View All Projects 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {caseStudies.map((item, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  height: "200px",
                  background: `url(${item.img}) center/cover`,
                  borderBottom: "1px solid var(--color-border)",
                }}
              />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "inline-block", padding: "4px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--color-accent)", marginBottom: "16px" }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
