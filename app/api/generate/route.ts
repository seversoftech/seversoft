import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { isAdminAuthed } from "@/app/ops/add/actions";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const isAuthed = await isAdminAuthed();
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured in .env.local" },
        { status: 500 }
      );
    }

    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a professional technical blog writer for Seversoft. 
Generate a blog post based on the user's prompt. 
You MUST return a raw JSON object with NO markdown formatting, NO backticks, and NO code blocks. Do not wrap the JSON in \`\`\`json.
The JSON must have the following keys:
- "title": A catchy technical title
- "excerpt": A 2-3 sentence summary
- "callout": A short one-sentence insightful quote or key takeaway
- "category": The most relevant category. MUST be exactly one of: "Software Engineering", "Fintech Infrastructure", "AI Systems", "Compliance", "Product Strategy", "APIs", "Cloud Infrastructure", "General".
- "readTime": Estimated read time (e.g., "5 min read") based on the length of the generated content.
- "content": The main body of the article as plain text or simple markdown. This section MUST be extremely comprehensive and long-form. Write extensively (at least 800-1000 words) with deep insights, examples, and detailed explanations. Do not write a short summary.`,
        },
        {
          role: "user",
          content: `Write a blog post about: ${prompt}`,
        },
      ],
      model: "llama-3.3-70b-versatile", // Using a current supported Groq model
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const output = completion.choices[0]?.message?.content;
    
    if (!output) {
      throw new Error("No output generated");
    }

    // Try to safely parse the JSON output
    let parsed;
    try {
      let cleaned = output.trim();
      if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```(json)?\s*/i, "").replace(/```$/i, "").trim();
      }
      // In case the model still outputs literal newlines in strings, escape them before parsing.
      // But json_object format should guarantee valid JSON.
      parsed = JSON.parse(cleaned);
    } catch (_e) {
      console.error("Failed to parse Groq output:", output);
      return NextResponse.json({ error: "AI returned malformed JSON." }, { status: 500 });
    }

    return NextResponse.json(parsed);
  } catch (error: unknown) {
    console.error("Groq generation error:", error);
    const message = error instanceof Error ? error.message : "Failed to generate content";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
