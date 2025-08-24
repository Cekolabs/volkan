const fs = require('fs');
const path = require('path');

const domain = 'https://www.volkanhaliyikama2008.com';
const currentDate = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Ana Sayfa -->
  <url>
    <loc>${domain}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Hakkımızda Bölümü -->
  <url>
    <loc>${domain}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Hizmetler Bölümü -->
  <url>
    <loc>${domain}/#services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Süreç Bölümü -->
  <url>
    <loc>${domain}/#process</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Teknik Süreç Bölümü -->
  <url>
    <loc>${domain}/#technical-process</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- İletişim Bölümü -->
  <url>
    <loc>${domain}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

// Sitemap'i public klasörüne yaz
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);

console.log(`✅ Sitemap güncellendi: ${currentDate}`);
console.log(`📍 Konum: ${sitemapPath}`);
