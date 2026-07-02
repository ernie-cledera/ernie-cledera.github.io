import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { languagesData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider"; // Import useDarkVeil

const LanguagesCard: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Use DarkVeil hook

  return (
    <Card className={`p-6 h-full ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardHeader className="p-0 pb-4">
        <CardTitle className="text-2xl font-bold">Languages</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-2">
        {languagesData.map((lang, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
          >
            {lang}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default LanguagesCard;