import { PrismaClient } from '@prisma/client'

// Configuración para desarrollo local (SQLite)
const devPrisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./prisma/dev.db'
    }
  },
  log: ['query', 'error', 'warn']
})

// Configuración para producción (Neon PostgreSQL)
const prodPrisma = new PrismaClient({
  log: ['error']
})

// Exportar la instancia correcta según el entorno
export const prisma = process.env.NODE_ENV === 'production' ? prodPrisma : devPrisma

// Función para cambiar manualmente entre bases de datos
export const getPrismaClient = (useProduction: boolean = false) => {
  return useProduction ? prodPrisma : devPrisma
}

// Función para cerrar conexiones
export const disconnectPrisma = async () => {
  await devPrisma.$disconnect()
  await prodPrisma.$disconnect()
} 