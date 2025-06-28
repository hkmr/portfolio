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
        primary: '#079211',
        white: '#DCDCDC',
        gray: '#808080',
        lightGray: '#d1d5db',
        deepGray: '#0a0a0f',
        dark: '#282831',
        lightDark: '#313131',
        deepDark: '#050507',
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
