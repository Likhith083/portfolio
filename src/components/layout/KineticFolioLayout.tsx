import React from 'react';

interface KineticFolioLayoutProps {
  bioSection: React.ReactNode;
  projectsSection: React.ReactNode;
}

export default function KineticFolioLayout({ bioSection, projectsSection }: KineticFolioLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">
      <aside className="w-full md:w-1/3 lg:w-2/5 md:h-screen md:sticky md:top-0 p-4 md:p-6 lg:p-8 overflow-y-auto">
        {bioSection}
      </aside>
      <main className="w-full md:w-2/3 lg:w-3/5 md:h-screen p-4 md:p-6 lg:p-8 overflow-y-auto">
        {projectsSection}
      </main>
    </div>
  );
}
