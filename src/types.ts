export interface Project {
  id: string;
  title: string;
  description: string[];
  teamSize: number;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
}
