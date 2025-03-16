'use client'

import './css/style.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from './context/auth-context'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Rose Development</title>
        <meta name="description" content="We are the #1 web development company in the world. We build the best websites and web applications for your business." />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
