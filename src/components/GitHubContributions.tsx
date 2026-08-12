import { useState } from "react";
import { Github } from "lucide-react";
import Reveal from "./Reveal";
import useTheme from "@/hooks/useTheme";
import { profileData } from "@/data/portfolio";

const username = profileData.social.github.split("/").filter(Boolean).pop() ?? "";

const CHART_URL = (theme: string) =>
  `https://ghchart.rshah.org/${theme === "dark" ? "D4AF37" : "0F172A"}/${username}`;

export default function GitHubContributions() {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const color = theme === "dark" ? "D4AF37" : "0F172A";

  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm md:p-8">
          {failed ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <Github className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Couldn&apos;t load contribution data right now.
              </p>
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Github className="h-4 w-4" /> View GitHub Profile
              </a>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Github className="h-4 w-4" />
                </div>
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  View Profile →
                </a>
              </div>

              {!loaded && (
                <div className="space-y-2 py-4">
                  <div className="h-2.5 w-1/3 animate-pulse rounded-full bg-muted/60" />
                  <div className="flex h-[104px] items-end gap-1.5">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <span
                        key={i}
                        className="flex-1 animate-pulse rounded-sm bg-muted/50"
                        style={{ height: `${20 + ((i * 37) % 80)}%` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <img
                src={CHART_URL(theme)}
                alt={`${username} GitHub contributions over the last year`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className={`h-auto w-full ${loaded ? "" : "hidden"}`}
                onLoad={() => setLoaded(true)}
                onError={() => setFailed(true)}
              />
            </>
          )}
      </div>
    </Reveal>
  );
}
