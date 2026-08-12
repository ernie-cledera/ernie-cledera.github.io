import { Award } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { affiliationsData } from "@/data/portfolio";

export default function Affiliations() {
  return (
    <Section
      id="affiliations"
      index="06"
      eyebrow="Affiliations"
      title="Affiliations & Communities."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {affiliationsData.map((a, i) => (
          <Reveal key={a.id} delay={(i % 2) * 80}>
            <div className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border/80 bg-card/85 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight md:flex-row md:items-start md:text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl">
                {a.logo ? (
                  <img src={a.logo} alt={a.name} className="h-full w-full object-contain" />
                ) : (
                  <Award className="h-5 w-5 text-muted-foreground" />
                )}
              </span>
              <div className="flex-1">
                <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{a.name}</h3>
                  <span className="rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-secondary-foreground">
                    {a.date}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{a.status}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
