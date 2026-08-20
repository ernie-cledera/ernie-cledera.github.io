import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import Reveal from "./Reveal";
import useTheme from "@/hooks/useTheme";
import { profileData } from "@/data/portfolio";

const username = profileData.social.github.split("/").filter(Boolean).pop() ?? "";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export default function GitHubContributions() {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [weeks, setWeeks] = useState<ContributionDay[][]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((res: ApiResponse) => {
        if (!active) return;
        
        // Sum total contributions
        const total = Object.values(res.total).reduce((a, b) => a + b, 0);
        setTotalContributions(total);

        // Group into weeks
        const contributions = res.contributions;
        if (contributions.length > 0) {
          const firstDayOfWeek = new Date(contributions[0].date).getDay();
          const tempWeeks: ContributionDay[][] = [];
          let currentWeek: ContributionDay[] = [];

          // Add padding for the first week
          for (let i = 0; i < firstDayOfWeek; i++) {
            currentWeek.push({ date: "", count: 0, level: -1 });
          }

          contributions.forEach((day) => {
            if (currentWeek.length === 7) {
              tempWeeks.push(currentWeek);
              currentWeek = [];
            }
            currentWeek.push(day);
          });

          if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
              currentWeek.push({ date: "", count: 0, level: -1 });
            }
            tempWeeks.push(currentWeek);
          }

          setWeeks(tempWeeks);
        }
        setLoaded(true);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const getCellClass = (level: number) => {
    if (level === -1) return "bg-transparent"; // padding cell
    if (theme === "dark") {
      switch (level) {
        case 0: return "bg-zinc-800/40";
        case 1: return "bg-[#D4AF37]/20";
        case 2: return "bg-[#D4AF37]/45";
        case 3: return "bg-[#D4AF37]/75";
        case 4: return "bg-[#D4AF37]";
        default: return "bg-zinc-800/40";
      }
    } else {
      switch (level) {
        case 0: return "bg-zinc-200/60";
        case 1: return "bg-primary/20";
        case 2: return "bg-primary/45";
        case 3: return "bg-primary/75";
        case 4: return "bg-primary";
        default: return "bg-zinc-200/60";
      }
    }
  };

  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Github className="h-4 w-4" />
            {loaded && !failed && `${totalContributions} contributions in the last year`}
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
        ) : !loaded ? (
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
        ) : (
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin md:overflow-visible">
            <div className="grid grid-flow-col auto-cols-fr gap-[3px] w-full min-w-[680px] md:min-w-0">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((day, dayIndex) => (
                    <div
                      key={dayIndex}
                      title={day.level >= 0 ? `${day.count} contributions on ${day.date}` : ""}
                      className={`aspect-square w-full rounded-[2px] transition-colors duration-200 ${getCellClass(day.level)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}
