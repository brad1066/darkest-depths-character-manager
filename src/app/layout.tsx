import "./globals.css";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
  title: "Darkest Depths",
  description: "Create and Manage your Darkest Depths Characters",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "h-screen min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
