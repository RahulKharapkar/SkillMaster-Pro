import { FormData } from '../types';
import { generateLearningPhases } from './templates/learningPhases';
import { generateResources } from './templates/resources';
import { generatePracticeGuide } from './templates/practiceGuide';

export const generateMockResponse = (formData: FormData): string => {
  const phases = generateLearningPhases(formData.skill);
  const resources = generateResources(formData.skill);
  const practiceGuide = generatePracticeGuide(formData.skill);

  return `# 🎯 Learning Roadmap: ${formData.skill}

## 👤 Your Profile
- 📊 Current Level: ${formData.proficiencyLevel}
- ⏰ Time Investment: ${formData.timeCommitment}

${phases}

${resources}

${practiceGuide}

Remember: Consistency is key to mastering ${formData.skill}!`;
};