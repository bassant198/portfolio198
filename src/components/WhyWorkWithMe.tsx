import React from 'react';
import {
  Code2,
  Smartphone,
  Sparkles,
  Cpu,
  TrendingUp,
  Users,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { WHY_WORK_ITEMS } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="why-me" className="py-24 relative bg-[#090D17] overflow-hidden">
      {/* Subtle backdrop lights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Developer Qualities</span>
          </div>
          <h2
            id="why-me-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Why Work With Me
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Core qualities and work principles I bring to frontend development and team collaboration.
          </p>
        </div>

        {/* 6 Core Qualities Grid */}
        <div
          id="why-me-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_WORK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className="p-6 rounded-2xl bg-[#0B0F1C] border border-slate-800/80 hover:border-violet-500/30 transition-all duration-200 hover:-translate-y-1 relative text-left group"
            >
              {/* Header with Icon and Sequential indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#12182B] border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getQualityIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Collaboration Statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400">
            Committed to reliable communication, continuous learning, and writing clean, maintainable frontend code for modern web applications.
          </p>
        </div>
      </div>
    </section>
  );
};
