import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "affiliations", label: "Affiliations" },
  { id: "contact", label: "Contact" },
];

export default function QuickScroll() {
  const [active, setActive] = useState("about");
  const { pathname } = useLocation();

  if (pathname !== "/") return null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Section quick navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                aria-label={`Scroll to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`rounded-md border border-border/40 bg-card/85 px-2 py-0.5 text-[11px] font-medium text-muted-foreground shadow-sm opacity-0 transition-all duration-200 group-hover:opacity-100 ${
                    isActive ? "opacity-100" : ""
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-125 bg-highlight"
                      : "bg-muted-foreground/50 group-hover:bg-muted-foreground"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}