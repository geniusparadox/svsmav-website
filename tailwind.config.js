/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gunmetal: 'var(--gunmetal)',
        'accent-red': 'var(--accent-red)',
        'light-text': 'var(--light-text)',
        'muted-gray': 'var(--muted-gray)',
        porcelain: 'var(--porcelain)',
        'dark-border': 'var(--dark-border)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
