export const API_CONSTANTS = {
  BASE_URL: 'https://gpt-4o-mini.deno.dev/v1/chat/completions',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;