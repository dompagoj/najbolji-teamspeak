import { randomBytes } from 'crypto'

export function generateRandomBytes() {
  return randomBytes(8).toString('hex')
}