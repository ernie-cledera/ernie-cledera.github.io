"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ernie Joseph Cledera - Portfolio",
  description = "Portfolio of Ernie Joseph Cledera - IT Specialist, Web Developer, and Virtual Assistant with 5+ years of experience in workflow optimization and digital tools.",
  keywords = "Ernie Cledera, Portfolio, IT Specialist, Web Developer, Virtual Assistant, Software Developer, Philippines, Computer Engineering",
  url = "https://ernie-cledera.github.io",
  image = "/ernie-joseph-cledera.jpg",
  type = "website",
  structuredData,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ernie Joseph Cledera",
    "alternateName": "Ernie Cledera",
    "url": "https://ernie-cledera.github.io",
    "sameAs": [
      "https://github.com/jeffcleds",
      "https://www.linkedin.com/in/ernie-cledera/"
    ],
    "jobTitle": "IT Specialist, Web Developer, Virtual Assistant",
    "description": "Tech-savvy Virtual Assistant with an IT and Computer Engineering background. Over 5+ years of experience in workflow optimization, data management, and digital tools.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Philippines"
    },
    "email": "mailto:cledera.ernie@gmail.com",
    "telephone": "+639296529698",
    "skills": [
      "Web Development",
      "Software Engineering",
      "Virtual Assistance",
      "IT Support",
      "Data Management",
      "Workflow Optimization"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "PHP",
      "MySQL",
      "C#",
      "Python",
      "Unity",
      "Networking",
      "Cybersecurity"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ernie Joseph Cledera" />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ernie Joseph Cledera" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@jeffcleds" />
      
      <link rel="canonical" href={url} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;