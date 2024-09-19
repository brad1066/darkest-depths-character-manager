import GoogleProvider from 'next-auth/providers/google'
import type { NextAuthConfig } from 'next-auth'
import { Role } from '@prisma/client'

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    GoogleProvider({
      id: 'google',
      name: 'Google',
      authorization: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? Role.USER,
          emailVerified: profile.email_verified,
        }
      }
    })],
} satisfies NextAuthConfig