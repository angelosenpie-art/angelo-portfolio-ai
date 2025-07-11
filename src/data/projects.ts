export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  startDate: string;
  endDate?: string;
  category: 'Web App' | 'Mobile App' | 'API' | 'Tool' | 'Library' | 'Other';
}

export const projects: Project[] = [
  {
    id: "croatia-yacht-charter",
    title: "My Croatia Yacht Charter",
    description: "Advanced yacht charter website with API integration and AI-powered features",
    longDescription: "A comprehensive yacht charter platform featuring real-time yacht availability through API integration and AI-powered customer assistance using Google Gemini. Built with WordPress and custom integrations.",
    technologies: ["WordPress", "PHP", "Yacht Charter API", "Google Gemini AI", "JavaScript", "CSS3", "MySQL"],
    features: [
      "Real-time yacht availability and booking",
      "AI-powered customer assistance with Gemini",
      "Advanced search and filtering system",
      "Responsive design for all devices",
      "Payment gateway integration",
      "Multi-language support"
    ],
    challenges: [
      "Integrating complex yacht charter APIs",
      "Implementing AI chatbot for customer queries",
      "Managing real-time inventory updates",
      "Optimizing performance with large datasets"
    ],
    lessons: [
      "Complex API integration in WordPress",
      "AI implementation in travel industry",
      "Real-time data synchronization",
      "Advanced WordPress customization"
    ],
    demoUrl: "https://mycroatiayachtcharter.com/",
    status: "Completed",
    startDate: "2024-06",
    endDate: "2024-12",
    category: "Web App"
  },
  {
    id: "ilx-travel",
    title: "ILX Travel",
    description: "Premium travel agency website with booking management system",
    longDescription: "Professional travel agency website featuring destination showcases, booking inquiries, and comprehensive travel services presentation.",
    technologies: ["WordPress", "Elementor Pro", "PHP", "CSS3", "JavaScript", "Contact Forms"],
    features: [
      "Destination showcase galleries",
      "Travel package presentations",
      "Booking inquiry system",
      "Responsive travel-focused design",
      "SEO optimization for travel keywords"
    ],
    challenges: [
      "Creating engaging travel content layouts",
      "Optimizing images for fast loading",
      "Implementing effective booking flows"
    ],
    lessons: [
      "Travel industry website best practices",
      "Visual storytelling through web design",
      "Performance optimization for media-heavy sites"
    ],
    demoUrl: "https://www.ilxtravel.com/",
    status: "Completed",
    startDate: "2023-08",
    endDate: "2023-10",
    category: "Web App"
  },
  {
    id: "paulin-insurance",
    title: "Paulin Insurance",
    description: "Professional insurance company website with service information and quote requests",
    longDescription: "Corporate insurance website providing comprehensive information about insurance services, agent profiles, and customer resources.",
    technologies: ["WordPress", "Divi Builder", "PHP", "CSS3", "Contact Forms", "SEO Tools"],
    features: [
      "Insurance service descriptions",
      "Agent profile pages",
      "Quote request forms",
      "Resource center for customers",
      "Professional corporate design"
    ],
    challenges: [
      "Presenting complex insurance information clearly",
      "Creating trust through design",
      "Optimizing for insurance-related keywords"
    ],
    lessons: [
      "Financial services web design principles",
      "Compliance considerations in insurance websites",
      "Building credibility through professional presentation"
    ],
    demoUrl: "https://paulininsurance.net/",
    status: "Completed",
    startDate: "2023-05",
    endDate: "2023-07",
    category: "Web App"
  },
  {
    id: "mark-devolder",
    title: "Mark DeVolder Personal Website",
    description: "Personal professional website showcasing expertise and services",
    longDescription: "Professional personal website designed to showcase individual expertise, services, and professional background.",
    technologies: ["WordPress", "Elementor", "PHP", "CSS3", "JavaScript", "SEO Tools"],
    features: [
      "Professional biography section",
      "Services and expertise showcase",
      "Contact and consultation booking",
      "Blog/insights section",
      "Professional portfolio presentation"
    ],
    challenges: [
      "Creating a personal brand through web design",
      "Balancing professionalism with personality",
      "Optimizing for personal branding keywords"
    ],
    lessons: [
      "Personal branding website strategies",
      "Professional service presentation",
      "Individual consultant web presence"
    ],
    demoUrl: "https://markdevolder.com/",
    status: "Completed",
    startDate: "2023-03",
    endDate: "2023-05",
    category: "Web App"
  },
  {
    id: "lukinovich-law",
    title: "Lukinovich Law Firm",
    description: "Professional law firm website with practice area information and client resources",
    longDescription: "Corporate law firm website featuring practice areas, attorney profiles, case studies, and client resources with professional legal industry design.",
    technologies: ["WordPress", "Beaver Builder", "PHP", "CSS3", "Contact Forms", "Legal Compliance Tools"],
    features: [
      "Practice area detailed descriptions",
      "Attorney biography pages",
      "Case studies and results",
      "Client resource center",
      "Professional legal industry design",
      "Consultation booking system"
    ],
    challenges: [
      "Meeting legal industry compliance requirements",
      "Presenting complex legal information clearly",
      "Building trust and credibility"
    ],
    lessons: [
      "Legal industry web design standards",
      "Compliance and ethical considerations",
      "Professional service credibility building"
    ],
    demoUrl: "https://lukinovichlaw.com/",
    status: "Completed",
    startDate: "2022-11",
    endDate: "2023-02",
    category: "Web App"
  },
  {
    id: "delivering-wishes",
    title: "Delivering Wishes",
    description: "Non-profit organization website for community outreach and donations",
    longDescription: "Community-focused non-profit website designed to facilitate donations, volunteer coordination, and community outreach programs.",
    technologies: ["WordPress", "WP Bakery", "PHP", "Donation Plugins", "CSS3", "Social Media Integration"],
    features: [
      "Donation processing system",
      "Volunteer registration forms",
      "Community impact showcases",
      "Event calendar and announcements",
      "Social media integration"
    ],
    challenges: [
      "Implementing secure donation processing",
      "Creating emotional connection through design",
      "Optimizing for community engagement"
    ],
    lessons: [
      "Non-profit website best practices",
      "Donation system implementation",
      "Community engagement strategies"
    ],
    demoUrl: "https://www.delivering-wishes.com/",
    status: "Completed",
    startDate: "2022-08",
    endDate: "2022-10",
    category: "Web App"
  },
  {
    id: "viblance-ecommerce",
    title: "Viblance E-commerce Platform",
    description: "Complete WordPress e-commerce website built from scratch with WooCommerce, Elementor, and multi-language support",
    longDescription: "Full e-commerce platform developed from scratch using WordPress, WooCommerce, and Elementor. Features custom designs, multi-language functionality, and comprehensive online store capabilities.",
    technologies: ["WordPress", "WooCommerce", "Elementor Pro", "PHP", "Multi-language Plugin", "CSS3", "JavaScript", "MySQL"],
    features: [
      "Complete e-commerce website built from scratch",
      "WooCommerce integration for online store functionality",
      "Custom Elementor designs and layouts",
      "Multi-language support for international customers",
      "Responsive design for all devices",
      "Payment gateway integration",
      "Product catalog and inventory management"
    ],
    challenges: [
      "Building complex e-commerce functionality from ground up",
      "Implementing multi-language support across all pages",
      "Creating custom Elementor designs for unique user experience",
      "Optimizing performance with WooCommerce and multiple languages"
    ],
    lessons: [
      "Advanced WooCommerce development and customization",
      "Multi-language website architecture",
      "Custom Elementor widget development",
      "E-commerce performance optimization"
    ],
    demoUrl: "https://www.viblance.com/",
    status: "Completed",
    startDate: "2023-01",
    endDate: "2023-12",
    category: "Web App"
  },
  {
    id: "chris-nick-online",
    title: "Chris Nick Online",
    description: "Personal brand website for content creator and online personality",
    longDescription: "Dynamic personal brand website for content creator featuring portfolio showcase, social media integration, and audience engagement features.",
    technologies: ["WordPress", "Kadence", "PHP", "Social Media APIs", "CSS3", "Content Management"],
    features: [
      "Content portfolio showcase",
      "Social media feed integration",
      "Audience engagement tools",
      "Personal branding elements",
      "Mobile-optimized design"
    ],
    challenges: [
      "Integrating multiple social media platforms",
      "Creating engaging content presentation",
      "Optimizing for content creator workflows"
    ],
    lessons: [
      "Content creator website strategies",
      "Social media integration techniques",
      "Personal brand development online"
    ],
    demoUrl: "https://chrisnickonline.com/",
    status: "Completed",
    startDate: "2022-05",
    endDate: "2022-07",
    category: "Web App"
  },
  {
    id: "portfolio-ai",
    title: "AI-Powered Portfolio Website",
    description: "Interactive portfolio with AI assistant that answers questions about my background and skills",
    longDescription: "A modern portfolio website featuring an AI-powered chatbot that can answer questions about my experience, skills, and projects. Built with React, TypeScript, and Google Gemini AI.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Google Gemini AI", "EmailJS", "Vite"],
    features: [
      "AI chatbot with contextual responses",
      "Contact form with email integration",
      "Responsive design for all devices",
      "Modern UI with smooth animations",
      "TypeScript for type safety"
    ],
    challenges: [
      "Integrating AI API with proper error handling",
      "Creating a natural conversation flow",
      "Optimizing for performance and SEO",
      "Designing an intuitive user interface"
    ],
    lessons: [
      "Working with modern AI APIs",
      "Advanced React patterns and hooks",
      "TypeScript best practices",
      "User experience design principles"
    ],
    githubUrl: "https://github.com/angelosinday/portfolio",
    demoUrl: "https://angelosinday.vercel.app",
    status: "In Progress",
    startDate: "2025-01",
    category: "Web App"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern payment processing and inventory management",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, order management, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Material-UI"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Payment processing with Stripe"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state across components",
      "Optimizing database queries for performance",
      "Creating responsive design for mobile"
    ],
    lessons: [
      "Full-stack application architecture",
      "Payment gateway integration",
      "Database design and optimization",
      "Security best practices"
    ],
    githubUrl: "https://github.com/angelosinday/ecommerce",
    status: "Completed",
    startDate: "2024-08",
    endDate: "2024-12",
    category: "Web App"
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    description: "RESTful API for task management with team collaboration features",
    longDescription: "A robust REST API built with Node.js and Express, providing endpoints for task management, team collaboration, and project organization with proper authentication and authorization.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "bcrypt", "Joi validation"],
    features: [
      "User registration and authentication",
      "CRUD operations for tasks and projects",
      "Team collaboration with role-based access",
      "Real-time notifications",
      "Data validation and error handling",
      "API documentation with Swagger"
    ],
    challenges: [
      "Designing scalable database schema",
      "Implementing complex authorization logic",
      "Creating comprehensive API documentation",
      "Handling concurrent operations safely"
    ],
    lessons: [
      "API design principles",
      "Database relationships and optimization",
      "Authentication and authorization patterns",
      "Testing strategies for APIs"
    ],
    githubUrl: "https://github.com/angelosinday/task-api",
    status: "Completed",
    startDate: "2024-05",
    endDate: "2024-07",
    category: "API"
  },
  {
    id: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for displaying complex data with charts and real-time updates",
    longDescription: "A data visualization dashboard built with React and D3.js, providing interactive charts, real-time data updates, and customizable views for business analytics.",
    technologies: ["React", "D3.js", "Chart.js", "WebSocket", "Python", "FastAPI"],
    features: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "Customizable dashboard layouts",
      "Data filtering and search",
      "Export functionality for reports",
      "Responsive design for mobile"
    ],
    challenges: [
      "Handling large datasets efficiently",
      "Creating smooth animations and transitions",
      "Implementing real-time data streaming",
      "Optimizing performance for complex visualizations"
    ],
    lessons: [
      "Data visualization best practices",
      "Working with D3.js and SVG",
      "WebSocket implementation",
      "Performance optimization techniques"
    ],
    status: "Completed",
    startDate: "2024-02",
    endDate: "2024-04",
    category: "Web App"
  }
];

export const projectStats = {
  totalProjects: projects.length,
  completedProjects: projects.filter(p => p.status === 'Completed').length,
  inProgressProjects: projects.filter(p => p.status === 'In Progress').length,
  technologiesUsed: Array.from(new Set(projects.flatMap(p => p.technologies))).length,
  categoriesWorkedOn: Array.from(new Set(projects.map(p => p.category))).length
};