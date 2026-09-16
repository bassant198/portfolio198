import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Code2,
  CheckCircle2,
  Smartphone,
  Monitor,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [accentColor, setAccentColor] = useState<'violet' | 'cyan' | 'emerald'>('violet');
  const [count, setCount] = useState<number>(3);
  const [activeScreenMode, setActiveScreenMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs sm:text-sm text-violet-300 font-medium mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Remote & International Roles</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 mb-6">
              <span className="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
                Hi, I'm
              </span>
              <h1
                id="hero-developer-name"
                className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-none"
              >
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex items-center gap-3 pt-2">
                <span
                  id="hero-developer-title"
                  className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent"
                >
                  {PERSONAL_INFO.role}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-view-work"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-950/60 border border-violet-400/30 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D111D] hover:bg-slate-800/80 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 border border-slate-700/80 hover:border-violet-500/50"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Recruiter Quick Information & Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/70 w-full text-slate-400 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="h-4 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-4">
                <a
                  id="hero-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-1.5 hover:text-violet-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono">github.com/bassant198</span>
                </a>
                <a
                  id="hero-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-1.5 hover:text-violet-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer UI / Code Showcase Graphic */}
          <div className="lg:col-span-5 relative">
            {/* Outer Decorative Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600/30 to-cyan-500/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />

            {/* Modern Developer IDE / Showcase Window */}
            <div
              id="hero-interactive-showcase"
              className="relative rounded-2xl bg-[#0B0F19] border border-violet-900/40 shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080B13] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-violet-400" />
                    FrontendDeveloper.tsx
                  </span>
                </div>

                {/* View Tabs */}
                <div className="flex items-center bg-[#0D1220] rounded-lg p-0.5 border border-slate-800">
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === 'preview'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    UI Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                      activeTab === 'code'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    React Code
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-5">
                {activeTab === 'preview' ? (
                  <div className="space-y-4">
                    {/* Viewport Simulation Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Device Mode:</span>
                        <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          <button
                            type="button"
                            onClick={() => setActiveScreenMode('desktop')}
                            className={`p-1 rounded ${activeScreenMode === 'desktop' ? 'text-violet-400 bg-slate-800' : 'text-slate-500'}`}
                            title="Desktop layout"
                          >
                            <Monitor className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveScreenMode('mobile')}
                            className={`p-1 rounded ${activeScreenMode === 'mobile' ? 'text-violet-400 bg-slate-800' : 'text-slate-500'}`}
                            title="Mobile layout"
                          >
                            <Smartphone className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500">Theme:</span>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => setAccentColor('violet')}
                            className={`w-3 h-3 rounded-full bg-violet-500 transition-transform ${accentColor === 'violet' ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                            title="Violet Accent"
                          />
                          <button
                            type="button"
                            onClick={() => setAccentColor('cyan')}
                            className={`w-3 h-3 rounded-full bg-cyan-400 transition-transform ${accentColor === 'cyan' ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                            title="Cyan Accent"
                          />
                          <button
                            type="button"
                            onClick={() => setAccentColor('emerald')}
                            className={`w-3 h-3 rounded-full bg-emerald-400 transition-transform ${accentColor === 'emerald' ? 'ring-2 ring-white scale-110' : 'opacity-60'}`}
                            title="Emerald Accent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Live Interactive UI Widget */}
                    <div
                      className={`rounded-xl border transition-all duration-300 p-4 ${
                        activeScreenMode === 'mobile'
                          ? 'max-w-[280px] mx-auto bg-slate-900/90 border-violet-500/40'
                          : 'w-full bg-[#0D1222]/90 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
                              accentColor === 'violet'
                                ? 'bg-violet-600'
                                : accentColor === 'cyan'
                                ? 'bg-cyan-600'
                                : 'bg-emerald-600'
                            }`}
                          >
                            BO
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">Bassant Osama</div>
                            <div className="text-[10px] text-slate-400">Frontend Developer</div>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-950/70 text-violet-300 border border-violet-500/30 font-medium">
                          React.js
                        </span>
                      </div>

                      {/* Interactive Component Features */}
                      <div className="space-y-2.5 my-3">
                        <div className="bg-[#080B14] p-2.5 rounded-lg border border-slate-800/80">
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1.5">
                            <span>Component State Counter</span>
                            <span className="font-mono text-violet-300">{count} items</span>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => setCount((c) => Math.max(1, c - 1))}
                              className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-xs rounded text-slate-200 transition-colors"
                            >
                              - Remove
                            </button>
                            <button
                              type="button"
                              onClick={() => setCount((c) => c + 1)}
                              className={`px-2 py-1 text-xs rounded text-white font-medium transition-colors ${
                                accentColor === 'violet'
                                  ? 'bg-violet-600 hover:bg-violet-500'
                                  : accentColor === 'cyan'
                                  ? 'bg-cyan-600 hover:bg-cyan-500'
                                  : 'bg-emerald-600 hover:bg-emerald-500'
                              }`}
                            >
                              + Add State
                            </button>
                          </div>
                        </div>

                        {/* Badges preview: realistic developer information */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-violet-950/70 text-violet-300 border border-violet-500/30">
                            React.js
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            JavaScript ES6+
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30">
                            Responsive Design
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">
                            Reusable Components
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700">
                            Clean Code
                          </span>
                        </div>
                      </div>

                      {/* Realistic developer-oriented footer */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 text-violet-300">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Clean Code & Components
                        </span>
                        <span>Responsive UI</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Clean React.js Code View */
                  <div className="font-mono text-xs text-slate-300 bg-[#080B14] p-4 rounded-xl border border-slate-800/80 overflow-x-auto">
                    <pre className="leading-relaxed">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-yellow-200">FrontendDeveloper</span> = () =&gt; &#123;
                        {'\n'}  <span className="text-purple-400">const</span> [state] = <span className="text-blue-400">useState</span>(&#123;
                        {'\n'}    <span className="text-cyan-300">name</span>: <span className="text-emerald-300">'Bassant Osama'</span>,
                        {'\n'}    <span className="text-cyan-300">role</span>: <span className="text-emerald-300">'Frontend Developer'</span>,
                        {'\n'}    <span className="text-cyan-300">location</span>: <span className="text-emerald-300">'Shebin El-Kom, Monufia, Egypt'</span>,
                        {'\n'}    <span className="text-cyan-300">skills</span>: [
                        {'\n'}      <span className="text-emerald-300">'HTML5'</span>, <span className="text-emerald-300">'CSS3'</span>,
                        {'\n'}      <span className="text-emerald-300">'JavaScript'</span>,
                        {'\n'}      <span className="text-emerald-300">'React.js'</span>, <span className="text-emerald-300">'Git/GitHub'</span>
                        {'\n'}    ],
                        {'\n'}    <span className="text-cyan-300">cleanCode</span>: <span className="text-amber-400">true</span>,
                        {'\n'}    <span className="text-cyan-300">responsiveDesign</span>: <span className="text-amber-400">true</span>
                        {'\n'}  &#125;);
                        {'\n\n'}  <span className="text-purple-400">return</span> &lt;<span className="text-violet-400">ResponsiveInterface</span> &#123;...state&#125; /&gt;;
                        {'\n'}&#125;;
                      </code>
                    </pre>
                  </div>
                )}

                {/* Bottom Tech Bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Responsive Frontend</span>
                  </div>
                  <span className="font-mono text-[11px] text-violet-400">React.js & Reusable Components</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Highlights */}
            <div className="absolute -bottom-4 -left-4 bg-[#0F172A] border border-violet-500/40 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2 text-xs font-medium text-slate-200 hidden sm:flex">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Reusable Components</span>
            </div>

            <div className="absolute -top-3 -right-3 bg-[#0F172A] border border-cyan-500/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2 text-xs font-medium text-slate-200 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Responsive Design</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
