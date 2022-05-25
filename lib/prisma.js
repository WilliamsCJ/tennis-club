import { PrismaClient } from "@prisma/client"

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  })

global.prisma = prisma

export default prisma;
