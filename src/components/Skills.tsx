import React, { useState } from 'react';
import {
  Code2,
  Layout,
  GitBranch,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  FileCode,
  Github,
  Check,
} from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'framework', label: 'React.js' },
    { id: 'core', label: 'Core Languages' },
    { id: 'practices', label: 'Architecture & UI' },
    { id: 'workflow', label: 'Workflow & Tools' },
  ];

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_LIST
      : SKILLS_LIST.filter((skill) => skill.category === selectedCategory);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'skill-react':
        return <Layout className="w-6 h-6 text-violet-400" />;
      case 'skill-js':
        return <FileCode className="w-6 h-6 text-amber-400" />;
      case 'skill-html5':
        return <Code2 className="w-6 h-6 text-orange-400" />;
      case 'skill-css3':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'skill-clean-code':
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'skill-git':
        return <GitBranch className="w-6 h-6 text-rose-400" />;
      case 'skill-github':
        return <Github className="w-6 h-6 text-violet-400" />;
      case 'skill-devtools':
        return <Terminal className="w-6 h-6 text-cyan-300" />;
      default:
        return <Code2 className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#090D17]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frontend Toolkit</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technical Skills & Tools
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core technologies and tools I use to build modern, responsive, and maintainable frontend interfaces.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          id="skills-category-filters"
          className="flex flex-wrap gap-2 pb-8 border-b border-slate-800/80 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-skills-${cat.id}`}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-950/50 border border-violet-400/40'
                  : 'bg-[#0E1424] text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={skill.id}
              onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
              className={`group rounded-2xl p-5 bg-[#0B0F1C] border transition-all duration-200 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                selectedSkill?.id === skill.id
                  ? 'border-violet-500 bg-violet-950/20 shadow-xl shadow-violet-950/30'
                  : 'border-slate-800/90 hover:border-violet-500/40 hover:bg-[#0D1324]'
              }`}
            >
              <div>
                {/* Top Row: Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#12182B] border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.id)}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/60 font-mono">
                    {skill.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Items List (Clear, accessible skill points without percentage bars) */}
              <div className="pt-3 border-t border-slate-800/70 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Key Concepts:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item, index) => (
                    <span
                      key={index}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[#12182B] text-slate-300 border border-slate-800 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Highlight Toast if clicked */}
        {selectedSkill && (
          <div
            id="skill-detail-toast"
            className="mt-8 p-4 rounded-xl bg-violet-950/40 border border-violet-500/40 flex items-center justify-between text-xs sm:text-sm text-slate-200 animate-in fade-in"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
              <span>
                <strong className="text-white">{selectedSkill.name}:</strong> {selectedSkill.description}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="text-slate-400 hover:text-white px-2 py-1"
            >
              Close
            </button>
          </div>
        )}

        {/* Code Quality & Development Approach Callout */}
        <div
          id="code-quality-section"
          className="mt-14 rounded-2xl bg-gradient-to-r from-violet-950/30 via-[#0B0F1A] to-cyan-950/20 border border-violet-900/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-left">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Code Quality & Development Approach
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              I focus on semantic HTML, reusable React components, responsive layouts, readable CSS, and maintainable code.
            </p>
          </div>
          <a
            id="skills-cta-projects"
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-md shadow-violet-950/50"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};
