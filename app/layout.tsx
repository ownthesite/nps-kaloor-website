import type { Metadata } from 'next'
import { Inter, Manrope, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ScrollToTop } from "@/components/scroll-to-top";


import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'National Public School Kaloor | Premium CBSE Education',
  description:
    'National Public School Kaloor offers quality CBSE education with focus on academics, sports, and holistic development.',

  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ScrollToTop />
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}