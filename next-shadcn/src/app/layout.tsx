import { cn } from '@/common'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Next-Shadcn',
  description: 'Next.js with shadncn/ui',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('font-sans antialiased', inter.variable)}>{children}</body>
    </html>
  )
}
