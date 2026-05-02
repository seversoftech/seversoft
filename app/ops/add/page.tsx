"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { blogPosts } from "@/app/blog/posts";

type ManagedPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  status: "Draft" | "Published" | "Review";
  readTime: string;
  updatedAt: string;
};

type ActivityItem = {
  id: string;
  action: string;
  detail: string;
  at: string;
};

const ACCESS_KEY = "seversoft-ops-2026";
const POSTS_KEY = "seversoft-ops-posts";
const AUTH_KEY = "seversoft-ops-auth";
const ACTIVITY_KEY = "seversoft-ops-activity";

const emptyForm = {
  id: "",
  title: "",
  slug: "",
  category: "Software Engineering",
  excerpt: "",
  content: "",
  status: "Draft" as ManagedPost["status"],
  readTime: "4 min read",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function seedPosts(): ManagedPost[] {
  return blogPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    content: post.content.flatMap((section) => [section.heading, ...section.paragraphs]).join("\n\n"),
    status: post.featured ? "Published" : "Review",
    readTime: post.readTime,
    updatedAt: post.date,
  }));
}

function nowLabel() {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export default function OpsAdminPage() {
  const [isReady, setIsReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [loginError, setLoginError] = useState("");
  const [posts, setPosts] = useState<ManagedPost[]>([]);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const storedAuth = window.localStorage.getItem(AUTH_KEY);
    const storedPosts = window.localStorage.getItem(POSTS_KEY);
    const storedActivity = window.localStorage.getItem(ACTIVITY_KEY);

    setIsAuthed(storedAuth === "true");
    setPosts(storedPosts ? JSON.parse(storedPosts) : seedPosts());
    setActivity(
      storedActivity
        ? JSON.parse(storedActivity)
        : [
            {
              id: "seed",
              action: "Workspace loaded",
              detail: "Seeded admin workspace with current blog content.",
              at: nowLabel(),
            },
          ],
    );
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  }, [isReady, posts]);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity.slice(0, 8)));
  }, [activity, isReady]);

  const stats = useMemo(() => {
    const published = posts.filter((post) => post.status === "Published").length;
    const drafts = posts.filter((post) => post.status === "Draft").length;
    const review = posts.filter((post) => post.status === "Review").length;
    return [
      { label: "Published", value: published },
      { label: "Drafts", value: drafts },
      { label: "In Review", value: review },
      { label: "Total Posts", value: posts.length },
    ];
  }, [posts]);

  function record(action: string, detail: string) {
    setActivity((items) => [{ id: crypto.randomUUID(), action, detail, at: nowLabel() }, ...items].slice(0, 8));
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (accessKey !== ACCESS_KEY) {
      setLoginError("Invalid access key.");
      return;
    }

    window.localStorage.setItem(AUTH_KEY, "true");
    setIsAuthed(true);
    setLoginError("");
    record("Admin login", "Ops workspace session started.");
  }

  function handleLogout() {
    window.localStorage.removeItem(AUTH_KEY);
    setIsAuthed(false);
    setAccessKey("");
    record("Admin logout", "Ops workspace session ended.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const slug = form.slug || slugify(form.title);
    const nextPost: ManagedPost = {
      ...form,
      id: form.id || crypto.randomUUID(),
      slug,
      updatedAt: nowLabel(),
    };

    if (!nextPost.title || !nextPost.excerpt || !nextPost.content || !nextPost.slug) {
      setNotice("Add a title, slug, excerpt, and content before saving.");
      return;
    }

    setPosts((items) => {
      const exists = items.some((item) => item.id === nextPost.id);
      return exists ? items.map((item) => (item.id === nextPost.id ? nextPost : item)) : [nextPost, ...items];
    });
    record(form.id ? "Post updated" : "Post created", nextPost.title);
    setNotice(form.id ? "Blog post updated." : "Blog post created.");
    setForm(emptyForm);
  }

  function editPost(post: ManagedPost) {
    setForm(post);
    setNotice(`Editing ${post.title}`);
  }

  function deletePost(post: ManagedPost) {
    setPosts((items) => items.filter((item) => item.id !== post.id));
    record("Post deleted", post.title);
    if (form.id === post.id) setForm(emptyForm);
    setNotice("Blog post deleted.");
  }

  function resetWorkspace() {
    const seeded = seedPosts();
    setPosts(seeded);
    setForm(emptyForm);
    record("Workspace reset", "Restored admin blog content from source posts.");
    setNotice("Workspace reset to seeded blog content.");
  }

  if (!isReady) {
    return <main className="ops-page">Loading ops workspace...</main>;
  }

  if (!isAuthed) {
    return (
      <main className="ops-page ops-login-page">
        <section className="ops-login-card frame-card">
          <span className="section-kicker kicker-with-dot">Admin Login</span>
          <h1>Seversoft Ops</h1>
          <p>Enter the private ops access key to manage blog content, drafts, publishing status, and workspace activity.</p>

          <form onSubmit={handleLogin} className="ops-login-form">
            <label htmlFor="ops-access-key">Access Key</label>
            <input
              id="ops-access-key"
              type="password"
              value={accessKey}
              onChange={(event) => setAccessKey(event.target.value)}
              placeholder="Enter access key"
              autoComplete="current-password"
            />
            {loginError && <span className="ops-error">{loginError}</span>}
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

  return (
    <main className="ops-page">
      <header className="ops-header">
        <div>
          <span className="section-kicker kicker-with-dot">Admin Dashboard</span>
          <h1>Content operations</h1>
          <p>Manage blog posts, review publishing status, and keep an eye on content activity.</p>
        </div>
        <div className="ops-header-actions">
          <Link href="/blog" className="button button-secondary">
            View Blog
          </Link>
          <button type="button" className="button button-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <section className="ops-stats">
        {stats.map((item) => (
          <article className="ops-stat-card frame-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="ops-grid">
        <form className="ops-panel frame-card ops-editor" onSubmit={handleSubmit}>
          <div className="ops-panel-heading">
            <div>
              <span>Blog Editor</span>
              <h2>{form.id ? "Edit post" : "Create post"}</h2>
            </div>
            {form.id && (
              <button type="button" className="ops-text-button" onClick={() => setForm(emptyForm)}>
                New post
              </button>
            )}
          </div>

          <div className="ops-field">
            <label htmlFor="post-title">Title</label>
            <input
              id="post-title"
              value={form.title}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  title: event.target.value,
                  slug: current.slug || slugify(event.target.value),
                }))
              }
              placeholder="How to build reliable fintech systems"
            />
          </div>

          <div className="ops-row">
            <div className="ops-field">
              <label htmlFor="post-slug">Slug</label>
              <input
                id="post-slug"
                value={form.slug}
                onChange={(event) => setForm((current) => ({ ...current, slug: slugify(event.target.value) }))}
                placeholder="reliable-fintech-systems"
              />
            </div>
            <div className="ops-field">
              <label htmlFor="post-read-time">Read Time</label>
              <input
                id="post-read-time"
                value={form.readTime}
                onChange={(event) => setForm((current) => ({ ...current, readTime: event.target.value }))}
              />
            </div>
          </div>

          <div className="ops-row">
            <div className="ops-field">
              <label htmlFor="post-category">Category</label>
              <select
                id="post-category"
                value={form.category}
                onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
              >
                <option>Software Engineering</option>
                <option>Fintech Infrastructure</option>
                <option>AI Systems</option>
                <option>Compliance</option>
                <option>Product Strategy</option>
              </select>
            </div>
            <div className="ops-field">
              <label htmlFor="post-status">Status</label>
              <select
                id="post-status"
                value={form.status}
                onChange={(event) => setForm((current) => ({ ...current, status: event.target.value as ManagedPost["status"] }))}
              >
                <option>Draft</option>
                <option>Review</option>
                <option>Published</option>
              </select>
            </div>
          </div>

          <div className="ops-field">
            <label htmlFor="post-excerpt">Excerpt</label>
            <textarea
              id="post-excerpt"
              value={form.excerpt}
              onChange={(event) => setForm((current) => ({ ...current, excerpt: event.target.value }))}
              placeholder="Short summary shown on the blog listing."
            />
          </div>

          <div className="ops-field">
            <label htmlFor="post-content">Content</label>
            <textarea
              id="post-content"
              className="ops-content-input"
              value={form.content}
              onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
              placeholder="Write the full article content here."
            />
          </div>

          {notice && <span className="ops-notice">{notice}</span>}

          <div className="ops-form-actions">
            <button className="button button-primary" type="submit">
              {form.id ? "Save Changes" : "Publish to Workspace"}
            </button>
            <button type="button" className="button button-secondary" onClick={() => setForm(emptyForm)}>
              Clear
            </button>
          </div>
        </form>

        <aside className="ops-side">
          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Admin Content</span>
                <h2>Quick actions</h2>
              </div>
            </div>
            <div className="ops-action-list">
              <button type="button" onClick={() => setForm({ ...emptyForm, status: "Draft" })}>
                Start draft
              </button>
              <button type="button" onClick={() => setForm({ ...emptyForm, category: "AI Systems", status: "Review" })}>
                Queue AI article
              </button>
              <button type="button" onClick={resetWorkspace}>
                Reset workspace posts
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
              {activity.map((item) => (
                <div key={item.id} className="ops-activity-item">
                  <strong>{item.action}</strong>
                  <p>{item.detail}</p>
                  <span>{item.at}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Settings</span>
                <h2>Workspace</h2>
              </div>
            </div>
            <ul className="ops-settings-list">
              <li>Static site mode</li>
              <li>Browser-local content store</li>
              <li>Hidden from public navigation</li>
              <li>Manual deploy required for real publishing</li>
            </ul>
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
              <div>
                <span className={`ops-status ops-status-${post.status.toLowerCase()}`}>{post.status}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="ops-post-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                  <span>Updated {post.updatedAt}</span>
                </div>
              </div>
              <div className="ops-post-actions">
                <button type="button" onClick={() => editPost(post)}>
                  Edit
                </button>
                <button type="button" onClick={() => deletePost(post)}>
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
