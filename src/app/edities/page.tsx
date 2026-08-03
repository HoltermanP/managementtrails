import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Kicker, SectionHeading } from '@/components/section'
import { EditionCard } from '@/components/edition-card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X } from 'lucide-react'
import {
  editions,
  included,
  notIncluded,
  cancellationPolicy,
  bookingSteps,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Edities & prijs',
  description:
    'Beschikbare edities in mei en september, € 2.500 per persoon excl. btw, volledig verzorgd vanaf aankomst in Niederau. Maximaal acht plaatsen per editie.',
}

export default function EditiesPage() {
  return (
    <div>
      <PageHeader
        kicker="Commercieel"
        title="Edities & prijs"
        intro="Beperkte edities in mei en september, met maximaal acht plaatsen per editie. Een editie gaat door vanaf zes definitief bevestigde deelnemers."
      />

      {/* Edities */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editions.map((edition) => (
              <EditionCard key={edition.id} edition={edition} withCta />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8 max-w-2xl">
            Edities worden bewust klein gehouden. Zodra een editie volloopt, plannen we
            in overleg een volgende — meld je interesse dus ook wanneer een datum vol
            zit.
          </p>
        </div>
      </section>

      {/* Prijs */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <Kicker>Investering</Kicker>
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-5xl md:text-6xl">€ 2.500</span>
                <span className="text-primary-foreground/70">per persoon, excl. btw</span>
              </div>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Volledig verzorgd vanaf aankomst in Niederau. Je betaalt 25% aan bij
                boeking; het resterende bedrag uiterlijk 30 dagen voor vertrek.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze mb-4">
                  Inbegrepen
                </h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze mb-4">
                  Niet inbegrepen
                </h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-primary-foreground/50 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-primary-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boekingsproces */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading
                kicker="Boekingsproces"
                title="Van aanvraag tot vertrek"
                className="mb-10"
              />
              <ol className="space-y-5">
                {bookingSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-serif text-primary flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-base md:text-lg leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-secondary/60 border border-border rounded-md p-8 md:p-10 self-start space-y-4">
              <Kicker>Waarom eerst een intake?</Kicker>
              <p className="text-base md:text-lg leading-relaxed">
                Bij een groep van zes tot acht mensen bepaalt de samenstelling een groot
                deel van de kwaliteit. De intake toetst verwachtingen, ontwikkelvraag,
                openheid, fysieke belastbaarheid en de bereidheid om bij te dragen.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Boek je eigen heen- en terugreis pas nadat je plek definitief is
                bevestigd. Zelf geboekte reis- of andere gevolgkosten worden bij
                annulering niet vergoed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Annuleringsregeling */}
      <section id="annulering" className="bg-secondary/60 py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Voorwaarden"
            title="Annuleringsregeling"
            intro="Transparant en vooraf duidelijk. We adviseren daarnaast zelf een reis- en annuleringsverzekering af te sluiten."
          />
          <div className="max-w-3xl overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-md overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground text-left">
                  <th className="px-6 py-4 text-sm font-semibold">Moment van annuleren</th>
                  <th className="px-6 py-4 text-sm font-semibold">Terugbetaling</th>
                </tr>
              </thead>
              <tbody>
                {cancellationPolicy.map((row, i) => (
                  <tr
                    key={row.moment}
                    className={i % 2 === 1 ? 'bg-secondary/40' : undefined}
                  >
                    <td className="px-6 py-4 text-sm border-t border-border">{row.moment}</td>
                    <td className="px-6 py-4 text-sm border-t border-border font-medium text-primary">
                      {row.refund}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-3xl mt-8 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Na overleg mag je kosteloos een passende vervanger aandragen.
            </p>
            <p>
              Een editie gaat door vanaf zes definitief bevestigde deelnemers. Bij
              onvoldoende deelnemers kan de organisatie de editie annuleren of in
              overleg verplaatsen; reeds betaalde deelnamekosten worden dan volledig
              terugbetaald. Weer, veiligheid of lokale omstandigheden kunnen leiden tot
              een aangepast programma of andere activiteiten; dit geeft op zichzelf geen
              recht op restitutie.
            </p>
          </div>
          <div className="mt-12">
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
