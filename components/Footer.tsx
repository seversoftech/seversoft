"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "Build With Us", href: "/build-with-us" },
  ],
  resources: [
    { label: "Documentation", href: "/documentation" },
    { label: "API Access", href: "/documentation" },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Compliance", href: "/compliance" },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <Image
              src="/media/seversoft_logo.png" 
              alt="Seversoft Logo" 
              width={28}
              height={28}
              style={{ width: "28px", height: "28px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span className="brand-name">Seversoft</span>
          </a>
          <p>
            Seversoft builds high-performance software, AI-powered systems, and scalable fintech infrastructure for modern businesses.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/seversoftech" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="mailto:info@seversoftech.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer-column">
            <h3 style={{ textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--text)", marginBottom: "20px" }}>
              {group}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {links.map((link) => (
                <Link key={link.label} href={link.href} style={{ color: "var(--text-soft)", fontSize: "0.9rem" }}>
                  {link.label}
                </Link>
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
