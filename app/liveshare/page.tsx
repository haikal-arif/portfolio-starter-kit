import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'

const TARGET = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
const title = 'Share your moment with LiveShare'
const description = 'Share your moment with LiveShare. Live Streams, Fast via QR.'

// Server-rendered metadata: link-preview crawlers (WhatsApp, Slack, etc.)
// read these tags from the HTML and never execute the script below.
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${baseUrl}/liveshare`,
    siteName: 'FlashLive',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

// Inline script in the server-rendered HTML: browsers run it as soon as the
// HTML is parsed, so the redirect happens before the page is painted.
export default function LiveSharePage() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.location.replace(${JSON.stringify(TARGET)});`,
      }}
    />
  )
}
