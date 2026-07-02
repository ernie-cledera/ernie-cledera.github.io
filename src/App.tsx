import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import WorkstationPage from "./pages/WorkstationPage"; // Import new WorkstationPage
import NotFound from "./pages/NotFound";
import SimpleCalculatorProject from "./pages/SimpleCalculatorProject";
import CalabangaProject from "./pages/CalabangaProject";
import PortfolioWebsiteProject from "./pages/PortfolioWebsiteProject";
import ClassSchedulerProject from "./pages/ClassSchedulerProject";
import JumpQuestProject from "./pages/JumpQuestProject";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider, useTheme } from "next-themes";
import { DarkVeilProvider, useDarkVeil } from "./components/layout/DarkVeilProvider";
import DarkVeil from "./components/animations/DarkVeil";
import React from "react";

const queryClient = new QueryClient();

// Component to handle theme mounting check
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Optionally render a minimal loading state or null to prevent FOUC
    // For now, we render null to wait for the theme class to be applied.
    return null;
  }

  return <>{children}</>;
};


const AppContent = () => {
  const { isDarkVeilActive } = useDarkVeil();

  return (
    <>
      {isDarkVeilActive && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%', // Changed from 100vw to 100% to avoid scrollbar issues
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
        }}>
          <DarkVeil
            hueShift={-155}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
      )}
      <Toaster />
      <Sonner />
      <TooltipProvider>
        <HashRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/workstation" element={<WorkstationPage />} /> {/* New Workstation Route */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/portfolio-website" element={<PortfolioWebsiteProject />} />
              <Route path="/projects/e-ccc" element={<CalabangaProject />} />
              <Route path="/projects/class-scheduler" element={<ClassSchedulerProject />} />
              <Route path="/projects/simple-calculator" element={<SimpleCalculatorProject />} />
              <Route path="/projects/jumpquest" element={<JumpQuestProject />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </TooltipProvider>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <DarkVeilProvider>
        <ThemeWrapper>
          <AppContent />
        </ThemeWrapper>
      </DarkVeilProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;