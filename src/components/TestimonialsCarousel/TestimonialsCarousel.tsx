import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel: React.FC = () => {
  const testimonialImages = [
    '/upwork-feedback/create-landing-using-kadence.png',
    '/upwork-feedback/design-2-pages-in-gutenberg.png',
    '/upwork-feedback/homepage-website-redesign.png',
    '/upwork-feedback/kadence-blocks-page-development.png',
    '/upwork-feedback/pdf-wordpress-app.png',
    '/upwork-feedback/wordpress-developer-kadence.png',
    '/upwork-feedback/wordpress-page-design.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-medium text-white">Upwork Client Testimonials</h2>
      </div>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Testimonial Image */}
        <div className="bg-gray-900/95 border border-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src={testimonialImages[currentIndex]}
            alt={`Client testimonial ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              console.error('Failed to load testimonial image:', e);
            }}
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-gray-300" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {testimonialImages.map((_, i) => (
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
            <span className="text-gray-400 text-sm">
              {currentIndex + 1} / {testimonialImages.length}
            </span>
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 hover:border-gray-600 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <p className="text-gray-300 text-sm text-center">
          These testimonials are from real clients on{' '}
          <a
            href="https://www.upwork.com/freelancers/~01c6f5bbdab4309a3e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            my Upwork profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;