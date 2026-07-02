"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { profileData } from '@/data/portfolioData';

const IntroCard = () => {
  const { isDarkVeilActive } = useDarkVeil();

  return (
    <Card className={`w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg ${isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : ''}`}>
      <CardContent className="p-0">
        <p className="text-lg leading-relaxed text-muted-foreground text-center">
          {profileData.introduction.split('<span class="highlight">').map((segment, index) => {
            if (segment.includes('</span>')) {
              const parts = segment.split('</span>');
              return (
                <React.Fragment key={index}>
                  <span className="text-primary font-semibold">{parts[0]}</span>
                  {parts[1]}
                </React.Fragment>
              );
            }
            return <React.Fragment key={index}>{segment}</React.Fragment>;
          })}
        </p>
      </CardContent>
    </Card>
  );
};

export default IntroCard;