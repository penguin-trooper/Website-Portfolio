export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface QuickInfo {
  label: string;
  value: string;
}
