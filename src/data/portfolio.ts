export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Angelo Sinday",
  title: "WordPress Developer & Full-Stack Developer",
  bio: "Experienced WordPress developer with 6+ years of expertise in creating custom websites, theme development, and optimization. Specialized in security, performance, and delivering high-quality solutions for clients worldwide.",
  location: "Remote",
  email: "angelosinday.dev@gmail.com",
  website: "https://angelosinday.me",
  linkedin: "https://linkedin.com/in/angelosinday",
  github: "https://github.com/angelosinday",
  twitter: "https://twitter.com/angelosinday"
};

export const aboutMe = {
  introduction: "I'm an experienced WordPress developer with over 6 years of expertise in creating custom websites, optimizing performance, and providing comprehensive web solutions for clients across various industries.",
  
  interests: [
    "WordPress Development",
    "Website Security & Optimization",
    "Custom Theme Development",
    "Performance Optimization",
    "Client Success"
  ],
  
  personalValues: [
    "Quality craftsmanship",
    "Client satisfaction",
    "Security-first approach",
    "Performance optimization",
    "Reliable support"
  ],
  
  currentFocus: "Currently expanding skills in modern JavaScript frameworks while maintaining expertise in WordPress development, security, and performance optimization."
};