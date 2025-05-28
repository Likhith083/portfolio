
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { bioContent } from '@/data/content';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-x-hidden">
      <div className="text-center space-y-8 w-full max-w-5xl">
        <ScrollAnimator 
          delay="0.0s" 
          className="w-full flex flex-col items-center"
        >
          {bioContent.avatarUrl && (
            <Image 
              src={bioContent.avatarUrl} 
              alt={bioContent.name} 
              width={128} 
              height={128} 
              className="rounded-full mb-6 border-4 border-primary/50 shadow-xl"
              data-ai-hint={bioContent.dataAiHintAvatar || 'profile picture'}
            />
          )}
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            {bioContent.name}
          </h1>
        </ScrollAnimator>
        <ScrollAnimator 
          delay="0.1s" 
          className="w-full"
        >
          <p className="text-xl md:text-2xl text-foreground/80">
            {bioContent.tagline}
          </p>
        </ScrollAnimator>
        <ScrollAnimator 
          delay="0.2s" 
          className="w-full"
        >
          <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {bioContent.paragraph}
          </p>
        </ScrollAnimator>

        <ScrollAnimator 
          delay="0.25s" 
          className="w-full"
        >
          <div className="flex justify-center gap-4 mt-4 mb-8">
            {bioContent.linkedinUrl && (
              <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group">
                <Link href={bioContent.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </Link>
              </Button>
            )}
            {bioContent.githubUrl && bioContent.githubUrl !== "#" && (
              <Button asChild variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary group">
                <Link href={bioContent.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </Link>
              </Button>
            )}
             {bioContent.githubUrl === "#" && (
               <Button variant="outline" size="icon" className="rounded-full" disabled title="GitHub link not provided">
                  <Github className="h-5 w-5 text-muted-foreground" />
              </Button>
            )}
          </div>
        </ScrollAnimator>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollAnimator delay="0.3s">
            <SectionCard title="My Skills" description="Discover the technologies I master." link="/skills" />
          </ScrollAnimator>
          <ScrollAnimator delay="0.4s">
            <SectionCard title="My Resume" description="A detailed overview of my journey." link="/resume" />
          </ScrollAnimator>
          <ScrollAnimator delay="0.5s">
            <SectionCard title="My Hobbies" description="What I do in my free time." link="/hobbies" />
          </ScrollAnimator>
          <ScrollAnimator delay="0.6s">
            <SectionCard title="My Projects" description="See my work in action." link="/projects" />
          </ScrollAnimator>
        </div>
      </div>
    </main>
  );
}

interface SectionCardProps {
  title: string;
  description: string;
  link: string;
}

function SectionCard({ title, description, link }: SectionCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-xl border border-border hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
        <p className="text-foreground/70 mb-4 text-sm">{description}</p>
      </div>
      <Button asChild variant="outline" className="w-full group mt-auto">
        <Link href={link}>
          Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
