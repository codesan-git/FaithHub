import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly'
import Container from '@/components/navbar/Container'
import Themechanger from '@/components/themes/Themechanger'
import Providers from '@/components/themes/Themeprovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <div className='overflow-x-hidden'>
            <Themechanger />
            <ClientOnly>
              <Navbar />
            </ClientOnly>
            <div>
              <Container>
                {children}
              </Container>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
