
'use client';

import Image from 'next/image';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

interface ProjectPanelProps {
  project: Project;
  animationStyle: React.CSSProperties;
}

export default function ProjectPanel({ project, animationStyle }: ProjectPanelProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      style={animationStyle} 
      className={`group relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <Card className="overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 ease-in-out bg-card border-none h-full flex flex-col group-hover:scale-105 group-hover:z-20 rounded-lg">
        <div className="relative w-full h-48 md:h-56"> {/* Image container */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={project.dataAiHint || "project image"}
          />
        </div>
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl font-semibold text-primary">{project.title}</CardTitle>
          <CardDescription className="text-sm md:text-base text-foreground/80 mt-1 
                                      max-h-12 md:max-h-16 group-hover:max-h-48  /* Initial max height, expands on hover */
                                      overflow-hidden group-hover:overflow-y-auto 
                                      transition-all duration-300 ease-in-out">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs md:text-sm bg-muted text-muted-foreground hover:bg-muted/80 border-none">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        {project.link && (
          <CardFooter className="p-4 md:p-6 pt-0 mt-auto"> {/* mt-auto to push footer to bottom */}
            <Button asChild variant="ghost" className="w-full text-accent hover:bg-accent/20 hover:text-accent-foreground">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
