"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IntroCard from '@/components/portfolio/IntroCard';
import TypewriterEffect from '@/components/TypewriterEffect';
import ShinyText from '@/components/animations/ShinyText';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider';
import { useTheme } from 'next-themes';
import SEO from '@/components/layout/SEO';

type CustomCSSProperties = React.CSSProperties & Record<`--${string}`, string | number>;

export default function Index() {
  const { isDarkVeilActive } = useDarkVeil();
  const { theme } = useTheme();

  const isDarkBackground = isDarkVeilActive || theme === 'dark';

  const shinyTextStyle: CustomCSSProperties = isDarkBackground
    ? {
        '--muted-foreground': '240 4% 85%',
        '--primary-foreground': '45 100% 50%',
      }
    : {
        '--muted-foreground': '217 53% 15%',
        '--primary-foreground': '220 80% 50%',
      };

  const jobTitles = [
    "IT Specialist",
    "Web Developer",
    "Virtual Assistant",
    "Network Specialist",
    "Dispatcher",
    "Software Developer"
  ];

  return (
    <>
      <SEO
        title="Ernie Joseph Cledera - Portfolio"
        description="Portfolio of Ernie Joseph Cledera - IT Specialist, Web Developer, and Virtual Assistant with 5+ years of experience in workflow optimization and digital tools."
        url="https://ernie-cledera.github.io"
        keywords="Ernie Cledera, Portfolio, IT Specialist, Web Developer, Virtual Assistant, Software Developer, Philippines, Computer Engineering"
      />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
        <img
          src="/ernie-joseph-cledera.jpg"
          alt="Ernie Joseph Cledera"
          style={{ width: 'clamp(150px, 25vw, 450px)', height: 'clamp(150px, 25vw, 450px)' }}
          className="rounded-full object-cover mb-8 transition-transform duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
        />
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          <span className={isDarkBackground ? 'text-foreground/65' : ''}>Hello, I'm</span>{' '}
          <span className="">
            <ShinyText style={shinyTextStyle}>Ernie Joseph Cledera</ShinyText>
          </span>
        </h1>
        <TypewriterEffect
          words={jobTitles}
          className="text-xl text-muted-foreground mb-8 max-w-2xl"
        />
        <div className="mb-12 flex gap-4">
          <Button asChild size="lg">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/about">About Me</Link>
          </Button>
        </div>
        <IntroCard />
      </div>
    </>
  );
}