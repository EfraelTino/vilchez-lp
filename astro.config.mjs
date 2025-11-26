// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://vilchesgroup.com',

  image: {
    domains: ['catbox.moe', 'bluecarpet.pe'], // Agrega los dominios aquí
  },

  integrations: [sitemap()],
});