// IMPORTANT: This is a DUMMY flow for UI development purposes.
// As per the project guidelines, actual AI flows in src/ai/flows are pre-existing and MUST NOT be modified.
// This file simulates the output of such a flow.

import type { AnimationConfig } from '@/lib/types';

export async function getAnimationConfig(textContent: string): Promise<AnimationConfig> {
  // Simulate AI processing based on text content length
  const length = textContent.length;
  let speedFactor: number;
  let intensityFactor: number;

  if (length < 150) { // Short text, perceived as high energy
    speedFactor = 1.5; // Faster
    intensityFactor = 1.5; // More intense
  } else if (length < 300) { // Medium text
    speedFactor = 1.0; // Normal
    intensityFactor = 1.0; // Normal
  } else { // Long text, perceived as lower energy
    speedFactor = 0.75; // Slower
    intensityFactor = 0.75; // Less intense
  }

  // Simulate a delay, as AI processing might take time
  // In a real scenario, this would be an actual AI model call.
  await new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50));

  return { speedFactor, intensityFactor };
}
