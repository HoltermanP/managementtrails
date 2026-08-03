import { cn } from '@/lib/utils'

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-bronze',
        className
      )}
    >
      {children}
    </p>
  )
}

interface SectionHeadingProps {
  kicker?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl space-y-4 mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {kicker && <Kicker className={dark ? 'text-bronze' : undefined}>{kicker}</Kicker>}
      <h2
        className={cn(
          'font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight',
          dark ? 'text-primary-foreground' : 'text-primary'
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed',
            dark ? 'text-primary-foreground/75' : 'text-muted-foreground'
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
