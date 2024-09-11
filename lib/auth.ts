import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import authConfig from '@/auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/signin',
    // signOut: '/signout',
    error: '/signin',
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  debug: process.env.NODE_ENV !== 'development',
  ...authConfig
})