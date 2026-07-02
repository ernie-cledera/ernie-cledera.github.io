import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { softwareUsedData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const ToolsCard: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Use DarkVeil hook

  return (
    <Card className={`p-6 h-full ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Software Used</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-2">
        {softwareUsedData.map((tool, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
          >
            {tool.name}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default ToolsCard;