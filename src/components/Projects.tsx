import React, { useState } from 'react';
import {
  Briefcase,
  Github,
  Sparkles,
  ArrowUpRight,
  Info,
  Code2,
  Clock,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PROJECTS_PLACEHOLDERS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'React.js', label: 'React.js' },
    { id: 'JavaScript', label: 'JavaScript' },
    { id: 'Responsive UI', label: 'Responsive UI' },
  ];

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_PLACEHOLDERS
      : PROJECTS_PLACEHOLDERS.filter(
          (p) =>
            p.category === filter ||
            p.technologies.some((t) =>
              t.toLowerCase().includes(filter.toLowerCase())
            ) ||
            (filter === 'Responsive UI' &&
              p.technologies.some((t) =>
                t.toLowerCase().includes('responsive')
              ))
        );

  return (
    <section id="projects" className="py-24 relative bg-[#070A12] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-semibold text-violet-300 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio Projects</span>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Frontend Projects & Code Showcase
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Featured web applications and responsive frontend projects developed with modern technologies.
          </p>
        </div>

        {/* Filter Bar & Info Note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-800/80 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-project-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === cat.id
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-950/50 border border-violet-400/40'
                    : 'bg-[#0E1424] text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <Info className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>Click Live Demo to view completed live projects</span>
          </div>
        </div>

        {/* Projects Grid with MamaCita Featured First */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className={`group rounded-2xl bg-[#0B0F1C] border transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl flex flex-col overflow-hidden text-left ${
                project.isRealProject
                  ? 'border-violet-500/50 hover:border-violet-400 hover:shadow-violet-900/30'
                  : 'border-slate-800/90 hover:border-violet-500/40 hover:shadow-violet-950/20'
              }`}
            >
              {/* Project Visual Container */}
              <div
                className={`relative w-full h-52 sm:h-60 bg-gradient-to-br ${project.imagePlaceholder.gradient} border-b border-slate-800 flex flex-col items-center justify-center p-6 overflow-hidden`}
              >
                {/* Visual grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Center visual icon element */}
                <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {project.isRealProject ? (
                    <Sparkles className="w-7 h-7 text-pink-300" />
                  ) : (
                    <Code2 className="w-7 h-7 text-violet-300" />
                  )}
                </div>

                <span className="text-base font-bold text-white tracking-wide z-10 text-center px-4">
                  {project.imagePlaceholder.title}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full mt-2 font-mono z-10 border ${
                    project.isRealProject
                      ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                      : 'bg-violet-950/80 border-violet-500/30 text-violet-300'
                  }`}
                >
                  {project.isRealProject ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{project.statusLabel}</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-3.5 h-3.5 text-violet-400" />
                      <span>{project.statusLabel}</span>
                    </>
                  )}
                </span>

                {/* Badge for category */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-md font-mono border ${
                      project.isRealProject
                        ? 'bg-pink-950/80 text-pink-200 border-pink-500/30'
                        : 'bg-black/60 text-violet-300 border-violet-500/30'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Details trigger button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-medium border border-white/20 flex items-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-violet-300" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                    </h3>
                    {project.isRealProject && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-950 text-violet-300 border border-violet-500/30 font-mono shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {project.note}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {project.isRealProject ? 'Technologies' : 'Planned Technologies'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-md text-xs border font-mono ${
                          project.isRealProject
                            ? 'bg-slate-900 text-violet-200 border-violet-900/50'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {project.isRealProject && project.liveDemoUrl ? (
                    <>
                      <a
                        id="project-livedemo-btn-mamacita"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors shadow-md shadow-violet-950/60 border border-violet-400/30 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        id="project-details-btn-mamacita"
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-colors cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                        <span>Details</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <a
                        id={`project-github-btn-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub Profile</span>
                      </a>

                      <button
                        id={`project-comingsoon-btn-${project.id}`}
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-950/70 hover:bg-violet-900/80 text-violet-300 hover:text-white text-xs font-medium border border-violet-500/30 transition-colors cursor-pointer"
                      >
                        <Clock className="w-3.5 h-3.5 text-violet-400" />
                        <span>Coming Soon</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Repository Showcase Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0C101E] border border-violet-900/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Explore More on GitHub
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Browse repositories, code commits, component files, and experiments.
            </p>
          </div>
          <a
            id="projects-view-all-github"
            href="https://github.com/bassant198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 hover:text-white border border-slate-700 text-xs font-semibold transition-colors shrink-0 shadow-sm"
          >
            <Github className="w-4 h-4 text-violet-400" />
            <span>github.com/bassant198</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Reusable Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
