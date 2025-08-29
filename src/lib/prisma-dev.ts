import { PrismaClient } from '@prisma/client'
import path from 'node:path'

// Configuración específica para desarrollo (SQLite)
// Usamos ruta absoluta para evitar problemas en Windows con rutas relativas y espacios
const dbAbsolutePath = path
  .resolve(process.cwd(), 'prisma', 'dev.db')
  .replace(/\\/g, '/')

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${dbAbsolutePath}`
    }
  },
  log: ['query', 'error', 'warn']
})