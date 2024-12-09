import { FormData } from '../types';

export const buildRoadmapPrompt = (formData: FormData): string => {
  return `Please create a comprehensive learning roadmap for someone wanting to learn ${formData.skill}.

Current Profile:
- Proficiency Level: ${formData.proficiencyLevel}
- Time Availability: ${formData.timeCommitment}

Please provide a detailed response including:

1. A structured learning plan with clear milestones and estimated timeframes
2. Specific recommended resources:
   - Online courses
   - Books
   - Video tutorials
   - Documentation
3. Practical exercises and projects for each learning stage
4. Methods to track progress and validate learning
5. Common pitfalls to avoid

Format the response in a clear, well-structured manner using markdown for better readability.`;
};