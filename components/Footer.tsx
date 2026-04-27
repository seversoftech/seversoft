"use client";

import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Ecosystem", href: "/#ecosystem" },
    { label: "Build With Us", href: "/build-with-us" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Access", href: "#" },
    { label: "Support", href: "/build-with-us" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Compliance", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <img 
              src="/media/seversoft_logo.png" 
              alt="Seversoft Logo" 
              style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span className="brand-name">Seversoft</span>
          </a>
          <p>
            Seversoft builds high-performance software, AI-powered systems, and scalable fintech infrastructure for modern businesses.
          </p>
          <div className="footer-socials">
            <a href="https://x.com/seversoft" target="_blank" rel="noreferrer">X</a>
            <a href="https://linkedin.com/company/seversoft" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:info@seversoftech.com">Email</a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer-column">
            <h3 style={{ textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--text)", marginBottom: "20px" }}>
              {group}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {links.map((link) => (
                <a key={link.label} href={link.href} style={{ color: "var(--text-soft)", fontSize: "0.9rem" }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Seversoft Technologies. Build Smart. Scale Fast. Grow Confidently.</span>
        <span className="status-pill">
          <i />
          Systems operational
        </span>
      </div>
    </footer>
  );
}
