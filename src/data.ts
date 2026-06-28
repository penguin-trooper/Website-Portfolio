import { Experience, NavItem, Project, QuickInfo, SkillCategory } from "./types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const quickInfo: QuickInfo[] = [
  { label: "University", value: "Universiti Malaya" },
  { label: "Degree", value: "Bachelor of Computer Science (Software Engineering)" },
  { label: "Foundation", value: "Physical Science, CGPA 3.89" },
  { label: "Location", value: "Petaling Jaya, Kuala Lumpur" },
  { label: "Internship Target", value: "Aug 2026 - Feb 2027" },
  { label: "Email", value: "akmalhakim0522@gmail.com" },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    name: "Backend & Databases",
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "Oracle Database", "Oracle APEX", "Bootstrap"],
  },
  {
    name: "ML & Data",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "SciPy"],
  },
  {
    name: "Testing",
    skills: ["Selenium WebDriver", "Appium", "Test Case Design", "GUI Testing"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Android Studio", "VSCode", "Jupyter Notebook", "Docker", "Codex", "Claude Code"],
  },
  {
    name: "Productivity",
    skills: ["Microsoft Office", "Google Workspace", "Canva", "Figma", "CapCut", "Lightroom", "Snapseed", "Picsart", "VSCO"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Financial Planning System",
    description:
      "Full-stack financial planning web app with secure OTP-based multi-step registration, Google OAuth 2.0, session management, budgeting tools, goal tracking, and ROI calculations.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
  },
  {
    id: "2",
    title: "Red Flag Detector",
    description:
      "Machine learning dating-profile detector using NLP, YOLOv8 visual analysis, and SMOTE-trained tabular classification, with a Chrome extension powered by TensorFlow.js inference.",
    techStack: ["Python", "Scikit-learn", "YOLOv8", "TensorFlow"],
  },
  {
    id: "3",
    title: "Drone4Dengue Test Automation Framework",
    description:
      "Automated functional testing framework for Drone4Dengue web and mobile platforms, using Selenium and Appium to execute black-box test cases and identify defects.",
    techStack: ["Selenium", "Appium", "Automated Testing", "Black-Box Testing"],
  },
  {
    id: "4",
    title: "UM Visa Mate",
    description:
      "Native Android app built in Kotlin for university visa management with role-based student, faculty, and admin portals, document uploads, payment processing, and multi-stage tracking.",
    techStack: ["Kotlin", "Android Studio", "XML Layouts"],
  },
  {
    id: "5",
    title: "Aisdankopi DBMS",
    description:
      "3NF relational database for a cafe built in Oracle APEX, translating business workflows into ERDs and advanced queries for sales reports and stock alerts.",
    techStack: ["Oracle APEX", "SQL"],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    year: "Nov 2025 - May 2026",
    title: "Director of Warisan Run",
    organization: "Warisan Run 2026",
    description:
      "Directed a 45-member committee for end-to-end planning and execution, secured 10 sponsorship partnerships, and achieved 260 participant registrations.",
  },
  {
    id: "2",
    year: "Aug 2025 - Nov 2025",
    title: "Facilitator",
    organization: "Minggu Haluan Siswa Universiti Malaya",
    description:
      "Led an orientation program involving 400+ undergraduate freshies and managed registration, welfare, program activities, and the closing ceremony.",
  },
  {
    id: "3",
    year: "May 2026",
    title: "Technical",
    organization: "UM Hackathon 2026",
    description:
      "Managed livestream, participant communications, and developed the registration website for a national-scale competition involving 200+ teams and a RM40,000 prize pool.",
  },
  {
    id: "4",
    year: "Jan 2026",
    title: "Technical",
    organization: "Gelanggang Seni",
    description:
      "Handled audio-visual and lighting for an international documentation project recognized by UNESCO and HEP UM, ensuring smooth performances and recordings.",
  },
  {
    id: "5",
    year: "June 2025",
    title: "Head of Department, Sales Booth",
    organization: "Unique-X",
    description:
      "Led a 9-member team in planning and executing a cultural event booth sale and secured 14 vendors through promotion and outreach.",
  },
  {
    id: "6",
    year: "May 2025",
    title: "Head of Department, Safety and Welfare",
    organization: "Charity Run",
    description:
      "Led a 6-member team handling event safety, emergency protocols, venue coordination, participant registration, and welfare.",
  },
];
