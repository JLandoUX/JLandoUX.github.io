import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Option A: deploying to https://YOUR_USERNAME.github.io/YOUR_REPO/
  site: 'https://jlandoux.github.io',
  base: '/JLandoUX.github.io',

  // Option B: using a custom domain e.g. https://joshualandis.com
  // site: 'https://joshualandis.com',
  // base: '/',

  integrations: [tailwind()],
});
