
'use server';
/**
 * @fileOverview Provides animation configuration.
 * This file previously contained an AI flow for dynamic animation adjustment,
 * which has been removed. It now exports a function that could return
 * a default configuration if needed, but is not currently used by ScrollAnimator.
 *
 * - getAnimationConfig - (Currently not used by ScrollAnimator) A function that returns default animation parameters.
 * - AnimationConfig - The type definition for animation configuration.
 */

import type { AnimationConfig } from '@/lib/types';

// This function is not actively called by ScrollAnimator in its non-AI version.
// It's kept here in a simplified form.
// The textContent parameter is kept for potential future use or if other parts of the code might call it,
// but it's not used in this static version.
export async function getAnimationConfig(_textContent?: string): Promise<AnimationConfig> {
  return { speedFactor: 1.0, intensityFactor: 1.0 }; // Default values
}
