"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "80px 0 32px",
        background: "#08080a", // Slightly darker than primary bg
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Brand */}
          <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "4px",
                  background: "var(--color-accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L12 21L20 16V8L12 3L4 8V16Z" stroke="#0a0a0c" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
              </div>
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--color-text-primary)",
                }}
              >
                Seversoft
              </span>
            </a>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "24px" }}>
              Leading the digital transformation with precision-engineered software and AI solutions for global enterprises.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                Twitter
              </a>
              <a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
            <div>
              <h4 style={{ color: "var(--color-text-primary)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "20px" }}>Company</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", padding: 0 }}>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>About Us</a></li>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Careers</a></li>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "var(--color-text-primary)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "20px" }}>Legal</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", padding: 0 }}>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Terms of Service</a></li>
                <li><a href="#" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ color: "var(--color-text-faint)", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Seversoft. Tech reliques. Empowering global enterprises through AI.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--color-text-faint)", fontSize: "0.85rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
