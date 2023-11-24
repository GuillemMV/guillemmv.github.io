import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: 'min-dark'
		}
	},
	site: 'https://guillemmv.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
});
