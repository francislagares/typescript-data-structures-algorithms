/// <reference types="vitest" />
import path from 'path';

import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5173, // you can replace this port with any port
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['./src/**/*.{spec,test}.{ts,tsx}'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        '**/node_modules/**',
        '**/*.{config}.{js,ts,mjs,mts,tsx}',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
  resolve: {
    alias: {
      '@/src/*': path.resolve(__dirname, './src'),
    },
  },
});
