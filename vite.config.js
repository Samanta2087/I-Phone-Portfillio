import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { miniDb } from './server/vite-stats.js'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), miniDb()],

  // SSG: pre-render the single route '/' to static HTML at build time
  ssgOptions: {
    formatting: 'minify',       // minify the pre-rendered HTML
    mock: true,                 // mock browser globals during Node pre-rendering
  },


  build: {
    // Raise the inline threshold so small SVGs/icons don't cost a separate request
    assetsInlineLimit: 8192,

    // Target modern mobile browsers (ES2019+) for smaller, faster output
    target: 'es2019',

    rollupOptions: {
      output: {
        // Split vendor chunks so React/Motion are cached independently
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
            return 'motion-vendor'
          }
          if (id.includes('node_modules/lenis')) {
            return 'lenis-vendor'
          }
          if (id.includes('node_modules/@iconify')) {
            return 'iconify-vendor'
          }
        },
      },
    },
  },
})
