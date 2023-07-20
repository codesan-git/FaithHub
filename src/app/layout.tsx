import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from '@/components/ClientOnly'
import Container from '@/components/navbar/Container'
import { ThemeProvider } from '@/components/themes/theme-provider'

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
      <body className={`${inter.className} bg-themes text-themes-foreground dark:bg-themes`}>
        <ThemeProvider>
          <div className='overflow-x-hidden'>
            <div>
              <ClientOnly>
                <Navbar />
              </ClientOnly>
            </div>
            <div>
              <Container>
                {children}
              </Container>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
