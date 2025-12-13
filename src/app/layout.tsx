import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Management Trails - Leiderschap in de Oostenrijkse Alpen',
  description: 'Ontdek management trails in Oostenrijk. Breng uw managementteam naar de Alpen voor inspiratie, strategie en teamontwikkeling.',
  keywords: 'management trails, leiderschap, teamontwikkeling, Oostenrijk, Alpen, strategie'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
