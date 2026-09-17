import { createAPIFileRoute } from '@tanstack/react-start/api'

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://purpleheartskarachi.site/sitemap.xml`

export const Route = createAPIFileRoute('/robots.txt')({
  GET: () =>
    new Response(robotsTxt, {
      headers: {
        'Content-Type': 'text/plain',
      },
    }),
})
