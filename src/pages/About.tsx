import React from "react";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { profileData, experienceData, educationData, interestsData, softSkillsData, technicalSkillsData, affiliationsData } from "@/data/portfolioData";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import InterestsSection from "@/components/portfolio/InterestsSection";
import AffiliationsSection from "@/components/portfolio/AffiliationsSection";
import IntroCard from "@/components/portfolio/IntroCard";
import DetailsCard from "@/components/portfolio/DetailsCard";
import InterestsCard from "@/components/portfolio/InterestsCard";
import SkillsCard from "@/components/portfolio/SkillsCard";
import ToolsCard from "@/components/portfolio/ToolsCard";
import LanguagesCard from "@/components/portfolio/LanguagesCard";
import SEO from "@/components/layout/SEO";

const About = () => {
  const { isDarkVeilActive } = useDarkVeil();

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <>
      <SEO
        title="About - Ernie Joseph Cledera"
        description="Learn more about Ernie Joseph Cledera - IT Specialist, Web Developer, and Virtual Assistant with 5+ years of experience in workflow optimization and digital tools."
        url="https://ernie-cledera.github.io/about"
        keywords="Ernie Cledera, About, IT Specialist, Web Developer, Virtual Assistant, Career, Experience, Education"
      />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

        <div className="space-y-8">
          <ScrollReveal delay={0}>
            <IntroCard />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1} className="h-full">
              <DetailsCard />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="h-full">
              <InterestsCard />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <SkillsCard />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <ExperienceSection />
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <EducationSection />
          </ScrollReveal>
          <ScrollReveal delay={0.55}>
            <AffiliationsSection />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.6} className="h-full">
              <ToolsCard />
            </ScrollReveal>
            <ScrollReveal delay={0.7} className="h-full">
              <LanguagesCard />
            </ScrollReveal>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Don't chase busywork. Build assets — skills, tools, networks, and habits that multiply output without multiplying effort. Anything that doesn't scale or compound is either a stepping stone or dead weight. Learn to tell the difference fast.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;