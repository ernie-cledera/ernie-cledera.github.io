import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards"; // Import the ProjectCards component

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <ProjectCards /> {/* Render the ProjectCards component directly */}
    </div>
  );
};

export default ProjectsPage;