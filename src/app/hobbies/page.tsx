
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Smile, Construction } from 'lucide-react';

export default function HobbiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-x-hidden">
      <ScrollAnimator className="text-center space-y-8 w-full max-w-2xl">
        <Construction className="h-24 w-24 text-primary mx-auto" />
        <h1 className="text-5xl font-bold text-primary">
          Hobbies & Interests
        </h1>
        <p className="text-xl text-foreground/80">
          This section about my hobbies and personal interests is currently being curated.
        </p>
        <p className="text-md text-muted-foreground">
          I believe in a well-rounded life outside of technology, and I'm excited to share more soon!
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </ScrollAnimator>
    </main>
  );
}
