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

async function verifyAdmin(request: NextRequest): Promise<boolean> {
  const sessionToken = request.cookies.get('admin_session')?.value
  if (!sessionToken) return false

  try {
    const session = await kv.get(`session:${sessionToken}`)
    return !!session
  } catch {
    // If KV not configured, just check cookie exists (dev mode)
    return !!sessionToken
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
  } catch {
    return NextResponse.json({ success: true, entries: [] })
  }
}

