export interface Skill {
  id: string;
  name: string;
  category: 'core' | 'framework' | 'workflow' | 'practices';
  description: string;
  badge: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  statusLabel: string;
  isRealProject?: boolean;
  note: string;
  imagePlaceholder: {
    title: string;
    gradient: string;
  };
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export type ProjectPlaceholder = ProjectItem;

export interface WhyWorkItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
