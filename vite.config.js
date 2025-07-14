import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  server: {
    // host: '127.0.0.1',
    host: '0.0.0.0',
    port: 4088,
  },

  build: {
    outDir: 'docs',
  },

  plugins: [vue()],
});
