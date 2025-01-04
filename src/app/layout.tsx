import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Aside from '@/components/Aside'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'UFT CHAT',
  description: 'Asistente virtual acerca de la Universidad Fermin Toro',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/uft-logo.webp" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="h-screen overflow-hidden">
          <header className="border-b-2">
            <Link className="mx-auto flex w-fit items-center py-4" href="/">
              <Image
                width={80}
                height={80}
                alt="uft-logo"
                src="/uft-logo.webp"
              />
              <h2 className="mr-[80px] px-10 text-3xl font-bold">
                ASISTENTE UFT
              </h2>
            </Link>
          </header>
          <main className="grid h-[calc(100vh-80px)] grid-cols-4">
            <Aside />
            <section className="col-span-3 h-[calc(100vh-80px)]">
              {children}
            </section>
          </main>
        </main>
      </body>
    </html>
  )
}
