
import { projectsData } from '@/data/content';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8 overflow-x-hidden">
      <ScrollAnimator>
        <h1 className="text-5xl font-bold text-primary text-center mb-12">My Projects</h1>
      </ScrollAnimator>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => (
          <ScrollAnimator key={project.id} delay={`${index * 0.05}s`}>
            <Card className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <CardHeader>
                <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={project.dataAiHint || 'project image'}
                  />
                </div>
                <CardTitle className="text-2xl font-semibold text-primary/90">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 mb-4 text-sm">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.link && project.link !== '#' && (
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                )}
                 {project.link === '#' && (
                  <Button variant="outline" className="w-full" disabled>
                    Details Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
       <ScrollAnimator delay="0.5s">
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          I'm constantly working on new things and refining existing projects. More details and live demos will be added soon!
        </p>
      </ScrollAnimator>
    </main>
  );
}
