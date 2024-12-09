import { ChatMessage, FormData } from '../../types';
import { buildRoadmapPrompt } from '../../utils/promptBuilder';

export const buildChatMessages = (formData: FormData): ChatMessage[] => {
  const systemMessage: ChatMessage = {
    role: 'system',
    content: 'You are a skilled career and learning path advisor, expert at creating detailed learning roadmaps.'
  };

  const userMessage: ChatMessage = {
    role: 'user',
    content: buildRoadmapPrompt(formData)
  };

  return [systemMessage, userMessage];
};