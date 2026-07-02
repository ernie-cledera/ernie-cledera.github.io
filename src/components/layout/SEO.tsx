"use client";

import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title = "Ernie Joseph Cledera | IT Specialist, Web Developer & Virtual Assistant",
  description = "Portfolio of Ernie Joseph Cledera, a tech-savvy Virtual Assistant, IT Specialist, and Web Developer with over 5+ years of experience optimizing workflows, managing data, and building responsive web applications.",
  keywords = "Ernie Joseph Cledera, IT Specialist, Web Developer, Virtual Assistant, Portfolio, React Developer, TypeScript, Philippines, Computer Engineering",
  ogImage = "/ernie-joseph-cledera.jpg",
  jsonLd
}) => {
  useEffect(() => {
    // Dynamic document title
    document.title = title;

    // Update/create Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update/create Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Update/create OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", title);

    // Update/create OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", description);

    // Update/create OG Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (!ogImg) {
      ogImg = document.createElement("meta");
      ogImg.setAttribute("property", "og:image");
      document.head.appendChild(ogImg);
    }
    ogImg.setAttribute("content", ogImage);

    // Handle structured JSON-LD schema
    let existingJsonLd = document.getElementById("jsonLdSchema");
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "jsonLdSchema";
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const cleanupJsonLd = document.getElementById("jsonLdSchema");
      if (cleanupJsonLd) {
        cleanupJsonLd.remove();
      }
    };
  }, [title, description, keywords, ogImage, jsonLd]);

  return null;
};

export default SEO;