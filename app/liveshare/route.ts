// Served as a bare HTML document: route handlers are not wrapped by app/layout.tsx,
// so the portfolio navbar and footer never render here.
//
// Link-preview crawlers (WhatsApp, Slack, etc.) read the og:* tags and never run
// the script. Browsers run the script as soon as the HTML is parsed.
const TARGET = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
const TITLE = 'Share your moment with LiveShare'
const DESCRIPTION = 'Share your moment with LiveShare. Live Streams, Fast via QR.'
const URL = 'https://portfolio-blog-starter.vercel.app/liveshare'

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${TITLE}</title>
<meta name="description" content="${DESCRIPTION}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="FlashLive" />
<meta property="og:title" content="${TITLE}" />
<meta property="og:description" content="${DESCRIPTION}" />
<meta property="og:url" content="${URL}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${TITLE}" />
<meta name="twitter:description" content="${DESCRIPTION}" />
<script>window.location.replace(${JSON.stringify(TARGET)});</script>
</head>
<body></body>
</html>
`

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
