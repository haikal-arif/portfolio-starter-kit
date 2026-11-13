'use client'

import { useEffect } from 'react'

const TARGET = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
const DELAY_MS = 1400

// Runs only in a browser that executes JavaScript; crawlers that just read
// the HTML stop at the og:* tags rendered by page.tsx.
export default function LiveShareRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(TARGET)
    }, DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return null
}
