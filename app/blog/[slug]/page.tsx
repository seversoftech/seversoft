import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

      <section className="section section-dark ecosystem-hero blog-article-hero" style={{ paddingTop: "84px", paddingBottom: "74px" }}>
        <div className="shell blog-article-shell" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <Link href="/blog" className="blog-back-link" style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: 700 }}>
            Back to Blog
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
            className="frame-card blog-article-card"
            style={{
              padding: "clamp(28px, 5vw, 52px)",
              background: "#fff",
              color: "var(--text-dark)",
              borderColor: "rgba(15,20,26,0.08)",
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
              {post.content.map((section) => (
                <section key={section.heading}>
                  <h2 className="blog-article-section-title" style={{ color: "var(--text-dark)", fontSize: "clamp(1.55rem, 3vw, 2.15rem)", marginBottom: "16px" }}>
                    {section.heading}
                  </h2>
                  <div className="blog-article-paragraphs" style={{ display: "grid", gap: "18px" }}>
                    {section.paragraphs.map((paragraph) => (
                      <p className="blog-article-paragraph" key={paragraph} style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.85" }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "0" }}>
        <div className="shell blog-article-shell" style={{ maxWidth: "880px" }}>
          <div className="section-heading compact">
            <span className="section-kicker kicker-with-dot">Keep Reading</span>
            <h2 style={{ color: "var(--text-dark)" }}>More from the blog</h2>
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
                }}
              >
                <span className="store-tag">{related.category}</span>
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
