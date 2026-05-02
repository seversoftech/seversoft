import Link from "next/link";
import {
  contentToText,
  getAdminPosts,
  getAuditLogs,
  getBlogBackendStatus,
  slugify,
  type AdminPost,
} from "@/lib/blog";
import {
  createPostAction,
  deletePostAction,
  isAdminAuthed,
  loginAction,
  logoutAction,
  updatePostAction,
} from "./actions";
import { PasswordInput } from "./PasswordInput";
import { AIGenerator } from "./AIGenerator";

const emptyDraft = {
  title: "",
  slug: "",
  category: "Software Engineering",
  excerpt: "",
  callout: "",
  content: "",
  status: "draft" as AdminPost["status"],
  readTime: "4 min read",
  featured: false,
};

type PostFieldsInput = Partial<Omit<AdminPost, "content">> & {
  content?: AdminPost["content"] | string;
};

function formatAuditDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function PostFields({ post = emptyDraft }: { post?: PostFieldsInput }) {
  const content = "content" in post && Array.isArray(post.content) ? contentToText(post.content) : post.content ?? "";
  const title = post.title ?? "";

  return (
    <>
      <AIGenerator id={post.id ?? "new"} />
      {"id" in post && post.id && <input type="hidden" name="id" value={post.id} />}
      <div className="ops-field">
        <label htmlFor={`title-${post.id ?? "new"}`}>Title</label>
        <input id={`title-${post.id ?? "new"}`} name="title" defaultValue={title} placeholder="How to build reliable fintech systems" required />
      </div>

      <div className="ops-row">
        <div className="ops-field">
          <label htmlFor={`slug-${post.id ?? "new"}`}>Slug</label>
          <input id={`slug-${post.id ?? "new"}`} name="slug" defaultValue={post.slug || slugify(title)} placeholder="reliable-fintech-systems" required />
        </div>
        <div className="ops-field">
          <label htmlFor={`readTime-${post.id ?? "new"}`}>Read Time</label>
          <input id={`readTime-${post.id ?? "new"}`} name="readTime" defaultValue={post.readTime ?? "4 min read"} required />
        </div>
      </div>

      <div className="ops-row">
        <div className="ops-field">
          <label htmlFor={`category-${post.id ?? "new"}`}>Category</label>
          <select id={`category-${post.id ?? "new"}`} name="category" defaultValue={post.category ?? "Software Engineering"}>
            <option>Software Engineering</option>
            <option>Fintech Infrastructure</option>
            <option>AI Systems</option>
            <option>Compliance</option>
            <option>Product Strategy</option>
          </select>
        </div>
        <div className="ops-field">
          <label htmlFor={`status-${post.id ?? "new"}`}>Status</label>
          <select id={`status-${post.id ?? "new"}`} name="status" defaultValue={post.status ?? "draft"}>
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="ops-field">
        <label htmlFor={`callout-${post.id ?? "new"}`}>Callout</label>
        <input id={`callout-${post.id ?? "new"}`} name="callout" defaultValue={post.callout ?? ""} placeholder="A short article insight." />
      </div>

      <div className="ops-field">
        <label htmlFor={`excerpt-${post.id ?? "new"}`}>Excerpt</label>
        <textarea id={`excerpt-${post.id ?? "new"}`} name="excerpt" defaultValue={post.excerpt ?? ""} required />
      </div>

      <div className="ops-field">
        <label htmlFor={`content-${post.id ?? "new"}`}>Content</label>
        <textarea
          id={`content-${post.id ?? "new"}`}
          name="content"
          className="ops-content-input"
          defaultValue={content}
          placeholder={"Heading\n\nParagraph text\n\n---\n\nNext heading\n\nMore text"}
          required
        />
      </div>

      <label className="ops-check">
        <input type="checkbox" name="featured" defaultChecked={Boolean(post.featured)} />
        Feature this post
      </label>
    </>
  );
}

export default async function OpsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; saved?: string }>;
}) {
  const [{ error, saved }, isAuthed] = await Promise.all([searchParams, isAdminAuthed()]);
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
        {[
          ["Published", published],
          ["Drafts", drafts],
          ["In Review", review],
          ["Total Posts", posts.length],
        ].map(([label, value]) => (
          <article className="ops-stat-card frame-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
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

      <section className="ops-panel frame-card">
        <div className="ops-panel-heading">
          <div>
            <span>Posts</span>
            <h2>Blog workspace</h2>
          </div>
          <span className="ops-muted">{posts.length} items</span>
        </div>

        <div className="ops-post-list">
          {posts.map((post) => (
            <article className="ops-post-item" key={post.id}>
              <details>
                <summary>
                  <span className={`ops-status ops-status-${post.status}`}>{post.status}</span>
                  <strong>{post.title}</strong>
                  <span>{post.category} / {post.readTime}</span>
                </summary>

                <form className="ops-inline-editor" action={updatePostAction}>
                  <PostFields post={post} />
                  <div className="ops-form-actions">
                    <button className="button button-primary" type="submit">
                      Save Changes
                    </button>
                  </div>
                </form>

                <form action={deletePostAction} className="ops-delete-form">
                  <input type="hidden" name="id" value={post.id} />
                  <input type="hidden" name="title" value={post.title} />
                  <button type="submit">Delete post</button>
                </form>
              </details>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
