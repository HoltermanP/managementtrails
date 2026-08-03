import { Kicker } from '@/components/section'

interface PageHeaderProps {
  kicker: string
  title: string
  intro?: string
}

export function PageHeader({ kicker, title, intro }: PageHeaderProps) {
  return (
    <section className="bg-secondary/60 border-b border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl space-y-5 animate-slide-up">
          <Kicker>{kicker}</Kicker>
          <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight text-primary">
            {title}
          </h1>
          {intro && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
