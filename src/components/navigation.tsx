'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Mountain, Menu, X } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/site'

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="container mx-auto px-4">
        <div className="flex h-18 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <Mountain className="h-6 w-6 text-bronze" strokeWidth={1.5} />
            <span className="font-serif text-lg md:text-xl text-primary leading-none">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm transition-colors',
                  pathname === item.href
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="/aanmelden">Aanmelden</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'px-3 py-2.5 text-base rounded-md transition-colors',
                    pathname === item.href
                      ? 'text-primary font-semibold bg-secondary'
                      : 'text-muted-foreground hover:text-primary hover:bg-secondary/60'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-3">
                <Link href="/aanmelden" onClick={() => setOpen(false)}>
                  Aanmelden
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
