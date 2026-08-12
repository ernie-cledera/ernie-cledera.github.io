import { ArrowLeft, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import usePageTitle from "@/hooks/usePageTitle";
import { workstationData, workstationImages } from "@/data/portfolio";

export default function Workstation() {
  usePageTitle("Workstation");
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <Reveal fade>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
          <span className="h-px w-8 bg-highlight/50" />
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-highlight md:text-sm">
            Setup
          </span>
        </div>
        <h1 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-left md:text-4xl">
          My <span className="text-highlight">Workstation</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground text-shadow-soft md:mx-0 md:text-left md:text-base">
          The battle station I use every day — for development, automation, gaming, and everything in between.
        </p>
      </Reveal>

      <div className="mt-12">
        <Reveal>
          <Carousel images={workstationImages} alt="Ernie Joseph Cledera's workstation setup" />
        </Reveal>
      </div>

      <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
        {workstationData.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 2) * 60} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
                  <Monitor className="h-4 w-4" />
                </span>
                <h2 className="text-lg font-semibold tracking-tight">{cat.title}</h2>
              </div>
              <dl className="mt-5 space-y-0">
                {cat.items.map((item) => (
                  <div
                    key={item.name + item.value}
                    className="flex items-start justify-between gap-4 border-b border-border/50 py-2.5 last:border-0"
                  >
                    <dt className="shrink-0 text-sm text-muted-foreground">{item.name}</dt>
                    <dd className="text-right text-sm font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
