import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',

			'pinky' : '#FB2E86',

			'topbg' : '#7E33E0',
			'toptext' : '#F1F1F1',

			'herobg' : '#F2F0FF',
			'footerbg' : '#EEEFFB',
			'footertext' : '#8A8FB9',
			'bottombg' : '#E7E4F8',
			'bottomtext' : '#9DA0AE',
		//card
			'cardbg' : '#F6F7FB',
			'cardtext' : '#151875',
			'cardlight1' : '#05E6B7',
			'cardlight2' : '#F701A8', 
			'cardlight3' : '#00009D',
		//cardHover
			'buttonhover' : '#F6F7FB',
			'cardlight3hover' : '#FFEAC1',
		//h1
			'text' : '#151875',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
