'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'
import { FaGoogle } from 'react-icons/fa'

export function SignOutButton() {
  return <Button onClick={() => signOut() }>Sign out</Button>
}

export function SignInButton() {
  <Button type="submit" variant="outline" size="icon">
    <FaGoogle />
  </Button>
}