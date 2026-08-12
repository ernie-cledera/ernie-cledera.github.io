import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  eyebrowCentered?: boolean;
  children: ReactNode;
}

export default function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  eyebrowCentered = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <Reveal>
          <div
            className={`flex items-center gap-3 ${eyebrowCentered ? "justify-center md:justify-start" : "justify-start"}`}
          >
            <span className="h-px w-8 bg-highlight/50" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-highlight text-shadow-soft md:text-sm">
              {index}. / {eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold leading-[1.1] tracking-tight text-shadow-soft md:text-left md:text-4xl">{title}</h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-foreground/75 text-shadow-intro md:mx-0 md:text-left md:text-base">
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
