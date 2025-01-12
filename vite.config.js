import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kids: resolve(__dirname, 'kids.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  },
  css: {
    devSourcemap: true,
  },
});
