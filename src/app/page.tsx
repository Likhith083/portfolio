
import BioSection from '@/components/bio/BioSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import { bioContent, projectsData } from '@/data/content';
import { getAnimationConfig } from '@/ai/flows/animationConfig'; // Actual path to AI flow

export default async function HomePage() {
  // Fetch animation config based on bio content using the AI flow
  // This runs on the server.
  const animationConfig = await getAnimationConfig(bioContent.paragraph);

  return (
    <main className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8 lg:px-16">
      <div className="mb-12">
        <BioSection bio={bioContent} />
      </div>
      <ProjectsSection projects={projectsData} animationConfig={animationConfig} />
    </main>
  );
}
