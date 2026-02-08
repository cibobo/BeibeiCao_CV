export interface ContactInfo {
  phone: string;
  email: string;
  birthDate: string;
  nationality: string;
}

export interface Experience {
  id: string;
  role: string;
  company?: string; // Not explicitly in PDF, but good for structure if needed
  context?: string; // e.g., "Zone Platform"
  period: string;
  description: string[]; // Bullet points
  subSections?: {
    title: string;
    items: string[];
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ToolGroup {
  category: string;
  tools: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface UILabels {
  profile: string;
  experience: string;
  education: string;
  skillsAndTools: string;
  programmingLanguages: string;
  devTools: string;
  coreCompetencies: string;
  languages: string;
  interests: string;
  copyright: string;
}

export interface ResumeData {
  id: string; // 'de' or 'en'
  name: string;
  title: string;
  profile: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  coreCompetencies: string[];
  languages: Language[];
  skills: SkillGroup[]; // Programming
  tools: ToolGroup[]; // Dev Tools
  interests: string[];
  ui: UILabels;
}