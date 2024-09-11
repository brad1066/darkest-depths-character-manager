import NextAuth from 'next-auth'
import { Provider } from 'next-auth/providers'
import Google from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

const providers: Provider[] = [
  Google({
    authorization: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      params: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
      },
    },
  })
]

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === 'function') {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== 'credentials')

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/signin',
  },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV !== 'development',
})