import { defineConfig } from 'vite';

export default defineConfig({
  base: '/static',
  build:
  {
    target: 'esnext',
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
