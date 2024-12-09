export type ProficiencyLevel = 'rookie' | 'beginner' | 'intermediate';

export type AIModel = 'gpt-4o-mini' | 'claude-3-haiku' | 'llama-3.1-70b' | 'mixtral-8x7b';

export interface FormData {
  skill: string;
  proficiencyLevel: ProficiencyLevel;
  timeCommitment: string;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface APIResponse {
  id: string;
  model: string;
  created: number;
  choices: Array<{
    message: {
      role: 'assistant';
      content: string;
    };
  }>;
}