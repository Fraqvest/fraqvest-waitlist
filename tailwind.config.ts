import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rube: ['Ruberoid', 'sans-serif']
      },
      colors: {
        fv: {
          100: '#034C3C',
          200: '#ABB06D',
          300: '#EFF9F0',
          400: '#FA7921',
          500: '#061E18'
        }
      },
      backgroundImage: {
        'join-pattern': "url('/assets/fv-join-pattern.svg')",
        'about-pattern': "url('/assets/fv-about-pattern.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
} satisfies Config;
