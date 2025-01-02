import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/<Test-Kino-deploy/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kids: resolve(__dirname, 'pages/kids/kids.html'),
        about: resolve(__dirname, 'pages/about/about.html')
      }
    }
  },
  css: {
    devSourcemap: true,
  },
});
