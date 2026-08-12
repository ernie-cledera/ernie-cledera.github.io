export const VISITS_KEY = "visitor_count";

export function readCount(store: Record<string, string> | null): number {
  if (!store) return 0;
  const raw = store[VISITS_KEY];
  const n = raw ? parseInt(raw, 10) : 0;
  return Number.isFinite(n) && n > 0 ? n : 0;
}
