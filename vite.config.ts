import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), react()],
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser'
    }
  },
  define: {
    'process.env': process.env
  }
});
