import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experienceData } from "@/data/portfolio";

function JobItem({ job, isCurrent }: { job: (typeof experienceData)[number]; isCurrent?: boolean }) {
  const logoEl = (
    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
      {job.logo ? (
        <img src={job.logo} alt={job.title} className="h-full w-full object-contain" />
      ) : (
        <Briefcase className="h-4 w-4 text-muted-foreground" />
      )}
    </span>
  );

  return (
    <div className="relative">
      <div className="absolute -left-12 top-0 hidden md:block">{logoEl}</div>
      <div className="rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
        <div className="flex flex-col items-center gap-1 md:hidden">
          {logoEl}
          <p className="mt-2 text-center text-base font-semibold tracking-tight">{job.title}</p>
          <span className="rounded-full border border-border/40 bg-muted/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {job.date}
          </span>
          <p className="mt-1 text-sm text-muted-foreground">{job.subtitle}</p>
          {isCurrent && (
            <span className="mt-1 rounded-full bg-highlight px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-background">
              Current
            </span>
          )}
        </div>
        <div className="hidden flex-wrap items-center justify-between gap-2 md:flex">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">{job.date}</p>
          <div className="flex items-center gap-2">
            {isCurrent && (
              <span className="rounded-full bg-highlight px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-background">
                Current
              </span>
            )}
            <span className="rounded-full border border-border/40 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground">
              {job.subtitle}
            </span>
          </div>
        </div>
        <h3 className="mt-3 hidden text-xl font-semibold tracking-tight md:block">{job.title}</h3>
        <ul className="mt-4 space-y-2">
          {job.responsibilities.map((r) => (
            <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  const current = experienceData.find((j) => j.date.toLowerCase().includes("present")) ?? experienceData[0];
  const others = experienceData.filter((j) => j.id !== current.id);

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've worked."
      intro="A track record of supporting businesses, resolving problems, and improving operations."
    >
      <Reveal>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border/50 md:left-0 md:hidden" />
          <div className="md:border-l md:border-border/50 md:pl-8">
          <div className="space-y-10">
          <Reveal>
            <JobItem job={current} isCurrent />
          </Reveal>

          {expanded &&
            others.map((job, i) => (
              <Reveal key={job.id} delay={i * 50}>
                <JobItem job={job} />
              </Reveal>
            ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-card/85 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            {expanded ? "Show Less" : `View All Experiences (${others.length})`}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      </div>
      </div>
      </Reveal>
    </Section>
  );
}