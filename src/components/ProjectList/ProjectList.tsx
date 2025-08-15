import React, { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectList: React.FC = () => {
  // Filter projects that have live demo URLs (website examples)
  const websiteProjects = projects.filter(project => project.demoUrl);
  
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2; // Show 2 projects at a time
  const totalPages = Math.ceil(websiteProjects.length / projectsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentProjects = websiteProjects.slice(
    currentIndex * projectsPerPage,
    (currentIndex + 1) * projectsPerPage
  );

  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="text-xl font-medium text-white text-left">Recent projects</h2>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 min-h-[200px] mb-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={totalPages <= 1}
            className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === currentIndex 
                    ? 'bg-blue-400' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={totalPages <= 1}
            className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProjectList;