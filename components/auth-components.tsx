'use client'

import { signIn } from 'next-auth/react'
import { Button } from './ui/button'

export function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>
}