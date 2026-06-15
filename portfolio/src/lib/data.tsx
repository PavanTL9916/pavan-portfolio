import {
  Code2,
  Globe,
  Wrench,
  Cpu,
  Mail,
  type LucideProps,
} from "lucide-react";
import { forwardRef } from "react";

// ─── Custom Brand Icons (removed from lucide-react) ───
export const GithubIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
);
GithubIcon.displayName = "GithubIcon";

export const LinkedinIcon = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
);
LinkedinIcon.displayName = "LinkedinIcon";

// ─── Personal Info ───
export const personalInfo = {
  name: "Pavan T L",
  title: "Software Engineer",
  subtitle: "B.E. in CS-ICB",
  tagline:
    "Building robust software solutions at the intersection of IoT, Cybersecurity, and Modern Web Development.",
  email: "pavantlpavantl40@gmail.com",
  github: "https://github.com/PavanTL9916",
  linkedin: "https://www.linkedin.com/in/pavan-t-l-360289280",
};

// ─── Navigation ───
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

// ─── Social Links ───
export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/PavanTL9916",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pavan-t-l-360289280",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:pavantlpavantl40@gmail.com",
    icon: Mail,
  },
];

// ─── About ───
export const aboutText = [
  "I'm a software engineer with a strong foundation in Computer Science and a deep interest in building impactful, real-world solutions. My experience spans IoT automation, cybersecurity, and full-stack web development — bringing together hardware and software to solve complex problems.",
  "I thrive on turning ideas into clean, functional systems — whether it's predicting agricultural threats with machine learning, automating embedded devices, or crafting polished user interfaces. I value clean code, thoughtful design, and continuous learning.",
  "Currently completing my B.E. in CS-ICB at Dayananda Sagar Academy of Technology and Management, I'm actively seeking opportunities to contribute to meaningful engineering teams.",
];

// ─── Skills ───
export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "C Programming", "Python", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Technologies",
    icon: Globe,
    skills: [
      "IoT Automation",
      "Cybersecurity",
      "Machine Learning",
      "Blockchain",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git / GitHub", "MySQL", "Linux", "Arduino IDE"],
  },
  {
    title: "Hardware",
    icon: Cpu,
    skills: ["Arduino", "ESP32", "Sensors & Actuators", "Circuit Design"],
  },
];

// ─── Projects ───
export const projects = [
  {
    title: "Smart Pest Prediction System",
    description:
      "An IoT and ML-powered system that predicts pest outbreaks in agricultural fields using real-time environmental sensor data. Features automated alerting and a web dashboard for farmers.",
    techStack: ["Python", "Machine Learning", "IoT", "ESP32", "Flask"],
    github: "https://github.com/PavanTL9916",
    demo: null,
    image: "/projects/pest-prediction.png",
  },
  {
    title: "Bus Ticket Booking System",
    description:
      "A full-stack web application enabling users to search routes, select seats, and book bus tickets online. Includes an admin panel for managing schedules and fleet operations.",
    techStack: ["Java", "HTML/CSS", "JavaScript", "MySQL"],
    github: "https://github.com/PavanTL9916",
    demo: null,
    image: "/projects/bus-booking.png",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive front-end clone of Netflix with dynamic content rendering, modern UI/UX patterns, and smooth user interactions. Built to demonstrate front-end engineering capabilities.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PavanTL9916",
    demo: null,
    image: "/projects/netflix-clone.png",
  },
  {
    title: "Supercars Website",
    description:
      "A visually polished showcase website for luxury supercars, featuring high-quality imagery, smooth animations, and responsive design across all devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/PavanTL9916",
    demo: null,
    image: "/projects/supercars.png",
  },
  {
    title: "ThreatLab – Mobile Security Analysis Platform",
    description:
      "A full-stack cybersecurity platform for Android application security assessment using APK static analysis, STRIDE threat modeling, OWASP MASVS compliance verification, and Frida-based dynamic analysis simulation. Features interactive threat visualization, security dashboards, and automated report generation for vulnerability assessment.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask",
      "JWT",
      "React Flow",
      "Recharts",
      "Tailwind CSS",
    ],
    github: "#",
    demo: null,
    image: "/projects/threatlab.png",
  },
  {
    title: "Token Launcher Platform",
    description:
      "A blockchain-based decentralized application that enables users to create and deploy custom cryptocurrency tokens through a simple web interface. The platform automates smart contract generation and deployment while integrating MetaMask for secure wallet authentication and transaction authorization.",
    techStack: [
      "React.js",
      "Node.js",
      "Solidity",
      "Ethereum",
      "Web3.js",
      "MetaMask",
    ],
    github: "#",
    demo: null,
    image: "/projects/token-launcher.png",
  },
];

// ─── Education ───
export const education = [
  {
    degree: "B.E. in Computer Science — ICB",
    institution: "Dayananda Sagar Academy of Technology and Management",
    location: "Bangalore, India",
    period: "2022 – 2026",
    cgpa: "8.71",
    highlights: [
      "Specialized in IoT, Cybersecurity, and Blockchain",
      "Active participation in technical workshops and hackathons",
      "Developed multiple real-world projects during coursework",
    ],
  },
];

// ─── Certifications ───
export const certifications = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2024",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2024",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Google / Coursera",
    date: "2024",
  },
  {
    title: "Java Programming",
    issuer: "HackerRank",
    date: "2023",
  },
  {
    title: "Blockchain Basics",
    issuer: "Coursera",
    date: "2024",
  },
];
