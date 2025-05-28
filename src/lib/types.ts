export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  dataAiHint?: string;
  link?: string; // Optional: link to live project or repository
}

export interface Bio {
  name: string;
  tagline: string;
  paragraph: string;
  skills: string[];
  avatarUrl?: string;
  dataAiHintAvatar?: string;
}

export interface AnimationConfig {
  speedFactor: number; // e.g., 0.5 for slow, 1 for normal, 1.5 for fast
  intensityFactor: number; // e.g., 0.5 for low, 1 for medium, 1.5 for high
}
