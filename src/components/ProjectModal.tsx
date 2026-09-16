import React from 'react';
import { X, Github, Layers, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { ProjectPlaceholder } from '../types';

interface ProjectModalProps {
  project: ProjectPlaceholder | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id={`modal-content-${project.id}`}
        className="bg-[#0B0F1C] border border-violet-900/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-button"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-violet-400 mb-2">
          <Layers className="w-4 h-4" />
          <span>{project.category} Showcase Slot</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>

        {/* Mockup Banner Graphic */}
        <div
          className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.imagePlaceholder.gradient} border border-slate-800 flex flex-col items-center justify-center p-5 text-center my-4 relative overflow-hidden`}
        >
          <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-400/30 flex items-center justify-center text-white mb-2 shadow-lg">
            <Sparkles className="w-5 h-5 text-violet-300" />
          </div>
          <span className="text-sm font-semibold text-white tracking-wide">
            {project.imagePlaceholder.title}
          </span>
          <span className="text-xs text-violet-300/80 mt-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {project.statusLabel}
          </span>
        </div>

        {/* Note */}
        <div className="space-y-4 text-sm text-slate-300 mb-6">
          <p className="leading-relaxed text-slate-300">{project.note}</p>

          <div className="pt-3 border-t border-slate-800/80">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Associated Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-900 text-violet-300 text-xs rounded-lg border border-slate-800 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-4 h-4 text-violet-400" />
            <span>Project slot reserved for upcoming build</span>
          </div>

          <a
            id="modal-github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors shadow-md shadow-violet-950/50"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
