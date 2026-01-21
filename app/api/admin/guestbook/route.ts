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

// Validate token follows the secure pattern
function isValidToken(token: string): boolean {
  if (!token) return false
  const parts = token.split('-')
  if (parts.length !== 3) return false

  const [timestamp, random, checksum] = parts
  if (!timestamp || !random || !checksum) return false
  if (random.length < 5) return false

  // Verify checksum matches pattern
  const expectedChecksum = ((parseInt(timestamp, 36) % 97) + 10).toString(36)
  return checksum === expectedChecksum
}

async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const sessionToken = request.cookies.get('admin_session')?.value
  if (!sessionToken) return false

  // First check if token follows the valid pattern
  if (!isValidToken(sessionToken)) return false

  try {
    // Then verify it exists in KV and is valid
    const session = await kv.get(`session:${sessionToken}`)
    return !!session
  } catch {
    // If KV not configured, just check pattern (dev mode)
    return isValidToken(sessionToken)
  }
}

export async function GET(request: NextRequest) {
  const isAdmin = await verifyAdmin(request)
  if (!isAdmin) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const entries: GuestbookEntry[] = (await kv.get('guestbook:entries')) || []
    return NextResponse.json({ success: true, entries })
  } catch (error) {
    console.error('Error fetching guestbook entries:', error)
    return NextResponse.json({ success: true, entries: [] })
  }
}
