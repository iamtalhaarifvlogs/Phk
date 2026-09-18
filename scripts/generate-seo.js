import fs from 'fs'
import path from 'path'

const domain = 'https://purpleheartskarachi.site'

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${domain}/</loc><priority>1.0</priority></url>
  <url><loc>${domain}/about</loc><priority>0.8</priority></url>
  <url><loc>${domain}/services</loc><priority>0.8</priority></url>
  <url><loc>${domain}/work</loc><priority>0.8</priority></url>
  <url><loc>${domain}/talent</loc><priority>0.8</priority></url>
  <url><loc>${domain}/karachi</loc><priority>0.7</priority></url>
  <url><loc>${domain}/contact</loc><priority>0.7</priority></url>
</urlset>`

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`

const publicDir = path.join(process.cwd(), 'public')

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)

console.log('SEO files generated in /public')
