import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import GitHubContributions from "./GitHubContributions";
import { projectsData, type Project } from "@/data/portfolio";

const CATEGORY: Record<string, string> = {
  "Personal Portfolio Website": "Frontend",
  "E-CCC: Enrollment & Academic Records System": "Fullstack",
  "Class Scheduler": "Fullstack",
  "Simple Calculator": "Frontend",
  "JumpQuest: The Curse of Gold Begins": "Game",
  "Gyozaraaap Naga RMS": "Fullstack",
};

const filters = ["All", "Frontend", "Fullstack", "Game"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(
    () => projectsData.filter((p) => active === "All" || CATEGORY[p.title] === active),
    [active]
  );

  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="My Projects."
      intro="Web apps, school systems, and creative projects built across my IT journey."
    >
      <div className="mb-10">
        <GitHubContributions />
      </div>

      <Reveal>
        <div className="mx-auto flex w-fit items-center gap-1 rounded-lg border border-border/50 bg-muted/50 p-1 shadow-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f);
                setShowAll(false);
              }}
              className={`rounded-md px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === f
                  ? "border border-border/50 bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 60}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(p);
                }
              }}
              aria-label={`Open ${p.title} details`}
              className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/85 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-secondary-foreground">
                  {CATEGORY[p.title] ?? "Web"}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/40 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    View Details
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-card/85 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            {showAll ? "Show Less" : `View All Projects (${projects.length - 3})`}
            {showAll ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}