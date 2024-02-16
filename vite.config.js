import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


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
    outDir: `build`
  },
  plugins: [react()],
})
