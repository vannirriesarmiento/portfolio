/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	blocklist: ['container'],
	theme: {
		extend: {},
		screens: {
			'xs': '320px',
			'ss': '360px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'1xl': '1440px',
			'2xl': '1536px',
		}
	},
	plugins: [],
}
