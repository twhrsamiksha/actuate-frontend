import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://3.6.14.227',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
  