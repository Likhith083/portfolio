
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Camera, DraftingCompass, Feather, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  dataAiHint: string;
}

const hobbiesData: Hobby[] = [
  {
    id: 'photography',
    title: 'Photography',
    description: "Capturing moments and perspectives, I enjoy exploring the world through a lens. It's a way to tell stories and freeze time, finding beauty in the everyday.",
    icon: Camera,
    dataAiHint: "camera hobby",
  },
  {
    id: 'design_prototyping',
    title: 'Visual Design & Prototyping',
    description: "From sketching initial concepts to building functional prototypes, I'm passionate about bringing ideas to life. This involves visual design, UI/UX considerations, and creative problem-solving.",
    icon: DraftingCompass, // Or Palette
    dataAiHint: "design sketch",
  },
  {
    id: 'poetry',
    title: 'Poetry',
    description: "Expressing thoughts and emotions through verse is a creative outlet I cherish. It's a unique way to play with language and connect on a deeper level.",
    icon: Feather,
    dataAiHint: "writing poetry",
  },
];

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8 overflow-x-hidden">
      <ScrollAnimator>
        <h1 className="text-5xl font-bold text-primary text-center mb-16">
          Hobbies & Creative Pursuits
        </h1>
      </ScrollAnimator>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {hobbiesData.map((hobby, index) => (
          <ScrollAnimator key={hobby.id} delay={`${index * 0.1}s`}>
            <Card className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full text-center group hover:border-primary/50 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary transition-colors duration-300">
                  <hobby.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl font-semibold text-primary/90">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 text-sm">{hobby.description}</CardDescription>
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>

      <ScrollAnimator delay={`${hobbiesData.length * 0.1}s`} className="text-center">
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Beyond my technical skills, these creative activities help me think differently and bring a well-rounded perspective to my work.
        </p>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </ScrollAnimator>
    </main>
  );
}
