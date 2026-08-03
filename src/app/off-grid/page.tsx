import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Kicker, SectionHeading } from '@/components/section'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { ArrowRight, PhoneOff, Phone, Users, ClipboardCheck } from 'lucide-react'
import { images } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Off-grid',
  description:
    'De off-grideditie: vijf dagen zonder WhatsApp, e-mail en sociale media. Volledige aandacht voor de omgeving, de gesprekken, de groep en de eigen ontwikkeling.',
}

const afspraken = [
  {
    icon: PhoneOff,
    title: 'Duidelijke afspraken bij aankomst',
    text: 'Bij aankomst maken we samen heldere afspraken over telefoongebruik tijdens de week.',
  },
  {
    icon: Phone,
    title: 'Eén centraal contactnummer',
    text: 'Voor noodgevallen blijft de groep bereikbaar via één centraal contactnummer.',
  },
  {
    icon: ClipboardCheck,
    title: 'Vooraf goed geregeld',
    text: 'Je regelt vooraf je afwezigheid, informeert thuis en op het werk en spreekt af wat daadwerkelijk als noodsituatie geldt.',
  },
  {
    icon: Users,
    title: 'Voor individuen én teams',
    text: 'De off-grideditie is er als aparte editie voor individuele deelnemers of als keuze voor een besloten bedrijfsgroep.',
  },
]

export default function OffGridPage() {
  return (
    <div>
      <PageHeader
        kicker="Off-grid in de Alpen"
        title="Een onderscheidende editie zonder digitale ruis"
        intro="Geen WhatsApp, e-mail, sociale media of dagelijkse werkonderbrekingen. Volledige aandacht voor de omgeving, de gesprekken, de groep en de eigen ontwikkeling."
      />

      {/* Waarom */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <Kicker>Waarom off-grid?</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-primary">
                Bewuste begrenzing maakt de ervaring intensiever
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Echt afstand nemen lukt pas wanneer de dagelijkse stroom aan berichten,
                  mails en meldingen stilvalt. Juist die bewuste begrenzing maakt de
                  gesprekken diepgaander, de aandacht vollediger en de ervaring
                  waardevoller.
                </p>
                <p>
                  Dit format vraagt om heldere verwachtingen — en dat is precies de
                  kracht. Wie een week volledig aanwezig is, komt scherper terug.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl">
              <SafeImage
                src={images.hiking.src}
                fallbackSrc={images.hiking.fallback}
                alt={images.hiking.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Zo werkt het"
            title="Heldere afspraken, volledige rust"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {afspraken.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-md p-8 space-y-4"
              >
                <item.icon className="h-7 w-7 text-bronze" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Kicker>Interesse?</Kicker>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              Geef bij je aanmelding aan dat je openstaat voor off-grid
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              In het aanmeldformulier vragen we naar je bereidheid om deel te nemen aan
              een off-grideditie. Tijdens de intake bespreken we wat dit voor jou betekent.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="bg-bronze text-white hover:bg-bronze/90">
                <Link href="/aanmelden">
                  Meld je aan
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
