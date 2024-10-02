import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-oktaNeue)'],
      },
      spacing: {
        'main-layout-t': '3.75rem',
        'main-layout-x': '6.25rem',
      },
      colors: {
        'main-1': '#111319',
        'main-2': '#d40c16',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        hoverOpacity: 1, // this value is applied as opacity-[value] when the component is hovered
      },
      themes: {
        light: {
          colors: {
            background: '#111319', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#d40c16',
            },
            default: {
              DEFAULT: 'transparent',
            },
            focus: {
              DEFAULT: 'transparent',
            },
          },
        },
        dark: {
          colors: {
            background: '#111319', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#FFFFFF',
            },
            secondary: {
              DEFAULT: '#d40c16',
            },
            default: {
              DEFAULT: 'transparent',
            },
            focus: {
              DEFAULT: 'transparent',
            },
          },
        },
      },
    }),
  ],
};
