import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coral: {
          50: '#fff5f2',
          100: '#fff1ed',
          200: '#ffd7cc',
          300: '#ffbdaa',
          400: '#ff8566',
          500: '#ff4d22',
          600: '#e6451f',
          700: '#bf3a1a',
          800: '#992e14',
          900: '#7d2611',
        },
      },
      fontFamily: {
        serif: ['PP Editorial New', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
