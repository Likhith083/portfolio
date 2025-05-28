
'use server';
/**
 * @fileOverview An AI flow to determine animation configuration based on text content.
 *
 * - getAnimationConfig - A function that calls the Genkit flow to get animation parameters.
 * - AnimationConfigInputSchema - The input type for the animation config flow.
 * - AnimationConfigSchema - The return type for the animation config flow (matches AnimationConfig type).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { AnimationConfig } from '@/lib/types'; // Ensure this type is available

// Define the Zod schema for the input (textContent)
const AnimationConfigInputSchema = z.object({
  textContent: z.string().describe('The text content to analyze for perceived energy.'),
});
export type AnimationConfigInput = z.infer<typeof AnimationConfigInputSchema>;

// Define the Zod schema for the output (matches AnimationConfig type)
const AnimationConfigSchema = z.object({
  speedFactor: z.number().min(0.5).max(1.5).describe('Animation speed factor. 0.5 for slow, 1.0 for normal, 1.5 for fast.'),
  intensityFactor: z.number().min(0.5).max(1.5).describe('Animation intensity factor. 0.5 for subtle, 1.0 for normal, 1.5 for pronounced.'),
});
// The existing AnimationConfig type in types.ts can be used directly if it matches.
// export type AnimationConfigOutput = z.infer<typeof AnimationConfigSchema>;

const animationAdjusterPrompt = ai.definePrompt({
  name: 'animationAdjusterPrompt',
  input: { schema: AnimationConfigInputSchema },
  output: { schema: AnimationConfigSchema },
  prompt: `You are an AI specializing in UI animation. Your task is to determine animation parameters based on the textual content's perceived energy.
Text content: '{{{textContent}}}'

Analyze the text. If it feels high-energy, short, or exciting, suggest faster and more intense animations (e.g., speedFactor closer to 1.5, intensityFactor closer to 1.5).
If it's longer, more descriptive, or calmer, suggest slower and more subtle animations (e.g., speedFactor closer to 0.5, intensityFactor closer to 0.5).
The default for neutral text is speedFactor: 1.0 and intensityFactor: 1.0.

Return a JSON object with 'speedFactor' and 'intensityFactor'.
- speedFactor: A number between 0.5 (slower) and 1.5 (faster).
- intensityFactor: A number between 0.5 (subtle) and 1.5 (pronounced).

Examples:
Input Text: 'Introducing groundbreaking features that will revolutionize your workflow!'
Output: { "speedFactor": 1.4, "intensityFactor": 1.3 }

Input Text: 'A detailed monograph on the historical significance of early 19th-century pottery.'
Output: { "speedFactor": 0.7, "intensityFactor": 0.8 }

Input Text: 'Our new product is now available.'
Output: { "speedFactor": 1.0, "intensityFactor": 1.0 }

Respond ONLY with the JSON object that strictly adheres to the output schema.
  `,
});

const animationConfigFlow = ai.defineFlow(
  {
    name: 'animationConfigFlow',
    inputSchema: AnimationConfigInputSchema,
    outputSchema: AnimationConfigSchema,
  },
  async (input) => {
    // Add a small check for very short or empty text to avoid unnecessary AI calls or provide defaults
    if (!input.textContent || input.textContent.trim().length < 10) {
      return { speedFactor: 1.0, intensityFactor: 1.0 }; // Default values
    }
    try {
      const { output } = await animationAdjusterPrompt(input);
      return output || { speedFactor: 1.0, intensityFactor: 1.0 }; // Fallback to default
    } catch (error) {
      console.error("Error in animationConfigFlow:", error);
      return { speedFactor: 1.0, intensityFactor: 1.0 }; // Fallback on error
    }
  }
);

export async function getAnimationConfig(textContent: string): Promise<AnimationConfig> {
  if (!textContent || typeof textContent !== 'string' || textContent.trim() === "") {
    // Return default config if textContent is invalid or empty to prevent errors
    return { speedFactor: 1.0, intensityFactor: 1.0 };
  }
  return animationConfigFlow({ textContent });
}
