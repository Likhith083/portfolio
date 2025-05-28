
import { ScrollAnimator } from '@/components/ScrollAnimator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail, Phone, MapPin, Linkedin as LinkedinIcon, Briefcase, GraduationCap, Star, Settings, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const resumeData = {
  name: "Likhith Avileli",
  email: "Lra2906@mavs.uta.edu",
  linkedin: "https://www.linkedin.com/in/likhithavileli/",
  location: "Arlington, TX",
  phone: "(214)-470-0158",
  education: {
    university: "The University of Texas at Arlington",
    location: "Arlington, TX",
    degree: "Bachelor of Information Systems",
    graduationDate: "May 2022", // Assuming graduation year, resume says May 2022 for start/end? Clarified as grad date.
    details: [
      "Database Management: SQLite, data modeling, relational database design.",
      "Programming & Development: Java, Python, object-oriented programming (OOP).",
      "Networking & Systems: Computer networking, distributions, IT infrastructure.",
      "Productivity & Business Tools: Microsoft 365 (Word, Excel, PowerPoint, Access)."
    ]
  },
  experience: [
    {
      company: "ITion solutions ltd",
      location: "Hyderabad, Telangana",
      role: "Learning Intern",
      dates: "June 2019 – August 2019",
      responsibilities: [
        "Collaborated with a team to develop and enhance a fully functional website using HTML, JavaScript, and CSS, improving user experience and interface design.",
        "Gained hands-on experience in SAP Material Management (SAP MM), learning inventory management, procurement, and supply chain workflows.",
        "Assisted in organizing and managing team meetings, ensuring seamless communication and project coordination.",
        "Developed problem-solving and technical skills by working on real-world projects, strengthening my understanding of software development and enterprise resource planning (ERP) systems."
      ]
    }
  ],
  skills: {
    technical: [
      "Microsoft 365 (Word, Excel, PowerPoint, Access)",
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Python",
      "SQLite",
      "C++", // Assuming C+ means C++
      "SAP MM module"
    ],
    languages: ["English (Trilingual)", "Telugu (Trilingual)", "Hindi (Trilingual)"],
    creative: ["Photography", "Prototype Building", "Poetry"]
  },
  activities: [
    {
      name: "Prototype Design Contestant",
      organization: "University of Texas at Arlington",
      date: "March 2023",
      details: [
        "Participated in a prototype designing challenge at the University of Texas at Arlington to create a passive sound amplifier using upcycled materials.",
        "Gained hands-on experience about UI/UX and product development, along with entrepreneurial skills."
      ]
    }
  ]
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 px-4 md:px-8 overflow-x-hidden">
      <ScrollAnimator>
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-primary mb-2">{resumeData.name}</h1>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-muted-foreground mb-6">
              <a href={`mailto:${resumeData.email}`} className="flex items-center hover:text-primary">
                <Mail className="h-4 w-4 mr-1" /> {resumeData.email}
              </a>
              <a href={`tel:${resumeData.phone}`} className="flex items-center hover:text-primary">
                <Phone className="h-4 w-4 mr-1" /> {resumeData.phone}
              </a>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> {resumeData.location}
              </p>
              <Link href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                <LinkedinIcon className="h-4 w-4 mr-1" /> LinkedIn
              </Link>
            </div>
            <Button asChild>
              <Link href="/Likhith_Avileli_Resume.pdf" download="Likhith_Avileli_Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              (To enable download, please place your resume as 'Likhith_Avileli_Resume.pdf' in the 'public' folder.)
            </p>
          </div>

          <Separator className="my-8 bg-border/50" />

          {/* Education Section */}
          <ScrollAnimator delay="0.1s">
            <Card className="mb-8 bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary/90 flex items-center">
                  <GraduationCap className="h-7 w-7 mr-3 text-accent" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{resumeData.education.university}</h3>
                  <p className="text-md text-muted-foreground">{resumeData.education.location}</p>
                  <p className="text-lg text-primary/80">{resumeData.education.degree} - {resumeData.education.graduationDate}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80 pl-2">
                    {resumeData.education.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimator>

          {/* Experience Section */}
          <ScrollAnimator delay="0.2s">
            <Card className="mb-8 bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary/90 flex items-center">
                  <Briefcase className="h-7 w-7 mr-3 text-accent" /> Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role} - {exp.company}</h3>
                    <p className="text-md text-muted-foreground">{exp.location} | {exp.dates}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80 pl-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimator>

          {/* Skills Section */}
          <ScrollAnimator delay="0.3s">
            <Card className="mb-8 bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary/90 flex items-center">
                  <Settings className="h-7 w-7 mr-3 text-accent" /> Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-foreground/90 mb-2">Technical:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground/90 mb-2">Languages:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground/90 mb-2">Creative & Other:</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.creative.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimator>

          {/* Activities Section */}
          <ScrollAnimator delay="0.4s">
            <Card className="mb-8 bg-card border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary/90 flex items-center">
                  <Star className="h-7 w-7 mr-3 text-accent" /> Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resumeData.activities.map((activity, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-foreground">{activity.name}</h3>
                    <p className="text-md text-muted-foreground">{activity.organization} | {activity.date}</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/80 pl-2">
                      {activity.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimator>
          
          <ScrollAnimator delay="0.5s" className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </ScrollAnimator>
        </div>
      </ScrollAnimator>
    </main>
  );
}
