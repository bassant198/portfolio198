import { Skill, ProjectPlaceholder, WhyWorkItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bassant Osama',
  role: 'Frontend Developer',
  juniorRoleTitle: 'Junior Frontend Developer',
  location: 'Shebin El-Kom, Monufia, Egypt',
  phone: '01065804887',
  formattedPhone: '+20 106 580 4887',
  phoneTel: 'tel:+201065804887',
  whatsappUrl: 'https://wa.me/201065804887',
  email: 'bassanteldofy52225@gmail.com',
  github: 'https://github.com/bassant198',
  linkedin: 'https://www.linkedin.com/in/bassant-eldofy-b2857924b/',
  bioShort:
    'I build modern, responsive, and user-focused web experiences with clean code and attention to detail.',
  aboutDetailed:
    'Hi! I’m Bassant Osama, a Frontend Developer based in Shebin El-Kom, Monufia, Egypt. I enjoy turning ideas and designs into responsive, interactive, and user-friendly websites. I work with HTML5, CSS3, JavaScript, React.js, Git, and GitHub, and I focus on writing clean, readable code while creating smooth and consistent experiences across different screen sizes. I approach every project with attention to detail, problem-solving, and a strong focus on responsive design and usability.',
  availability: 'Available for Remote & International Roles',
  availabilityShort: 'Available for Remote Opportunities',
};

export const SKILLS_LIST: Skill[] = [
  {
    id: 'skill-react',
    name: 'React.js',
    category: 'framework',
    badge: 'Framework',
    description: 'Building modular user interfaces with component-driven development and declarative state.',
    items: ['Components', 'Props', 'State', 'Hooks', 'Reusable UI'],
  },
  {
    id: 'skill-js',
    name: 'JavaScript',
    category: 'core',
    badge: 'Core Language',
    description: 'Writing functional logic and interactive behavior using modern ECMAScript standards.',
    items: ['ES6+', 'DOM Manipulation', 'Events', 'Array Methods', 'Functions', 'Objects'],
  },
  {
    id: 'skill-html5',
    name: 'HTML5',
    category: 'core',
    badge: 'Markup',
    description: 'Structuring clean, standards-compliant web documents with accessible tags.',
    items: ['Semantic HTML', 'Forms', 'Accessible structure'],
  },
  {
    id: 'skill-css3',
    name: 'CSS3',
    category: 'core',
    badge: 'Styling',
    description: 'Designing adaptive page layouts, visual styling, and smooth element transitions.',
    items: ['Flexbox', 'CSS Grid', 'Responsive Design', 'Animations', 'Transitions'],
  },
  {
    id: 'skill-clean-code',
    name: 'Clean & Reusable Code',
    category: 'practices',
    badge: 'Architecture',
    description: 'Organizing code into structured, maintainable modules with consistent conventions.',
    items: ['Reusable Components', 'Readable Structure', 'Maintainable Code'],
  },
  {
    id: 'skill-git',
    name: 'Git',
    category: 'workflow',
    badge: 'Version Control',
    description: 'Tracking code history, isolating features in branches, and managing revisions.',
    items: ['Version Control', 'Branching', 'Commits'],
  },
  {
    id: 'skill-github',
    name: 'GitHub',
    category: 'workflow',
    badge: 'Workflow',
    description: 'Managing remote repositories, organizing project files, and sharing source code.',
    items: ['Repositories', 'Project Hosting', 'Git Workflow'],
  },
  {
    id: 'skill-devtools',
    name: 'Browser DevTools',
    category: 'workflow',
    badge: 'Testing & Debugging',
    description: 'Inspecting DOM trees, styling rules, and verifying responsive layouts on viewports.',
    items: ['Debugging', 'Responsive Testing', 'Inspecting HTML/CSS'],
  },
];

export const PROJECTS_PLACEHOLDERS: ProjectPlaceholder[] = [
  {
    id: 'project-mamacita-studio',
    title: 'MamaCita Studio',
    category: 'Dance & Fitness Studio Website',
    statusLabel: 'Completed',
    isRealProject: true,
    note: 'A modern responsive website developed for MamaCita Studio, a women’s dance and fitness studio. The website presents the studio’s classes, schedule, services, and contact information through a clean and engaging user interface designed for an easy browsing experience.',
    imagePlaceholder: {
      title: 'MamaCita Studio • Dance & Fitness',
      gradient: 'from-fuchsia-950/70 via-purple-950/80 to-slate-900/90',
    },
    technologies: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
    ],
    liveDemoUrl: 'https://mama-cita-seven.vercel.app/',
    githubUrl: 'https://github.com/bassant198',
  },
  {
    id: 'project-slot-2',
    title: 'Project will be added',
    category: 'JavaScript',
    statusLabel: 'Projects Coming Soon',
    isRealProject: false,
    note: 'This card is ready to showcase an interactive web application built with vanilla JavaScript, DOM events, and modern CSS.',
    imagePlaceholder: {
      title: 'JavaScript Application Slot',
      gradient: 'from-cyan-950/60 via-slate-900/80 to-violet-950/50',
    },
    technologies: ['JavaScript', 'DOM Manipulation', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/bassant198',
  },
  {
    id: 'project-slot-3',
    title: 'Project will be added',
    category: 'Responsive UI',
    statusLabel: 'Projects Coming Soon',
    isRealProject: false,
    note: 'This card is ready to showcase a mobile-first responsive landing experience with CSS Grid, Flexbox, and semantic HTML5.',
    imagePlaceholder: {
      title: 'Responsive UI Slot',
      gradient: 'from-purple-950/60 via-slate-900/80 to-cyan-950/50',
    },
    technologies: ['HTML5', 'CSS3', 'Flexbox / Grid', 'Responsive Design'],
    githubUrl: 'https://github.com/bassant198',
  },
  {
    id: 'project-slot-4',
    title: 'Project will be added',
    category: 'React.js',
    statusLabel: 'Projects Coming Soon',
    isRealProject: false,
    note: 'This card is ready to showcase a component-based frontend interface with modular CSS and accessible controls.',
    imagePlaceholder: {
      title: 'Frontend Interface Slot',
      gradient: 'from-violet-950/60 via-indigo-950/50 to-slate-900/80',
    },
    technologies: ['React.js', 'Clean Code', 'Responsive UI', 'Git/GitHub'],
    githubUrl: 'https://github.com/bassant198',
  },
];

export const WHY_WORK_ITEMS: WhyWorkItem[] = [
  {
    id: 'why-clean-code',
    title: 'Clean & Readable Code',
    description:
      'Writing structured, semantic, and modular frontend code that is easy to read, understand, and maintain.',
    iconName: 'Code2',
  },
  {
    id: 'why-responsive',
    title: 'Responsive Design',
    description:
      'Building fluid layouts that adjust smoothly to different screen sizes, from mobile phones to desktop displays.',
    iconName: 'Smartphone',
  },
  {
    id: 'why-attention-detail',
    title: 'Attention to Detail',
    description:
      'Caring about accurate layout implementation, clean typography, consistent spacing, and smooth interactions.',
    iconName: 'Sparkles',
  },
  {
    id: 'why-problem-solving',
    title: 'Problem Solving',
    description:
      'Breaking down layout and UI challenges methodically to find effective and clean solutions.',
    iconName: 'Cpu',
  },
  {
    id: 'why-continuous-learning',
    title: 'Continuous Learning',
    description:
      'Actively practicing, exploring modern web standards, and expanding frontend skills every day.',
    iconName: 'TrendingUp',
  },
  {
    id: 'why-user-focused',
    title: 'User-Focused Development',
    description:
      'Creating intuitive interfaces with clear visual feedback and accessible navigation.',
    iconName: 'Users',
  },
];
