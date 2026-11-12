import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { isAdminAuthed } from "@/app/ops/add/actions";
import { getSettings } from "@/lib/settings";

// Models that don't support chat completions (audio-only, classifiers, etc.)
const EXCLUDED_MODELS = [
  "whisper-large-v3",
  "whisper-large-v3-turbo",
  "meta-llama/llama-prompt-guard-2-22m",
  "meta-llama/llama-prompt-guard-2-86m",
  "openai/gpt-oss-safeguard-20b",
  "canopylabs/orpheus-arabic-saudi",
  "canopylabs/orpheus-v1-english",
];

export async function GET() {
  try {
    const isAuthed = await isAdminAuthed();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const settings = await getSettings();
    const apiKey = settings.groqApiKey || process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Groq API Key is not configured. Please add it in Settings." },
        { status: 500 }
      );
    }

    const groq = new Groq({ apiKey });
    const list = await groq.models.list();

    const chatModels = list.data
      .filter((m) => !EXCLUDED_MODELS.includes(m.id))
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((m) => ({ id: m.id, name: m.id }));

    return NextResponse.json({
      models: chatModels,
      defaultModel: settings.defaultModel,
      activeProvider: settings.activeProvider,
    });
  } catch (error: unknown) {
    console.error("Failed to fetch models:", error);
    const message =
      error instanceof Error ? error.message : "Failed to fetch models";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
