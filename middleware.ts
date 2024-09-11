'use server'

import { NextResponse, type NextRequest } from 'next/server'
import { auth } from './lib/auth'
import NextAuth from 'next-auth'
import authConfig from './auth.config'

export const middleware = async (request: NextRequest) => {

  const _auth = await auth()

  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers)
  const redirectPath = encodeURIComponent(request.url.replace('http://', '').replace('https://', '')).split('/')[1] ?? ''
  requestHeaders.set('x-url', redirectPath)

  if (request.nextUrl.pathname != '/signin' && _auth?.user == undefined) {
    NextResponse.redirect(new URL('/signin', request.url))
  }

  NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    }
  })
}