
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-primary animate-float-in" style={{ animationDelay: '0.2s' }}>
          My Interactive Portfolio
        </h1>
        <p className="text-xl text-foreground/80 animate-float-in" style={{ animationDelay: '0.4s' }}>
          Exploring Skills, Projects, and Hobbies in a new dimension.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-float-in" style={{ animationDelay: '0.6s' }}>
          {/* Placeholder sections - we will build these out with 3D-like interactions */}
          <SectionCard title="My Skills" description="Discover the technologies I master." link="/skills" />
          <SectionCard title="My Resume" description="A brief overview of my journey." link="/resume" />
          <SectionCard title="My Hobbies" description="What I do in my free time." link="/hobbies" />
          <SectionCard title="My Projects" description="See my work in action." link="/projects" />
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
