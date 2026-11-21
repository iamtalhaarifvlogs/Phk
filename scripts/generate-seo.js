import fs from 'fs'
import path from 'path'

const domain = 'https://purpleheartskarachi.site'

const blogSlugs = [
  'guide-to-hotel-outcalls-karachi',
  'discretion-and-privacy-verified-companions',
  'vip-companionship-dha-clifton-bahria-town',
  'transparent-rates-booking-call-girls-karachi',
  'demand-for-call-girls-in-karachi-overview',
  'independent-call-girls-in-karachi-vs-agency-based',
  'premium-karachi-escorts-for-upscale-evenings',
  'karachi-escorts-near-me-privacy-and-timing',
  'escorts-in-clifton-karachi-evening-guide',
  'escorts-in-dha-karachi-phase-planning',
  'karachi-escorts-in-gulshan-e-iqbal-timing-guide',
  'vip-karachi-escorts-in-pc-hotel-discretion',
  'call-girls-in-karachi-hotels-booking-checklist',
  'student-call-girls-in-karachi-schedules-and-checks',
  'elite-and-vip-call-girls-comparing-tiers',
  'celebrity-escorts-in-karachi-realistic-expectations',
  'vetting-vip-escorts-in-karachi-before-booking',
  'evening-routing-escorts-in-dha-karachi-and-clifton',
  'last-minute-requests-karachi-escorts-near-me',
  'structured-outcalls-for-call-girls-in-karachi-hotels',
  'why-vip-escorts-in-karachi-know-how-to-keep-you-coming-back-all-night',
  'thick-karachi-escorts-in-dha-who-love-to-take-control-behind-closed-doors',
  'why-celebrity-escorts-in-karachi-are-worth-every-rupee-for-an-overnight-stay',
  'how-independent-call-girls-in-karachi-make-late-night-hotel-visits-unforgettable',
  'why-busty-escorts-in-clifton-karachi-are-the-top-pick-for-passionate-nights',
  'what-happens-when-you-book-vip-karachi-escorts-in-pc-hotel-for-the-whole-night',
  'why-young-student-call-girls-in-karachi-love-wild-weekend-encounters',
  'curvy-karachi-escorts-who-love-rough-and-passionate-positions-all-night',
  'why-high-profile-men-prefer-agency-based-call-girls-in-karachi-hotels',
  'spending-a-wild-unhurried-night-with-elite-and-vip-call-girls-in-marriott-karachi',
  'why-mature-and-thick-escorts-in-karachi-know-every-trick-to-satisfy-you',
  'late-night-cravings-finding-karachi-escorts-near-me-for-instant-hotel-outcalls',
  'why-vip-escorts-in-karachi-love-extended-overnight-stays-in-luxury-suites',
  'how-premium-karachi-escorts-turn-an-ordinary-business-trip-into-pure-pleasure',
  'why-slim-and-curvy-escorts-in-gulshan-e-iqbal-are-in-such-high-demand',
  'what-makes-pakistani-celebrity-escorts-in-karachi-irresistible-after-midnight',
  'why-men-choose-thick-karachi-escorts-over-skinny-models-every-single-time',
  'full-night-rates-and-wild-experiences-with-vip-karachi-escorts-in-avari-towers',
  'how-independent-call-girls-in-karachi-satisfy-your-deepest-fantasies-discreetly',
  'why-booking-two-premium-karachi-escorts-together-is-the-ultimate-vip-experience',
  'guide-to-luxury-hotel-outcalls-karachi',
  'understanding-the-demand-for-call-girls-in-karachi',
  'independent-call-girls-vs-agency-based-call-girls-karachi',
  'what-to-expect-from-premium-karachi-escorts',
  'finding-karachi-escorts-near-me-safely-and-discreetly',
  'escorts-in-clifton-karachi-seaside-and-evening-guide',
  'escorts-in-dha-karachi-phases-1-to-8-overview',
  'karachi-escorts-in-gulshan-e-iqbal-central-city-guide',
  'vip-karachi-escorts-in-pc-hotel-suite-etiquette',
  'call-girls-in-karachi-hotels-outcall-checklist',
  'understanding-student-call-girls-in-karachi-profiles',
  'comparing-elite-and-vip-call-girls-in-karachi',
  'celebrity-escorts-in-karachi-separating-hype-from-reality',
  'evening-planning-with-escorts-in-dha-karachi-and-clifton',
  'short-notice-requests-for-karachi-escorts-near-me',
  'why-hotel-guests-prefer-structured-call-girls-in-karachi-hotels',
  'central-karachi-guide-gulshan-e-iqbal-and-nearby-areas',
  'etiquette-and-boundaries-with-premium-karachi-escorts',
  'comparing-independent-and-agency-options-in-clifton-and-dha',
  'planning-ahead-for-peak-demand-for-call-girls-in-karachi',
  'etiquette-for-vip-event-companionship',
  'importance-of-discretion-verified-agencies',
  'exploring-karachi-nightlife-safe-luxury-travel',
  'dha-phase-8-luxury-outcalls-complete-overview',
  'bahria-town-karachi-premium-companion-services',
  'pechs-and-tariq-road-independent-escort-guide',
  'transparent-pricing-guide-karachi-escort-rates',
  'complete-guide-to-hotel-outcalls-karachi',
  'vip-companionship-dha-and-clifton-karachi',
  'discretion-and-verification-standards-karachi',
  'gulshan-e-iqbal-and-nazimabad-vip-escort-services',
  'transparent-rates-and-packages-for-karachi-call-girls',
]

const uniqueBlogSlugs = [...new Set(blogSlugs)]

const blogUrlEntries = uniqueBlogSlugs
  .map((slug) => `  <url><loc>${domain}/blogs/${slug}</loc><priority>0.7</priority></url>`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${domain}/</loc><priority>1.0</priority></url>
  <url><loc>${domain}/about</loc><priority>0.8</priority></url>
  <url><loc>${domain}/services</loc><priority>0.8</priority></url>
  <url><loc>${domain}/work</loc><priority>0.8</priority></url>
  <url><loc>${domain}/talent</loc><priority>0.8</priority></url>
  <url><loc>${domain}/karachi</loc><priority>0.7</priority></url>
  <url><loc>${domain}/contact</loc><priority>0.7</priority></url>
  <url><loc>${domain}/blogs</loc><priority>0.9</priority></url>
${blogUrlEntries}
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

console.log(`SEO files generated in /public (${uniqueBlogSlugs.length} blog URLs)`)
