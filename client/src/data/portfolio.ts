// ╔══════════════════════════════════════════════════════╗
// ║  PORTFOLIO DATA — Edit this file to personalize      ║
// ╚══════════════════════════════════════════════════════╝
import picture from "../assets/picture.png";
import resume from "../docs/NUQUI_RESUME.pdf";

export const personal = {
  name: "Arnel Gwen Nuqui",
  firstName: "Arnel",
  title: "Full-Stack Developer",
  tagline:
    "I am a hardworking, organized, and passionate programmer, with good sense of responsibility. I have a broad knowledge in software development, web development and AI automation of the current trends in the IT industry. I will carry out any given task in accordance with the rules and ethical standards.",
  email: "arnelgwenn@gmail.com",
  location: "Iba Zambales, Philippines",
  picture: picture,
  availableForWork: true,
  avatar: "", // URL to photo — leave empty for initials avatar
  initials: "AN",
  experience: "3+ years",
  projects: "10+ completed",
  resume: resume,
  social: {
    github: "https://github.com/Gwenn01",
    linkedin: "https://www.linkedin.com/in/arnel-gwen-nuqui-a20336261/",
    facebook: "https://www.facebook.com/arnel.gwen.nuqui.2024/",
  },
};

export const about = {
  paragraphs: [
    "I'm a passionate developer with experience in building web and mobile applications focused on AI, automation, and full-stack development. I mainly work with technologies like Django, Flask, Node.js, React.js, React Native, TypeScript, PostgreSQL, and MySQL.",

    "I also have knowledge in machine learning and deep learning, which I applied in several academic and personal projects involving AI-based systems and automation.",

    "When I'm not coding, I'm usually exploring new technologies, working on side projects, or improving my skills in system design and software development. I enjoy building practical systems, writing clean code, and creating solutions that solve real-world problems.",
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "PHP", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["React", "React Native", "Tailwind CSS", "Bootstrap", "Vite"],
    },
    {
      category: "Backend",
      items: [
        "Django",
        "Flask",
        "Express.js",
        "DRF",
        "REST APIs",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      category: "AI & Machine Learning, Deep Learning",
      items: ["OpenCV", "MediaPipe", "MobileNet", "CNN", "BERT"],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Figma",
        "Linux",
        "VS Code",
        "Postman",
        "MySQL Workbench",
        "pgAdmin",
        "Google Colab",
      ],
    },
  ],
};

export const STATS = [
  { value: "3+", label: "Years exp.", sub: "Full-stack" },
  { value: "10+", label: "Projects", sub: "Shipped" },
  { value: "100%", label: "Committed", sub: "Always" },
];

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
