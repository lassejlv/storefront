import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const mode = process.env.NODE_ENV || 'development'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'assets',
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: `build-${Date.now()}-${mode}`
  },
  plugins: [react()],
})
