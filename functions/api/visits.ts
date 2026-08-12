interface Env {
  VISITS_KV?: KVNamespace;
}

const KEY = "visitor_count";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function readCount(env: Env): Promise<number> {
  if (!env.VISITS_KV) return 0;
  const raw = await env.VISITS_KV.get(KEY);
  const n = raw ? parseInt(raw, 10) : 0;
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export const onRequestOptions: PagesFunction<Env> = async () => {
  return new Response(null, { status: 204, headers: cors });
};

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const count = await readCount(env);
  return Response.json({ count }, { status: 200, headers: cors });
};

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  const count = (await readCount(env)) + 1;
  if (env.VISITS_KV) {
    await env.VISITS_KV.put(KEY, String(count));
  }
  return Response.json({ count }, { status: 200, headers: cors });
};
