import { defineConfig } from "vite"
import { ViteAliases } from 'vite-aliases'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import i18nResources from "vite-plugin-i18n-resources";
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
    i18nResources({
      path: resolve(__dirname, "src/locales"),
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'Bernard Kissi Portfolio',
        theme_color: "#ffffff",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ]
})
