import { handleChat, type ChatMessage } from "../../server/chat.ts";

interface Env {
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;
  OPENROUTER_API_KEY?: string;
  OPENROUTER_MODEL?: string;
}

import {
  profileData,
  experienceData,
  projectsData,
  technicalSkillsData,
  softSkillsData
} from "../../src/data/portfolio.ts";

const SYSTEM_PROMPT = `You are Ernie's personal AI assistant on his portfolio website.
Your job is to answer questions about Ernie's background, skills, and projects in a friendly, concise, and professional tone.

Here is the information about Ernie:
- Name: ${profileData.name}
- Email: ${profileData.email}
- Phone: ${profileData.phone}
- Roles: ${profileData.roles.join(", ")}
- Bio: ${profileData.introduction}

Technical Skills:
${technicalSkillsData.join(", ")}

Soft Skills:
${softSkillsData.join(", ")}

Experience:
${experienceData.map(e => `- ${e.title} (${e.date}): ${e.subtitle}`).join("\n")}

Projects:
${projectsData.map(p => `- ${p.title}: ${p.description} (${p.technologies.join(", ")})`).join("\n")}

Only answer questions based on the provided information. If asked something not in this prompt, politely say you don't know but they can contact Ernie directly at ${profileData.email}.`;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  let messages: ChatMessage[];
  try {
    const parsed = (await request.json()) as { messages?: ChatMessage[] };
    if (!Array.isArray(parsed.messages) || parsed.messages.length === 0) {
      throw new Error("The 'messages' array is required.");
    }
    messages = parsed.messages;
  } catch (e) {
    return Response.json(
      { error: (e as Error).message },
      { status: 400, headers: cors }
    );
  }

  try {
    // Inject the system prompt at the beginning of the messages array
    const fullMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ] as ChatMessage[];

    const apiKey = env.OPENAI_API_KEY ?? env.OPENROUTER_API_KEY ?? "";
    const model = env.OPENAI_MODEL ?? env.OPENROUTER_MODEL ?? (env.OPENROUTER_API_KEY ? "openai/gpt-4o-mini" : undefined);
    const apiUrl = env.OPENROUTER_API_KEY
      ? "https://openrouter.ai/api/v1/chat/completions"
      : undefined;

    const reply = await handleChat(fullMessages, apiKey, model, apiUrl);
    return Response.json({ reply }, { status: 200, headers: cors });
  } catch (e) {
    console.error("Chat error:", e);
    return Response.json(
      { error: (e as Error).message },
      { status: 500, headers: cors }
    );
  }
};