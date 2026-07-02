import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/animations/FuzzyText";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEO from "@/components/layout/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isBackgroundDark = isDarkVeilActive || theme === 'dark';

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to the homepage to explore Ernie Joseph Cledera's portfolio."
        url={`https://ernie-cledera.github.io${location.pathname}`}
        keywords="404, Page Not Found, Ernie Cledera, Portfolio"
      />
      <div className={`min-h-screen flex items-center justify-center ${isBackgroundDark ? 'bg-transparent' : 'bg-gray-100 dark:bg-gray-900'}`}>
        <div className="text-center">
          <FuzzyText
            fontSize="clamp(6rem, 20vw, 18rem)"
            fontWeight={900}
            color="hsl(var(--destructive))"
            enableHover={true}
            baseIntensity={0.15}
            hoverIntensity={0.4}
            className="mb-4 mx-auto"
          >
            404
          </FuzzyText>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;