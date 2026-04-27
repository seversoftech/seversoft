"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Store", href: "/#store" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/build-with-us" },
];

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${theme === "light" ? "header-light" : ""}`}
    >
      <div className="shell">
        <nav className="nav">
          <a href="/" className="brand">
            <img 
              src="/media/seversoft_logo.png" 
              alt="Seversoft Logo" 
              className="brand-logo"
              style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }}
            />
            <span className="brand-name">Seversoft</span>
          </a>

          <ul className="nav-links nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-cta nav-cta-desktop">
            <a href="/build-with-us" className="button button-primary button-small">
              Build With Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-hamburger"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className={`hamburger-line line-${i} ${mobileOpen ? "open" : ""}`} />
            ))}
          </button>
        </nav>

        <div className={`mobile-menu ${mobileOpen ? "is-open" : ""}`}>
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/build-with-us"
            className="button button-primary"
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            Build With Us
          </a>
        </div>
      </div>
    </header>
  );
}
