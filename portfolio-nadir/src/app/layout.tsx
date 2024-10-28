import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PortfolioSidebar from '@/components/PortfolioSidebar'

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
    <html lang="fr">
      <body className={inter.className}>
        <PortfolioSidebar>{children}</PortfolioSidebar>
      </body>
    </html>
  )
}
