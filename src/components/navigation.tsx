'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Trails', href: '/trails' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-primary">
              Management Trails
            </Link>
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Button asChild>
            <Link href="/trails">Bekijk Trails</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
