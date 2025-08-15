import React from 'react';
import { Project } from '../../data/projects';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900/95 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 h-full flex flex-col min-h-[200px]">
      {/* macOS Window Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-2.5 flex items-center">
        {/* Traffic Light Buttons */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Window Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-left">
          {/* Clickable Project Title with Icon */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-2 text-left hover:text-gray-200 transition-colors duration-200 group"
            >
              <h3 className="text-white font-medium">{project.title}</h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </a>
          ) : (
            <h3 className="text-white font-medium mb-2 text-left">{project.title}</h3>
          )}
          
          <p className="text-gray-400 text-sm mb-4 leading-relaxed text-left">{project.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1.5 justify-start">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-500 rounded text-xs">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;