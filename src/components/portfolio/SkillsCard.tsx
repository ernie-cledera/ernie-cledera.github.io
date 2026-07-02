import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { softSkillsData, technicalSkillsData } from "@/data/portfolioData";
import { Separator } from "@/components/ui/separator";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const SkillsCard: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Use DarkVeil hook

  return (
    <Card className={`p-6 ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            {softSkillsData.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <Separator />
        <div>
          <h4 className="text-lg font-semibold mb-3">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {technicalSkillsData.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;