
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
      // Check if window is defined (client-side)
      if (typeof window !== 'undefined') {
        setScrollY(window.pageYOffset);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Call handleScroll once to set initial scrollY if page is already scrolled
      handleScroll(); 
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const getPanelStyle = (index: number): React.CSSProperties => {
    // const parallaxOffset = scrollY * 0.05 * animationConfig.intensityFactor; // Parallax adjusted for full page scroll, currently disabled for review
    const baseDelay = 50; 
    const staggerDelay = 100;
    const animationDelay = `${baseDelay + index * (staggerDelay / animationConfig.speedFactor)}ms`;
    const baseDuration = 500;
    const animationDuration = `${baseDuration / animationConfig.speedFactor}ms`;

    return {
      // transform: `translateY(${-parallaxOffset}px)`, // Parallax transform currently disabled
      transition: `opacity ${animationDuration} ease-out ${animationDelay}, transform ${animationDuration} ease-out ${animationDelay}`,
    };
  };

  return (
    <div ref={sectionRef} className="py-6 px-2 md:px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
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
