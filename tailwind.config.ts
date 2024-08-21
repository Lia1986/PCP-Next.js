import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'navbar-gradient': 'linear-gradient(90deg, rgba(5,87,173,1) 52%);',
          'landing-pattern': "url('../public/pattern.png')",
      },
      colors:{
        'defaultBlue': '#34CDFD',
        'lightGray': '#F4F6FA'
      },
    },
  },
  plugins: [nextui()],
};
export default config;
