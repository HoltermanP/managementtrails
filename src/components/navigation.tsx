'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Mountain } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Trails', href: '/trails' },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/99 backdrop-blur-xl supports-[backdrop-filter]:bg-background/98 shadow-2xl">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mountain className="h-5 w-5 text-primary" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Management Trails
              </span>
            </Link>
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300">
            <Link href="/trails">Bekijk Trails</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}



