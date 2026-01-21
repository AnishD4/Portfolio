import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Get the current session token to invalidate it in KV
  const sessionToken = request.cookies.get('admin_session')?.value

  if (sessionToken) {
    try {
      // Delete the session from KV
      await kv.del(`session:${sessionToken}`)
    } catch {
      console.warn('KV not configured')
    }
  }

  const response = NextResponse.json({ success: true })

  // Set an invalid token pattern (wrong checksum) so it fails validation
  const invalidToken = 'invalid-logout-xxx'

  response.cookies.set('admin_session', invalidToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0, // Expire immediately
    path: '/',
  })

  return response
}
