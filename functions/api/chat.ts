import { handleChat, type ChatMessage } from "../../server/chat.ts";

interface Env {
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;
  OPENROUTER_API_KEY?: string;
  OPENROUTER_MODEL?: string;
}

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
    const apiKey =
      [env.OPENAI_API_KEY, env.OPENROUTER_API_KEY].find(
        (value): value is string => !!value && value.trim().length > 0
      ) ?? "";
    const model =
      [env.OPENAI_MODEL, env.OPENROUTER_MODEL].find(
        (value): value is string => !!value && value.trim().length > 0
      ) ?? undefined;
    const apiUrl =
      env.OPENROUTER_API_KEY && env.OPENROUTER_API_KEY.trim().length > 0
        ? "https://api.openrouter.ai/v1/chat/completions"
        : undefined;

    const reply = await handleChat(messages, apiKey, model, apiUrl);
    return Response.json({ reply }, { status: 200, headers: cors });
  } catch (e) {
    console.error("Chat error:", e);
    return Response.json(
      { error: (e as Error).message },
      { status: 500, headers: cors }
    );
  }
};