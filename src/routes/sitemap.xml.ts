import { createFileRoute } from '@tanstack/react-router'

const BASE_URL = 'https://purpleheartskarachi.site'

interface SitemapBlogEntry {
  slug: string
  lastmod: string
}

const BLOG_ENTRIES: SitemapBlogEntry[] = [
  { slug: 'guide-to-hotel-outcalls-karachi', lastmod: '2026-11-15' },
  { slug: 'discretion-and-privacy-verified-companions', lastmod: '2026-11-11' },
  { slug: 'vip-companionship-dha-clifton-bahria-town', lastmod: '2026-11-06' },
  { slug: 'transparent-rates-booking-call-girls-karachi', lastmod: '2026-10-30' },
  { slug: 'demand-for-call-girls-in-karachi-overview', lastmod: '2026-11-19' },
  { slug: 'independent-call-girls-in-karachi-vs-agency-based', lastmod: '2026-11-18' },
  { slug: 'premium-karachi-escorts-for-upscale-evenings', lastmod: '2026-11-17' },
  { slug: 'karachi-escorts-near-me-privacy-and-timing', lastmod: '2026-11-16' },
  { slug: 'escorts-in-clifton-karachi-evening-guide', lastmod: '2026-11-15' },
  { slug: 'escorts-in-dha-karachi-phase-planning', lastmod: '2026-11-14' },
  { slug: 'karachi-escorts-in-gulshan-e-iqbal-timing-guide', lastmod: '2026-11-13' },
  { slug: 'vip-karachi-escorts-in-pc-hotel-discretion', lastmod: '2026-11-12' },
  { slug: 'call-girls-in-karachi-hotels-booking-checklist', lastmod: '2026-11-11' },
  { slug: 'student-call-girls-in-karachi-schedules-and-checks', lastmod: '2026-11-10' },
  { slug: 'elite-and-vip-call-girls-comparing-tiers', lastmod: '2026-11-09' },
  { slug: 'celebrity-escorts-in-karachi-realistic-expectations', lastmod: '2026-11-08' },
  { slug: 'vetting-vip-escorts-in-karachi-before-booking', lastmod: '2026-11-07' },
  { slug: 'evening-routing-escorts-in-dha-karachi-and-clifton', lastmod: '2026-11-06' },
  { slug: 'last-minute-requests-karachi-escorts-near-me', lastmod: '2026-11-05' },
  { slug: 'structured-outcalls-for-call-girls-in-karachi-hotels', lastmod: '2026-11-04' },
  {
    slug: 'why-vip-escorts-in-karachi-know-how-to-keep-you-coming-back-all-night',
    lastmod: '2026-11-21',
  },
  {
    slug: 'thick-karachi-escorts-in-dha-who-love-to-take-control-behind-closed-doors',
    lastmod: '2026-11-21',
  },
  {
    slug: 'why-celebrity-escorts-in-karachi-are-worth-every-rupee-for-an-overnight-stay',
    lastmod: '2026-11-20',
  },
  {
    slug: 'how-independent-call-girls-in-karachi-make-late-night-hotel-visits-unforgettable',
    lastmod: '2026-11-20',
  },
  {
    slug: 'why-busty-escorts-in-clifton-karachi-are-the-top-pick-for-passionate-nights',
    lastmod: '2026-11-20',
  },
  {
    slug: 'what-happens-when-you-book-vip-karachi-escorts-in-pc-hotel-for-the-whole-night',
    lastmod: '2026-11-19',
  },
  {
    slug: 'why-young-student-call-girls-in-karachi-love-wild-weekend-encounters',
    lastmod: '2026-11-19',
  },
  {
    slug: 'curvy-karachi-escorts-who-love-rough-and-passionate-positions-all-night',
    lastmod: '2026-11-18',
  },
  {
    slug: 'why-high-profile-men-prefer-agency-based-call-girls-in-karachi-hotels',
    lastmod: '2026-11-18',
  },
  {
    slug: 'spending-a-wild-unhurried-night-with-elite-and-vip-call-girls-in-marriott-karachi',
    lastmod: '2026-11-17',
  },
  {
    slug: 'why-mature-and-thick-escorts-in-karachi-know-every-trick-to-satisfy-you',
    lastmod: '2026-11-17',
  },
  {
    slug: 'late-night-cravings-finding-karachi-escorts-near-me-for-instant-hotel-outcalls',
    lastmod: '2026-11-16',
  },
  {
    slug: 'why-vip-escorts-in-karachi-love-extended-overnight-stays-in-luxury-suites',
    lastmod: '2026-11-16',
  },
  {
    slug: 'how-premium-karachi-escorts-turn-an-ordinary-business-trip-into-pure-pleasure',
    lastmod: '2026-11-15',
  },
  {
    slug: 'why-slim-and-curvy-escorts-in-gulshan-e-iqbal-are-in-such-high-demand',
    lastmod: '2026-11-15',
  },
  {
    slug: 'what-makes-pakistani-celebrity-escorts-in-karachi-irresistible-after-midnight',
    lastmod: '2026-11-14',
  },
  {
    slug: 'why-men-choose-thick-karachi-escorts-over-skinny-models-every-single-time',
    lastmod: '2026-11-14',
  },
  {
    slug: 'full-night-rates-and-wild-experiences-with-vip-karachi-escorts-in-avari-towers',
    lastmod: '2026-11-13',
  },
  {
    slug: 'how-independent-call-girls-in-karachi-satisfy-your-deepest-fantasies-discreetly',
    lastmod: '2026-11-13',
  },
  {
    slug: 'why-booking-two-premium-karachi-escorts-together-is-the-ultimate-vip-experience',
    lastmod: '2026-11-12',
  },
  { slug: 'guide-to-luxury-hotel-outcalls-karachi', lastmod: '2026-11-14' },
  { slug: 'understanding-the-demand-for-call-girls-in-karachi', lastmod: '2026-11-19' },
  {
    slug: 'independent-call-girls-vs-agency-based-call-girls-karachi',
    lastmod: '2026-11-18',
  },
  { slug: 'what-to-expect-from-premium-karachi-escorts', lastmod: '2026-11-17' },
  { slug: 'finding-karachi-escorts-near-me-safely-and-discreetly', lastmod: '2026-11-16' },
  { slug: 'escorts-in-clifton-karachi-seaside-and-evening-guide', lastmod: '2026-11-15' },
  { slug: 'escorts-in-dha-karachi-phases-1-to-8-overview', lastmod: '2026-11-14' },
  { slug: 'karachi-escorts-in-gulshan-e-iqbal-central-city-guide', lastmod: '2026-11-13' },
  { slug: 'vip-karachi-escorts-in-pc-hotel-suite-etiquette', lastmod: '2026-11-12' },
  { slug: 'call-girls-in-karachi-hotels-outcall-checklist', lastmod: '2026-11-11' },
  { slug: 'understanding-student-call-girls-in-karachi-profiles', lastmod: '2026-11-10' },
  { slug: 'comparing-elite-and-vip-call-girls-in-karachi', lastmod: '2026-11-09' },
  { slug: 'celebrity-escorts-in-karachi-separating-hype-from-reality', lastmod: '2026-11-08' },
  { slug: 'evening-planning-with-escorts-in-dha-karachi-and-clifton', lastmod: '2026-11-06' },
  { slug: 'short-notice-requests-for-karachi-escorts-near-me', lastmod: '2026-11-05' },
  {
    slug: 'why-hotel-guests-prefer-structured-call-girls-in-karachi-hotels',
    lastmod: '2026-11-04',
  },
  {
    slug: 'central-karachi-guide-gulshan-e-iqbal-and-nearby-areas',
    lastmod: '2026-11-03',
  },
  { slug: 'etiquette-and-boundaries-with-premium-karachi-escorts', lastmod: '2026-11-02' },
  {
    slug: 'comparing-independent-and-agency-options-in-clifton-and-dha',
    lastmod: '2026-11-01',
  },
  {
    slug: 'planning-ahead-for-peak-demand-for-call-girls-in-karachi',
    lastmod: '2026-10-31',
  },
  { slug: 'etiquette-for-vip-event-companionship', lastmod: '2026-11-10' },
  { slug: 'importance-of-discretion-verified-agencies', lastmod: '2026-11-05' },
  { slug: 'exploring-karachi-nightlife-safe-luxury-travel', lastmod: '2026-10-28' },
  { slug: 'dha-phase-8-luxury-outcalls-complete-overview', lastmod: '2026-10-22' },
  { slug: 'bahria-town-karachi-premium-companion-services', lastmod: '2026-10-18' },
  { slug: 'pechs-and-tariq-road-independent-escort-guide', lastmod: '2026-10-12' },
  { slug: 'transparent-pricing-guide-karachi-escort-rates', lastmod: '2026-10-05' },
  { slug: 'complete-guide-to-hotel-outcalls-karachi', lastmod: '2026-11-18' },
  { slug: 'vip-companionship-dha-and-clifton-karachi', lastmod: '2026-11-14' },
  { slug: 'discretion-and-verification-standards-karachi', lastmod: '2026-11-10' },
  { slug: 'gulshan-e-iqbal-and-nazimabad-vip-escort-services', lastmod: '2026-11-05' },
  { slug: 'transparent-rates-and-packages-for-karachi-call-girls', lastmod: '2026-10-28' },
]

function buildSitemapXml(): string {
  const seenSlugs = new Set<string>()
  const uniqueBlogUrls = BLOG_ENTRIES.filter((entry) => {
    if (seenSlugs.has(entry.slug)) {
      return false
    }
    seenSlugs.add(entry.slug)
    return true
  })
    .map(
      (entry) => `  <url>
    <loc>${BASE_URL}/blogs/${entry.slug}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/services</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/work</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/talent</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/karachi</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/contact</loc>
    <lastmod>2026-09-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/blogs</loc>
    <lastmod>2026-11-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
${uniqueBlogUrls}
</urlset>`
}

const sitemapXml = buildSitemapXml()

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml, {
          headers: {
            'Content-Type': 'application/xml',
          },
        }),
    },
  },
})
