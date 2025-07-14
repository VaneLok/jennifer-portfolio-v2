import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jennifer-portfolio-v2/',
  build: {
    outDir: 'dist',
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
    fs: {
      allow: ['..'],
    },
  },
  assetsInclude: ['**/*.jsdos', '**/*.wasm'],
  optimizeDeps: {
    exclude: ['js-dos'],
  },
})
