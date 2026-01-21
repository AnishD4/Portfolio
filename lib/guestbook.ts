import { kv } from '@vercel/kv'

export interface GuestbookEntry {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
  ip: string
}

// In-memory fallback for when KV is not available (shared across all routes)
let memoryEntries: GuestbookEntry[] = []

export async function getEntries(): Promise<GuestbookEntry[]> {
  try {
    const entries = await kv.get<GuestbookEntry[]>('guestbook:entries')
    if (entries) {
      // Sync memory with KV
      memoryEntries = entries
      return entries
    }
    return memoryEntries
  } catch (error) {
    console.warn('KV not available, using memory storage:', error)
    return memoryEntries
  }
}

export async function saveEntry(entry: GuestbookEntry): Promise<boolean> {
  try {
    // Get current entries
    let entries: GuestbookEntry[] = []
    try {
      entries = (await kv.get<GuestbookEntry[]>('guestbook:entries')) || []
    } catch {
      entries = memoryEntries
    }

    // Remove any existing entries with the same email (keep only latest)
    entries = entries.filter(e => e.email.toLowerCase() !== entry.email.toLowerCase())

    // Add new entry at the beginning
    entries.unshift(entry)

    // Save to KV
    try {
      await kv.set('guestbook:entries', entries)
    } catch {
      console.warn('KV not available, saving to memory only')
    }

    // Always save to memory as backup
    memoryEntries = entries

    return true
  } catch (error) {
    console.error('Error saving entry:', error)
    return false
  }
}

export function getMemoryEntries(): GuestbookEntry[] {
  return memoryEntries
}

