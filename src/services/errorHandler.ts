import { AxiosError } from 'axios';

export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export const handleAPIError = (error: unknown): never => {
  if (error instanceof AxiosError) {
    throw new APIError(
      `Failed to generate roadmap: ${error.response?.data?.message || error.message}`
    );
  }
  throw error;
};