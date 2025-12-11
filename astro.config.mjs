// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://vilchesgroup.com',

  image: {
    domains: ['catbox.moe'],
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  integrations: [sitemap(),
  compress({
    HTML: {
      'html-minifier-terser': {
        removeComments: true,
      },
    },
    JavaScript: true,
    JSON: true,
    SVG: true,
    Logger: 1,
  }),

  ],
});