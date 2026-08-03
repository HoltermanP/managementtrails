import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Kicker, SectionHeading } from '@/components/section'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, User, Building2 } from 'lucide-react'
import { momenten, distinctives, images } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Voor wie',
  description:
    'Voor ondernemers, zzp’ers, managers en directeuren die bewust tijd vrijmaken voor ontwikkeling — individueel of als besloten bedrijfs- of managementteam.',
}

export default function VoorWiePage() {
  return (
    <div>
      <PageHeader
        kicker="Positionering"
        title="Voor wie is deze reis?"
        intro="Voor ondernemers, zzp’ers, managers en directeuren die bewust tijd willen vrijmaken voor ontwikkeling. Ervaring of functieniveau is niet doorslaggevend. De gemeenschappelijke factor is de bereidheid om open te reflecteren, actief bij te dragen en fysiek uitgedaagd te worden."
      />

      {/* Twee routes */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-card border border-border rounded-md p-8 md:p-10 space-y-4">
              <User className="h-8 w-8 text-bronze" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl text-primary">Individuele deelname</h2>
              <p className="text-muted-foreground leading-relaxed">
                Meld je individueel aan voor een editie met losse inschrijvingen. Na een
                korte intake bekijken we of verwachtingen, ontwikkelvraag en
                groepssamenstelling goed aansluiten. De kracht zit in de kruisbestuiving
                tussen mensen met verschillende achtergronden, ervaringen en
                perspectieven.
              </p>
            </div>
            <div className="bg-card border border-border rounded-md p-8 md:p-10 space-y-4">
              <Building2 className="h-8 w-8 text-bronze" strokeWidth={1.5} />
              <h2 className="font-serif text-2xl text-primary">Besloten editie voor bedrijven</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bedrijven, directieteams en managementteams kunnen een eigen editie
                boeken. Het programma wordt dan afgestemd op gezamenlijke richting,
                leiderschap, innovatie, samenwerking en teambuilding. Individuele
                ontwikkeling en teamontwikkeling worden met elkaar verbonden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Herkenbare momenten */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                kicker="Herken je dit?"
                title="Momenten waarop deze reis het verschil maakt"
                className="mb-10"
              />
              <ul className="space-y-4">
                {momenten.map((moment) => (
                  <li key={moment} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-bronze mt-1 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base md:text-lg leading-relaxed">{moment}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[3/4] max-h-[560px] rounded-md overflow-hidden shadow-xl">
              <SafeImage
                src={images.village.src}
                fallbackSrc={images.village.fallback}
                alt={images.village.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Onderscheidend */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Wat maakt het onderscheidend?"
            title="Geen standaard aanbod"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {distinctives.map((item) => (
              <div key={item.title} className="space-y-2">
                <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fysiek niveau */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-5">
            <Kicker>Fysiek niveau</Kicker>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Voor sportieve deelnemers met doorzettingsvermogen
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Bergwandelen en mountainbiken vragen inspanning, ook wanneer het weer of
              terrein uitdagend is. Voorkeuren en ervaring worden vooraf uitgevraagd. Een
              aangepast programma is in overleg mogelijk, maar de actieve component
              blijft een essentieel onderdeel van het concept.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-bronze text-white hover:bg-bronze/90">
                <Link href="/aanmelden">
                  Meld je aan voor een kennismaking
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
