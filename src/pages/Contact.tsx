import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Link as LinkIcon, Download, Loader2 } from "lucide-react";
import { showSuccess, showError } from "@/utils/toast";
import MagnetEffect from "@/components/animations/MagnetEffect";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import LogoIcon from "@/components/layout/LogoIcon";
import SEO from "@/components/layout/SEO";

const Contact = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "468c432c-4311-435e-bba2-2a734177d628";

    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showSuccess("Message sent successfully! I will get back to you soon.");
        form.reset();
      } else {
        showError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      showError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  return (
    <div className={`container mx-auto py-12 px-4 ${isDarkVeilActive ? 'bg-transparent' : ''}`}>
      <SEO 
        title="Contact Ernie Joseph Cledera | Remote Support & Collaboration"
        description="Get in touch with Ernie Joseph Cledera for IT administration, virtual assistance, web development opportunities, or download his official resume."
        keywords="Contact Ernie Joseph Cledera, hire developer, hire Virtual Assistant, Philippines freelancer, download resume"
      />
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <Card className={cardClassNames}>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out this form to send an email straight to my inbox.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" type="text" placeholder="Subject of your message" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className={cardClassNames}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Contact Information</CardTitle>
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