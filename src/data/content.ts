
import type { Project, Bio } from '@/lib/types';

export const bioContent: Bio = {
  name: "Likhith Reddy Avileli",
  tagline: "Undergraduate Student in Information Systems",
  paragraph: "I am an undergraduate student pursuing Information Systems with a keen interest in SAP modules, networking concepts, and software development. I enjoy exploring full-stack development, database management, and systems design. Recently, I've been diving deep into the world of AI, particularly working with Large Language Models, custom model creation, and data manipulation in Python. I'm passionate about leveraging technology to solve real-world problems and continuously expanding my skillset.",
  skills: [
    "SAP Material Management",
    "SAP Sales and Distribution",
    "SAP Production Planning",
    "SAP Financial Accounting",
    "Wireshark",
    "Email Tracing",
    "Computer Networking",
    "Python",
    "Java",
    "JavaFX",
    "Full-Stack Development (Vanilla JS)",
    "Node.js",
    "React",
    "DBMS (SQLite)",
    "Systems Analysis and Design",
    "Artificial Intelligence",
    "Data Manipulation (Python)",
    "Local LLMs (Ollama, Hugging Face)",
    "Custom LLM Model Creation",
    "Retrieval Augmented Generation (RAG)"
  ],
  avatarUrl: "https://placehold.co/128x128.png",
  dataAiHintAvatar: "professional student",
  linkedinUrl: "https://www.linkedin.com/in/likhithavileli/",
  githubUrl: "#", // Please replace # with your actual GitHub profile URL
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Bookstore Management System',
    description: 'A comprehensive system for managing bookstore inventory, sales, and customer data. Developed focusing on robust database interactions and user-friendly interface.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'bookstore software',
    tags: ['Systems Analysis and Design', 'JavaFX', 'SQLite', 'DBMS'],
    link: '#', // User can update this link
  },
  {
    id: '2',
    title: 'Wedding Event Management System',
    description: 'An application to streamline wedding planning, managing guest lists, vendors, and schedules. Designed for efficient event organization and coordination.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'event planning',
    tags: ['Systems Analysis and Design', 'Python', 'SQLite', 'DBMS'],
    link: '#', // User can update this link
  },
  {
    id: '3',
    title: 'AI & LLM Exploration',
    description: 'Exploring the capabilities of Large Language Models, including local deployment with Ollama/Hugging Face, custom model creation, and foundational work with Retrieval Augmented Generation (RAG).',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'artificial intelligence',
    tags: ['AI', 'LLM', 'Python', 'Ollama', 'Hugging Face', 'RAG'],
    link: '#', // User can update this link
  },
  {
    id: '4',
    title: 'Kinetic Folio',
    description: 'This very portfolio, showcasing my skills and projects. Built with Next.js and featuring dynamic animations, parallax effects, and an AI-driven animation adjuster.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'personal website',
    tags: ['Next.js', 'AI', 'Animation', 'Tailwind CSS', 'React'],
    link: 'https://github.com/yourusername/kinetic-folio', // Example link
  },
];
