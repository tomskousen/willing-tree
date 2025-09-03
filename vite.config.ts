import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for local dev and Vercel, subfolder for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/willing-tree/' : '/',
})
