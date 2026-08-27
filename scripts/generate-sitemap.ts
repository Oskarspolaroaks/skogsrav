// Sitemap generation script - runs at build time
const SITE_URL = 'https://skogsrav.com';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/france', priority: '0.9', changefreq: 'monthly' },
  { path: '/netherlands', priority: '0.9', changefreq: 'monthly' },
  { path: '/germany', priority: '0.9', changefreq: 'monthly' },
  { path: '/baltics', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
];

export function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = pages.map(page => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
