import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://malinschoening.github.io',
  base: "/",
  integrations: [svelte()],
})

