import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import SimpleCalculatorDemo from "@/components/portfolio/SimpleCalculatorDemo";

const SimpleCalculatorProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 4); // Find the Simple Calculator project

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
            
            {/* Removed Links section as the demo is embedded */}
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Live Demo</h2>
          <SimpleCalculatorDemo />
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview & Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Simple Calculator is a basic web application demonstrating fundamental React concepts, state management, and UI design using Tailwind CSS and shadcn/ui components. It handles standard arithmetic operations.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong>Basic Arithmetic:</strong> Supports addition, subtraction, multiplication, and division.</li>
            <li><strong>Responsive Layout:</strong> Designed to work well on various screen sizes.</li>
            <li><strong>Error Handling:</strong> Displays "Error" for invalid mathematical expressions.</li>
            <li><strong>Clear and Delete Functions:</strong> Includes 'C' (Clear all) and 'DEL' (Delete last character) buttons.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I developed this project entirely, focusing on implementing the core calculation logic using JavaScript's `eval()` function (for simplicity in this demo) and creating a clean, functional interface using React hooks and Tailwind styling.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SimpleCalculatorProject;