import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Noto Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '3.5rem',
        xl: '4.5rem',
        '2xl': '6.5rem',
      },
    },
  },
  plugins: [],
};
export default config
