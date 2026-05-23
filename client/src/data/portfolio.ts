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
      category: "AI, Machine & Deep Learning",
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

export const EDUCATION_ACHIEVEMENTS = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "President Ramon Magsaysay State University",
    year: "2022 - 2026",
    description:
      "Focused on web & software development, database systems, networking, and AI integration.",
  },
  {
    title: "Cum Laude Candidate",
    subtitle: "Academic Achievement",
    year: "2022 - 2026",
    description:
      "Maintained strong academic performance throughout the Bachelor of Science in Information Technology.",
  },
  {
    title: "Consistent Dean’s Lister",
    subtitle: "Academic Achievement",
    year: "1st Year - 4th Year",
    description: "Maintained strong academic performance throughout college.",
  },
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

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  year: string;
  role?: string;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accentColor?: "blue" | "cyan" | "emerald" | "violet" | "amber" | "rose";
  status?: "Completed" | "In Progress" | "Maintained";
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Laptop Factory Store",
    shortDescription:
      "Full-stack e-commerce website for laptop browsing, inventory, and order management.",
    fullDescription:
      "Developed a full-stack e-commerce platform as an academic project focused on laptop product management and online purchasing workflows. Built responsive user interfaces using HTML, CSS, and JavaScript while implementing backend functionalities with PHP and MySQL. Features included product catalog management, authentication systems, shopping cart workflows, inventory handling, and dynamic product rendering. The system streamlined online product browsing and transaction management while improving practical experience in full-stack web development.",
    category: "Academic Project",
    year: "2023",
    role: "Full-Stack Developer",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Gwenn01/LaptopFactoryStore",
    live: "",
    featured: false,
    accentColor: "blue",
  },

  {
    id: "proj-2",
    title: "Student Management System",
    shortDescription:
      "Web-based platform for managing student records and academic workflows.",
    fullDescription:
      "Created a Student Management System designed to handle student information, academic records, and administrative workflows efficiently. Implemented CRUD operations, student data modules, and responsive interfaces using HTML, CSS, JavaScript, PHP, and MySQL. Developed backend services for secure data storage and retrieval while ensuring smooth integration between frontend interfaces and database operations.",
    category: "Academic Project",
    year: "2024",
    role: "Full-Stack Developer",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Gwenn01/StudentManagementSystem",
    live: "",
    featured: false,
    accentColor: "cyan",
  },

  {
    id: "proj-3",
    title: "Sustainable Volunteer Web Platform",
    shortDescription:
      "Hackathon-built platform for environmental volunteer event management.",
    fullDescription:
      "Developed a full-stack volunteer management platform during a sustainability-focused hackathon. Built using React.js, Express.js, TypeScript, and MongoDB, the platform enabled volunteer event organization, participant coordination, and decentralized integrations using ICP technologies. Collaborated within a fast-paced team environment and delivered a production-ready prototype within a two-week development cycle.",
    category: "Hackathon Project",
    year: "2024",
    role: "Frontend & Backend Developer",
    image: "",
    tags: ["React", "TypeScript", "Express.js", "MongoDB", "ICP"],
    github: "https://github.com/Gwenn01/azle-react",
    live: "",
    featured: false,
    accentColor: "emerald",
  },

  {
    id: "proj-4",
    title: "Campus Room Status Dashboard Tracker System",
    shortDescription:
      "Real-time classroom occupancy and room status monitoring platform.",
    fullDescription:
      "Built a real-time room tracking and dashboard monitoring system designed for instructors and students to monitor classroom occupancy and availability. Developed responsive dashboards using React and Express.js while integrating MySQL for room schedules, occupancy logs, and monitoring records. The system improved campus room utilization, accessibility, and scheduling transparency.",
    category: "Academic Project",
    year: "2024",
    role: "Full-Stack Developer",
    image: "",
    tags: ["React", "Express.js", "MySQL", "Real-Time Tracking"],
    github: "https://github.com/Gwenn01/CampusRoomStatusDashboardTrackerSystem",
    live: "",
    featured: false,
    accentColor: "blue",
  },

  {
    id: "proj-5",
    title: "Dental Appointment System",
    shortDescription:
      "Clinic scheduling and patient appointment management system.",
    fullDescription:
      "Developed a dental appointment management system focused on improving clinic scheduling workflows and patient reservation handling. Built using PHP, MySQL, HTML, CSS, and JavaScript within a XAMPP environment. Implemented appointment scheduling, patient tracking, reservation workflows, and responsive interfaces to improve accessibility and clinic management processes.",
    category: "Academic Project",
    year: "2024",
    role: "Full-Stack Developer",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/Gwenn01/Appointment-System",
    live: "",
    featured: false,
    accentColor: "amber",
  },

  {
    id: "proj-6",
    title: "AI-Powered Blockchain Wallet Monitoring System",
    shortDescription:
      "AI-powered blockchain monitoring tool for suspicious wallet detection.",
    fullDescription:
      "Developed an AI-powered blockchain monitoring application during a hackathon competition designed to detect suspicious cryptocurrency wallet activities and improve blockchain transparency. Built using Flask, React, Base Ethereum Layer 2, and machine learning regression models for wallet behavior analysis and risk detection. Integrated smart contract validation and collaborated with a team to architect, implement, and present the solution in a competitive fast-paced environment.",
    category: "Hackathon Project",
    year: "2025",
    role: "Backend & AI Developer",
    image: "",
    tags: [
      "Flask",
      "React",
      "Machine Learning",
      "Blockchain",
      "Ethereum",
      "Regression Model",
    ],
    github: "https://github.com/Gwenn01/branch-monitoring-blockchain",
    live: "",
    featured: false,
    accentColor: "violet",
  },

  {
    id: "proj-7",
    title: "ProctorVision: AI-Powered Laboratory Exam Monitoring System",
    shortDescription:
      "AI-powered exam proctoring system with real-time behavior detection.",
    fullDescription:
      "Designed and developed a web-based AI proctoring system capable of detecting cheating-related behaviors during laboratory examinations using real-time monitoring and machine learning technologies. Led full-stack development using React.js, Bootstrap, Flask, and MySQL. Integrated WebRTC for live video streaming and MediaPipe for facial landmark and head-pose tracking. Fine-tuned a MobileNetV2-based convolutional neural network to classify cheating and non-cheating behaviors, achieving 96.85% accuracy, 0.97 precision, 0.96 recall, and a 0.968 F1-score. The project followed Agile methodology and received a 'Highly Acceptable' TAM evaluation from stakeholders.",
    category: "Capstone Project",
    year: "2025",
    role: "Lead Full-Stack & AI Developer",
    image: "",
    tags: [
      "Flask",
      "React",
      "MySQL",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "MobileNetV2",
      "Machine Learning",
      "WebRTC",
    ],
    github: "https://github.com/Gwenn01/ProctorVision-Capstone-Project",
    live: "",
    featured: true,
    accentColor: "blue",
  },

  {
    id: "proj-8",
    title: "BERT-Based Citizen Feedback Decision Support System",
    shortDescription:
      "NLP-powered citizen feedback analysis and classification platform.",
    fullDescription:
      "Contributed to the development of an intelligent decision support system designed to classify and process citizen feedback using Natural Language Processing and machine learning techniques. Developed Flask REST APIs for feedback submission, retrieval, and administrative processing while fine-tuning multiple BERT variants for improved text classification performance. Collaborated on backend integration with admin dashboards and kiosk interfaces for seamless stakeholder interaction.",
    category: "Research Project",
    year: "2026",
    role: "Backend & AI Developer",
    image: "",
    tags: [
      "Flask",
      "React",
      "MySQL",
      "BERT",
      "NLP",
      "Machine Learning",
      "REST API",
    ],
    github:
      "https://github.com/Gwenn01/BERT_Based_Citizen_Feedback_Decision_Support_System",
    live: "",
    featured: true,
    accentColor: "cyan",
  },
  {
    id: "proj-9",
    title: "Barangay Finance Tracking System",
    shortDescription:
      "Backend-powered financial management system for automating barangay budget transactions and public transparency.",
    fullDescription:
      "Developed backend services for a barangay financial tracking and budget management platform designed for Barangay San Agustin, Iba, Zambales. The system automates barangay budget transactions, financial workflows, and public transparency reporting through a centralized web application.\n\nBuilt RESTful APIs using Flask and PostgreSQL for handling financial records, transaction processing, reporting workflows, and secure data management. Utilized Postman extensively for API testing, validation, and debugging throughout development.\n\nCollaborated with a frontend developer responsible for the user interface while focusing primarily on backend architecture, API integration, database management, and deployment workflows. The platform also includes a public-facing landing page to improve transparency by allowing citizens to view budget-related information and financial summaries.\n\nDeployed backend services using Render to ensure stable cloud hosting and API accessibility.",

    category: "Government Financial System",
    year: "2026",
    role: "Backend Developer",
    image: "",
    tags: [
      "Flask",
      "PostgreSQL",
      "REST API",
      "Postman",
      "Render",
      "Backend Development",
      "Financial Management",
    ],
    github: "https://github.com/Gwenn01/BarangayFinanceTrackBackendDeployment",
    live: "",
    featured: true,
    accentColor: "blue",
  },

  {
    id: "proj-10",
    title: "Automated Proposal Review and Processing System",
    shortDescription:
      "Workflow automation platform for proposal creation and approval.",
    fullDescription:
      "Designed and developed a backend proposal management system for automating proposal creation, submission, review, approval, and monitoring workflows for the Extension Office. Built scalable backend services using Django and PostgreSQL. Implemented workflow automation, role-based access control, proposal dashboards, and approval pipelines to reduce manual administrative processes and improve operational efficiency.",
    category: "Enterprise Academic System",
    year: "2026",
    role: "Backend Developer",
    image: "",
    tags: [
      "Django",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Workflow Automation",
    ],
    github: "https://github.com/Gwenn01/AutomatingProposalDocsProcessV2",
    live: "",
    featured: true,
    accentColor: "blue",
  },

  {
    id: "proj-11",
    title: "Nutrition & Fitness Tracking App",
    shortDescription:
      "Cross-platform calorie tracking and fitness monitoring application.",
    fullDescription:
      "Developed a nutrition and fitness tracking application focused on calorie management, workout logging, and health monitoring using React Native and Django. Integrated Gemini AI, barcode scanning, and image-based food recognition to automate nutritional analysis and food tracking. Implemented reusable nutrition records, fitness progress monitoring, and workout tracking features while utilizing SQLite for efficient mobile data management.",
    category: "Personal Project",
    year: "2026",
    role: "Mobile & Backend Developer",
    image: "",
    tags: [
      "React Native",
      "Django",
      "SQLite",
      "Gemini AI",
      "Barcode Scanning",
      "Image Recognition",
      "Fitness Tracking",
    ],
    github: "https://github.com/Gwenn01/Calories_Counting_App",
    live: "",
    featured: true,
    accentColor: "emerald",
  },
];
