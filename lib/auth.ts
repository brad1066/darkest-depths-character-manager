import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import authConfig from '@/auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async session({ session, user }) {
      session.user.role = user.role
      return session
    }
  },
  ...authConfig
})