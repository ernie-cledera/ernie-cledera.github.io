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
    <span className="font-mono text-base text-highlight text-shadow-soft md:text-lg">
      {word.slice(0, sub)}
      <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-highlight md:h-5" />
    </span>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="home" aria-labelledby="hero-name" className="relative flex min-h-[calc(100svh-6rem)] items-center py-12 md:min-h-[calc(100svh-10rem)] md:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full bg-highlight/20 blur-3xl"
                aria-hidden="true"
              />
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="relative h-48 w-48 rounded-full border-2 border-highlight/40 object-cover shadow-xl ring-4 ring-background/60 transition-all duration-300 hover:scale-[1.02] md:h-64 md:w-64"
              />
            </div>

            <h1 id="hero-name" className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-shadow-soft sm:text-6xl md:mt-10 md:text-7xl lg:text-8xl">
              <ShinyText
                text={profileData.name}
                speed={6}
                delay={0.8}
                spread={200}
                color={theme === "dark" ? "#FFFFFF" : "#0F172A"}
                shineColor={theme === "dark" ? "#D4AF37" : "#334155"}
              />
            </h1>

            <div className="mt-6 min-h-8">
              <Typewriter words={profileData.roles} />
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-10 text-base font-medium text-background shadow-sm transition-all duration-200 hover:bg-foreground/90 hover:shadow-[0_0_20px_rgb(var(--highlight)/0.3)] active:scale-95"
              >
                Contact Me
              </button>
              <Link
                to="/#projects"
                className="inline-flex h-14 items-center gap-2 rounded-full border border-border/80 bg-background px-10 text-base font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
              >
                My Work <ArrowRight className="h-5 w-5" />
              </Link>

              <div className="flex items-center gap-3">
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground shadow-sm transition-all duration-200 hover:bg-muted/50 hover:text-foreground active:scale-95"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
