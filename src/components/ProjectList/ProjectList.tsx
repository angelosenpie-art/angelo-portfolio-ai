import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Globe, ArrowRight } from 'lucide-react';

const ProjectList: React.FC = () => {
  // Filter projects that have live demo URLs (website examples)
  const websiteProjects = projects.filter(project => project.demoUrl);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Globe className="w-6 h-6 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Website Examples</h2>
      </div>
      
      <div className="text-gray-300 mb-6">
        <p>Here are some of the websites I've built for clients across different industries:</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {websiteProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <ArrowRight className="w-4 h-4" />
          <span className="font-medium">Want to see more details?</span>
        </div>
        <p className="text-gray-300 text-sm">
          Each project includes custom features, performance optimizations, and tailored solutions. 
          Feel free to ask me about any specific project or technology!
        </p>
      </div>
    </div>
  );
};

export default ProjectList;