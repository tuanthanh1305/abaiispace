
import React from 'react';
import type { Project } from '../types';
import { ArrowRightIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { Icon } = project;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full group"
    >
      <div className="h-full bg-white/50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:border-sky-400 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sky-500/20 backdrop-blur-sm">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-sky-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          <div className="relative p-4 bg-white/70 rounded-full border border-slate-200">
             <Icon className="w-10 h-10 text-sky-400" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {project.title}
        </h3>
        <p className="text-slate-600 flex-grow mb-8">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg group-hover:from-sky-400 group-hover:to-blue-500 transition-all duration-300 transform group-hover:scale-105">
            <span>Truy cập</span>
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;