import { redirect } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth'
import { Button } from '@/components/ui/button'

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      <form
        action={async () => {
          'use server'
          try {
            await signIn('google')
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/api/auth/signin&error=${error.type}`)
            }
            throw error
          }
        }}
      >
        <Button type="submit">Sign in with Google</Button>
      </form>
    </div>
  )
}