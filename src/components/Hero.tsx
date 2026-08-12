import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import ShinyText from "./ShinyText/ShinyText";
import useTheme from "@/hooks/useTheme";
import { profileData } from "@/data/portfolio";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];

    if (!deleting && sub === word.length) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSub((s) => s + (deleting ? -1 : 1)),
      deleting ? 40 : 85
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words]);

  const word = words[index % words.length];

  return (
    <span className="font-mono text-sm text-highlight text-shadow-soft">
      {word.slice(0, sub)}
      <span className="ml-0.5 inline-block h-3.5 w-[1.5px] translate-y-0.5 animate-pulse bg-highlight" />
    </span>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="home" aria-labelledby="hero-name" className="relative flex min-h-[calc(100svh-6rem)] items-center py-10 md:min-h-[calc(100svh-10rem)] md:py-14">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div
                className="absolute -inset-5 rounded-full bg-highlight/20 blur-3xl"
                aria-hidden="true"
              />
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="relative h-44 w-44 rounded-full border-2 border-highlight/40 object-cover shadow-xl ring-4 ring-background/60 transition-all duration-300 hover:scale-[1.02] md:h-56 md:w-56"
              />
            </div>

            <h1 id="hero-name" className="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-shadow-soft sm:text-5xl md:mt-10 md:text-6xl lg:text-7xl">
              <ShinyText
                text={profileData.name}
                speed={6}
                delay={0.8}
                spread={200}
                color={theme === "dark" ? "#FFFFFF" : "#0F172A"}
                shineColor={theme === "dark" ? "#D4AF37" : "#334155"}
              />
            </h1>

            <div className="mt-5 min-h-6">
              <Typewriter words={profileData.roles} />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-8 text-sm font-medium text-background shadow-sm transition-all duration-200 hover:bg-foreground/90 hover:shadow-[0_0_20px_rgb(var(--highlight)/0.3)] active:scale-95"
              >
                Contact Me
              </button>
              <Link
                to="/#projects"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border/80 bg-background px-8 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
              >
                My Work <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
