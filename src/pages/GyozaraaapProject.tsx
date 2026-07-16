import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import SEO from "@/components/layout/SEO";

const GyozaraaapProject: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const project = projectsData.find(p => p.id === 6);

  if (!project) {
    return <div className="container mx-auto py-12 text-center">Project not found.</div>;
  }

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <div className="container mx-auto py-12 px-4">
      <SEO 
        title="Gyozaraaap Naga RMS | Restaurant Management System"
        description="Gyozaraaap Naga RMS is a real-time Restaurant Management & POS system built with Flutter, Riverpod, and Supabase featuring automated inventory deduction and financial analytics."
        keywords="Gyozaraaap Naga RMS, Flutter POS, Restaurant Management System, Supabase, Riverpod, inventory automation"
        ogImage={project.image}
      />
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link to="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
          </Link>
        </Button>
      </div>

      <Card className={`p-6 ${cardClassNames}`}>
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-4xl font-bold mb-2">{project.title}</CardTitle>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </CardHeader>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          <CardContent className="p-0 space-y-4">
            <h3 className="text-2xl font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold pt-4">Links</h3>
            <div className="flex flex-col space-y-2">
              {project.githubLink && (
                <Button asChild variant="outline">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> View GitHub Repo
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </div>

        <Separator className="my-6" />

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Project Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            Running a successful food business requires perfect synchronization between what’s happening at the counter and what’s sitting in the pantry. To bridge this gap, I built Gyozaraaap Naga RMS—a robust, real-time Restaurant Management & Point-of-Sale (POS) system designed to streamline operations, track financials, and automate inventory management.
          </p>

          <h3 className="text-2xl font-semibold">🌟 Key Features</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Intuitive Point of Sale (POS):</span> A clean, fast cashier interface to select menu items, manage the cart, and process checkouts. Handles multiple payment modes (Cash, GCash, Maya, Card) with automated change calculation.</li>
            <li><span className="font-semibold text-foreground">Automated Inventory Tracking & Recipe Deductions:</span> Built-in recipes (Bill of Materials) connect menu items directly to raw ingredients. When a sale is processed, the system automatically calculates and deducts the exact amount of ingredients used in real-time, preventing manual counting errors. Tracks stock levels (in grams, milliliters, or pieces) with instant alerts for low-stock items.</li>
            <li><span className="font-semibold text-foreground">Dynamic Menu & Category Control:</span> Easy-to-use forms to add, edit, or toggle the availability of menu items and food categories on the fly.</li>
            <li><span className="font-semibold text-foreground">Real-Time Financial Dashboard & Analytics:</span> Visualizes daily sales, order counts, and active inventory status. Features an interactive Sales Trend Chart showcasing performance over the last 7 days to help make data-driven decisions.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">🛠️ The Tech Stack</h3>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li><span className="font-semibold text-foreground">Frontend:</span> Flutter & Dart — Provides a beautiful, highly responsive, and adaptive user interface compiled seamlessly for Web, Desktop (Windows), and Mobile.</li>
            <li><span className="font-semibold text-foreground">State Management:</span> Riverpod — Ensures clean, predictable, and fast state management across different screens.</li>
            <li><span className="font-semibold text-foreground">Database & Auth:</span> Supabase — Acts as a serverless backend offering secure user authentication, instant real-time data sync, and Row Level Security (RLS).</li>
            <li><span className="font-semibold text-foreground">Automated Workflows:</span> PostgreSQL Triggers — Advanced database triggers automatically update inventory and create audit trails for transactions whenever a checkout occurs.</li>
          </ul>

          <h3 className="text-2xl font-semibold pt-4">My Role & Contributions:</h3>
          <p className="text-muted-foreground leading-relaxed">
            I designed and developed the entire application, from the Flutter frontend and Riverpod state management to the Supabase backend schema, authentication, and PostgreSQL trigger automation for inventory and audit logging.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default GyozaraaapProject;