import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Create a PrismaClient with sensible defaults:
 * - logs more verbosely in development
 * - uses a global cache to avoid hot-reload multiple clients in dev (Next.js)
 */
const client = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

export const prisma = global.prisma || client

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}