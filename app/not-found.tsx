import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="section section-dark" style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: "120px" }}>
        <div className="shell">
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: "32px" }}>Error 404</span>
            <h1 style={{ fontSize: "clamp(4rem, 16vw, 10rem)", lineHeight: "0.85", marginBottom: "28px", letterSpacing: "-0.05em" }}>
              <span className="text-gradient">Lost in</span><br />
              <span style={{ color: "var(--text)" }}>The Void</span>
            </h1>
            <p style={{ maxWidth: "580px", margin: "0 auto 48px", color: "var(--text-soft)", fontSize: "1.15rem", lineHeight: "1.7" }}>
              The page you are looking for has drifted out of orbit or never existed. 
              Let&apos;s navigate you back to safe infrastructure.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
              <Link href="/" className="button button-primary" style={{ padding: "0 16px", fontSize: "0.9rem", flex: 1, maxWidth: "200px", whiteSpace: "nowrap" }}>
                Return Home
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </Link>
              <Link href="/blog" className="button button-secondary" style={{ padding: "0 16px", fontSize: "0.9rem", flex: 1, maxWidth: "200px", whiteSpace: "nowrap" }}>
                Explore Blog
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "8px" }}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
