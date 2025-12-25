import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip' }) // Enables GZIP compression
    // To also enable Brotli (optional), you can add:
    // viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  build: {
    outDir: 'build',
  },
})
