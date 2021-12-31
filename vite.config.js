import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Bernard Kiss Portfolio',
        theme_color: "#ffffff",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ]
})
