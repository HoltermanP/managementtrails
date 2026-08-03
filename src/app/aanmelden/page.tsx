import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/page-header'
import { Kicker } from '@/components/section'
import { AanmeldFormulier } from '@/components/aanmeld-formulier'
import { bookingSteps } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Aanmelden',
  description:
    'Meld je aan voor een kennismaking. Een korte aanvraag, gevolgd door een persoonlijke intake — daarna bevestigen we samen de deelname.',
}

export default function AanmeldenPage() {
  return (
    <div>
      <PageHeader
        kicker="Aanmelden"
        title="Begin met een kennismaking"
        intro="Vul het compacte formulier in. We nemen binnen twee werkdagen contact op voor een korte persoonlijke kennismaking — daarna bevestigen we samen de deelname."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            <Suspense>
              <AanmeldFormulier />
            </Suspense>

            <aside className="bg-secondary/60 border border-border rounded-md p-8 space-y-6 lg:sticky lg:top-24">
              <div className="space-y-3">
                <Kicker>Hoe het werkt</Kicker>
                <ol className="space-y-3">
                  {bookingSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-card border border-border font-serif text-xs text-primary flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="border-t border-border pt-6 space-y-2">
                <p className="font-serif text-lg text-primary">Waarom eerst een intake?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bij een groep van zes tot acht mensen bepaalt de samenstelling een
                  groot deel van de kwaliteit. De intake toetst verwachtingen,
                  ontwikkelvraag, openheid, fysieke belastbaarheid en de bereidheid om
                  bij te dragen.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
