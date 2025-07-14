import React from 'react';
import { Project } from '../../data/projects';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{project.endDate || 'Ongoing'}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-gray-300">Technologies:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-sm">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;