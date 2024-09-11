'use server'
import { signIn, signOut } from '@/lib/auth'
import { Button } from './ui/button'
import Link from 'next/link'
import { headers as httpHeaders } from 'next/headers'


export const SignInButton = async () => {
  const headers = httpHeaders()
  const redirect = headers.get('x-url') && headers.get('x-url') !== '/signin' ? `?redirect=${headers.get('x-url')}` : ''
  return (
    <Button asChild>
      <Link type="button" href={`/signin${redirect}`}>Sign in</Link>
    </Button>
  )
}

export const SignOutButton = async () => {
  return (
    <form
      action={async () => {
      }}
    >
      <Button type="submit" onClick={async () => { 'use server'; await signOut() }}>Sign out</Button>
    </form>
  )
}

export const GoogleSignIn = async () => {
  return (
    <Button type="submit" onClick={async () => { 'use server'; await signIn('google') }}>Sign in with Google</Button>
  )
}