import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined ;
}

export const prisma = global.prisma || new PrismaClient()


if ( process.env.NODE_ENV !== "production") {global.prisma = prisma;}
// id de el commit al que quiero regresar la rama main 001ec69