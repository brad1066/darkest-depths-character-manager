'use server'

import { NextResponse, type NextRequest } from 'next/server'
import { auth } from './lib/auth'
import NextAuth from 'next-auth'
import authConfig from './auth.config'

export const middleware = async (request: NextRequest) => {

  const _auth = await auth()

  if (request.nextUrl.pathname == '/' && _auth?.user == null) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  if (request.nextUrl.pathname == '/signin' && _auth?.user != null) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}