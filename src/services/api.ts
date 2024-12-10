import axios from 'axios';
import { FormData, AIModel, APIResponse } from '../types';
import { buildChatMessages } from '../utils/messageBuilder';
import { CONFIG } from '../config/config';
import { generateMockResponse } from './mockData';
import { API_CONFIG } from './config';

const API_URL = API_CONFIG.BASE_URL;

export const generateRoadmap = async (
  formData: FormData,
  model: AIModel
): Promise<string> => {
  if (CONFIG.USE_MOCK_API) {
    await new Promise(resolve => setTimeout(resolve, CONFIG.MOCK_RESPONSE_DELAY));
    return generateMockResponse(formData);
  }

  try {
    const messages = buildChatMessages(formData);
    const response = await axios.post<APIResponse>(
      API_URL,
      {
        model,
        stream: false,
        messages
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    if (!response.data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from API');
    }

    return response.data.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate roadmap: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
};