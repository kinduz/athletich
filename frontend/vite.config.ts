import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@app', replacement: path.resolve(__dirname, './src/app') },
      { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
      {
        find: '@entities',
        replacement: path.resolve(__dirname, './src/entities'),
      },
      {
        find: '@features',
        replacement: path.resolve(__dirname, './src/features'),
      },
      {
        find: '@widgets',
        replacement: path.resolve(__dirname, './src/widgets'),
      },
    ],
  },
  plugins: [react(), tailwindcss()],
});
