import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Two pages from one codebase: index.html (version 2, the main site) and v1.html (the first version, kept for comparison).
// Relative base so the built site works from any static host or sub-folder.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        v1: resolve(import.meta.dirname, 'v1.html'),
      },
    },
  },
});
