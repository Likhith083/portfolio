
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimator } from '@/components/ScrollAnimator';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-x-hidden">
      <div className="text-center space-y-8 w-full max-w-5xl">
        <ScrollAnimator delay="0.1s" className="w-full">
          <h1 className="text-5xl font-bold text-primary">
            My Interactive Portfolio
          </h1>
        </ScrollAnimator>
        <ScrollAnimator delay="0.2s" className="w-full">
          <p className="text-xl text-foreground/80">
            Exploring Skills, Projects, and Hobbies in a new dimension.
          </p>
        </ScrollAnimator>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollAnimator delay="0.3s">
            <SectionCard title="My Skills" description="Discover the technologies I master." link="/skills" />
          </ScrollAnimator>
          <ScrollAnimator delay="0.4s">
            <SectionCard title="My Resume" description="A brief overview of my journey." link="/resume" />
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
    <div className="bg-card p-6 rounded-lg shadow-xl border border-border hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
      <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
      <p className="text-foreground/70 mb-4 text-sm">{description}</p>
      <Button asChild variant="outline" className="w-full group">
        <Link href={link}>
          Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
