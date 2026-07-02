import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const ClassSchedulerProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 3);

  if (!project) {
    return <div className="container mx-auto py-12 text-center">Project not found.</div>;
  }

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';
  const isLocalLink = project.githubLink && project.githubLink.startsWith('/');

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
                isLocalLink ? (
                  <Button asChild variant="outline">
                    <Link to={project.githubLink}>
                      <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                    </a>
                  </Button>
                )
              )}
            </div>
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview & Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            A web application to help the school manage and visualize class schedules and to check if there is a conflict in the schedule.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Conflict Detection:</span> Automatically identifies and flags scheduling conflicts between classes, rooms, and instructors.</li>
            <li><span className="font-semibold text-foreground">Interactive Schedule View:</span> Allows administrators to visualize the entire school timetable easily.</li>
            <li><span className="font-semibold text-foreground">Course and Room Management:</span> Tools for adding, editing, and assigning courses and physical classrooms.</li>
            <li><span className="font-semibold text-foreground">Data Persistence:</span> Securely stores all scheduling data using MySQL.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I focused on developing the backend logic using C# to handle complex scheduling algorithms and conflict resolution. I also managed the MySQL database design and implementation to ensure data integrity and efficient querying.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ClassSchedulerProject;