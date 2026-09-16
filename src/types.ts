export interface Skill {
  id: string;
  name: string;
  category: 'core' | 'framework' | 'workflow' | 'practices';
  description: string;
  badge: string;
  items: string[];
}

export interface ProjectPlaceholder {
  id: string;
  title: string;
  category: string;
  statusLabel: string;
  note: string;
  imagePlaceholder: {
    title: string;
    gradient: string;
  };
  technologies: string[];
  githubUrl: string;
}

export interface WhyWorkItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
