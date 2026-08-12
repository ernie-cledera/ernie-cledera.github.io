export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

export async function handleChat(
  messages: ChatMessage[],
  apiKey: string,
  model = "gpt-4o-mini",
  apiUrl?: string
): Promise<string> {
  if (!apiKey || apiKey.trim().length === 0) {
    throw new Error(
      "No API key is configured on the server. Set OPENAI_API_KEY or OPENROUTER_API_KEY in Cloudflare Pages environment variables/secrets."
    );
  }

  const endpoint = apiUrl ?? OPENAI_CHAT_URL;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 600,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI error (${res.status}): ${text.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const reply: string | undefined = data?.choices?.[0]?.message?.content;
  if (!reply) {
    throw new Error("OpenAI returned an empty response.");
  }
  return reply.trim();
}