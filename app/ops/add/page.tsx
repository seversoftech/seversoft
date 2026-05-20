import Link from "next/link";
import {
  getAdminPosts,
  getAuditLogs,
  getBlogBackendStatus,
} from "@/lib/blog";
import {
  createPostAction,
  isAdminAuthed,
  loginAction,
  logoutAction,
} from "./actions";
import { PasswordInput } from "./PasswordInput";
import { AIGenerator } from "./AIGenerator";

import { PostFields } from "./PostFields";
import { PostList } from "./PostList";

function formatAuditDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default async function OpsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; saved?: string; filter?: string }>;
}) {
  const [{ error, saved, filter }, isAuthed] = await Promise.all([searchParams, isAdminAuthed()]);
  const backendStatus = getBlogBackendStatus();

  if (!isAuthed) {
    return (
      <main className="ops-page ops-login-page">
        <section className="ops-login-card frame-card">
          <span className="section-kicker kicker-with-dot">Admin Login</span>
          <h1>Seversoft Ops</h1>
          <p>Sign in to manage production blog content, drafts, publishing status, and admin activity.</p>

          {!process.env.ADMIN_PASSWORD && (
            <span className="ops-error">Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET before production use.</span>
          )}

          <form action={loginAction} className="ops-login-form">
            <label htmlFor="ops-password">Password</label>
            <PasswordInput />
            {error && <span className="ops-error">Invalid admin password.</span>}
            <button className="button button-primary" type="submit">
              Open Dashboard
            </button>
          </form>

          <Link href="/" className="ops-back-link">
            Return to site
          </Link>
        </section>
      </main>
    );
  }

  const [posts, auditLogs] = await Promise.all([getAdminPosts(), getAuditLogs()]);
  const published = posts.filter((post) => post.status === "published").length;
  const drafts = posts.filter((post) => post.status === "draft").length;
  const review = posts.filter((post) => post.status === "review").length;

  const activeFilter = filter === "published" || filter === "draft" || filter === "review" ? filter : "all";
  const filteredPosts = activeFilter === "all" ? posts : posts.filter((p) => p.status === activeFilter);

  const statCards: [string, number, string][] = [
    ["Published", published, "published"],
    ["Drafts", drafts, "draft"],
    ["In Review", review, "review"],
    ["Total Posts", posts.length, "all"],
  ];

  return (
    <main className="ops-page">
      <header className="ops-header">
        <div>
          <span className="section-kicker kicker-with-dot">Admin Dashboard</span>
          <h1>Content operations</h1>
          <p>Manage production blog posts, review publishing status, and monitor content activity.</p>
        </div>
        <div className="ops-header-actions">
          <Link href="/blog" className="button button-secondary">
            View Blog
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="button button-secondary">
              Logout
            </button>
          </form>
        </div>
      </header>

      {saved && <div className="ops-banner frame-card">Post {saved} successfully.</div>}
      {!backendStatus.adminWritesConfigured && (
        <div className="ops-banner ops-banner-warning frame-card">
          Supabase admin writes are not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable persistent CRUD.
        </div>
      )}

      <section className="ops-stats">
        {statCards.map(([label, value, filterKey]) => (
          <Link
            href={filterKey === "all" ? "/ops/add#workspace" : `/ops/add?filter=${filterKey}#workspace`}
            key={label}
            style={{ textDecoration: "none" }}
          >
            <article
              className="ops-stat-card frame-card"
              style={{
                cursor: "pointer",
                outline: activeFilter === filterKey ? "2px solid var(--primary)" : "none",
                outlineOffset: "2px",
                transition: "outline 0.15s",
              }}
            >
              <span>{label}</span>
              <strong>{value}</strong>
              {activeFilter === filterKey && filterKey !== "all" && (
                <span style={{ fontSize: "0.7rem", color: "var(--primary)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>Active</span>
              )}
            </article>
          </Link>
        ))}
      </section>

      <section className="ops-grid">
        <form className="ops-panel frame-card ops-editor" action={createPostAction}>
          <div className="ops-panel-heading">
            <div>
              <span>Blog Editor</span>
              <h2>Create post</h2>
            </div>
          </div>
          <PostFields />
          <div className="ops-form-actions">
            <button className="button button-primary" type="submit">
              Create Post
            </button>
          </div>
        </form>

        <aside className="ops-side">
          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Backend</span>
                <h2>Production status</h2>
              </div>
            </div>
            <ul className="ops-settings-list">
              <li>Public reads: {backendStatus.publicReadsConfigured ? "Supabase" : "Local fallback"}</li>
              <li>Admin writes: {backendStatus.adminWritesConfigured ? "Enabled" : "Missing service key"}</li>
              <li>Auth: {process.env.ADMIN_PASSWORD ? "Password configured" : "Missing password"}</li>
              <li>Static export: Disabled for server runtime</li>
            </ul>
          </section>

          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Team</span>
                <h2>Admin management</h2>
              </div>
            </div>
            <div className="ops-activity-list">
              <div className="ops-activity-item" style={{ borderLeftColor: "var(--primary)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <strong>System Administrator</strong>
                    <p style={{ marginTop: "0.25rem", color: "var(--muted)" }}>Configured via environment</p>
                  </div>
                  <span className="ops-status ops-status-published">Active</span>
                </div>
              </div>
            </div>
            <div className="ops-form-actions" style={{ marginTop: "1rem" }}>
              <button className="button button-secondary" disabled title="Supabase Auth required for multi-admin support" style={{ width: "100%", opacity: 0.5, cursor: "not-allowed" }}>
                + Invite new admin
              </button>
            </div>
          </section>

          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Activity</span>
                <h2>Audit log</h2>
              </div>
            </div>
            <div className="ops-activity-list">
              {auditLogs.map((item) => (
                <div key={item.id} className="ops-activity-item">
                  <strong>{item.action}</strong>
                  <p>{item.detail}</p>
                  <span>{formatAuditDate(item.created_at)}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>

      <section className="ops-panel frame-card" id="workspace">
        <div className="ops-panel-heading">
          <div>
            <span>Posts</span>
            <h2>
              Blog workspace
              {activeFilter !== "all" && (
                <span style={{ marginLeft: "0.5rem", fontSize: "0.8rem", fontWeight: 500, color: "var(--primary)" }}>— {activeFilter}</span>
              )}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="ops-muted">{filteredPosts.length} of {posts.length} items</span>
            {activeFilter !== "all" && (
              <Link href="/ops/add#workspace" className="button button-secondary" style={{ padding: "0.2rem 0.7rem", fontSize: "0.8rem" }}>Clear filter</Link>
            )}
          </div>
        </div>

        <PostList posts={filteredPosts} activeFilter={activeFilter} />
      </section>
    </main>
  );
}
