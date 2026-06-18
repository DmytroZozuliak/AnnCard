import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: `base` must match your GitHub repository name so that assets
// load correctly at https://<username>.github.io/AnnCard/
// If you rename the repo, change this single line.
export default defineConfig({
  base: '/AnnCard/',
  plugins: [react()],
})
