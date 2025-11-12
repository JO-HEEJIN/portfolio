// Portfolio Data Types

export type ProjectCategory =
  | 'AR_VR'
  | 'AI_ML'
  | 'WEB'
  | 'HEALTHCARE'
  | 'BLOCKCHAIN';

export interface TechStack {
  name: string;
  icon: string;
  url?: string;
}

export interface Metric {
  label: string;
  value: string;
  unit?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  liveDemo?: string;
  githubUrl?: string;
  highlights: string[];
  techStack: TechStack[];
  metrics?: Metric[];
  awards?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  highlights: string[];
  technologies: string[];
  current: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: number;
  status: string;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}

export interface PortfolioData {
  projects: Project[];
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  socialLinks: SocialLink[];
}
