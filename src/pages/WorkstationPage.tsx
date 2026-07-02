import React, { useState } from "react";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workstationData } from "@/data/portfolioData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const WorkstationPage: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  const workstationImages = [
    "/Workstation 2.jpg",
    "/Workstation.png",
  ];

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <ScrollReveal delay={0}>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">My Workstation</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Welcome to my digital command center! Here's a glimpse into the tools and setup that power my work.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mb-12 flex justify-center px-4 md:px-12">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent>
              {workstationImages.map((imageSrc, index) => (
                <CarouselItem key={index}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <div 
                        className="group relative aspect-video overflow-hidden rounded-lg shadow-xl border border-border cursor-zoom-in"
                        onClick={() => setSelectedImage(imageSrc)}
                      >
                        <img
                          src={imageSrc}
                          alt={`My Workstation Setup ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-background/80 p-2 rounded-full backdrop-blur-sm">
                            <ZoomIn className="h-6 w-6 text-foreground" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex items-center justify-center">
                      <img
                        src={imageSrc}
                        alt="Workstation Zoomed"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {workstationData.map((category, index) => (
          <ScrollReveal key={category.title} delay={0.3 + index * 0.1} className="h-full">
            <Card className={`p-5 md:p-6 h-full flex flex-col ${cardClassNames}`}>
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-4 flex-grow">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-muted-foreground border-b border-border/30 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-foreground text-sm md:text-base mb-1 sm:mb-0">
                      {item.name}
                    </span>
                    <span className="text-sm md:text-base sm:text-right sm:flex-1 sm:ml-4 break-words">
                      {item.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default WorkstationPage;