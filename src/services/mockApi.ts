import { FormData, AIModel } from '../types';

const MOCK_RESPONSE = (skill: string, level: string, time: string) => `
Learning Roadmap for ${skill}

Current Level: ${level}
Time Commitment: ${time}

1. Learning Plan & Milestones:
   - Week 1-2: Fundamentals and Basic Concepts
   - Week 3-4: Intermediate Skills Development
   - Week 5-6: Advanced Topics
   - Week 7-8: Project Implementation

2. Recommended Resources:
   - Online Courses: Coursera, Udemy specialized tracks
   - Books: "Essential Guide to ${skill}"
   - Video Tutorials: YouTube channels focused on ${skill}

3. Practice Challenges:
   - Weekly coding exercises
   - Mini-projects implementation
   - Peer review sessions
   - Portfolio development

Remember to track your progress and adjust the pace as needed.
`;

export const mockGenerateRoadmap = async (
  formData: FormData,
  model: AIModel
): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simulate random errors (20% chance)
  if (Math.random() < 0.2) {
    throw new Error('API temporarily unavailable. Please try again.');
  }

  return MOCK_RESPONSE(
    formData.skill,
    formData.proficiencyLevel,
    formData.timeCommitment
  );
};