import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

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

    // Create a simple session token
    const sessionToken = `${Date.now()}-${Math.random().toString(36).slice(2, 15)}`

    // Store session in KV with 7 day expiry
    try {
      await kv.set(`session:${sessionToken}`, { createdAt: Date.now() }, { ex: 60 * 60 * 24 * 7 })
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

