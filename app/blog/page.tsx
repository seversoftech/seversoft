import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedPosts } from "@/lib/blog";

const topics = ["Software Engineering", "Fintech Infrastructure", "AI Systems", "Compliance", "Product Strategy", "APIs", "Cloud Infrastructure", "Finance", "General"];

export const revalidate = 60;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const currentPage = parseInt(pageParam || "1", 10);
  const postsPerPage = 10;

  const blogPosts = await getPublishedPosts();
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const allPosts = blogPosts
    .filter((post) => post.slug !== featuredPost.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const posts = allPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <main id="top">
      <Navbar />

      <section className="section section-dark ecosystem-hero blog-hero" style={{ paddingTop: "30px", paddingBottom: "90px" }}>
        <div className="shell blog-hero-shell" style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-kicker kicker-with-dot">Seversoft Blog</span>
          <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>
            Notes on building <span className="text-gradient">systems that scale.</span>
          </h1>
          <p className="blog-hero-copy" style={{ color: "var(--text-soft)", fontSize: "1.08rem", lineHeight: "1.8", margin: "0 auto", maxWidth: "680px" }}>
            Practical ideas on software delivery, fintech infrastructure, AI automation, compliance, and the engineering choices behind dependable digital products.
          </p>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "76px" }}>
        <div className="shell">
          <article
            className="blog-featured-card"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.25fr) minmax(260px, 0.75fr)",
              gap: "32px",
              padding: "34px",
              background: "#fff",
              color: "var(--text-dark)",
              border: "1px solid rgba(15,20,26,0.08)",
              borderRadius: "10px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="blog-featured-copy">
              <span className="store-tag" style={{ color: "var(--text-dark)", borderColor: "rgba(15,20,26,0.15)", background: "rgba(15,20,26,0.04)" }}>{featuredPost.category}</span>
              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="blog-featured-title" style={{ color: "var(--text-dark)", fontSize: "clamp(2rem, 4vw, 3.1rem)", marginTop: "18px" }}>
                  {featuredPost.title}
                </h2>
              </Link>
              <p className="blog-featured-excerpt" style={{ color: "#475569", fontSize: "1rem", lineHeight: "1.8", maxWidth: "680px", marginBottom: "26px" }}>
                {featuredPost.excerpt}
              </p>
              <Link href={`/blog/${featuredPost.slug}`} className="button button-primary">
                Read Full Article
              </Link>
            </div>

            <div
              className="blog-featured-aside"
              style={{
                display: "grid",
                alignContent: "end",
                minHeight: "260px",
                borderRadius: "18px",
                padding: "24px",
                background:
                  "linear-gradient(135deg, rgba(94,174,254,0.18), rgba(79,210,195,0.2)), linear-gradient(160deg, #10151b, #17202a)",
                color: "var(--text)",
                overflow: "hidden",
              }}
            >
              <span style={{ color: "var(--text-soft)", fontSize: "0.82rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Featured
              </span>
              <strong className="blog-featured-callout" style={{ fontSize: "1.6rem", lineHeight: "1.1", marginTop: "12px" }}>{featuredPost.callout}</strong>
              <span style={{ color: "var(--text-muted)", marginTop: "20px", fontSize: "0.92rem" }}>
                {featuredPost.date} / {featuredPost.readTime}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-light" style={{ paddingTop: "10px" }}>
        <div className="shell">
          <div className="section-heading reveal">
            <span className="section-kicker kicker-with-dot">Latest Articles</span>
            <h2 style={{ color: "var(--text-dark)", fontSize: "clamp(1rem, 2vw, 1.7rem)" }}>Fresh thinking for modern teams</h2>
            <p style={{ color: "rgba(15,20,26,0.68)" }}>
              Short reads for founders, operators, and product teams planning stronger digital infrastructure.
            </p>
          </div>

          <div className="blog-post-list" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {posts.map((post) => (
              <article
                key={post.title}
                className="blog-list-item"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(15,20,26,0.08)",
                  color: "var(--text-dark)",
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    className="store-tag"
                    style={{
                      display: "inline-block",
                      marginBottom: "8px",
                      color: "var(--text-dark)",
                      borderColor: "rgba(15,20,26,0.15)",
                      background: "rgba(15,20,26,0.04)",
                      fontSize: "0.62rem",
                      padding: "3px 9px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {post.category}
                  </span>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <h3
                      className="blog-card-title"
                      style={{
                        color: "var(--text-dark)",
                        fontSize: "1rem",
                        margin: "0 0 6px",
                        lineHeight: "1.35",
                        fontWeight: 700,
                      }}
                    >
                      {post.title}
                    </h3>
                  </Link>
                  {post.callout && (
                    <p
                      className="blog-card-excerpt"
                      style={{ color: "#64748b", lineHeight: "1.6", fontSize: "0.87rem", margin: 0 }}
                    >
                      {post.callout}
                    </p>
                  )}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    flexShrink: 0,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f766e",
                    textDecoration: "none",
                    marginTop: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div
              className="pagination"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "48px",
                paddingBottom: "20px",
              }}
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: pageNum === currentPage ? "#0f766e" : "rgba(15,20,26,0.12)",
                    background: pageNum === currentPage ? "#0f766e" : "transparent",
                    color: pageNum === currentPage ? "#fff" : "var(--text-dark)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  {pageNum}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section-dark" style={{ paddingTop: "72px" }}>
        <div className="shell">
          <div className="frame-card blog-topic-panel" style={{ padding: "32px" }}>
            <div className="section-heading compact">
              <span className="section-kicker kicker-with-dot">Topics</span>
              <h2>Explore what we write about</h2>
            </div>
            <div className="blog-topic-list" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {topics.map((topic) => (
                <span
                  key={topic}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: "1px solid var(--line-strong)",
                    color: "var(--text-soft)",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark cta-section">
        <div className="shell">
          <div className="cta-panel reveal">
            <span className="section-kicker kicker-with-dot">Have a Project in Mind?</span>
            <h2>Turn the ideas into infrastructure</h2>
            <p>Talk to Seversoft about building secure software, AI systems, and fintech products for your next stage of growth.</p>
            <Link className="button button-primary" href="/build-with-us">
              Build With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
