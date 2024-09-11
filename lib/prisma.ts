import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

export const runtime = 'edge'

const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })
const adapter = new PrismaNeon(neon)

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') { globalForPrisma.prisma = prisma }