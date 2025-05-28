
'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
// Removed import of getAnimationConfig and AnimationConfig as they are no longer used here.

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  baseAnimationClass?: string;
  activeAnimationClass?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: string; // CSS animation-delay string
  // Removed textContentToAnalyze prop
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
    if (typeof window === 'undefined' || !ref.current) {
      return;
    }
    const currentRef = ref.current; // Capture ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && currentRef) { // Use captured ref
            observer.unobserve(currentRef);
          }
        } else {
          if (!triggerOnce) {
            // setIsVisible(false); // Optionally reset for re-animation
          }
        }
      },
      { threshold }
    );

    if (currentRef) { // Use captured ref
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) { // Use captured ref
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  // Removed useEffect for fetching and setting animationParams.
  // Removed animationParams and hasFetchedConfig state.

  const style: React.CSSProperties = delay && isVisible ? { animationDelay: delay } : {};

  // Removed dynamic style assignment for --anim-duration and --anim-translateY-initial.
  // These will now be handled by fixed values in globals.css.

  return (
    <div
      ref={ref}
      className={cn(
        baseAnimationClass,
        isVisible && activeAnimationClass,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
