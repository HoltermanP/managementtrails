import Link from 'next/link'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { MapPin, CalendarDays, Users, Euro } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { images } from '@/lib/content'

const facts = [
  { icon: MapPin, label: 'Locatie', value: 'Niederau – Wildschönau, Tirol' },
  { icon: CalendarDays, label: 'Duur', value: 'Maandag t/m vrijdag' },
  { icon: Users, label: 'Groep', value: 'Maximaal 8 deelnemers' },
  { icon: Euro, label: 'Investering', value: '€ 2.500 p.p. excl. btw' },
]

export function Hero() {
  return (
    <section className="relative">
      <div className="relative min-h-[88svh] flex items-center">
        <SafeImage
          src={images.heroValley.src}
          fallbackSrc={images.heroValley.fallback}
          alt={images.heroValley.alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/10" />

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze brightness-150">
              {siteConfig.tagline}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
              Vijf dagen afstand nemen om scherper terug te komen.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              Een exclusieve ondernemersreis in de Tiroler Alpen, waarin coaching,
              fysieke uitdaging, luxe en goed gezelschap samenkomen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-bronze text-white hover:bg-bronze/90">
                <Link href="/edities">Bekijk de eerstvolgende editie</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
              >
                <Link href="/aanmelden">Meld je aan voor een kennismaking</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 py-8">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <fact.icon className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-primary">{fact.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
