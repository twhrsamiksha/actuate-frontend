import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    // 👇 Important: set base to /app/ for production
    base: isDev ? '/' : '/app/',
    server: isDev
      ? {
          host: true, // allow external connections
          port: 5173,
          strictPort: true,
          allowedHosts: ['actuatemicrolearning.com'],
          proxy: {
            '/wp-json': {
              target: 'https://actuatemicrolearning.com',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined,
  }
})