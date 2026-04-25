"use client";

export default function SoftPay() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div
          className="softpay-card"
          style={{
            padding: "64px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0a0a0c",
                  fontWeight: 800,
                  fontFamily: "var(--font-display)",
                }}
              >
                S
              </div>
              <span style={{ fontWeight: 700, letterSpacing: "0.1em", fontSize: "0.9rem" }}>SOFT PAY</span>
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.2, marginBottom: "24px" }}>
              The Future of <span className="gradient-text-blue">Global</span><br />
              <span className="gradient-text-blue">Payments</span>
            </h2>

            <p style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "450px" }}>
              Our flagship payment orchestration platform designed for extreme speed, bank-grade security, and frictionless digital commerce.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Instant FX Settlement Engine",
                "Multi-currency Digital Wallet Support",
                "Unified High-Throughput Global API",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--color-text-primary)", fontSize: "0.95rem" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(148, 189, 248, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-light)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a href="/build-with-us" className="button button-primary" style={{ padding: "14px 32px" }}>
              Integrate SoftPay
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

          {/* Right Image */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "350px",
                aspectRatio: "1/1.2",
                background: "url('https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=600&auto=format&fit=crop') center/cover",
                borderRadius: "32px",
                border: "8px solid #1a1a24",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)",
                transform: "rotate(-5deg)",
              }}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 900px) {
          .softpay-card {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
