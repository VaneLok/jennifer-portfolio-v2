import { defineConfig } from 'vite'

export default defineConfig({
  base: '/jennifer-amaya-inner-portfolio/',
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  assetsInclude: ['**/*.wad', '**/*.WAD', '**/*.exe', '**/*.EXE', '**/*.jsdos', '**/*.wasm']
})
