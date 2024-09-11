import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

export const runtime = 'edge'

const neon = new Pool({
  connectionString: process.env.DATABASE_PRISMA_URL,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
})
const adapter = new PrismaNeon(neon)

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter }).$extends(withAccelerate())

if (process.env.NODE_ENV !== 'production') { globalForPrisma.prisma = prisma }