import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			transparent : 'transparent',
			black : '#000',
			white : '#FFF',
			dimmed : 'rgba(0, 0, 0, 0.5)',
			gray: {
			  200: '#F2F4F7',
			  300: '#EAECF0',
			  400: '#DADDE1',
			  500: '#A4A9B1',
			  600: '#6E7178',
			  700: '#4D5157',
			  800: '#3D4147',
			  900: '#21212D',
			},
			primary: {
			  100: '#F6F5FF',
			  200: '#BBB9FA',
			  300: '#9593F0',
			  400: '#7774E2',
			  500: '#4C49CF',
			  600: '#3735B2',
			  700: '#262495',
			  800: '#181778',
			  900: '#0F0E63',
			},
			gradient: {
			  90:'var(--Gradation-90, linear-gradient(180deg, #7428CB 0%, #4C49CF 100%))',
			  180:'var(--Gradation-180, linear-gradient(90deg, #7428CB 0%, #4C49CF 100%))',
			},
			palette: {
			  'red' :'#F34040',
			  'red-light' :'#FFE8E3',
			  'red-dark': '#AA2D2D',
			  'orange': '#FF8C00',
			  'orange-light':'#FFEBD9',
			  'yellow':'#FF8C00',
			  'yellow-light':'#FFF0CA',
			  'blue':'#2F80ED',
			  'blue-light':'#E6F0FE',
			  'green':'#219653',
			  'green-light':'#F1FCF5',
			}
		},	
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		boxShadow: { 
			'primary-input': '0px 0px 0px 3px rgba(149, 147, 240, 0.15)', // 컬러 커스텀 필요
			'error-input': '0px 0px 0px 3px rgba(243, 64, 64, 0.15)',
			'inner': 'inset 0 0 0 1px #a4a9b1',			
		},
		spacing: {
			'4.5': "1.125rem",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
