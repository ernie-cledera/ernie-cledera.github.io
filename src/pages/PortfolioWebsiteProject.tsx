import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft, Link as LinkIcon } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const PortfolioWebsiteProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 1);

  if (!project) {
    return <div className="container mx-auto py-12 text-center">Project not found.</div>;
  }

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
          </Link>
        </Button>
      </div>

      <Card className={`p-6 ${cardClassNames}`}>
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-4xl font-bold mb-2">{project.title}</CardTitle>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </CardHeader>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <CardContent className="p-0 space-y-4">
            <h3 className="text-2xl font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold pt-4">Links</h3>
            <div className="flex flex-col space-y-2">
              {project.githubLink && (
                <Button asChild variant="outline">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                  </a>
                </Button>
              )}
              {/* Since this is the current site, the live link is just the root */}
              <Button asChild>
                <Link to="/">
                  <LinkIcon className="h-4 w-4 mr-2" /> View Live Site
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview & Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            This portfolio website serves as a dynamic showcase of my professional journey, skills, and projects. It is built using modern web technologies to ensure high performance, responsiveness, and maintainability.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Responsive Design:</strong> Fully optimized for desktop, tablet, and mobile devices using Tailwind CSS.</li>
            <li><strong>Interactive Animations:</strong> Utilizes GSAP for smooth scroll-based and hover effects (like TiltedCard and ScrollReveal) to enhance user engagement.</li>
            <li><strong>Theme Switching:</strong> Implements dark mode and a unique 'Dark Veil' mode for a personalized viewing experience.</li>
            <li><strong>Component-Based Architecture:</strong> Built with React and TypeScript for robust, scalable, and easy-to-maintain code.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I designed and developed the entire application from scratch, focusing on clean UI/UX, performance optimization, and integrating various custom and shadcn/ui components.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PortfolioWebsiteProject;