'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { Project, AnimationConfig } from '@/lib/types';
import ProjectPanel from './ProjectPanel';

interface ProjectsSectionProps {
  projects: Project[];
  animationConfig: AnimationConfig;
}

export default function ProjectsSection({ projects, animationConfig }: ProjectsSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPanelStyle = (index: number): React.CSSProperties => {
    // Parallax effect: panels move slightly slower than scroll
    const parallaxOffset = scrollY * 0.1 * animationConfig.intensityFactor;
    
    // Staggered animation delay based on AI config
    // Base delay + index based stagger * speedFactor (lower factor = slower = longer delay)
    const baseDelay = 50; // ms
    const staggerDelay = 100; // ms
    const animationDelay = `${baseDelay + index * (staggerDelay / animationConfig.speedFactor)}ms`;

    // Base transition duration, adjusted by speedFactor
    const baseDuration = 500; // ms
    const animationDuration = `${baseDuration / animationConfig.speedFactor}ms`;

    return {
      transform: `translateY(${-parallaxOffset}px)`,
      transition: `opacity ${animationDuration} ease-out ${animationDelay}, transform ${animationDuration} ease-out ${animationDelay}`,
    };
  };

  return (
    <div ref={sectionRef} className="h-full overflow-y-auto py-6 px-2 md:px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center sticky top-0 bg-background/80 backdrop-blur-sm py-4 z-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectPanel
            key={project.id}
            project={project}
            animationStyle={getPanelStyle(index)}
          />
        ))}
      </div>
    </div>
  );
}
