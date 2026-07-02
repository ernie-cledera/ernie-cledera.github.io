import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft, Download, BookOpen } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const CalabangaProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 2); // Find the Calabanga project

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
              <Button asChild variant="outline">
                <a href="https://www.uniplat.social/document/593?brid=wVxhnNAXRkaolZSTjUWtag" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2" /> View Publication
                </a>
              </Button>
              <Button asChild>
                <a href="/E-CCC-Manuscript.pdf" download="E-CCC-Manuscript.pdf">
                  <Download className="h-4 w-4 mr-2" /> Download Manuscript
                </a>
              </Button>
            </div>
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview & Features</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Calabanga Community College or E-CCC was developed to streamline administrative processes, improve data accuracy, and enhance communication between students, faculty, and staff. This system is an enrollment and academic records management system for the Calabanga Community College.
          </p>

          <h3 className="text-2xl font-semibold">Key Features Implemented:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Student Enrollment & Records:</span> Digital registration, tracking academic history, and managing personal information securely.</li>
            <li><span className="font-semibold text-foreground">Course Management:</span> Scheduling classes, assigning instructors, and managing curriculum updates.</li>
            <li><span className="font-semibold text-foreground">Grading System:</span> Automated calculation and recording of grades, providing instant access to academic performance.</li>
            <li><span className="font-semibold text-foreground">Administrative Dashboards:</span> Providing staff with real-time insights into enrollment numbers, financial status, and resource allocation.</li>
            <li><span className="font-semibold text-foreground">User Authentication & Roles:</span> Secure login system with distinct roles for students, faculty, and administrators, ensuring data integrity and access control.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I was primarily responsible for the database design (MySQL) and the backend logic (PHP) that handled data persistence and business rules. I also contributed significantly to the front-end development, ensuring a responsive and intuitive user interface for administrative tasks.
          </p>
        </div>
        
        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Certificate of Publication</h2>
          <img
            src="/COP.png"
            alt="Certificate of Publication"
            className="w-full h-auto object-contain rounded-lg shadow-xl border border-border"
          />
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Acknowledgement</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project was completed through the combined effort and commitment of my groupmates: <strong>Joshua Gabriel Gamora</strong>, <strong>Chrystian Ray C. Festin</strong>, and <strong>Allan Aboga-a Jr.</strong> Each contributed solid work that strengthened the final output.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We also acknowledge <strong>Raymond A. Iglesia</strong>, STI College Naga Academic Head, for his support and guidance, and <strong>Dr. Angel Belleza</strong>, CCC School Administrator, for providing the necessary backing and direction. Their leadership made this project possible.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CalabangaProject;