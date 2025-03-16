import './css/style.css'
import { Inter } from 'next/font/google'
import ClientLayout from './client-layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Rose Development',
  description: 'We are the #1 web development company in the world. We build the best websites and web applications for your business.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
