'use client';

import { useState } from 'react';
import { Project, MEMBERS } from '@/data/portfolio';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface WorksProps {
  onSelectLeadFor: (memberId: 'bayu' | 'fadil' | 'igo') => void;
  initialProjects: Project[];
}

export default function WorksSection({ onSelectLeadFor, initialProjects }: WorksProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'visual' | 'spatial' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = initialProjects.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const getMember = (memberId: string) => {
    return MEMBERS.find((m) => m.id === memberId);
  };

  return (
    <section id="works" className="py-24 border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium block mb-3">
              [ 02 / Curated Portfolio ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#141413]">
              Kompilasi <span className="font-semibold">Karya Pilihan</span>
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Semua Bidang' },
              { id: 'spatial', label: 'Arsitektur & Interior (Fadil)' },
              { id: 'visual', label: 'Visual & Brand (Bayu)' },
              { id: 'web', label: 'Web & Digital (Igo)' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-[#141413] text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-black'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const member = getMember(project.leadMemberId);
            return (
              <div
                key={project.id}
                className="group cursor-pointer flex flex-col justify-between rounded-3xl bg-white border border-black/[0.06] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-neutral-800 font-semibold shadow-sm">
                        {project.disciplineLabel}
                      </span>
                    </div>
                    {project.metrics && (
                      <div className="absolute bottom-4 right-4">
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#141413]/85 text-white font-medium backdrop-blur-sm">
                          {project.metrics}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-2">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#141413] group-hover:text-neutral-700 transition-colors mb-2.5 flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Footer with Lead Specialist Credential */}
                <div className="px-6 py-4 bg-[#fbfbfa] border-t border-black/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={member?.avatar}
                      alt={member?.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-neutral-600 font-medium">
                      Lead: <strong className="text-neutral-900">{member?.name}</strong>
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 group-hover:text-black font-medium transition-colors">
                    Lihat Detail →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal Preview */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-black/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center text-sm font-semibold transition-colors"
              >
                ✕
              </button>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-100 text-neutral-700">
                  {selectedProject.disciplineLabel}
                </span>
                <span className="text-xs text-neutral-400 font-mono">• {selectedProject.year}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-[#141413] mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                {selectedProject.summary}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2 font-medium">
                  Deliverables & Lingkup Pekerjaan:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 font-medium"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={getMember(selectedProject.leadMemberId)?.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-xs text-neutral-500 block">Lead Specialist:</span>
                    <span className="text-sm font-semibold text-neutral-900">
                      {getMember(selectedProject.leadMemberId)?.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-black/10 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  <button
                    onClick={() => {
                      onSelectLeadFor(selectedProject.leadMemberId);
                      setSelectedProject(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#141413] text-white hover:bg-neutral-800 shadow-sm transition-all"
                  >
                    Bikin Project Seperti Ini →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
