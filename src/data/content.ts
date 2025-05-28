import type { Project, Bio } from '@/lib/types';

export const bioContent: Bio = {
  name: "Alex Johnson",
  tagline: "Creative Full-Stack Developer & UI Enthusiast",
  paragraph: "Hello! I'm Alex, a passionate developer with a knack for building beautiful and functional web applications. I thrive on turning complex problems into elegant solutions and love exploring new technologies. My journey in tech is driven by a curiosity to learn and a desire to create impactful digital experiences. I specialize in modern JavaScript frameworks and enjoy crafting intuitive user interfaces that delight users.",
  skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "Python", "UI/UX Design", "Figma", "Firebase", "Tailwind CSS", "GraphQL"],
  avatarUrl: "https://placehold.co/128x128.png",
  dataAiHintAvatar: "professional portrait"
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform X',
    description: 'A full-featured e-commerce platform built with Next.js, featuring Stripe integration for payments and a sleek, responsive UI designed with Tailwind CSS. Includes admin dashboard and order management.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'online shopping',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'TypeScript'],
    link: '#',
  },
  {
    id: '2',
    title: 'TaskFlow Pro',
    description: 'A collaborative task management tool designed to boost team productivity. Features real-time updates with Firebase, drag-and-drop interface, and notification system.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'project management',
    tags: ['React', 'Firebase', 'Material UI', 'Node.js'],
    link: '#',
  },
  {
    id: '3',
    title: 'Kinetic Folio',
    description: 'This very portfolio, showcasing my skills and projects. Built with Next.js and featuring dynamic animations, parallax effects, and an AI-driven animation adjuster.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'personal website',
    tags: ['Next.js', 'AI', 'Animation', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: '4',
    title: 'Global Weather Lens',
    description: 'A sleek dashboard displaying real-time global weather information using the OpenWeatherMap API. Includes interactive maps and customizable forecast views.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather forecast',
    tags: ['Vue.js', 'OpenWeatherMap API', 'Chart.js', 'Leaflet'],
    link: '#',
  },
];
