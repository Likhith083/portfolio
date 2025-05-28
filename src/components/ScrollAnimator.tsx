
'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { getAnimationConfig } from '@/ai/flows/animationConfig'; // Import the AI flow
import type { AnimationConfig } from '@/lib/types';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  baseAnimationClass?: string;
  activeAnimationClass?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // CSS animation-delay string
  textContentToAnalyze?: string; // Text content for AI-based animation adjustment
}

export function ScrollAnimator({
  children,
  className,
  baseAnimationClass = 'scroll-anim-base',
  activeAnimationClass = 'start-animation',
  threshold = 0.1,
  triggerOnce = true,
  delay,
  textContentToAnalyze,
}: ScrollAnimatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animationParams, setAnimationParams] = useState<AnimationConfig | null>(null);
  const [hasFetchedConfig, setHasFetchedConfig] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!triggerOnce) {
            // setIsVisible(false); // Optionally reset for re-animation
            // setHasFetchedConfig(false); // Reset fetch state if re-animating
          }
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  useEffect(() => {
    if (isVisible && textContentToAnalyze && !hasFetchedConfig && triggerOnce) {
      let isMounted = true;
      setHasFetchedConfig(true); // Attempt to fetch only once if triggerOnce is true
      
      getAnimationConfig(textContentToAnalyze)
        .then((config) => {
          if (isMounted) {
            setAnimationParams(config);
          }
        })
        .catch((error) => {
          console.error('Failed to get animation config:', error);
          if (isMounted) {
            // Fallback to default if AI fails
            setAnimationParams({ speedFactor: 1.0, intensityFactor: 1.0 });
          }
        });
      return () => { isMounted = false; };
    } else if (isVisible && !textContentToAnalyze && !animationParams) {
        // If no text to analyze, use default params
        setAnimationParams({ speedFactor: 1.0, intensityFactor: 1.0 });
    }
  }, [isVisible, textContentToAnalyze, hasFetchedConfig, triggerOnce, animationParams]);

  const appliedStyle: React.CSSProperties = delay && isVisible ? { animationDelay: delay } : {};

  if (animationParams) {
    const baseDuration = 0.5; // seconds, from original animation
    const baseTranslateY = 20; // px, from original animation

    appliedStyle['--anim-duration'] = `${baseDuration / animationParams.speedFactor}s`;
    // Ensure initial transform uses the intensity factor before animation starts
    appliedStyle['--anim-translateY-initial'] = `${baseTranslateY * animationParams.intensityFactor}px`;
  } else {
    // Default values if AI config not yet loaded or not applicable
    appliedStyle['--anim-duration'] = '0.5s';
    appliedStyle['--anim-translateY-initial'] = '20px';
  }

  return (
    <div
      ref={ref}
      className={cn(
        baseAnimationClass,
        isVisible && activeAnimationClass,
        className
      )}
      style={appliedStyle}
      // Apply initial transform directly if component is not yet visible and using AI params
      // This ensures the starting position reflects intensityFactor before animation kicks in
      // Only apply if isVisible is false and animationParams are set (meaning AI has run or defaulted)
      // This logic is a bit tricky with CSS animations vs. direct style manipulation.
      // The `scroll-anim-base` class should handle the initial state using the CSS var.
    >
      {children}
    </div>
  );
}
