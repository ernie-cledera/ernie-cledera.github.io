import { useEffect, useState } from "react";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { profileData } from "@/data/portfolio";

const LS_KEY = "portfolio_local_visits";

function getLocalBase(): number {
  const raw = localStorage.getItem(LS_KEY);
  const n = raw ? parseInt(raw, 10) : 0;
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const incrementLocal = () => {
      if (!sessionStorage.getItem("portfolio_visit_counted")) {
        sessionStorage.setItem("portfolio_visit_counted", "1");
        const next = getLocalBase() + 1;
        localStorage.setItem(LS_KEY, String(next));
        return next;
      }
      return getLocalBase();
    };

    const apply = (n: number) => {
      if (!cancelled) setCount(n);
    };

    (async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        const res = await fetch("/api/visits", { method: "POST", signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) throw new Error("Bad response");
        const data = (await res.json()) as { count?: number };
        apply(typeof data.count === "number" ? data.count : incrementLocal());
      } catch {
        apply(incrementLocal());
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p className="mt-4 text-center text-xs text-foreground">
      Website Visitors: {count === null ? "…" : count.toLocaleString()}
    </p>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 border-t border-border/40 pt-16 pb-6 md:pt-20 md:pb-10">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-5">
          <BrandLogo className="h-16 w-16" />

          <div className="flex items-center gap-2">
            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/85 text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/85 text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={profileData.social.site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/85 text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/85 text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <VisitorCounter />
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-foreground">Open to Work</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-foreground">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}