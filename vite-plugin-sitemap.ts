import type { Plugin } from 'vite';
import { generateSitemap } from './scripts/generate-sitemap';

export function sitemapPlugin(): Plugin {
  return {
    name: 'vite-plugin-sitemap',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: generateSitemap(),
      });
    },
  };
}
