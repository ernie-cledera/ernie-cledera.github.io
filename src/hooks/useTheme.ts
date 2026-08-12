import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

let theme: Theme = getInitial();

function apply(t: Theme) {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", t === "dark");
  }
  try {
    localStorage.setItem(STORAGE_KEY, t);
  } catch {
    /* ignore */
  }
}

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return theme;
}

export function setTheme(t: Theme) {
  if (t === theme) return;
  theme = t;
  apply(t);
  listeners.forEach((l) => l());
}

apply(theme);

export default function useTheme() {
  const value = useSyncExternalStore(subscribe, getSnapshot, () => theme);
  return { theme: value, setTheme };
}
