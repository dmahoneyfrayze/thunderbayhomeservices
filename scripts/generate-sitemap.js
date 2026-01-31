import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const RSS_URL = "https://rss-link.com/feed/k2aNHMKb5hD0nNzq3kHp?blogId=whQgeCekgpxuLtBm77MB&limit=100&loadContent=false";
const SITE_URL = "https://thunderbayhomeservices.com";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
    console.log("Generating sitemap...");

    try {
        const response = await fetch(RSS_URL);
        if (!response.ok) throw new Error(`Failed to fetch RSS: ${response.statusText}`);

        const text = await response.text();

        // Simple regex parsing to avoid heavy xml dependencies for a build script
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        const linkRegex = /<link>(.*?)<\/link>/;
        const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;

        let match;
        const blogUrls = [];

        while ((match = itemRegex.exec(text)) !== null) {
            const itemContent = match[1];
            const linkMatch = itemContent.match(linkRegex);
            const dateMatch = itemContent.match(pubDateRegex);

            if (linkMatch) {
                let link = linkMatch[1];
                // Extract slug relative to blog path
                const slug = link.split('/').pop();
                if (slug) {
                    const date = dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
                    blogUrls.push({
                        loc: `${SITE_URL}/blog/${slug}`,
                        lastmod: date,
                        changefreq: 'monthly',
                        priority: '0.8'
                    });
                }
            }
        }

        const staticRoutes = [
            { loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0' },
            { loc: `${SITE_URL}/blog`, changefreq: 'weekly', priority: '0.9' },
            { loc: `${SITE_URL}/tools`, changefreq: 'weekly', priority: '0.9' },
            { loc: `${SITE_URL}/support`, changefreq: 'monthly', priority: '0.8' },
            // /setup is excluded (noindex)
        ];

        const today = new Date().toISOString().split('T')[0];

        let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!-- Main Pages -->`;

        staticRoutes.forEach(route => {
            sitemapContent += `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
        });

        sitemapContent += `
<!-- Blog Posts -->`;

        blogUrls.forEach(route => {
            sitemapContent += `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
        });

        sitemapContent += `
</urlset>`;

        const publicDir = path.join(__dirname, '../public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }

        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
        console.log(`Sitemap generated successfully with ${blogUrls.length} blog posts.`);

    } catch (error) {
        console.error("Error generating sitemap:", error);
        process.exit(1);
    }
}

generateSitemap();
