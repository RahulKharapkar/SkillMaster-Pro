/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            h1: {
              color: '#2563eb',
            },
            h2: {
              color: '#3b82f6',
            },
            h3: {
              color: '#60a5fa',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            strong: {
              color: '#1e40af',
            },
            'ul > li::marker': {
              color: '#3b82f6',
            },
            'ol > li::marker': {
              color: '#3b82f6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};