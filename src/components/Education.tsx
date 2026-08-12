import { GraduationCap, MapPin } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { educationData } from "@/data/portfolio";

const HIGHLIGHT_TERMS = ["Information Technology", "Major in Computer Engineering Technology"];

function HighlightedSubtitle({ text }: { text: string }) {
  const parts = text.split(new RegExp(`(${HIGHLIGHT_TERMS.join("|")})`, "g"));
  return (
    <p className="mt-1 flex-1 text-center text-sm text-muted-foreground md:text-left">
      {parts.map((part, i) =>
        HIGHLIGHT_TERMS.includes(part) ? (
          <span key={i} className="text-highlight">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education.">
      <div className="grid gap-4 md:grid-cols-2">
        {educationData.map((ed, i) => (
          <Reveal key={ed.id} delay={i * 80}>
            <div className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
              <div className="flex items-start justify-center gap-3 md:justify-between">
                <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
                  {ed.logo ? (
                    <img src={ed.logo} alt={ed.title} className="h-full w-full object-contain" />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  )}
                </span>
              </div>
              <h3 className="mt-4 text-center text-xl font-semibold tracking-tight md:text-left">{ed.title}</h3>
              <HighlightedSubtitle text={ed.subtitle} />
              <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground md:justify-start">
                  <MapPin className="h-3.5 w-3.5" /> {ed.location}
                </p>
                <p className="font-mono text-xs text-muted-foreground">{ed.date}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
