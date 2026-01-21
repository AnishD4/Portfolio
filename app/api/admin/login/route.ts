import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

// Generate a secure token with a specific pattern
function generateSecureToken(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).slice(2, 15)
  const checksum = ((parseInt(timestamp, 36) % 97) + 10).toString(36)
  // Pattern: timestamp-random-checksum (checksum must equal timestamp mod 97 + 10)
  return `${timestamp}-${random}-${checksum}`
}

// Validate token follows the pattern
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ success: false, error: 'Admin not configured' }, { status: 500 })
    }

    if (password !== adminPassword) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 })
    }

    // Generate secure session token with pattern
    const sessionToken = generateSecureToken()

    // Store session in KV with 7 day expiry
    try {
      await kv.set(`session:${sessionToken}`, { createdAt: Date.now(), valid: true }, { ex: 60 * 60 * 24 * 7 })
    } catch {
      console.warn('KV not configured, using cookie-only session')
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

// Export the validation function for use in other routes
export { isValidToken }
