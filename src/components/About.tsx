import React, { useState } from 'react';
import {
  User,
  MapPin,
  Mail,
  Layout,
  Code2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Copy,
  Check,
  Wrench,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const coreFocusAreas = [
    {
      id: 'focus-react',
      title: 'React.js Development',
      description:
        'Building component-based interfaces using React.js, props, state, hooks, and clean code organization.',
      icon: Layout,
      color: 'text-violet-400',
      border: 'border-violet-500/20',
      bg: 'bg-violet-950/20',
    },
    {
      id: 'focus-responsive',
      title: 'Responsive Web Design',
      description:
        'Creating mobile-first responsive layouts with CSS3 Flexbox and Grid that adapt smoothly across screen sizes.',
      icon: Layers,
      color: 'text-cyan-400',
      border: 'border-cyan-500/20',
      bg: 'bg-cyan-950/20',
    },
    {
      id: 'focus-clean-code',
      title: 'Clean & Readable Code',
      description:
        'Writing semantic HTML5, well-structured JavaScript, and maintainable styles with Git version control.',
      icon: Code2,
      color: 'text-indigo-400',
      border: 'border-indigo-500/20',
      bg: 'bg-indigo-950/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070A12]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Frontend Developer turning ideas into responsive websites
          </h2>
          <p className="mt-3 text-slate-400 max-w-3xl text-base sm:text-lg">
            Dedicated to clean code, responsive design, and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0B0F1A] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 leading-relaxed shadow-xl">
              <p className="text-base sm:text-lg font-normal text-slate-200">
                Hi! I’m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Frontend Developer based in{' '}
                <span className="text-violet-300 font-medium">Shebin El-Kom, Monufia, Egypt</span>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I enjoy turning ideas and designs into responsive, interactive, and user-friendly websites. I work with HTML5, CSS3, JavaScript, React.js, Git, and GitHub, and I focus on writing clean, readable code while creating smooth and consistent experiences across different screen sizes.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I approach every project with attention to detail, problem-solving, and a strong focus on responsive design and usability.
              </p>

              {/* Developer Mindset Highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>React.js Components & State</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Responsive Web Design</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Semantic HTML5 & CSS3</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Git Version Control & GitHub</span>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {coreFocusAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    id={area.id}
                    className={`rounded-xl p-4 border ${area.border} ${area.bg} backdrop-blur-sm hover:border-violet-500/40 transition-colors`}
                  >
                    <IconComponent className={`w-6 h-6 ${area.color} mb-2.5`} />
                    <h3 className="text-sm font-semibold text-white mb-1.5">{area.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Facts / Recruiter Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div
              id="about-recruiter-card"
              className="bg-[#0B0F1A] border border-violet-900/30 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">Professional Profile</h3>
                  <p className="text-xs text-slate-400">Junior Developer Overview</p>
                </div>
                <span className="px-2.5 py-1 bg-violet-950/70 text-violet-300 text-xs font-semibold rounded-full border border-violet-500/30">
                  Open to Work
                </span>
              </div>

              {/* Detail Items */}
              <div className="py-5 space-y-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                    Role
                  </span>
                  <span className="text-white font-semibold text-right">
                    Junior Frontend Developer
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    Location
                  </span>
                  <span className="text-slate-200 text-right text-xs sm:text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                    Availability
                  </span>
                  <span className="text-emerald-300 font-medium text-right text-xs sm:text-sm">
                    Remote & International Opportunities
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                    Core Technologies
                  </span>
                  <span className="text-slate-200 text-right text-xs sm:text-sm font-mono">
                    React.js • JavaScript • HTML5 • CSS3
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    Tools
                  </span>
                  <span className="text-slate-200 text-right text-xs sm:text-sm font-mono">
                    Git • GitHub • Browser DevTools
                  </span>
                </div>
              </div>

              {/* Direct Quick Contact Actions */}
              <div className="pt-5 border-t border-slate-800 space-y-2.5">
                <button
                  type="button"
                  id="about-copy-email-button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-colors text-xs"
                >
                  <span className="font-mono text-slate-300 truncate mr-2">
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="inline-flex items-center gap-1 text-violet-400 shrink-0 font-medium">
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </button>

                <a
                  id="about-direct-contact-cta"
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-colors shadow-md shadow-violet-950/40"
                >
                  <span>Discuss an Opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
