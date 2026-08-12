import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import useTheme from "@/hooks/useTheme";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#projects", label: "Projects" },
  { to: "/#education", label: "Education" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <BrandLogo className="h-7 w-7" />
          <span className="hidden text-sm font-medium tracking-tight sm:block">cledera.ernie</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/workstation"
            onClick={() => setOpen(false)}
            className="rounded-md border border-border/80 bg-card/85 px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            Workstation
          </Link>
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Hire Me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-foreground">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/40 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/workstation" onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Workstation
            </Link>
            <Link to="/#contact" onClick={() => setOpen(false)} className="rounded-md bg-primary px-3.5 py-2 text-center text-sm font-medium text-primary-foreground">
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}