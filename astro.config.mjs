import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Astro is built on Vite; React is used for the interactive islands
// (cursor glow, compass seal, room rendering).
export default defineConfig({
  integrations: [react()],
  server: { port: 8000 },
  preview: { port: 8000 },
});
