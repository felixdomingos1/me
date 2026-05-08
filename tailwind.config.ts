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
        'bg-dark': '#0a0b10',
        'primary-neon': '#00f2fe',
        'secondary-neon': '#4facfe',
        'accent-purple': '#bd00ff',
        'card-bg': 'rgba(255, 255, 255, 0.03)',
        'text-gray': '#a1a1aa',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
