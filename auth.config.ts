import Google from 'next-auth/providers/google'
import type { NextAuthConfig } from 'next-auth'
import { Role } from '@prisma/client'

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      authorization: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      },
      profile: (profile) => {
        return {
          role: profile.role ?? Role.USER,
          ...profile
        }
      }
    })],
} satisfies NextAuthConfig