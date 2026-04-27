"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Store", href: "/#store" },
  { label: "Testimonials", href: "/#testimonials" },
];

const exploreLinks = [
  {
    label: "Ecosystem",
    href: "/ecosystem",
    desc: "Products, stack & integrations",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    label: "Documentation",
    href: "/documentation",
    desc: "API guides & developer resources",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
  },
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
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${theme === "light" ? "header-light" : ""}`}>
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

            {/* Hover Dropdown */}
            <li className="nav-has-dropdown">
              <span className="nav-dropdown-trigger">
                Explore
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>

              <div className="nav-dropdown-panel">
                <div className="nav-dropdown-inner">
                  <div className="nav-dropdown-group">
                    {exploreLinks.map((item) => (
                      <a key={item.label} href={item.href} className="nav-dropdown-link">
                        <span className="nav-dropdown-icon">{item.icon}</span>
                        <span className="nav-dropdown-text">
                          <span className="nav-dropdown-link-title">{item.label}</span>
                          <span className="nav-dropdown-link-desc">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
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

        {/* Mobile menu */}
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
          {exploreLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${(navLinks.length + i + 1) * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/build-with-us"
            className="button button-primary"
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: `${(navLinks.length + exploreLinks.length + 1) * 50}ms` }}
          >
            Build With Us
          </a>
        </div>
      </div>
    </header>
  );
}
