import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import '../styles/globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { siteConfig } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.payoff}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Een exclusieve, volledig verzorgde ondernemersreis naar Niederau in Tirol. Vijf dagen coaching, bewegen en genieten — met een heldere koers en een concreet actieplan als resultaat.',
  keywords:
    'ondernemersretreat, businesscoaching, Tirol, Wildschönau, Niederau, leiderschap, hiken, mountainbiken, managementteam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
