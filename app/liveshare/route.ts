// Served as a bare HTML document: route handlers are not wrapped by app/layout.tsx,
// so the portfolio navbar and footer never render here.
//
// Link-preview crawlers (WhatsApp, Slack, etc.) read the og:* tags only.
// Browsers get a full-screen YouTube embed that autoplays muted (browsers block
// unmuted autoplay); the viewer can unmute from the player controls.
const EMBED = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&playsinline=1'
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
<style>
html, body { margin: 0; height: 100%; background: #000; }
iframe { position: fixed; inset: 0; width: 100%; height: 100%; border: 0; }
</style>
</head>
<body>
<iframe
  src="${EMBED}"
  title="${TITLE}"
  allow="autoplay; encrypted-media; picture-in-picture"
  allowfullscreen
></iframe>
</body>
</html>
`

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
