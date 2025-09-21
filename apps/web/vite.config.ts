import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@evchargingstation/shared': resolve(__dirname, '../../packages/shared/src'),
      '@evchargingstation/ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
