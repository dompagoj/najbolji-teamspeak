import { randomBytes } from 'crypto'

export function generateRandomString() {
  return randomBytes(8).toString('hex')
}
