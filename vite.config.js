import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather_dev",
  server: {
    proxy: {
      '/api': {
        target: 'https://api.hgbrasil.com/weather?format=json-cors&key=e47f8b67', // URL da API de terceiros
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
})
