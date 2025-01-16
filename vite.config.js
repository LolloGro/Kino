import { defineConfig } from 'vite';

export default defineConfig({
  base: '/static',
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
