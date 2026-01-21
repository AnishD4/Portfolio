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

    // Generate CSV
    const headers = ['ID', 'Name', 'Email', 'Message', 'Created At', 'IP']
    const csvRows = [headers.join(',')]

    for (const entry of entries) {
      const row = [
        entry.id,
        `"${entry.name.replace(/"/g, '""')}"`,
        `"${entry.email.replace(/"/g, '""')}"`,
        `"${(entry.message || '').replace(/"/g, '""')}"`,
        entry.createdAt,
        entry.ip,
      ]
      csvRows.push(row.join(','))
    }

    const csv = csvRows.join('\n')

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="guestbook-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to generate CSV' }, { status: 500 })
  }
}

