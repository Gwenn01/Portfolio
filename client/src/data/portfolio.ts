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
    role: "Backend Developer Intern (OJT)",
    company:
      "Office of the Program Chair – BS Information Technology, PRMSU Iba",
    period: "Dec 2025 — May 2026",
    description:
      "Developed and maintained an Automated Proposal Review and Processing System designed to streamline proposal submission, evaluation, approval workflows, and document tracking for academic operations. Built scalable backend services using Django and REST APIs with role-based authentication, workflow automation, and secure database integration. Managed PostgreSQL databases hosted on AWS to ensure reliable and scalable data storage. Collaborated with development teams using Git and GitHub for version control, feature integration, and deployment workflows while following clean coding and software engineering practices.",
    tags: [
      "Django",
      "Python",
      "REST API",
      "PostgreSQL",
      "AWS",
      "Git",
      "GitHub",
    ],
  },

  {
    id: "exp-2",
    role: "Systems & Administrative Support Intern (Office Assistant)",
    company:
      "Office of the Program Chair – BS Information Technology, PRMSU Iba",
    period: "Jun 2025 — Jul 2025",
    description:
      "Provided systems and administrative support for student lifecycle management operations using the Student Information and Accounting System (SIAS). Assisted in enrollment processing, student record verification, and data auditing to maintain accurate academic records. Migrated paper-based documents into digital formats using Google Workspace and Microsoft Excel, improving accessibility and operational efficiency. Developed automated reporting templates using advanced Excel functions such as VLOOKUP and Pivot Tables to reduce repetitive manual tasks and improve reporting accuracy. Supported IT-related concerns and performed data validation and cleaning to ensure data consistency across institutional systems.",
    tags: [
      "Excel",
      "Google Workspace",
      "Data Validation",
      "SIAS",
      "Administrative Support",
      "Reporting Automation",
    ],
  },

  {
    id: "exp-3",
    role: "Data Analytics & Admissions Support Intern (Office Assistant)",
    company:
      "Office of the Program Chair – BS Information Technology, PRMSU Iba",
    period: "Apr 2025 — May 2025",
    description:
      "Analyzed and organized PCET datasets to support admission evaluations and student placement decisions. Automated scoring and data-processing workflows using Microsoft Excel and Google Sheets, significantly reducing manual computation time and improving accuracy. Maintained confidentiality while handling sensitive student information and ensured compliance with data privacy practices. Digitized and organized admission-related records to improve accessibility, retrieval efficiency, and institutional record management processes.",
    tags: [
      "Data Analytics",
      "Excel",
      "Google Sheets",
      "Data Processing",
      "Admissions Support",
      "Data Privacy",
    ],
  },

  {
    id: "exp-4",
    role: "IT Support & Web Development Intern (Office Assistant)",
    company:
      "Office of the Program Chair – BS Information Technology, PRMSU Iba",
    period: "2024 — 2025",
    description:
      "Developed a static departmental website using HTML, CSS, and JavaScript to improve accessibility of departmental information and digital resources. Performed hardware troubleshooting, software maintenance, PC optimization, and system reformatting to support office operations and maintain system performance. Implemented backup and file management solutions to improve data integrity and minimize the risk of data loss. Coordinated with faculty and administrative departments for document processing, technical support, and workflow improvements.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "IT Support",
      "Hardware Troubleshooting",
      "System Maintenance",
      "Web Development",
    ],
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
