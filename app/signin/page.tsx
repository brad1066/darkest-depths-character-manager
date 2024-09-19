'use server'

import { redirect } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FaGoogle } from 'react-icons/fa'

export default async function SignInPage() {
  return (
    <Card className="m-auto w-min-[40rem] w-[50%]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in with one of these options:</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
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
          <Button type="submit" variant="outline" size="icon">
            <FaGoogle />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}