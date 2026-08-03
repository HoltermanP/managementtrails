import Link from 'next/link'
import { Mountain, MapPin, CalendarDays } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4 lg:col-span-2 lg:pr-16">
            <div className="flex items-center gap-2.5">
              <Mountain className="h-6 w-6 text-bronze" strokeWidth={1.5} />
              <span className="font-serif text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-md">
              {siteConfig.payoff}. Een exclusieve, volledig verzorgde ondernemersreis
              naar Niederau in de Oostenrijkse regio Wildschönau — coaching, bewegen
              en genieten in een groep van maximaal acht deelnemers.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/aanmelden"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Aanmelden
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze mb-4">
              Praktisch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Kristall Plaza
                  <br />
                  Niederau – Wildschönau, Tirol
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CalendarDays className="h-4 w-4 text-bronze mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Edities in mei en september
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link
              href="/edities#annulering"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Annuleringsregeling
            </Link>
            <Link
              href="/faq"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Veelgestelde vragen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
