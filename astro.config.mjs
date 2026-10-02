// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// Set this to your real URL once deployed (needed for sitemap and canonical links).
	// site: 'https://your-site.pages.dev',
	integrations: [
		starlight({
			title: 'Spring by Building',
			description: 'Learn Java and Spring Boot by building real apps.',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/YOUR-USER' }],
			customCss: ['./src/styles/custom.css'],
			head: [{ tag: 'script', attrs: { src: '/progress.js', defer: true } }],
			sidebar: [
				{ label: 'Build a URL shortener', items: [{ autogenerate: { directory: 'courses/url-shortener' } }] },
			],
		}),
	],
});
