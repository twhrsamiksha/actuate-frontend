Chinmay Lokhande, Now
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [react()],
    base: isDev ? '/' : '/', // adjust if deploying in subfolder
    server: isDev
      ? {
          host: true, // allow external connections
          port: 5173,
          strictPort: true,
          allowedHosts: [
            'actuatemicrolearning.com',
            'www.actuatemicrolearning.com'
          ],
          proxy: {
            '/wp-json': {
              target: 'https://www.actuatemicrolearning.com', // WordPress backend
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined,
  }
})
