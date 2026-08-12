import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import ClickSpark from "@/components/ClickSpark/ClickSpark";
import LiquidChrome from "@/components/LiquidChrome/LiquidChrome";
import ChatWidget from "@/components/ChatWidget/ChatWidget";
import QuickScroll from "@/components/QuickScroll";
import PageLoader from "@/components/PageLoader/PageLoader";
import CardNav, { type CardNavItem } from "@/components/CardNav/CardNav";
import BrandLogo from "@/components/BrandLogo";
import useTheme from "@/hooks/useTheme";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Affiliations from "@/components/Affiliations";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import WorkstationPage from "@/pages/Workstation";
import { profileData } from "@/data/portfolio";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

const navItems: CardNavItem[] = [
  {
    label: "About",
    bgColor: "rgb(var(--background))",
    textColor: "rgb(var(--foreground))",
    links: [
      { label: "About Me", href: "/#about", ariaLabel: "About Me" },
      { label: "Workstation", href: "/workstation", ariaLabel: "Workstation" },
    ],
  },
  {
    label: "Projects",
    bgColor: "rgb(var(--muted))",
    textColor: "rgb(var(--foreground))",
    links: [
      { label: "Experience", href: "/#experience", ariaLabel: "Work Experience" },
      { label: "Projects", href: "/#projects", ariaLabel: "Projects" },
      { label: "Certifications", href: "/#certifications", ariaLabel: "Certifications" },
    ],
  },
  {
    label: "Contact",
    bgColor: "rgb(var(--highlight))",
    textColor: "rgb(var(--background))",
    links: [
      { label: "Email", href: `mailto:${profileData.email}`, ariaLabel: "Email Ernie" },
      { label: "LinkedIn", href: profileData.social.linkedin, ariaLabel: "LinkedIn" },
      { label: "GitHub", href: profileData.social.github, ariaLabel: "GitHub" },
    ],
  },
];

function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <ScrollManager />
      {theme === "dark" && (
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <LiquidChrome
            baseColor={[0.16, 0.16, 0.16]}
            speed={0.05}
            amplitude={0.6}
            frequencyX={2.5}
            frequencyY={1.5}
            interactive={false}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      {theme === "dark" && (
        <ClickSpark
          overlay
          sparkColor={theme === "dark" ? "#D4AF37" : "#0F172A"}
          sparkSize={10}
          sparkRadius={30}
          sparkCount={8}
          duration={450}
        />
      )}
      <CardNav
        className="card-nav-fixed"
        logo={<BrandLogo className="h-7 w-7" />}
        logoAlt="Ernie Joseph Cledera logo"
        items={navItems}
        baseColor="rgb(var(--card) / 0.90)"
        menuColor="rgb(var(--foreground))"
        buttonBgColor="rgb(var(--primary))"
        buttonTextColor="rgb(var(--primary-foreground))"
        ctaHref="/#contact"
        ctaLabel="Contact Me"
        headerActions={<ThemeToggle />}
      />
      <main className="relative z-50 pt-16 md:pt-24">{children}</main>
      <Footer />
      <ChatWidget />
      <QuickScroll />
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Certifications />
      <Divider />
      <Education />
      <Divider />
      <Affiliations />
      <Divider />
      <Contact />
    </>
  );
}

export default function App() {
  const [booting, setBooting] = useState(true);
  return (
    <BrowserRouter>
      {booting && <PageLoader onFinish={() => setBooting(false)} />}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/workstation"
          element={
            <Layout>
              <WorkstationPage />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
