import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PortfolioSidebar from '@/components/PortfolioSidebar'
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio de Nadir Oubah',
  description: 'Portfolio de Nadir Oubah, Développeur Web Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PortfolioSidebar>{children}</PortfolioSidebar>
        </ThemeProvider>
      </body>
    </html>
  )
}