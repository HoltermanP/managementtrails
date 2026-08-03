import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { SectionHeading } from '@/components/section'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'
import { programDays, pillars, outcomes, images } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Programma',
  description:
    'Vijf dagen in Tirol: coaching, hiken, mountainbiken en concrete besluiten. Bekijk het volledige dagprogramma van het ondernemersretreat.',
}

export default function ProgrammaPage() {
  return (
    <div>
      <PageHeader
        kicker="Voorbeeldprogramma"
        title="Vijf dagen in Tirol"
        intro="De precieze invulling wordt afgestemd op de groep, het weer, het seizoen en de gekozen activiteiten. De balans tussen hard werken, bewegen, genieten en herstel blijft altijd intact."
      />

      {/* Dagprogramma */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            {programDays.map((day, i) => (
              <article
                key={day.day}
                className="bg-card border border-border rounded-md p-8 md:p-10"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-serif text-3xl text-bronze/70">{i + 1}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze mb-1">
                      {day.day}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl text-primary">
                      {day.title}
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6 md:ml-12">{day.intro}</p>
                <ul className="space-y-3 md:ml-12">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
            <p className="text-sm text-muted-foreground pt-2">
              Bij slecht of onveilig weer wordt het programma aangepast. Kwaliteit en
              veiligheid gaan altijd voor de exacte activiteit.
            </p>
          </div>
        </div>
      </section>

      {/* Werkprincipe */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
              Werkprincipe
            </p>
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Inzicht is pas waardevol als het leidt tot actie. Iedere dag eindigt daarom
              met reflectie, keuzes en een concrete vertaling naar de praktijk.
            </p>
          </div>
        </div>
      </section>

      {/* Pijlers */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="De inhoudelijke pijlers"
            title="Waar het programma op rust"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card border border-border rounded-md p-8 space-y-3"
              >
                <h3 className="font-serif text-xl text-primary">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.text}</p>
              </div>
            ))}
            <div className="relative rounded-md overflow-hidden min-h-[220px]">
              <SafeImage
                src={images.mountainbike.src}
                fallbackSrc={images.mountainbike.fallback}
                alt={images.mountainbike.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resultaat */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              kicker="Resultaat"
              title="Wat levert de reis op?"
              intro="Je komt niet alleen uitgerust en geïnspireerd terug. Iedere deelnemer werkt toe naar tastbare uitkomsten die na de reis bruikbaar zijn in werk, onderneming en persoonlijk leiderschap."
              className="mb-0"
            />
            <ul className="space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-bronze mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base md:text-lg leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14">
            <Button asChild size="lg">
              <Link href="/aanmelden">
                Meld je aan voor een kennismaking
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
