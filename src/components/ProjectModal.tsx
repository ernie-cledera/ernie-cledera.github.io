import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Award, ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/portfolio";

const CATEGORY: Record<string, string> = {
  "Personal Portfolio Website": "Frontend",
  "E-CCC: Enrollment & Academic Records System": "Fullstack",
  "Class Scheduler": "Fullstack",
  "Simple Calculator": "Frontend",
  "JumpQuest: The Curse of Gold Begins": "Game",
  "Gyozaraaap Naga RMS": "Fullstack",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{children}</p>
  );
}

function BulletList({ items, icon }: { items: string[]; icon?: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          {icon ? (
            <span className="mt-0.5 shrink-0 text-highlight">{icon}</span>
          ) : (
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-highlight" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative my-[6vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-border/80 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-muted-foreground shadow-sm transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-video bg-muted">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-highlight/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-highlight">
              {CATEGORY[project.title] ?? "Web"}
            </span>
            {project.year && (
              <span className="rounded-full border border-border/40 bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {project.year}
              </span>
            )}
            {project.role && (
              <span className="rounded-full border border-border/40 bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {project.role}
              </span>
            )}
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-6">
              <SectionLabel>Key Features</SectionLabel>
              <BulletList items={project.highlights} />
            </div>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <div className="mt-6">
              <SectionLabel>Awards &amp; Recognitions</SectionLabel>
              <BulletList
                items={project.achievements}
                icon={<Award className="h-4 w-4" />}
              />
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/40 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border/50 pt-6">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border/80 bg-card/85 px-4 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border/80 bg-card/85 px-4 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" /> {/\.(zip|rar|7z|tar\.gz|exe|apk)$/i.test(project.externalLink) ? "Download Game" : "View Project"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}