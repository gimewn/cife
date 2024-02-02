import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@api': resolve(__dirname, 'src/api'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@util': resolve(__dirname, 'src/util'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@': resolve(__dirname, 'src'),
    },
  },
});
