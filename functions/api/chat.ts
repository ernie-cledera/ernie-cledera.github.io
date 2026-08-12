import { handleChat, type ChatMessage } from "../../server/chat.ts";

interface Env {
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;
  OPENROUTER_API_KEY?: string;
  OPENROUTER_MODEL?: string;
  openai_api_key?: string;
  openai_model?: string;
  openrouter_api_key?: string;
  openrouter_model?: string;
}

function pickNonEmpty(...values: Array<string | undefined>) {
  return values.find((value) => !!value && value.trim().length > 0);
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
    const openRouterKey = pickNonEmpty(
      env.OPENROUTER_API_KEY,
      env.openrouter_api_key
    )?.trim();
    const openAIKey = pickNonEmpty(env.OPENAI_API_KEY, env.openai_api_key)?.trim();
    const apiKey = openRouterKey || openAIKey || "";
    const model =
      openRouterKey
        ? pickNonEmpty(
            env.OPENROUTER_MODEL,
            env.openrouter_model,
            env.OPENAI_MODEL,
            env.openai_model
          )?.trim()
        : pickNonEmpty(env.OPENAI_MODEL, env.openai_model, env.OPENROUTER_MODEL, env.openrouter_model)?.trim();
    const apiUrl = openRouterKey
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