import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Markdown Dungeon is a Single Page App. Every dungeon room is a Markdown file
// loaded at runtime from /content, so unknown paths must fall back to index.html.
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  server: {
    port: 8000,
    open: false,
  },
  preview: {
    port: 8000,
  },
});
