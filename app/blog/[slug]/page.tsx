import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/ShareButtons";
import { getPublishedPost, getPublishedPosts } from "@/lib/blog";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    return {
      title: "Blog Article | Seversoft Technologies",
    };
  }

  return {
    title: `${post.title} | Seversoft Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (await getPublishedPosts()).filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main id="top">
      <Navbar />

      <section className="section section-dark ecosystem-hero blog-article-hero" style={{ paddingTop: "20px", paddingBottom: "74px" }}>
        <div className="shell blog-article-shell" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <Link href="/blog" className="blog-back-link" style={{ color: "var(--text-muted)", display: "inline-block", padding: "4px", marginLeft: "-4px" }} aria-label="Back to Blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
              <path d="M10 19l-8-7 8-7" />
              <path d="M46 12H2" />
            </svg>
          </Link>
          <div style={{ marginTop: "34px" }}>
            <span className="section-kicker kicker-with-dot">{post.category}</span>
            <h1 className="blog-article-title" style={{ marginTop: "18px", marginBottom: "22px", maxWidth: "820px" }}>{post.title}</h1>
            <p className="blog-article-dek" style={{ color: "var(--text-soft)", fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "760px" }}>{post.excerpt}</p>
            <div className="blog-meta-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap", color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700, marginTop: "28px" }}>
              <span>{post.date}</span>
              <span>/</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "70px" }}>
        <div className="shell blog-article-shell" style={{ maxWidth: "880px" }}>
          <article
            className="blog-article-card"
            style={{
              padding: "clamp(28px, 5vw, 52px)",
              background: "#fff",
              color: "var(--text-dark)",
              borderColor: "rgba(15,20,26,0.08)",
              borderRadius: "10px",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
            }}
          >
            <div
              className="blog-article-callout"
              style={{
                borderLeft: "4px solid var(--teal)",
                padding: "18px 0 18px 22px",
                marginBottom: "38px",
                color: "#1e293b",
                fontSize: "1.35rem",
                lineHeight: "1.35",
                fontWeight: 800,
              }}
            >
              {post.callout}
            </div>

            <div className="blog-article-content" style={{ display: "grid", gap: "38px" }}>
              {post.content.map((section, idx) => (
                <section key={idx}>
                  {section.heading && (
                    <h2 className="blog-article-section-title" style={{ color: "var(--text-dark)", fontSize: "clamp(1.55rem, 3vw, 2.15rem)", marginBottom: "16px" }}>
                      {section.heading}
                    </h2>
                  )}
                  <div className="blog-article-paragraphs" style={{ display: "grid", gap: "18px" }}>
                    {section.paragraphs
                      .filter((paragraph) => paragraph !== "Add article details here.")
                      .map((paragraph, pIdx) => (
                        <p className="blog-article-paragraph" key={pIdx} style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.85" }}>
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </section>
              ))}
            </div>
            
            <ShareButtons title={post.title} slug={post.slug} excerpt={post.excerpt} />
          </article>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "20px" }}>
        <div className="shell blog-article-shell" style={{ maxWidth: "880px" }}>
          <div className="section-heading compact">
            <span className="section-kicker kicker-with-dot">Keep Reading</span>
            <h3 style={{ color: "var(--text-dark)" }}>More Articles</h3>
          </div>
          <div className="blog-related-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px" }}>
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="frame-card blog-related-card"
                style={{
                  padding: "22px",
                  background: "#fff",
                  color: "var(--text-dark)",
                  borderColor: "rgba(15,20,26,0.08)",
                  borderRadius: "10px",
                }}
              >
                <span className="store-tag" style={{ color: "var(--text-dark)", borderColor: "rgba(15,20,26,0.15)", background: "rgba(15,20,26,0.04)" }}>{related.category}</span>
                <strong style={{ display: "block", marginTop: "16px", fontSize: "1.05rem", lineHeight: "1.35" }}>{related.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section">
        <div className="shell">
          <div className="cta-panel reveal">
            <span className="section-kicker kicker-with-dot">Build With Us</span>
            <h2>Need this thinking applied to your product?</h2>
            <p>Seversoft helps teams design and build secure software, fintech infrastructure, and AI-powered systems.</p>
            <Link className="button button-primary" href="/build-with-us">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
