import { APIConfig } from '../types/api.types';
import { API_CONSTANTS } from '../constants/api.constants';
import { API_HEADERS } from '../constants/headers.constants';

export const createAPIConfig = (): APIConfig => ({
  baseURL: API_CONSTANTS.BASE_URL,
  timeout: API_CONSTANTS.TIMEOUT,
  headers: API_HEADERS,
  retryAttempts: API_CONSTANTS.RETRY_ATTEMPTS,
  retryDelay: API_CONSTANTS.RETRY_DELAY,
});