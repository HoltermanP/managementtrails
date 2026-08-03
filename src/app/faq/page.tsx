import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { faqItems } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Veelgestelde vragen',
  description:
    'Antwoorden op veelgestelde vragen over deelname, conditie, verblijf, prijs, dieetwensen, weer en de off-grideditie.',
}

export default function FaqPage() {
  return (
    <div>
      <PageHeader
        kicker="Veelgestelde vragen"
        title="Alles wat je wilt weten"
        intro="Staat je vraag er niet tussen? Stel hem gerust tijdens de kennismaking."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group bg-card border border-border rounded-md open:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 md:px-8 py-5 [&::-webkit-details-marker]:hidden">
                  <h2 className="font-serif text-lg md:text-xl text-primary">
                    {item.question}
                  </h2>
                  <ChevronDown className="h-5 w-5 text-bronze flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 md:px-8 pb-6 -mt-1">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="max-w-3xl mt-14 bg-secondary/60 border border-border rounded-md p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div>
              <h2 className="font-serif text-2xl text-primary mb-2">Nog vragen?</h2>
              <p className="text-muted-foreground">
                Meld je aan voor een vrijblijvende kennismaking — dan bespreken we alles
                persoonlijk.
              </p>
            </div>
            <Button asChild size="lg" className="flex-shrink-0">
              <Link href="/aanmelden">
                Aanmelden
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
