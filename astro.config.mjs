// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://vilchesgroup.com',

  image: {
    domains: ['catbox.moe'], // Agrega los dominios aquí
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [sitemap(),
  compress({
    CSS: true,
    HTML: {
      'html-minifier-terser': {
        removeComments: true,
      },
    },
    Image: false, // Set to false if already using Astro's <Image />
    JavaScript: true,
    JSON: true,
    SVG: true,
    Logger: 1,
  }),

  ],
});