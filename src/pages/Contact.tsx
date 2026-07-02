import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Link as LinkIcon, Download } from "lucide-react";
import { showError } from "@/utils/toast";
import MagnetEffect from "@/components/animations/MagnetEffect"; // Keep import for other uses if any
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import LogoIcon from "@/components/layout/LogoIcon";

const Contact = () => {
  const { isDarkVeilActive } = useDarkVeil();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showError("Kindly send me an email for now as the API for this is not working properly. I apologize for the inconvenience.");
  };

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <div className={`container mx-auto py-12 px-4 ${isDarkVeilActive ? 'bg-transparent' : ''}`}>
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <Card className={cardClassNames}>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>I'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject of your message" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card className={cardClassNames}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Contact Information</CardTitle>
              {/* Removed MagnetEffect wrapper */}
              <LogoIcon 
                className="h-8 w-8 transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" 
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:cledera.ernie@gmail.com" className="text-muted-foreground hover:text-primary">cledera.ernie@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+639296529698" className="text-muted-foreground hover:text-primary">+63 929 652 9698</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Philippines</span>
              </div>
            </CardContent>
          </Card>

          <Card className={cardClassNames}>
            <CardHeader>
              <CardTitle>My Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <MagnetEffect strength={10} tolerance={0.5} className="w-full">
                <Button asChild className="w-full">
                  <a href="/Resume - Cledera.pdf" download="Resume - Cledera.pdf">
                    <Download className="h-4 w-4 mr-2" /> Download Resume
                  </a>
                </Button>
              </MagnetEffect>
            </CardContent>
          </Card>

          <Card className={cardClassNames}>
            <CardHeader>
              <CardTitle>Find Me Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a href="https://github.com/jeffcleds" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/jeffcleds</a>
              </div>
              <div className="flex items-center space-x-3">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />
                <a href="https://www.linkedin.com/in/ernie-cledera/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">linkedin.com/in/ernie-cledera</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;