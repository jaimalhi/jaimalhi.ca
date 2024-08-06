import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	plugins: [daisyui],
	daisyui: {
		themes: ['dim', 'forest', 'business']
	},
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			fontWeight: {
				100: 100,
				200: 200,
				300: 300,
				400: 400,
				500: 500,
				600: 600,
				700: 700,
				800: 800,
				900: 900
			}
		}
	}
};
