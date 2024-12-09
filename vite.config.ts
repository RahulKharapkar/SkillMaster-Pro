import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://gpt-4o-mini.deno.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/v1'),
        headers: {
          'Origin': 'https://gpt-4o-mini.deno.dev'
        }
      }
    }
  }
});