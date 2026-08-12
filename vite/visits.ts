import type { Connect } from "vite";
import { readCount, VISITS_KEY } from "../server/visits";

const mem: Record<string, string> = {};

export function visitsMiddleware(): Connect.NextHandleFunction {
  return async function visits(req, res, next) {
    if ((req.url ?? "").split("?")[0] !== "/api/visits") {
      next();
      return;
    }

    if (req.method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      });
      res.end();
      return;
    }

    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count: readCount(mem) }));
      return;
    }

    if (req.method === "POST") {
      const count = readCount(mem) + 1;
      mem[VISITS_KEY] = String(count);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ count }));
      return;
    }

    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
  };
}
