// Validate token follows the secure pattern
// Pattern: timestamp-random-checksum (checksum must equal timestamp mod 97 + 10)
export function isValidToken(token: string): boolean {
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

// Generate a secure token with a specific pattern
export function generateSecureToken(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).slice(2, 15)
  const checksum = ((parseInt(timestamp, 36) % 97) + 10).toString(36)
  return `${timestamp}-${random}-${checksum}`
}

