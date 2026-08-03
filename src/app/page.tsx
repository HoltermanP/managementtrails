import Link from 'next/link'
import { Hero } from '@/components/hero'
import { SafeImage } from '@/components/safe-image'
import { Kicker, SectionHeading } from '@/components/section'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Check,
  Compass,
  Mountain,
  MessageSquare,
  Users,
  BedDouble,
  UtensilsCrossed,
  PhoneOff,
  Building2,
  User,
} from 'lucide-react'
import { programDays, editions, images } from '@/lib/content'
import { EditionCard } from '@/components/edition-card'

const expectations = [
  { icon: Compass, text: 'Persoonlijke en zakelijke coaching' },
  { icon: Mountain, text: 'Hiken, mountainbiken en een uitdagende lange wandeltocht' },
  { icon: MessageSquare, text: 'Individuele coachgesprekken tijdens de activiteiten' },
  { icon: Users, text: 'Nieuwe perspectieven door kruisbestuiving met andere deelnemers' },
  { icon: BedDouble, text: 'Een eigen slaapkamer in een luxe accommodatie' },
  { icon: UtensilsCrossed, text: 'Volledig verzorgde maaltijden, drankjes en activiteiten' },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Introductie */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <Kicker>De kern</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight text-primary">
                Wanneer heb je voor het laatst echt afstand genomen van je dagelijkse werk?
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Niet een vrije middag, maar voldoende ruimte om opnieuw te kijken naar
                  je onderneming, je leiderschap en de keuzes die voor je liggen.
                </p>
                <p>
                  Je reist met een kleine groep ondernemers, zzp’ers, managers en
                  directeuren naar Niederau in Tirol. Vijf dagen lang werk je met ervaren
                  begeleiders aan je persoonlijke ontwikkeling en zakelijke koers.
                  Intensieve coachingssessies worden afgewisseld met hiken, mountainbiken,
                  lange gesprekken, goed eten en echte ontspanning.
                </p>
                <p className="text-foreground font-medium">
                  Je vertrekt niet alleen met nieuwe energie. Je gaat naar huis met
                  concrete besluiten, een heldere koers en een actieplan waarmee je
                  direct verder kunt.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl">
              <SafeImage
                src={images.terrace.src}
                fallbackSrc={images.terrace.fallback}
                alt={images.terrace.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Geen gewone retreat */}
      <section className="bg-primary text-primary-foreground py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Kicker>Dit is geen gewone retreat</Kicker>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug">
              Geen standaard heisessie. Geen vrijblijvende wandelvakantie. Je werkt hard
              aan jezelf en je onderneming, wordt fysiek uitgedaagd en geniet
              tegelijkertijd van luxe, rust en de indrukwekkende omgeving van Tirol.
            </p>
          </div>
        </div>
      </section>

      {/* Wat je kunt verwachten */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Wat je kunt verwachten"
            title="Hard werken, bewegen en genieten — in balans"
            intro="Maximaal acht deelnemers, zodat er tijd is voor ieders vraagstuk."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {expectations.map((item) => (
              <div key={item.text} className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary flex-shrink-0">
                  <item.icon className="h-5 w-5 text-bronze" strokeWidth={1.5} />
                </div>
                <p className="text-base leading-relaxed pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programma teaser */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Het programma"
            title="Vijf dagen in Tirol"
            intro="Een vaste opbouw van aankomst tot vertrek, afgestemd op de groep, het seizoen en het weer. De balans tussen hard werken, bewegen, genieten en herstel blijft altijd intact."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {programDays.map((day, i) => (
              <div
                key={day.day}
                className="bg-card border border-border rounded-md p-6 flex flex-col gap-3"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                  Dag {i + 1} · {day.day}
                </span>
                <h3 className="font-serif text-xl text-primary leading-snug">{day.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{day.intro}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/programma">
                Bekijk het volledige programma
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Individueel of met je team */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Deelnemen"
            title="Individueel of met je team"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-md p-8 md:p-10 flex flex-col gap-4">
              <User className="h-8 w-8 text-bronze" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-primary">Individuele deelname</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Sluit individueel aan bij een zorgvuldig samengestelde groep. De kracht
                zit in de kruisbestuiving tussen mensen met verschillende achtergronden,
                ervaringen en perspectieven.
              </p>
              <Button asChild className="self-start mt-2">
                <Link href="/aanmelden">Meld je aan voor een kennismaking</Link>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-md p-8 md:p-10 flex flex-col gap-4">
              <Building2 className="h-8 w-8 text-bronze" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-primary">Besloten bedrijfseditie</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                Boek een eigen editie met je directie-, management- of bedrijfsteam. We
                stemmen de coaching en activiteiten af op jullie gezamenlijke
                vraagstukken en doelen.
              </p>
              <Button asChild variant="outline" className="self-start mt-2">
                <Link href="/aanmelden?editie=besloten">Bespreek een besloten editie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Off-grid teaser */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <SafeImage
          src={images.hiking.src}
          fallbackSrc={images.hiking.fallback}
          alt={images.hiking.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <PhoneOff className="h-6 w-6 text-bronze" strokeWidth={1.5} />
              <Kicker>Off-grid in de Alpen</Kicker>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Een onderscheidende editie zonder digitale ruis
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Geen WhatsApp, e-mail, sociale media of dagelijkse werkonderbrekingen.
              Volledige aandacht voor de omgeving, de gesprekken, de groep en de eigen
              ontwikkeling.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/off-grid">
                Lees meer over off-grid
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verblijf teaser */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl order-last lg:order-first">
              <SafeImage
                src={images.hotelNight.src}
                fallbackSrc={images.hotelNight.fallback}
                alt={images.hotelNight.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <Kicker>Het verblijf</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-tight text-primary">
                Kristall Plaza, Niederau
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Een luxe appartementengebouw als thuisbasis, met een eigen slaapkamer
                voor iedere deelnemer. Ontbijt en coaching in het appartement, lunch
                onderweg of op de berg, en diners bij goede restaurants en bijzondere
                plekken in de bergen.
              </p>
              <ul className="space-y-3">
                {[
                  'Eigen slaapkamer in een luxe gebouw',
                  'Volledig verzorgd vanaf aankomst in Niederau',
                  'Ruimte voor sauna, rust, een borrel en informele gesprekken',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-bronze mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link href="/verblijf">
                  Bekijk het verblijf
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Edities */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            kicker="Edities & prijs"
            title="Eerstvolgende edities"
            intro="Beperkte edities in mei en september, met maximaal acht plaatsen per editie. Edities lopen vol — er zijn nog enkele plaatsen beschikbaar."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {editions.map((edition) => (
              <EditionCard key={edition.id} edition={edition} />
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button asChild size="lg">
              <Link href="/edities">Bekijk edities & prijs</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              € 2.500 per persoon excl. btw · volledig verzorgd vanaf aankomst in Niederau
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
