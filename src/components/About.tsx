import {
  Headset,
  Network,
  ShieldCheck,
  Database,
  ClipboardCheck,
  LineChart,
  BriefcaseBusiness,
  Monitor,
  Zap,
  Bug,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profileData } from "@/data/portfolio";

const skills = [
  { icon: Network, label: "Networking" },
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Database, label: "Database Management" },
  { icon: ClipboardCheck, label: "Project Management" },
  { icon: LineChart, label: "Data Analysis" },
  { icon: Bug, label: "QA & Testing" },
];

const specialties = [
  { icon: Zap, title: "Automation & AI" },
  { icon: Headset, title: "IT Support & Ops" },
  { icon: Monitor, title: "Web Development" },
  { icon: BriefcaseBusiness, title: "Virtual Assistance" },
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Bridging IT, automation, and real business results."
    >
      <div className="grid items-stretch gap-10 lg:grid-cols-5">
        <div className="flex flex-col justify-center lg:col-span-3">
          <Reveal>
            <p className="text-center text-sm leading-relaxed text-foreground/75 text-shadow-intro md:text-left md:text-base">
              {profileData.introduction}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-4 text-center text-sm leading-relaxed text-foreground/75 text-shadow-intro md:text-left md:text-base">
              From technical support to QA and operations, I&apos;ve spent the last 7+ years on the front
              lines of IT — resolving issues, managing teams, and automating the repetitive work so
              businesses can focus on what matters.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-2">
          <Reveal delay={160}>
            <div className="rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Core Specialties</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {specialties.map((s) => (
                  <div key={s.title} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border/50 bg-muted/30 p-4 text-center transition-colors duration-300 hover:border-highlight">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/40 text-muted-foreground">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold leading-tight tracking-tight">{s.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.label} delay={(i % 3) * 60}>
            <div className="group rounded-2xl border border-border/60 bg-card/85 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-highlight">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-medium tracking-tight">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
