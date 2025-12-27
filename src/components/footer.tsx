import Link from 'next/link'
import { Mountain, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-background to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mountain className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Management Trails
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leiderschap ontwikkelen in de prachtige omgeving van de Kitzbüheler Alpen. 
              Ontdek inspiratie, strategie en teamontwikkeling in Niederau & Wildschönau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trails" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trails
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/locatie" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Locatie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Informatie</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/accommodatie" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accommodatie
                </Link>
              </li>
              <li>
                <Link href="/off-grid" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Off-Grid Concept
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Niederau & Wildschönau<br />
                  Kitzbüheler Alpen, Oostenrijk
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Neem contact op
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Management Trails. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link href="/over-ons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

