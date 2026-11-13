import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'
import LiveShareRedirect from './redirect'

const title = 'Share your moment with LiveShare'
const description = 'Share your moment with LiveShare. Live Streams, Fast via QR.'

// Server-rendered metadata: link-preview crawlers (WhatsApp, Slack, etc.)
// read these tags from the HTML and never run the client redirect below.
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

export default function LiveSharePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <div className="h-[88px] w-[88px] rounded-[22px] bg-red-500 flex items-center justify-center p-6">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" />
        </svg>
      </div>
      <h1 className="mt-4 text-2xl font-semibold tracking-tighter">FlashLive</h1>
      <p className="mt-1 text-sm text-neutral-500">{description}</p>
      <LiveShareRedirect />
    </section>
  )
}
