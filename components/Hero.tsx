"use client";

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "180px",
        paddingBottom: "80px",
        position: "relative",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div style={{ maxWidth: "600px" }}>
            <div className="badge animate-fade-up" style={{ marginBottom: "24px" }}>
              INNOVATE AT SCALE
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Engineering the <br />
              Future with <br />
              <span className="gradient-text-blue">Full-Stack & AI</span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
                marginBottom: "40px",
                maxWidth: "500px",
              }}
            >
              Seversoft architects high-performance full-stack, frontend, frontend platforms. We empower global businesses with premium engineering and scalable digital infrastructure.
            </p>

            <div
              className="animate-fade-up delay-300"
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "64px",
              }}
            >
              <a href="#start" className="btn-primary">
                Start Your Project
              </a>
              <a href="#solutions" className="btn-outline">
                Explore Solutions
              </a>
            </div>

            {/* Trusted By */}
            <div className="animate-fade-up delay-400">
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "16px",
                  fontWeight: 600,
                }}
              >
                TRUSTED BY INNOVATORS AT:
              </p>
              <div style={{ display: "flex", gap: "24px", opacity: 0.6 }}>
                {/* Dummy Icons for Logos */}
                <div style={{ width: "24px", height: "24px", background: "var(--color-text-muted)", maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2L2 22h20L12 2z\"/></svg>')", WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 2L2 22h20L12 2z\"/></svg>')", WebkitMaskSize: "contain" }} />
                <div style={{ width: "24px", height: "24px", background: "var(--color-text-muted)", borderRadius: "50%" }} />
                <div style={{ width: "24px", height: "24px", background: "var(--color-text-muted)", borderRadius: "4px" }} />
              </div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div
            className="animate-fade-in delay-500"
            style={{
              position: "relative",
              height: "100%",
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* The glowing mesh visual container */}
            <div
              style={{
                position: "absolute",
                inset: "10%",
                background: "url('https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=800&auto=format&fit=crop') center/cover",
                borderRadius: "var(--radius-lg)",
                opacity: 0.4,
                mixBlendMode: "screen",
                filter: "contrast(1.5) hue-rotate(180deg)", // Makes it look like the blue digital mesh
                border: "1px solid rgba(148, 189, 248, 0.2)",
                boxShadow: "0 0 60px rgba(148, 189, 248, 0.1)",
              }}
            />
            
            {/* Floating SLA Card */}
            <div
              className="glass-card animate-float"
              style={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                background: "rgba(10, 10, 15, 0.6)",
                borderLeft: "4px solid var(--color-accent)",
              }}
            >
              <span style={{ color: "var(--color-accent-light)", fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-display)" }}>
                99.9%
              </span>
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Uptime SLA<br/>Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            min-height: 400px;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
