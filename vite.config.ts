import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/material', '@mui/icons-material', 'react', 'react-dom', 'react-router-dom']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
