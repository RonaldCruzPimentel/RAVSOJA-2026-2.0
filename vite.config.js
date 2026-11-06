
import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from "url"

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/RAVSOJA-2026-2.0/" : "/",
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(currentDirectory, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(currentDirectory, "index.html"),

        // Página actual de oferta educativa
        catalogo: path.resolve(currentDirectory, "oferta-educativa.html"),

        // Nueva página del catálogo RAVSOJA
        catalogoRavsoja: path.resolve(currentDirectory, "catalogo.html"),

        // Otras páginas existentes
        heroSkill: path.resolve(currentDirectory, "hero-skill.html"),
        heroDirecto: path.resolve(currentDirectory, "hero-directo.html"),
      },
    },
  },
})
