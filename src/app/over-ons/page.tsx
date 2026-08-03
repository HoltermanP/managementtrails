import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { SectionHeading, Kicker } from '@/components/section'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Briefcase, Cpu, Compass } from 'lucide-react'
import { images } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'De begeleiding: ervaren ondernemers en een ervaren businesscoach. Eerlijke lessen uit de praktijk, verdieping in innovatie en AI, en persoonlijke coaching.',
}

const team = [
  {
    icon: Briefcase,
    name: 'Luit',
    role: 'Ondernemerschap en persoonlijke lessen',
    text: 'Ervaren ondernemer en gastheer van de reis. Deelt eerlijke lessen uit de praktijk: groei, keuzes, verantwoordelijkheid, tegenslag en persoonlijke ontwikkeling. Zijn appartement in Kristall Plaza vormt de thuisbasis van de week.',
  },
  {
    icon: Cpu,
    name: 'Patrick',
    role: 'Innovatie en AI',
    text: 'Neemt de groep mee in technologische ontwikkelingen, kansen en de betekenis van AI voor organisaties en ondernemerschap — praktisch en toepasbaar, zonder hype.',
  },
  {
    icon: Compass,
    name: 'Businesscoach',
    role: 'Zakelijke en persoonlijke coaching',
    text: 'Een ervaren businesscoach met achtergrond in defensie, de energiesector en innovatie. Begeleidt de individuele coachgesprekken en de gezamenlijke sessies, van intake tot actieplan.',
  },
]

export default function OverOnsPage() {
  return (
    <div>
      <PageHeader
        kicker="De begeleiding"
        title="Ervaren ondernemers en een ervaren businesscoach"
        intro="De reis is bewust kleinschalig en wordt begeleid door mensen die zelf ondernemen, leidinggeven en coachen. Geen zweverige coachingstaal — concreet, persoonlijk en geloofwaardig."
      />

      {/* Team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-md p-8 md:p-10 space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <member.icon className="h-6 w-6 text-bronze" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-primary">{member.name}</h2>
                  <p className="text-sm font-medium text-bronze mt-1">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanpak */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl order-last lg:order-first">
              <SafeImage
                src={images.mountainbike.src}
                fallbackSrc={images.mountainbike.fallback}
                alt={images.mountainbike.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <Kicker>Onze aanpak</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-primary">
                Gesprekken zonder vergadertafel
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  De beste gesprekken ontstaan in beweging. Individuele coachgesprekken
                  vinden daarom ook plaats tijdens het hiken of mountainbiken — met de
                  bergen als decor en zonder de dynamiek van een vergaderruimte.
                </p>
                <p>
                  Deelnemers denken actief mee over elkaars uitdagingen. Die
                  kruisbestuiving tussen verschillende achtergronden en perspectieven is
                  minstens zo waardevol als de begeleiding zelf.
                </p>
              </div>
              <Button asChild>
                <Link href="/programma">
                  Bekijk het programma
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <SectionHeading
              kicker="Kennismaken?"
              title="We horen graag wat jou bezighoudt"
              intro="Iedere deelname begint met een korte persoonlijke kennismaking. Zo weten we zeker dat de reis, de groep en jouw ontwikkelvraag goed aansluiten."
              align="center"
              className="mb-8"
            />
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
