
'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string; // Added to the div wrapper itself
  baseAnimationClass?: string; // e.g., 'scroll-anim-base'
  activeAnimationClass?: string; // e.g., 'start-animation'
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // CSS animation-delay string, e.g., "0.2s" for staggering
}

export function ScrollAnimator({
  children,
  className,
  baseAnimationClass = 'scroll-anim-base',
  activeAnimationClass = 'start-animation',
  threshold = 0.1,
  triggerOnce = true,
  delay,
}: ScrollAnimatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this only runs client-side
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }

    const currentRef = ref.current; // Capture ref.current to use in cleanup

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!triggerOnce) {
            // Optionally reset animation if it should play every time it scrolls out and back in
            // setIsVisible(false); 
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
  }, [threshold, triggerOnce]); // Dependencies for the observer setup

  const appliedStyle = delay && isVisible ? { animationDelay: delay } : {};

  return (
    <div
      ref={ref}
      className={cn(
        baseAnimationClass, // Base class from globals.css
        isVisible && activeAnimationClass, // Apply animation class when visible
        className // User-provided additional classes for the wrapper
      )}
      style={appliedStyle}
    >
      {children}
    </div>
  );
}
