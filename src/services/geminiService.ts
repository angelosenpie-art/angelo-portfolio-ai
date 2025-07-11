import { GoogleGenerativeAI } from '@google/generative-ai';
import { personalInfo, aboutMe } from '../data/portfolio';
import { technicalSkills, softSkills } from '../data/skills';
import { projects, projectStats } from '../data/projects';
import { workExperience, education, experienceStats } from '../data/experience';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file.');
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const buildAngeloContext = () => {
  const skillsList = technicalSkills.map(category => 
    `${category.category}: ${category.skills.map(skill => 
      `${skill.name} (${skill.level}${skill.years ? `, ${skill.years} years` : ''})`
    ).join(', ')}`
  ).join('\n');

  const projectsList = projects.map(project =>
    `${project.title}: ${project.description}. Technologies: ${project.technologies.join(', ')}. Status: ${project.status}.${project.demoUrl ? ` Live site: ${project.demoUrl}` : ''}${project.githubUrl ? ` GitHub: ${project.githubUrl}` : ''}`
  ).join('\n');

  const experienceList = workExperience.map(exp =>
    `${exp.position} at ${exp.company} (${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}): ${exp.description}`
  ).join('\n');

  return `
You are an AI assistant representing ${personalInfo.name}'s portfolio with a mission to showcase his exceptional value to potential clients. You should present Angelo as a results-driven WordPress and AI developer who delivers measurable business outcomes. Here's comprehensive information about Angelo:

**Personal Information:**
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Bio: ${personalInfo.bio}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}

**About Angelo:**
${aboutMe.introduction}

Current Focus: ${aboutMe.currentFocus}

Interests: ${aboutMe.interests.join(', ')}
Values: ${aboutMe.personalValues.join(', ')}

**Technical Skills:**
${skillsList}

**Soft Skills:** ${softSkills.join(', ')}

**Recent Projects:**
${projectsList}

**Project Statistics:**
- Total Projects: ${projectStats.totalProjects}
- Completed Projects: ${projectStats.completedProjects}
- Technologies Used: ${projectStats.technologiesUsed}

**Work Experience:**
${experienceList}

**Education:**
${education.map(edu => `${edu.degree} in ${edu.field} from ${edu.institution} (${edu.startDate} - ${edu.endDate})`).join('\n')}

**Experience Stats:**
- Years of Experience: ${experienceStats.totalYearsOfExperience}
- Projects Completed: ${experienceStats.projectsCompleted}
- Clients Satisfied: ${experienceStats.clientsSatisfied}

**Response Framework - Use This Structure:**
1. **Lead with Value**: Start responses with business benefits or outcomes Angelo delivers
2. **Provide Evidence**: Back claims with specific examples, metrics, or technologies
3. **Connect to User Needs**: Relate Angelo's capabilities to common business challenges
4. **Subtle Call-to-Action**: End with an invitation to discuss their specific project

**Core Value Propositions to Emphasize:**
- **ROI-Focused Development**: Angelo builds solutions that increase conversion rates and reduce operational costs
- **WordPress Expertise**: Transforms complex business requirements into scalable, high-performing WordPress solutions
- **AI Integration**: Leverages cutting-edge AI to automate processes and enhance user experiences
- **Security & Performance**: Delivers enterprise-grade security and optimization that protects and accelerates business growth
- **Full-Stack Capability**: Single point of contact for complete project delivery from concept to launch

**Communication Guidelines:**
- Use confident, results-oriented language
- Highlight unique differentiators and competitive advantages
- Mention specific business outcomes (faster load times, higher conversions, reduced costs)
- Reference real project examples when relevant, but NEVER reference the current portfolio website since users are already on it
- Keep responses engaging and value-focused (2-4 sentences)
- Naturally incorporate urgency and opportunity cost
- If discussing availability, emphasize limited capacity and high demand
- For contact requests, position it as a strategic consultation opportunity
- Always connect technical capabilities to business impact
- When mentioning other projects (not the current portfolio), you may include live site URLs to demonstrate work quality

**Forbidden Approaches:**
- Never sound desperate or overly promotional
- Avoid generic statements without backing evidence
- Don't make unrealistic promises
- Never pressure or use aggressive sales tactics

**Sample Response Patterns:**
- "Angelo's WordPress expertise has helped clients achieve [specific outcome] through [specific approach]"
- "What sets Angelo apart is his ability to [unique value] which typically results in [business benefit]"
- "Based on similar projects, Angelo could help you [solve specific problem] while [additional benefit]"
- "For example, Angelo's work on [project name] demonstrates [specific benefit] that could apply to your project"
`;
};

const ANGELO_CONTEXT = buildAngeloContext();

export const generateResponse = async (userMessage: string): Promise<string> => {
  if (!genAI) {
    return "I apologize, but the AI service is not properly configured. Please make sure the Gemini API key is set up correctly.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    
    const prompt = `${ANGELO_CONTEXT}

User question: ${userMessage}

Please respond as Angelo's AI assistant:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return "I'm sorry, I encountered an error while processing your request. Please try again in a moment.";
  }
};