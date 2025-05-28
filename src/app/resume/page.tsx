
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, Construction } from 'lucide-react';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 overflow-x-hidden">
      <ScrollAnimator className="text-center space-y-8 w-full max-w-2xl">
        <Construction className="h-24 w-24 text-primary mx-auto" />
        <h1 className="text-5xl font-bold text-primary">
          Resume Page
        </h1>
        <p className="text-xl text-foreground/80">
          My detailed resume is currently under construction and will be available here soon.
        </p>
        <p className="text-md text-muted-foreground">
          In the meantime, you can check out my skills and projects, or connect with me on LinkedIn (link coming soon!).
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/skills">
              View Skills
            </Link>
          </Button>
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
