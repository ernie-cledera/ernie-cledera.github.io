import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the ProjectCards component
import SEO from "@/components/layout/SEO";

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <SEO 
        title="Projects Portfolio | Ernie Joseph Cledera"
        description="Explore the range of projects developed by Ernie Joseph Cledera, including E-CCC Enrollment System, Class Scheduler, JumpQuest Unity Game, and interactive calculators."
        keywords="E-CCC, Class Scheduler, JumpQuest Unity, portfolio projects, web applications, computer games, react development"
      />
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <ProjectCards /> {/* Render the ProjectCards component directly */}
    </div>
  );
};

export default ProjectsPage;