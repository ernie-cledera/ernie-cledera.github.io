import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";

const JumpQuestProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 5);

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
              <Button asChild>
                <a href="/JumpQuest.zip" download="JumpQuest.zip">
                  <Download className="h-4 w-4 mr-2" /> Download Game
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/JumpQuest-Manuscript.pdf" download="JumpQuest-Manuscript.pdf">
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
            JumpQuest is a 2D side-scrolling platformer game developed using the Unity engine. The project focuses on implementing core game mechanics, level design, and integrating custom pixel art assets. It was presented as a major requirement for the Computer Graphics Programming & Game Development course.
          </p>

          <h3 className="text-2xl font-semibold">Key Features:</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Classic Platforming Mechanics:</span> Includes jumping, running, and combat against various enemies.</li>
            <li><span className="font-semibold text-foreground">Custom Pixel Art Assets:</span> All visual elements, including characters, environments, and enemies, were designed and implemented using pixel art techniques.</li>
            <li><span className="font-semibold text-foreground">Physics and Collision Handling:</span> Robust implementation of 2D physics for realistic movement and interaction.</li>
            <li><span className="font-semibold text-foreground">Level Design:</span> Multiple challenging levels with unique environmental hazards and enemy placements.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            As the Group Leader, I oversaw the project development lifecycle. My primary contributions included assigning tasks to my team members, programming core game logic in C#, adding assets, managing version control, and coordinating asset integration. I also contributed to the graphical design and ensuring the game met all technical requirements.
          </p>
        </div>
        
        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Certificates and Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/COParticipation.png"
              alt="Certificate of Participation"
              className="w-full h-auto object-contain rounded-lg shadow-xl border border-border"
            />
            <img
              src="/COCChampion.png"
              alt="Certificate of Commendation Champion"
              className="w-full h-auto object-contain rounded-lg shadow-xl border border-border"
            />
            <img
              src="/COC.png"
              alt="Certificate of Commendation"
              className="w-full h-auto object-contain rounded-lg shadow-xl border border-border"
            />
            <img
              src="/COC3.png"
              alt="Certificate of Commendation 3"
              className="w-full h-auto object-contain rounded-lg shadow-xl border border-border"
            />
          </div>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Acknowledgement</h2>
          <p className="text-muted-foreground leading-relaxed">
            This project was a collaborative effort by Roblera Palbun Studios. Special thanks to team members: <strong>Owen Christian Robas</strong>, <strong>Christian James Palo</strong>, and <strong>Mcjohn Bunao</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We also extend our gratitude to our project coordinator and adviser, <strong>Mr. Everild Gerd Pablo, MBA</strong>, for his invaluable guidance and support throughout the development process.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default JumpQuestProject;