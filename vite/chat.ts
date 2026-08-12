import type { Connect } from "vite";
import { handleChat, type ChatMessage } from "../server/chat";

export function chatMiddleware(): Connect.NextHandleFunction {
  return async function chat(req, res, next) {
    if ((req.url ?? "").split("?")[0] !== "/api/chat") {
      next();
      return;
    }

    if (req.method === "OPTIONS") {
      res.writeHead(204, { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" });
      res.end();
      return;
    }

    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    let body = "";
    req.setEncoding("utf8");
    for await (const chunk of req) {
      body += chunk;
    }

    let messages: ChatMessage[];
    try {
      const parsed = JSON.parse(body) as { messages?: ChatMessage[] };
      if (!Array.isArray(parsed.messages) || parsed.messages.length === 0) {
        throw new Error("The 'messages' array is required.");
      }
      messages = parsed.messages;
    } catch (e) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: (e as Error).message }));
      return;
    }

    try {
      const apiKey =
        [process.env.OPENAI_API_KEY, process.env.OPENROUTER_API_KEY].find(
          (value): value is string => !!value && value.trim().length > 0
        ) ?? "";
      const model =
        [process.env.OPENAI_MODEL, process.env.OPENROUTER_MODEL].find(
          (value): value is string => !!value && value.trim().length > 0
        ) ?? undefined;
      const apiUrl =
        process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY.trim().length > 0
          ? "https://api.openrouter.ai/v1/chat/completions"
          : undefined;

      const reply = await handleChat(messages, apiKey, model, apiUrl);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ reply }));
    } catch (e) {
      console.error("Chat error:", e);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: (e as Error).message }));
    }
  };
}