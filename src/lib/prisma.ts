// import { PrismaClient } from '@prisma/client'
// import { PrismaNeon } from '@prisma/adapter-neon'
// import { Pool, neonConfig } from '@neondatabase/serverless'
// const ws = require('ws')


// if (typeof window === 'undefined') {
//   neonConfig.webSocketConstructor = ws
// }

// const connectionString = "postgresql://neondb_owner:npg_OUJ3goa1sAWb@ep-late-haze-adukc0mp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
// if(!connectionString){
// throw new Error("DATABASE_URL no encontrada en env")
// }
// const pool = new Pool({ connectionString })
// const adapter = new PrismaNeon(pool as any)

// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma = 
//   globalForPrisma.prisma || 
//   new PrismaClient({ 
//     adapter,
//     log: ['query', 'error', 'warn'],
//   })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'


const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })
export const prisma = new PrismaClient({ adapter })