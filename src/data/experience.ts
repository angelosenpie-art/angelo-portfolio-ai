export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: "freelance-wordpress-dev",
    company: "Freelance WordPress Development",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2018-01",
    current: true,
    description: "Providing comprehensive WordPress development services to clients worldwide, specializing in custom websites, theme development, and optimization.",
    responsibilities: [
      "Develop custom WordPress websites from scratch",
      "Create and customize WordPress themes and plugins",
      "Implement responsive designs using various page builders",
      "Optimize website performance and loading speeds",
      "Provide ongoing maintenance and support",
      "Handle website migrations and hosting management"
    ],
    achievements: [
      "Successfully maintained freelance business for 6+ years",
      "Built 100+ custom WordPress websites",
      "Achieved consistent client satisfaction and repeat business",
      "Specialized in performance optimization and security"
    ],
    technologies: [
      "WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Elementor Pro", 
      "Beaver Builder", "Divi Builder", "WP Bakery", "Kadence", "Gutenberg"
    ],
    type: "Freelance"
  },
  {
    id: "viblance",
    company: "Viblance",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2023-01",
    endDate: "2023-12",
    current: false,
    description: "Part-time WordPress developer responsible for website development, maintenance, and feature implementation for Viblance platform.",
    responsibilities: [
      "Develop and maintain WordPress website functionality",
      "Implement custom features and integrations",
      "Optimize website performance and user experience",
      "Collaborate with team on design and development requirements",
      "Provide technical support and troubleshooting"
    ],
    achievements: [
      "Successfully implemented new website features improving user engagement",
      "Optimized website performance resulting in faster loading times",
      "Maintained high-quality code standards throughout the project",
      "Delivered all assigned tasks within specified deadlines"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "HTML5", "MySQL"],
    type: "Part-time"
  },
  {
    id: "awork-wp-dev",
    company: "AWORK",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2022-10",
    endDate: "2024-01",
    current: false,
    description: "WordPress development specialist handling international clients, focusing on custom website creation, design, and maintenance.",
    responsibilities: [
      "Create websites from scratch based on client requirements",
      "Provide comprehensive client support and communication",
      "Design and implement custom website layouts",
      "Handle ongoing website maintenance and updates",
      "Collaborate with international clients, including Denmark-based projects"
    ],
    achievements: [
      "Successfully managed multiple international client projects",
      "Delivered high-quality websites meeting diverse client needs",
      "Maintained excellent client relationships across different time zones",
      "Contributed to company's international expansion efforts"
    ],
    technologies: ["WordPress", "PHP", "Elementor", "Custom Post Types", "CSS3", "JavaScript"],
    type: "Full-time"
  },
  {
    id: "best-site-security",
    company: "Best Site Security",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2021-11",
    endDate: "2022-07",
    current: false,
    description: "Specialized WordPress developer focusing on website security, malware removal, and error resolution for compromised websites.",
    responsibilities: [
      "Create secure WordPress websites from scratch",
      "Clean malware and viruses from infected websites",
      "Identify, read, and fix various website errors",
      "Implement security best practices and hardening measures",
      "Restore website functionality after security incidents"
    ],
    achievements: [
      "Successfully cleaned and restored 50+ infected websites",
      "Developed expertise in WordPress security and malware removal",
      "Implemented security measures preventing future attacks",
      "Reduced client security incidents by 80% through proactive measures"
    ],
    technologies: ["WordPress", "PHP", "Security Plugins", "Malware Scanning Tools", "cPanel"],
    type: "Full-time"
  },
  {
    id: "fieldnotes-ai",
    company: "Fieldnotes.ai",
    position: "WordPress Developer",
    location: "Remote",
    startDate: "2020-01",
    endDate: "2021-07",
    current: false,
    description: "WordPress developer for AI-focused startup, responsible for website quality assurance, feature implementation, and marketing page development.",
    responsibilities: [
      "Conduct comprehensive website quality assurance testing",
      "Add custom functionalities for unique feature implementations",
      "Create high-converting landing pages for advertising campaigns",
      "Collaborate with project managers on content and feature development",
      "Ensure website performance and user experience optimization"
    ],
    achievements: [
      "Improved website conversion rates through optimized landing pages",
      "Successfully implemented complex AI-related features",
      "Maintained 99.9% website uptime during critical product launches",
      "Contributed to successful marketing campaigns through effective landing pages"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "Landing Page Builders", "Analytics Tools"],
    type: "Full-time"
  },
  {
    id: "jd-insurance",
    company: "JD Insurance Company",
    position: "Junior Full-stack Web Developer",
    location: "Remote",
    startDate: "2019-01",
    endDate: "2020-01",
    current: false,
    description: "Full-stack web developer working with Laravel and Vue.js to build comprehensive web applications for insurance industry clients.",
    responsibilities: [
      "Develop web applications using Laravel backend framework",
      "Create interactive frontend interfaces with Vue.js",
      "Implement database designs and API integrations",
      "Collaborate with senior developers on complex features",
      "Test and debug applications across different environments"
    ],
    achievements: [
      "Successfully transitioned from WordPress to full-stack development",
      "Contributed to major insurance platform features",
      "Gained valuable experience in modern web frameworks",
      "Delivered reliable solutions for enterprise-level applications"
    ],
    technologies: ["Laravel", "Vue.js", "PHP", "MySQL", "JavaScript", "CSS3", "Git"],
    type: "Full-time"
  }
];

export const education: Education[] = [
  {
    id: "computer-science-degree",
    institution: "Caraga State University",
    degree: "Bachelor of Science in Computer Science",
    field: "Computer Science",
    location: "Butuan City, Philippines",
    startDate: "2018-09",
    endDate: "2022-05",
  }
];

export const experienceStats = {
  totalYearsOfExperience: 6,
  projectsCompleted: 100,
  clientsSatisfied: 50,
  technologiesMastered: 20
};