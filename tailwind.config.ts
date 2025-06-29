import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        lightGray: 'var(--light-gray)',
        deepGray: 'var(--deep-gray)',
        dark: 'var(-dark)',
        lightDark: 'var(--light-dark)',
        deepDark: 'var(--deep-dark)',
      },
      fontSize: {
        sm: ['16px', '16px'],
        base: ['18px', '18px'],
        xl: ['20px', '20px'],
        '2xl': ['24px', '24px'],
        '3xl': ['36px', '36px'],
        '4xl': ['48px', '48px'],
        '5xl': ['64px', '64px'],
      },
    },
  },
  plugins: [],
};
export default config;
