import React from "react";
import ProjectCards from "@/components/portfolio/ProjectCards";
import SEO from "@/components/layout/SEO";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="My Projects - Ernie Joseph Cledera"
        description="A collection of my personal and academic projects showcasing my skills in web development, software engineering, and game development."
        url="https://ernie-cledera.github.io/projects"
        keywords="Ernie Cledera, Projects, Web Development, Software Engineering, Game Development, Portfolio Projects, PHP, React, Unity"
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <ProjectCards />
      </div>
    </>
  );
};

export default ProjectsPage;