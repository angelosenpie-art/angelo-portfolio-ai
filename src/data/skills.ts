export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  years?: number;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "WordPress Development",
    skills: [
      {
        name: "WordPress CMS",
        level: "Expert",
        years: 6,
        description: "Custom theme development, plugin customization, and site optimization"
      },
      {
        name: "PHP",
        level: "Advanced",
        years: 6,
        description: "Server-side development, WordPress core modifications, and custom functionality"
      },
      {
        name: "Elementor Pro",
        level: "Expert",
        years: 4,
        description: "Advanced page building, custom widgets, and dynamic content"
      },
      {
        name: "Custom Post Types & ACF",
        level: "Advanced",
        years: 4,
        description: "Complex data structures and custom field implementations"
      },
      {
        name: "Website Security & Malware Removal",
        level: "Advanced",
        years: 3,
        description: "Security hardening, malware cleaning, and vulnerability assessment"
      }
    ]
  },
  {
    category: "Page Builders & CMS Tools",
    skills: [
      {
        name: "Beaver Builder",
        level: "Advanced",
        years: 3,
        description: "Drag-and-drop page building and custom module development"
      },
      {
        name: "Divi Builder",
        level: "Advanced",
        years: 3,
        description: "Theme customization and responsive design implementation"
      },
      {
        name: "WP Bakery",
        level: "Intermediate",
        years: 2,
        description: "Visual composer for complex page layouts"
      },
      {
        name: "Kadence + Gutenberg",
        level: "Advanced",
        years: 2,
        description: "Block-based editing and modern WordPress development"
      }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      {
        name: "HTML5 & CSS3",
        level: "Expert",
        years: 6,
        description: "Semantic markup, responsive design, animations, and modern CSS features"
      },
      {
        name: "JavaScript",
        level: "Advanced",
        years: 5,
        description: "DOM manipulation, AJAX, and interactive website functionality"
      },
      {
        name: "Vue.js",
        level: "Intermediate",
        years: 1,
        description: "Component-based frontend development for dynamic applications"
      },
      {
        name: "React",
        level: "Intermediate",
        years: 1,
        description: "Modern React development with hooks, state management, and component architecture"
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        years: 1,
        description: "Type-safe JavaScript development for better code quality and maintainability"
      },
      {
        name: "Tailwind CSS",
        level: "Intermediate",
        years: 1,
        description: "Utility-first CSS framework for rapid UI development and responsive design"
      },
      {
        name: "Responsive Design",
        level: "Expert",
        years: 6,
        description: "Mobile-first approach and cross-device compatibility"
      }
    ]
  },
  {
    category: "AI & Modern Development",
    skills: [
      {
        name: "Google Gemini AI Integration",
        level: "Intermediate",
        years: 1,
        description: "AI chatbot development and API integration for interactive user experiences"
      },
      {
        name: "AI-Powered Web Applications",
        level: "Intermediate", 
        years: 1,
        description: "Building intelligent web applications with AI features and natural language processing"
      },
      {
        name: "Vite Build Tool",
        level: "Intermediate",
        years: 1,
        description: "Modern build tool for fast development and optimized production builds"
      },
      {
        name: "Modern JavaScript Frameworks",
        level: "Intermediate",
        years: 1,
        description: "Contemporary development with React, TypeScript, and modern tooling"
      },
      {
        name: "EmailJS Integration",
        level: "Intermediate",
        years: 1,
        description: "Frontend email service integration for contact forms and notifications"
      },
      {
        name: "AI-Assisted Development",
        level: "Advanced",
        years: 1,
        description: "Claude Code + Cursor IDE for accelerated development, debugging, and code optimization"
      },
      {
        name: "AI Pair Programming",
        level: "Advanced",
        years: 1,
        description: "Collaborative development with AI assistants for efficient problem-solving and code generation"
      }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Laravel",
        level: "Intermediate",
        years: 1,
        description: "PHP framework for building robust web applications with MVC architecture"
      },
      {
        name: "MySQL",
        level: "Advanced",
        years: 5,
        description: "Database design, optimization, and management for WordPress and web applications"
      },
      {
        name: "REST API Integration",
        level: "Advanced",
        years: 4,
        description: "Third-party API integration and custom endpoint development"
      }
    ]
  },
  {
    category: "WordPress Plugins & Integrations",
    skills: [
      {
        name: "Zapier Integration",
        level: "Advanced",
        years: 3,
        description: "Workflow automation and third-party service connections"
      },
      {
        name: "Gravity Forms",
        level: "Advanced",
        years: 4,
        description: "Complex form building and data collection solutions"
      },
      {
        name: "Yoast SEO",
        level: "Expert",
        years: 5,
        description: "Search engine optimization and content optimization"
      },
      {
        name: "WooCommerce",
        level: "Advanced",
        years: 3,
        description: "E-commerce development and payment gateway integration"
      },
      {
        name: "Facebook Chat Bot",
        level: "Intermediate",
        years: 2,
        description: "Automated customer service and lead generation"
      }
    ]
  },
  {
    category: "Hosting & Server Management",
    skills: [
      {
        name: "cPanel",
        level: "Advanced",
        years: 5,
        description: "Server administration and website management"
      },
      {
        name: "SiteGround",
        level: "Expert",
        years: 4,
        description: "WordPress hosting optimization and management"
      },
      {
        name: "GoDaddy",
        level: "Advanced",
        years: 4,
        description: "Domain and hosting management"
      },
      {
        name: "Hostinger",
        level: "Advanced",
        years: 3,
        description: "Budget hosting solutions and optimization"
      },
      {
        name: "Website Migration",
        level: "Expert",
        years: 5,
        description: "Seamless site transfers between hosting providers"
      }
    ]
  },
  {
    category: "Optimization & Testing",
    skills: [
      {
        name: "GTmetrix Optimization",
        level: "Expert",
        years: 4,
        description: "Website speed optimization and performance tuning"
      },
      {
        name: "Cross Browser Testing",
        level: "Advanced",
        years: 5,
        description: "Ensuring compatibility across different browsers and devices"
      },
      {
        name: "PSD to WordPress",
        level: "Advanced",
        years: 4,
        description: "Converting design files to fully functional WordPress themes"
      },
      {
        name: "Plugin Customization",
        level: "Advanced",
        years: 5,
        description: "Modifying existing plugins and creating custom functionality"
      }
    ]
  }
];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Project Management",
  "Mentoring",
  "Adaptability",
  "Attention to Detail",
  "Time Management"
];