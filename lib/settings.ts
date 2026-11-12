import fs from "fs/promises";
import path from "path";

export type AppSettings = {
  groqApiKey: string;
  defaultModel: string;
  activeProvider: "groq" | "openrouter" | "gemini";
  openRouterApiKey: string;
  geminiApiKey: string;
  temperature: number;
};

const DEFAULT_SETTINGS: AppSettings = {
  groqApiKey: process.env.GROQ_API_KEY || "",
  defaultModel: "openai/gpt-oss-120b",
  activeProvider: "groq",
  openRouterApiKey: process.env.OPENROUTER_API_KEY || "",
  geminiApiKey: process.env.GEMINI_API_KEY || "",
  temperature: 0.7,
};

const SETTINGS_FILE_PATH = path.join(process.cwd(), ".settings.json");
const ENV_LOCAL_PATH = path.join(process.cwd(), ".env.local");

// In-memory cache for fast reads
let cachedSettings: AppSettings | null = null;

async function getSupabaseHeaders() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) return null;

  return {
    url: `${supabaseUrl.replace(/\/$/, "")}/rest/v1/app_settings`,
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  };
}

async function readFromSupabase(): Promise<Partial<AppSettings> | null> {
  const config = await getSupabaseHeaders();
  if (!config) return null;

  try {
    const res = await fetch(`${config.url}?select=*`, {
      headers: config.headers,
      cache: "no-store",
    });

    if (!res.ok) return null;

    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) return null;

    const settingsMap: Record<string, unknown> = {};
    for (const row of rows) {
      if (row.key && row.value !== undefined) {
        try {
          settingsMap[row.key] = JSON.parse(row.value);
        } catch {
          settingsMap[row.key] = row.value;
        }
      }
    }
    return settingsMap as Partial<AppSettings>;
  } catch {
    return null;
  }
}

async function writeToSupabase(settings: AppSettings): Promise<boolean> {
  const config = await getSupabaseHeaders();
  if (!config) return false;

  try {
    const entries = Object.entries(settings).map(([key, value]) => ({
      key,
      value: JSON.stringify(value),
      updated_at: new Date().toISOString(),
    }));

    const res = await fetch(config.url, {
      method: "POST",
      headers: {
        ...config.headers,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify(entries),
    });

    return res.ok;
  } catch {
    return false;
  }
}

async function readFromFile(): Promise<Partial<AppSettings> | null> {
  try {
    const data = await fs.readFile(SETTINGS_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

async function writeToFile(settings: AppSettings): Promise<void> {
  try {
    await fs.writeFile(SETTINGS_FILE_PATH, JSON.stringify(settings, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write .settings.json:", err);
  }
}

async function syncToEnvLocal(key: string, value: string): Promise<void> {
  try {
    let content = "";
    try {
      content = await fs.readFile(ENV_LOCAL_PATH, "utf-8");
    } catch {
      content = "";
    }

    const regex = new RegExp(`^${key}=.*$`, "m");
    if (regex.test(content)) {
      content = content.replace(regex, `${key}=${value}`);
    } else {
      content = content ? `${content.trim()}\n${key}=${value}\n` : `${key}=${value}\n`;
    }

    await fs.writeFile(ENV_LOCAL_PATH, content, "utf-8");
  } catch (err) {
    console.error(`Failed to update ${key} in .env.local:`, err);
  }
}

export async function getSettings(): Promise<AppSettings> {
  if (cachedSettings) {
    return cachedSettings;
  }

  // 1. Try Supabase
  const dbSettings = await readFromSupabase();

  // 2. Try local file
  const fileSettings = await readFromFile();

  const merged: AppSettings = {
    ...DEFAULT_SETTINGS,
    ...(fileSettings || {}),
    ...(dbSettings || {}),
    // Ensure groqApiKey fallback from env if empty
    groqApiKey:
      dbSettings?.groqApiKey ||
      fileSettings?.groqApiKey ||
      process.env.GROQ_API_KEY ||
      "",
  };

  cachedSettings = merged;
  return merged;
}

export async function updateSettings(
  partial: Partial<AppSettings>
): Promise<AppSettings> {
  const current = await getSettings();
  const updated: AppSettings = {
    ...current,
    ...partial,
  };

  cachedSettings = updated;

  // Sync to memory process.env so existing SDK instances pick it up
  if (updated.groqApiKey) {
    process.env.GROQ_API_KEY = updated.groqApiKey;
    await syncToEnvLocal("GROQ_API_KEY", updated.groqApiKey);
  }

  // Save to local file
  await writeToFile(updated);

  // Attempt to save to Supabase
  await writeToSupabase(updated);

  return updated;
}

export function maskApiKey(key: string): string {
  if (!key) return "";
  if (key.length <= 8) return "••••••••";
  return `${key.slice(0, 7)}...${key.slice(-4)}`;
}
