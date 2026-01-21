import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atharv Amey Dhore | Portfolio',
  description: 'Personal portfolio of Atharv Amey Dhore - Computer Science Student, Developer, and Innovator',
  keywords: ['portfolio', 'developer', 'computer science', 'react', 'next.js', 'atharv dhore'],
  authors: [{ name: 'Atharv Amey Dhore' }],
  openGraph: {
    title: 'Atharv Amey Dhore | Portfolio',
    description: 'Personal portfolio of Atharv Amey Dhore - Computer Science Student, Developer, and Innovator',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

