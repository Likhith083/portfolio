import Image from 'next/image';
import type { Bio } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserCircle } from 'lucide-react';

interface BioSectionProps {
  bio: Bio;
}

export default function BioSection({ bio }: BioSectionProps) {
  return (
    <Card className="h-full flex flex-col shadow-xl bg-card/80 backdrop-blur-sm border-none">
      <CardHeader className="p-6 text-center">
        {bio.avatarUrl ? (
          <Image
            src={bio.avatarUrl}
            alt={bio.name}
            width={128}
            height={128}
            className="rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
            data-ai-hint={bio.dataAiHintAvatar || "profile picture"}
          />
        ) : (
          <UserCircle className="w-32 h-32 mx-auto mb-4 text-primary" />
        )}
        <CardTitle className="text-3xl font-bold text-primary">{bio.name}</CardTitle>
        <CardDescription className="text-lg text-foreground/80">{bio.tagline}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-base text-foreground/90 mb-6 leading-relaxed">
          {bio.paragraph}
        </p>
        <h3 className="text-xl font-semibold mb-3 text-primary">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {bio.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 bg-primary/10 text-primary-foreground hover:bg-primary/20 border border-primary/30">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
