export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'software' | 'frontend' | 'design' | 'ai';
  role: string;
  tools: string[];
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  metricsOrOutcome: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  experience: string;
  description: string;
  tagline: string;
  highlightCodeOrWorkflow: string;
}
