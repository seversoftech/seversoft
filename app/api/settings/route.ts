import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { isAdminAuthed } from "@/app/ops/add/actions";
import { createAuditLog } from "@/lib/blog";
import { getSettings, updateSettings, maskApiKey, type AppSettings } from "@/lib/settings";

export async function GET() {
  try {
    const isAuthed = await isAdminAuthed();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const settings = await getSettings();

    return NextResponse.json({
      groqApiKeyMasked: maskApiKey(settings.groqApiKey),
      hasGroqApiKey: Boolean(settings.groqApiKey),
      defaultModel: settings.defaultModel,
      activeProvider: settings.activeProvider,
      openRouterApiKeyMasked: maskApiKey(settings.openRouterApiKey),
      hasOpenRouterApiKey: Boolean(settings.openRouterApiKey),
      geminiApiKeyMasked: maskApiKey(settings.geminiApiKey),
      hasGeminiApiKey: Boolean(settings.geminiApiKey),
      temperature: settings.temperature,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load settings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const isAuthed = await isAdminAuthed();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const updates: Partial<AppSettings> = {};

    // Validate and test groqApiKey if provided
    if (typeof body.groqApiKey === "string" && body.groqApiKey.trim()) {
      const newKey = body.groqApiKey.trim();
      // Test key by requesting models from Groq
      try {
        const groqTest = new Groq({ apiKey: newKey });
        await groqTest.models.list();
      } catch (keyErr: unknown) {
        const errMessage = keyErr instanceof Error ? keyErr.message : "Invalid API Key";
        return NextResponse.json(
          { error: `Groq verification failed: ${errMessage}` },
          { status: 400 }
        );
      }
      updates.groqApiKey = newKey;
    }

    if (typeof body.defaultModel === "string" && body.defaultModel.trim()) {
      updates.defaultModel = body.defaultModel.trim();
    }

    if (body.activeProvider && ["groq", "openrouter", "gemini"].includes(body.activeProvider)) {
      updates.activeProvider = body.activeProvider;
    }

    if (typeof body.openRouterApiKey === "string") {
      updates.openRouterApiKey = body.openRouterApiKey.trim();
    }

    if (typeof body.geminiApiKey === "string") {
      updates.geminiApiKey = body.geminiApiKey.trim();
    }

    if (typeof body.temperature === "number" && body.temperature >= 0 && body.temperature <= 2) {
      updates.temperature = body.temperature;
    }

    const updated = await updateSettings(updates);
    await createAuditLog("Settings updated", `Default model: ${updated.defaultModel}, Provider: ${updated.activeProvider}`);

    return NextResponse.json({
      success: true,
      settings: {
        groqApiKeyMasked: maskApiKey(updated.groqApiKey),
        hasGroqApiKey: Boolean(updated.groqApiKey),
        defaultModel: updated.defaultModel,
        activeProvider: updated.activeProvider,
        openRouterApiKeyMasked: maskApiKey(updated.openRouterApiKey),
        hasOpenRouterApiKey: Boolean(updated.openRouterApiKey),
        geminiApiKeyMasked: maskApiKey(updated.geminiApiKey),
        hasGeminiApiKey: Boolean(updated.geminiApiKey),
        temperature: updated.temperature,
      },
    });
  } catch (error: unknown) {
    console.error("Failed to update settings:", error);
    const message = error instanceof Error ? error.message : "Failed to update settings";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
