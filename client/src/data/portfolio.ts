// ╔══════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this file to personalize      ║
// ╚══════════════════════════════════════════════════════╝

export const personal = {
  name: "Your Name",
  firstName: "Your",
  title: "Full-Stack Developer",
  tagline:
    "I craft fast, accessible, and beautiful digital experiences — from pixel to production.",
  email: "you@example.com",
  location: "Manila, Philippines",
  availableForWork: true,
  avatar: "", // URL to photo — leave empty for initials avatar
  initials: "YN",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

export const about = {
  paragraphs: [
    "I'm a passionate developer with 3+ years of experience building web and mobile applications. I specialize in React, TypeScript, and Django REST Framework.",
    "When I'm not coding, I'm exploring trails, tinkering with side projects, or diving deep into system design. I care deeply about clean code, great UX, and solving real problems for real people.",
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "React Native",
        "Tailwind CSS",
        "Next.js",
        "Vite",
      ],
    },
    {
      category: "Backend",
      items: ["Django", "Python", "DRF", "PostgreSQL", "Celery", "REST APIs"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Figma", "Linux", "VS Code", "Postman"],
    },
  ],
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer",
    company: "Company Name",
    period: "2023 — Present",
    description:
      "Built and maintained web applications for internal teams. Led the migration from a legacy PHP system to a modern React + Django stack, reducing load times by 60%.",
    tags: ["React", "Django", "TypeScript", "PostgreSQL"],
  },
  {
    id: "exp-2",
    role: "Junior Developer",
    company: "Another Company",
    period: "2021 — 2023",
    description:
      "Developed REST APIs consumed by mobile apps. Contributed to frontend refactoring efforts and implemented automated testing pipelines.",
    tags: ["Python", "React Native", "Jest"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  accentColor: string; // Tailwind color class e.g. "violet", "cyan", "amber"
};

export const projects: Project[] = [
  {
    id: "proj-2",
    title: "Fitness Tracker",
    description:
      "React Native app for tracking workouts and personal records. Dark UI with animated progress charts and a clean training log.",
    image: "",
    tags: ["React Native", "TypeScript", "Expo"],
    github: "https://github.com/yourusername/fitness-tracker",
    live: "",
    featured: true,
    accentColor: "cyan",
  },
  {
    id: "proj-3",
    title: "Barangay Finance App",
    description:
      "Financial tracking app for barangay-level government. ABO/SRE modules, file upload, budget variance analysis, CORS-secured API.",
    image: "",
    tags: ["React", "Flask", "Python", "TypeScript"],
    github: "https://github.com/yourusername/barangay-finance",
    live: "",
    featured: false,
    accentColor: "amber",
  },
  {
    id: "proj-4",
    title: "Proposal Monitor",
    description:
      "Admin dashboard for monitoring proposal documents. Multi-tab with pagination, inline editing, search, and workflow breakdown views.",
    image: "",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "",
    live: "",
    featured: false,
    accentColor: "emerald",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "An incredibly detail-oriented developer who delivered beyond expectations. Their work on our API saved us weeks of future maintenance.",
    author: "Jane Reyes",
    role: "Project Lead, GovTech PH",
    initials: "JR",
  },
  {
    id: "t-2",
    quote:
      "Fast, communicative, and writes clean code. Would absolutely work with them again on future projects.",
    author: "Marco Diaz",
    role: "CTO, StartupPH",
    initials: "MD",
  },
];
