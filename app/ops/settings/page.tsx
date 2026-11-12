import Link from "next/link";
import { isAdminAuthed, loginAction, logoutAction } from "@/app/ops/add/actions";
import { PasswordInput } from "@/app/ops/add/PasswordInput";
import { getBlogBackendStatus, getAuditLogs } from "@/lib/blog";
import { SettingsPanel } from "./SettingsPanel";

function formatAuditDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default async function OpsSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [{ error }, isAuthed] = await Promise.all([searchParams, isAdminAuthed()]);
  const backendStatus = getBlogBackendStatus();

  if (!isAuthed) {
    return (
      <main className="ops-page ops-login-page">
        <section className="ops-login-card frame-card">
          <span className="section-kicker kicker-with-dot">Admin Login</span>
          <h1>Seversoft Ops</h1>
          <p>Sign in to access system and AI model settings.</p>

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

  const auditLogs = await getAuditLogs();
  const settingsAuditLogs = auditLogs.filter(
    (log) => log.action.toLowerCase().includes("setting") || log.action.toLowerCase().includes("admin")
  );

  return (
    <main className="ops-page">
      <header className="ops-header">
        <div>
          <span className="section-kicker kicker-with-dot">Admin Settings</span>
          <h1>AI & System Configuration</h1>
          <p>Manage AI providers, API keys, default generation models, and runtime parameters.</p>
        </div>
        <div className="ops-header-actions">
          <Link href="/ops/add" className="button button-secondary">
            ← Content Dashboard
          </Link>
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

      <div style={{ maxWidth: "1280px", margin: "0 auto 24px", display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(300px, 0.6fr)", gap: "18px" }}>
        <div>
          <SettingsPanel />
        </div>

        <aside className="ops-side">
          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Environment</span>
                <h2>Backend status</h2>
              </div>
            </div>
            <ul className="ops-settings-list">
              <li>Database: {backendStatus.publicReadsConfigured ? "Supabase Connected" : "Local fallback"}</li>
              <li>Admin writes: {backendStatus.adminWritesConfigured ? "Active" : "Disabled (Missing Key)"}</li>
              <li>Auth state: {process.env.ADMIN_PASSWORD ? "Protected" : "No Password"}</li>
              <li>Runtime: Node.js server</li>
            </ul>
          </section>

          <section className="ops-panel frame-card">
            <div className="ops-panel-heading">
              <div>
                <span>Providers Guide</span>
                <h2>Free tier keys</h2>
              </div>
            </div>
            <div style={{ display: "grid", gap: "12px", fontSize: "0.85rem" }}>
              <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <strong style={{ display: "block", color: "var(--teal)" }}>Groq</strong>
                <span className="ops-muted">Ultra-fast inference. Get a free API key at </span>
                <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" style={{ color: "var(--teal)" }}>
                  console.groq.com
                </a>
              </div>
              <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <strong style={{ display: "block", color: "#60a5fa" }}>OpenRouter</strong>
                <span className="ops-muted">Access multiple free open-weight models at </span>
                <a href="https://openrouter.ai/keys" target="_blank" rel="noreferrer" style={{ color: "#60a5fa" }}>
                  openrouter.ai
                </a>
              </div>
              <div style={{ padding: "10px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <strong style={{ display: "block", color: "#a78bfa" }}>Google Gemini</strong>
                <span className="ops-muted">Generous free tier with 1,500 req/day at </span>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ color: "#a78bfa" }}>
                  aistudio.google.com
                </a>
              </div>
            </div>
          </section>

          {settingsAuditLogs.length > 0 && (
            <section className="ops-panel frame-card">
              <div className="ops-panel-heading">
                <div>
                  <span>Activity</span>
                  <h2>Settings history</h2>
                </div>
              </div>
              <div className="ops-activity-list">
                {settingsAuditLogs.map((item) => (
                  <div key={item.id} className="ops-activity-item">
                    <strong>{item.action}</strong>
                    <p>{item.detail}</p>
                    <span>{formatAuditDate(item.created_at)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </main>
  );
}
