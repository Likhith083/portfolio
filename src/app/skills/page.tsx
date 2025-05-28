
import { bioContent } from '@/data/content';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Briefcase, BarChart3, Cpu, Database, GitFork, Globe, Mail, Network, Package, Palette, Presentation, Puzzle, RadioTower, Rocket, ShoppingCart, Smartphone, TerminalSquare, Users, Zap, Settings, Brain, Code, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillItem {
  name: string;
  proficiency: number;
  icon?: LucideIcon;
}

const skillProficiencyMap: Record<string, number> = {
  "SAP Material Management": 90,
  "SAP Sales and Distribution": 85,
  "SAP Production Planning": 80,
  "SAP Financial Accounting": 75,
  "Wireshark": 70,
  "Email Tracing": 65,
  "Computer Networking": 60,
  "Python": 80,
  "Java": 70,
  "JavaFX": 65,
  "Full-Stack Development (Vanilla JS)": 75,
  "Node.js": 55,
  "React": 50,
  "DBMS (SQLite)": 60,
  "Systems Analysis and Design": 70,
  "Artificial Intelligence": 70,
  "Data Manipulation (Python)": 60,
  "Local LLMs (Ollama, Hugging Face)": 65,
  "Custom LLM Model Creation": 60,
  "Retrieval Augmented Generation (RAG)": 40,
};

const skillIconMap: Record<string, LucideIcon> = {
  "SAP Material Management": Package,
  "SAP Sales and Distribution": ShoppingCart,
  "SAP Production Planning": Settings,
  "SAP Financial Accounting": BarChart3,
  "Wireshark": RadioTower,
  "Email Tracing": Mail,
  "Computer Networking": Network,
  "Python": Code,
  "Java": Code,
  "JavaFX": Palette,
  "Full-Stack Development (Vanilla JS)": Globe,
  "Node.js": GitFork,
  "React": GitFork,
  "DBMS (SQLite)": Database,
  "Systems Analysis and Design": Presentation,
  "Artificial Intelligence": Brain,
  "Data Manipulation (Python)": TerminalSquare,
  "Local LLMs (Ollama, Hugging Face)": Cpu,
  "Custom LLM Model Creation": Puzzle,
  "Retrieval Augmented Generation (RAG)": Search,
};

export default function SkillsPage() {
  const skillsWithProficiency: SkillItem[] = bioContent.skills.map(skillName => ({
    name: skillName,
    proficiency: skillProficiencyMap[skillName] || 50, // Default proficiency if not found
    icon: skillIconMap[skillName] || Zap, // Default icon
  }));

  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8 overflow-x-hidden">
      <ScrollAnimator>
        <h1 className="text-5xl font-bold text-primary text-center mb-12">My Skills</h1>
      </ScrollAnimator>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsWithProficiency.map((skill, index) => (
          <ScrollAnimator key={skill.name} delay={`${index * 0.05}s`}>
            <Card className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-primary/90">{skill.name}</CardTitle>
                  {skill.icon && <skill.icon className="h-6 w-6 text-accent" />}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm text-muted-foreground">Proficiency:</p>
                  <p className="text-sm font-medium text-primary">{skill.proficiency}%</p>
                </div>
                <Progress value={skill.proficiency} className="w-full h-2 [&>div]:bg-primary" aria-label={`${skill.name} proficiency ${skill.proficiency}%`} />
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
      <ScrollAnimator delay="0.5s">
        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          This is a representation of my current comfort and experience levels. I'm always learning and eager to deepen my expertise in these areas and explore new technologies!
        </p>
      </ScrollAnimator>
    </main>
  );
}
