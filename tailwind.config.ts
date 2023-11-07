import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
    container: {
      center: true,

      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
export default config
