import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#05070E] border-t border-slate-900 py-12 relative text-slate-400 text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-bold text-white text-base block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-violet-400 font-medium">
                {PERSONAL_INFO.role} • {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-[#090D18] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-[#090D18] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-[#090D18] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4 text-violet-400" />
            </a>

            <button
              type="button"
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B0F1C] hover:bg-violet-600/20 text-slate-300 hover:text-violet-300 border border-slate-800 hover:border-violet-500/40 transition-colors text-xs font-medium cursor-pointer"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p id="footer-copyright">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Built with React.js & Modern CSS</span>
            <span>•</span>
            <span className="text-violet-400/80">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
