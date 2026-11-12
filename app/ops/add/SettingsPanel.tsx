"use client";

import { useState, useEffect } from "react";

interface ModelItem {
  id: string;
  name: string;
}

interface SettingsState {
  groqApiKeyMasked: string;
  hasGroqApiKey: boolean;
  defaultModel: string;
  activeProvider: "groq" | "openrouter" | "gemini";
  openRouterApiKeyMasked: string;
  hasOpenRouterApiKey: boolean;
  geminiApiKeyMasked: string;
  hasGeminiApiKey: boolean;
  temperature: number;
}

export function SettingsPanel() {
  const [settings, setSettings] = useState<SettingsState | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refreshingModels, setRefreshingModels] = useState(false);
  const [models, setModels] = useState<ModelItem[]>([]);
  
  // Form states
  const [groqKeyInput, setGroqKeyInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [provider, setProvider] = useState<"groq" | "openrouter" | "gemini">("groq");
  const [openRouterKeyInput, setOpenRouterKeyInput] = useState("");
  const [geminiKeyInput, setGeminiKeyInput] = useState("");
  
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Load settings and models
  async function loadData() {
    try {
      setLoading(true);
      const [settingsRes, modelsRes] = await Promise.all([
        fetch("/api/settings"),
        fetch("/api/models"),
      ]);

      if (settingsRes.ok) {
        const sData = await settingsRes.json();
        setSettings(sData);
        setSelectedModel(sData.defaultModel || "");
        setTemperature(sData.temperature ?? 0.7);
        setProvider(sData.activeProvider || "groq");
      }

      if (modelsRes.ok) {
        const mData = await modelsRes.json();
        if (mData.models?.length) {
          setModels(mData.models);
          if (!selectedModel && mData.defaultModel) {
            setSelectedModel(mData.defaultModel);
          }
        }
      }
    } catch {
      setMessage({ type: "error", text: "Failed to load settings or models" });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleRefreshModels() {
    setRefreshingModels(true);
    setMessage(null);
    try {
      const res = await fetch("/api/models");
      const data = await res.json();
      if (res.ok && data.models) {
        setModels(data.models);
        setMessage({ type: "success", text: `Fetched ${data.models.length} active models directly from Groq.` });
      } else {
        setMessage({ type: "error", text: data.error || "Failed to refresh models." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error while refreshing models." });
    } finally {
      setRefreshingModels(false);
    }
  }

  async function handleSaveSettings(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const payload: Record<string, unknown> = {
      defaultModel: selectedModel,
      activeProvider: provider,
      temperature,
    };

    if (groqKeyInput.trim()) {
      payload.groqApiKey = groqKeyInput.trim();
    }
    if (openRouterKeyInput.trim()) {
      payload.openRouterApiKey = openRouterKeyInput.trim();
    }
    if (geminiKeyInput.trim()) {
      payload.geminiApiKey = geminiKeyInput.trim();
    }

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update settings");
      }

      setSettings(data.settings);
      setGroqKeyInput("");
      setOpenRouterKeyInput("");
      setGeminiKeyInput("");
      setMessage({ type: "success", text: "Settings saved successfully! New configuration is active." });

      // Notify AIGenerator to refresh its models and default selection
      window.dispatchEvent(new CustomEvent("ai-settings-updated"));
      // Refresh local models list
      handleRefreshModels();
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Error saving settings";
      setMessage({ type: "error", text: errorMsg });
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="ops-panel frame-card" style={{ marginBottom: "1.5rem" }}>
      <div className="ops-panel-heading">
        <div>
          <span className="section-kicker kicker-with-dot">AI Configuration</span>
          <h2>Model & API Key Settings</h2>
          <p className="ops-muted" style={{ margin: "4px 0 0", fontSize: "0.85rem" }}>
            Manage your AI provider, API keys, and default generation model without modifying code.
          </p>
        </div>
        <button
          type="button"
          onClick={handleRefreshModels}
          disabled={refreshingModels || loading}
          className="button button-secondary"
          style={{ fontSize: "0.8rem", padding: "6px 12px" }}
        >
          {refreshingModels ? "Checking..." : "🔄 Refresh Models"}
        </button>
      </div>

      {message && (
        <div
          className={`ops-banner ${message.type === "error" ? "ops-banner-warning" : ""}`}
          style={{
            margin: "0 0 1rem",
            padding: "10px 14px",
            fontSize: "0.85rem",
            borderLeft: message.type === "error" ? "3px solid #ef4444" : "3px solid var(--teal)",
          }}
        >
          {message.text}
        </div>
      )}

      {loading ? (
        <p className="ops-muted" style={{ fontSize: "0.9rem" }}>Loading configuration...</p>
      ) : (
        <form onSubmit={handleSaveSettings} style={{ display: "grid", gap: "1.25rem" }}>
          {/* Provider selector */}
          <div className="ops-field">
            <label style={{ fontSize: "0.85rem", fontWeight: 600 }}>Active Provider</label>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[
                { id: "groq", name: "Groq (Fast Inference)", badge: "Primary" },
                { id: "openrouter", name: "OpenRouter (Free/Open Models)", badge: "Ready" },
                { id: "gemini", name: "Google Gemini (Free Tier)", badge: "Ready" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProvider(p.id as "groq" | "openrouter" | "gemini")}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: provider === p.id ? "1px solid var(--teal)" : "1px solid rgba(255,255,255,0.1)",
                    background: provider === p.id ? "rgba(79, 210, 195, 0.12)" : "rgba(255,255,255,0.03)",
                    color: provider === p.id ? "var(--teal)" : "inherit",
                    cursor: "pointer",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{p.name}</span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      padding: "1px 6px",
                      borderRadius: "4px",
                      background: provider === p.id ? "var(--teal)" : "rgba(255,255,255,0.1)",
                      color: provider === p.id ? "#000" : "inherit",
                      fontWeight: 700,
                    }}
                  >
                    {p.badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Groq API Key */}
          {provider === "groq" && (
            <div className="ops-field">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="groq-key-input" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  Groq API Key
                </label>
                {settings?.hasGroqApiKey && (
                  <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 600 }}>
                    ✓ Configured ({settings.groqApiKeyMasked})
                  </span>
                )}
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  id="groq-key-input"
                  type={showKey ? "text" : "password"}
                  value={groqKeyInput}
                  onChange={(e) => setGroqKeyInput(e.target.value)}
                  placeholder={
                    settings?.hasGroqApiKey
                      ? `Replace current key (${settings.groqApiKeyMasked})`
                      : "gsk_..."
                  }
                  style={{ flex: 1, fontFamily: showKey ? "monospace" : "inherit" }}
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="button button-secondary"
                  style={{ padding: "0 12px", fontSize: "0.8rem" }}
                  title={showKey ? "Hide key" : "Show key"}
                >
                  {showKey ? "Hide" : "Show"}
                </button>
              </div>
              <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                Stored securely. Changing this key will immediately update available models.
              </span>
            </div>
          )}

          {/* OpenRouter API Key */}
          {provider === "openrouter" && (
            <div className="ops-field">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="openrouter-key-input" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  OpenRouter API Key
                </label>
                {settings?.hasOpenRouterApiKey && (
                  <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 600 }}>
                    ✓ Configured ({settings.openRouterApiKeyMasked})
                  </span>
                )}
              </div>
              <input
                id="openrouter-key-input"
                type="password"
                value={openRouterKeyInput}
                onChange={(e) => setOpenRouterKeyInput(e.target.value)}
                placeholder={
                  settings?.hasOpenRouterApiKey
                    ? `Replace current key (${settings.openRouterApiKeyMasked})`
                    : "sk-or-v1-..."
                }
              />
              <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                Allows using free-tier open models like Llama, Mistral, and Qwen via OpenRouter.
              </span>
            </div>
          )}

          {/* Gemini API Key */}
          {provider === "gemini" && (
            <div className="ops-field">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="gemini-key-input" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  Google Gemini API Key
                </label>
                {settings?.hasGeminiApiKey && (
                  <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 600 }}>
                    ✓ Configured ({settings.geminiApiKeyMasked})
                  </span>
                )}
              </div>
              <input
                id="gemini-key-input"
                type="password"
                value={geminiKeyInput}
                onChange={(e) => setGeminiKeyInput(e.target.value)}
                placeholder={
                  settings?.hasGeminiApiKey
                    ? `Replace current key (${settings.geminiApiKeyMasked})`
                    : "AIzaSy..."
                }
              />
              <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                Access Google Gemini 2.0 / 2.5 Flash with free tier limits.
              </span>
            </div>
          )}

          {/* Model selector & Temperature */}
          <div className="ops-row">
            <div className="ops-field">
              <label htmlFor="default-model-select" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                Default AI Model
              </label>
              <select
                id="default-model-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={models.length === 0}
              >
                {models.length === 0 ? (
                  <option value="">No models loaded (check API key)</option>
                ) : (
                  models.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.id}
                    </option>
                  ))
                )}
              </select>
              <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                Automatically loaded from your account. Used as the default for new drafts.
              </span>
            </div>

            <div className="ops-field">
              <label htmlFor="temperature-slider" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                Creativity / Temperature ({temperature})
              </label>
              <input
                id="temperature-slider"
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                style={{ padding: 0 }}
              />
              <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                0.2 = More focused & deterministic, 0.8 = More creative.
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="ops-form-actions" style={{ justifyContent: "flex-start", gap: "0.75rem" }}>
            <button type="submit" disabled={saving} className="button button-primary">
              {saving ? "Testing & Saving..." : "Save Settings"}
            </button>
            <button
              type="button"
              onClick={loadData}
              disabled={loading || saving}
              className="button button-secondary"
            >
              Reset to Current
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
