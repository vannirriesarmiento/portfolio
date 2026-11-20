// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? 'https://vannirriesarmiento.github.io' : undefined,
  base: isGitHubPages ? '/portfolio' : undefined,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
