import { Skill, ProjectPlaceholder, WhyWorkItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bassant Osama',
  role: 'Frontend Developer',
  location: 'Shebin El-Kom, Monufia, Egypt',
  phone: '01065804887',
  phoneTel: 'tel:+201065804887',
  whatsappUrl: 'https://wa.me/201065804887',
  email: 'bassanteldofy52225@gmail.com',
  github: 'https://github.com/bassant198',
  linkedin: 'https://www.linkedin.com/in/bassant-eldofy-b2857924b/',
  bio: 'Junior Frontend Developer focused on building clean, responsive, and user-friendly web applications using React.js, JavaScript, HTML5, and CSS3.',
  bioShort: 'I build modern, responsive, and user-focused web experiences with clean code and attention to detail.',
  fullBio: `Hi! I’m Bassant Osama, a Frontend Developer based in Shebin El-Kom, Monufia, Egypt.

I enjoy turning ideas and designs into responsive, interactive, and user-friendly websites. I work with HTML5, CSS3, JavaScript, React.js, Git, and GitHub, and I focus on writing clean, readable code while creating smooth and consistent experiences across different screen sizes.

I approach every project with attention to detail, problem-solving, and a strong focus on responsive design and usability.`,
  availability: 'Available for Remote Opportunities',
};

export const SKILLS_DATA: Skill[] = [
  {
    id: 'skill-react',
    name: 'React.js',
    category: 'framework',
    badge: 'Component-Driven UI',
    description: 'Developing interactive user interfaces using reusable components, state, and hooks.',
    items: ['Components', 'Props', 'State', 'Hooks', 'Reusable UI'],
  },
  {
    id: 'skill-javascript',
    name: 'JavaScript (ES6+)',
    category: 'core',
    badge: 'Modern Core',
    description: 'Writing modern JavaScript with ES6+ syntax, functions, array methods, and DOM manipulation.',
    items: ['ES6+', 'DOM Manipulation', 'Events', 'Array Methods', 'Functions', 'Objects'],
  },
  {
    id: 'skill-html5',
    name: 'HTML5',
    category: 'core',
    badge: 'Semantic Structure',
    description: 'Structuring clean web layouts with semantic elements and accessible content hierarchy.',
    items: ['Semantic HTML', 'Forms', 'Accessible structure'],
  },
  {
    id: 'skill-css3',
    name: 'CSS3 & Responsive Design',
    category: 'core',
    badge: 'Modern Layouts',
    description: 'Crafting fluid layouts and visual styling with modern Flexbox, CSS Grid, and media queries.',
    items: ['Flexbox', 'CSS Grid', 'Responsive Design', 'Animations', 'Transitions'],
  },
  {
    id: 'skill-clean-code',
    name: 'Clean & Reusable Code',
    category: 'practices',
    badge: 'Code Quality',
    description: 'Writing maintainable frontend code using reusable components and clean architecture principles.',
    items: ['Reusable Components', 'Readable Structure', 'Maintainable Code'],
  },
  {
    id: 'skill-git',
    name: 'Git',
    category: 'workflow',
    badge: 'Version Control',
    description: 'Tracking code changes, managing branches, and handling commits cleanly.',
    items: ['Version Control', 'Branching', 'Commits'],
  },
  {
    id: 'skill-github',
    name: 'GitHub',
    category: 'workflow',
    badge: 'Repository Management',
    description: 'Hosting projects, managing remote repositories, and organizing frontend workflows.',
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

export const SKILLS_LIST = SKILLS_DATA;

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
    id: 'project-nova-ecommerce',
    title: 'NOVA E-Commerce',
    category: 'E-Commerce Frontend',
    statusLabel: 'Completed',
    isRealProject: true,
    note: 'A modern responsive e-commerce frontend built with React.js, featuring product browsing, search, filtering, sorting, product details, shopping cart functionality, and a responsive checkout experience.',
    imagePlaceholder: {
      title: 'NOVA E-Commerce • Storefront UI',
      gradient: 'from-cyan-950/70 via-indigo-950/80 to-slate-900/90',
    },
    technologies: [
      'React.js',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Vite',
      'LocalStorage',
      'Responsive Web Design',
    ],
    liveDemoUrl: 'https://nova-e-commerce-ten.vercel.app/',
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
      'Breaking down user interface requirements into logical, modular components and solving layout or logic issues effectively.',
    iconName: 'Cpu',
  },
  {
    id: 'why-continuous-learning',
    title: 'Continuous Learning',
    description:
      'Actively exploring modern web development practices, refining frontend skills, and keeping code standards up to date.',
    iconName: 'TrendingUp',
  },
  {
    id: 'why-user-focused',
    title: 'User-Focused Development',
    description:
      'Prioritizing accessible navigation, readable layouts, and intuitive experiences for everyday users across all devices.',
    iconName: 'Users',
  },
];
