import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  EDITION_CAPACITY,
  editionStatus,
  type Edition,
} from '@/lib/content'

function SpotsIndicator({ edition }: { edition: Edition }) {
  if (edition.taken === undefined) return null
  return (
    <div className="flex items-center gap-1.5" aria-hidden>
      {Array.from({ length: EDITION_CAPACITY }, (_, i) => (
        <span
          key={i}
          className={cn(
            'h-2.5 w-2.5 rounded-full border',
            i < edition.taken!
              ? 'bg-primary/70 border-primary/70'
              : 'bg-transparent border-bronze'
          )}
        />
      ))}
    </div>
  )
}

export function EditionCard({
  edition,
  withCta = false,
}: {
  edition: Edition
  withCta?: boolean
}) {
  const status = editionStatus(edition)

  return (
    <div
      className={cn(
        'bg-card border border-border rounded-md p-8 flex flex-col gap-3',
        edition.soldOut && 'opacity-75'
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
        {edition.label}
      </span>
      <p className="font-serif text-xl md:text-2xl text-primary">{edition.dates}</p>
      <p className="text-sm text-muted-foreground">{edition.type}</p>

      <div className="flex flex-col gap-2 mt-2">
        <SpotsIndicator edition={edition} />
        <span
          className={cn(
            'inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-medium',
            edition.soldOut
              ? 'bg-muted text-muted-foreground'
              : 'bg-secondary text-primary'
          )}
        >
          {status}
        </span>
      </div>

      {edition.note && (
        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{edition.note}</p>
      )}

      {withCta &&
        (edition.soldOut ? (
          <p className="text-sm text-muted-foreground mt-4">
            Deze editie zit vol. Meld je aan voor een volgende editie of geef je
            interesse door via het{' '}
            <Link href="/aanmelden" className="underline hover:text-primary">
              aanmeldformulier
            </Link>
            .
          </p>
        ) : (
          <Button asChild className="mt-4 self-start">
            <Link href={`/aanmelden?editie=${edition.id}`}>
              {edition.id === 'besloten' ? 'Vraag een offerte aan' : 'Meld je aan'}
            </Link>
          </Button>
        ))}
    </div>
  )
}
