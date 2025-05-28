import BioSection from '@/components/bio/BioSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import KineticFolioLayout from '@/components/layout/KineticFolioLayout';
import { bioContent, projectsData } from '@/data/content';
import { getAnimationConfig } from '@/ai/flows/animationConfig'; // Actual path to AI flow

export default async function HomePage() {
  // Fetch animation config based on bio content using the AI flow
  // This runs on the server.
  const animationConfig = await getAnimationConfig(bioContent.paragraph);

  return (
    <KineticFolioLayout
      bioSection={<BioSection bio={bioContent} />}
      projectsSection={<ProjectsSection projects={projectsData} animationConfig={animationConfig} />}
    />
  );
}
