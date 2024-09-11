'use server'

import { GoogleSignIn } from '@/components/auth-components'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function SignInPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const session = await auth()

  if (session?.user && searchParams.redirect) {
    redirect(searchParams.redirect as string)
  } else if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex flex-col gap-2">
      <GoogleSignIn />
    </div>
  )
}