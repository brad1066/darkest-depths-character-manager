import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import UserDropdown from '@/components/user-dropdown'
import { ThemeProvider } from '../providers/theme-provider'
import { SessionProvider } from 'next-auth/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Darkest Depths',
  description: 'Character Manager for Darkest Depths',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className='header-grid'>
              <h1 className='text-2xl'>Darkest Depths Manager</h1>
              <UserDropdown/>
            </header>
            <main className='px-4'>

              {children}
            </main>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
