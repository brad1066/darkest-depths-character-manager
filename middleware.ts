'use server'

import { NextResponse } from 'next/server'
import { auth } from './lib/auth'

export const middleware = async (request: Request) => {

  const _auth = await auth()

  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers)
  const redirectPath = encodeURIComponent(request.url.replace('http://', '').replace('https://', '')).split('/')[1] ?? ''
  requestHeaders.set('x-url', redirectPath)

  if (!_auth?.user) {
    NextResponse.redirect(new URL('/signin', request.url))
  }

  const response = NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  })
}