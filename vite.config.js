import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works on any
// GitHub Pages address (user.github.io/ or user.github.io/repo-name/).
export default defineConfig({
  base: './',
  plugins: [react()],
})
