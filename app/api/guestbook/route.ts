import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

interface GuestbookEntry {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
  ip: string
}

// Rate limit: 5 submissions per IP per hour
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, website } = body

    // Honeypot check
    if (website) {
      return NextResponse.json({ success: false, error: 'Invalid submission' }, { status: 400 })
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 50) {
      return NextResponse.json({ success: false, error: 'Name is required (1-50 characters)' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json({ success: false, error: 'Valid email is required' }, { status: 400 })
    }

    const sanitizedMessage = message?.trim().slice(0, 500) || ''

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown'

    // Rate limiting using Vercel KV
    const rateLimitKey = `ratelimit:${ip}`
    const now = Date.now()

    try {
      const timestamps: number[] = (await kv.get(rateLimitKey)) || []
      const recentTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW)

      if (recentTimestamps.length >= RATE_LIMIT) {
        const oldestTimestamp = Math.min(...recentTimestamps)
        const retryAfter = Math.ceil((oldestTimestamp + RATE_LIMIT_WINDOW - now) / 1000)
        return NextResponse.json(
          { success: false, error: 'Too many submissions. Please try again later.', retryAfter },
          { status: 429 }
        )
      }

      // Update rate limit timestamps
      recentTimestamps.push(now)
      await kv.set(rateLimitKey, recentTimestamps, { ex: 3600 }) // expire in 1 hour
    } catch {
      // If KV is not configured, skip rate limiting (development mode)
      console.warn('Vercel KV not configured, skipping rate limit')
    }

    // Create entry
    const entry: GuestbookEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      name: name.trim(),
      email: email.trim(),
      message: sanitizedMessage,
      createdAt: new Date().toISOString(),
      ip,
    }

    // Store in Vercel KV
    try {
      const entries: GuestbookEntry[] = (await kv.get('guestbook:entries')) || []
      entries.unshift(entry)
      await kv.set('guestbook:entries', entries)
    } catch {
      // If KV is not configured, store in memory (development only)
      console.warn('Vercel KV not configured, entry not persisted')
    }

    return NextResponse.json({ success: true, id: entry.id, createdAt: entry.createdAt }, { status: 201 })
  } catch (error) {
    console.error('Guestbook POST error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const entries: GuestbookEntry[] = (await kv.get('guestbook:entries')) || []
    // Return public entries without email and IP
    const publicEntries = entries.map(({ id, name, message, createdAt }) => ({
      id,
      name,
      message,
      createdAt,
    }))
    return NextResponse.json({ success: true, entries: publicEntries })
  } catch {
    return NextResponse.json({ success: true, entries: [] })
  }
}

