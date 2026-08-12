export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const OPENAI_CHAT_URL = "https://api.openai.com/v1/chat/completions";

export async function handleChat(
  messages: ChatMessage[],
  apiKey: string,
  model = "gpt-4o-mini"
): Promise<string> {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured on the server.");
  }

  const res = await fetch(OPENAI_CHAT_URL, {
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