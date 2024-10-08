import {
  type DefaultSession,
  type DefaultUser,
} from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: DefaultSession['user'] & {
      id: string
      role?: Role
    };
  }
  interface User extends DefaultUser {
    role?: Role;
  }
}