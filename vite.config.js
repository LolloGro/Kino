import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'build.html',
      }
    }
  },
  css: {
    devSourcemap: true,
  },
});
