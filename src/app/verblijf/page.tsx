import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Kicker, SectionHeading } from '@/components/section'
import { SafeImage } from '@/components/safe-image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { images } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Verblijf',
  description:
    'Kristall Plaza in Niederau vormt de thuisbasis: een luxe appartementengebouw met een eigen slaapkamer voor iedere deelnemer, goede restaurants en persoonlijke gastvrijheid.',
}

const verzorging = [
  'Ontbijt wordt gezamenlijk verzorgd in het appartement.',
  'Lunch vindt plaats onderweg, op de berg of in het appartement.',
  'Diners worden georganiseerd bij goede restaurants, bijzondere plekken in de bergen of authentieke dorpen.',
  'Koffie, thee, frisdrank en alcoholische dranken zijn inbegrepen.',
  'Dieetwensen en allergieën worden vooraf via de intake geïnventariseerd.',
  'Activiteiten, materiaalhuur, gondels en benodigde entrees zijn inbegrepen.',
  'Er is ruimte voor sauna, rust, een borrel, reflectie en informele gesprekken.',
]

export default function VerblijfPage() {
  return (
    <div>
      <PageHeader
        kicker="Beleving"
        title="Verblijf, eten en ontspannen"
        intro="Kristall Plaza in Niederau vormt de thuisbasis. Je verblijft in een luxe gebouw en beschikt over een eigen slaapkamer — luxe zonder afstandelijkheid."
      />

      {/* Kristall Plaza */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <Kicker>De thuisbasis</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-primary">
                Kristall Plaza, Niederau
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Het appartement van Luit wordt gebruikt voor ontbijt, lunch, coaching
                  en gezamenlijke momenten. Wanneer de groepsgrootte daarom vraagt,
                  worden aanvullende appartementen in Kristall Plaza geboekt.
                </p>
                <p>
                  Iedere deelnemer beschikt over een eigen slaapkamer. Zo is er naast het
                  intensieve programma altijd een plek om je terug te trekken, inzichten
                  te verwerken en echt uit te rusten.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl">
              <SafeImage
                src={images.hotelDay.src}
                fallbackSrc={images.hotelDay.fallback}
                alt={images.hotelDay.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fotogalerij */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[images.bedroom, images.livingRoom, images.terrace, images.hotelNight].map(
              (image) => (
                <div
                  key={image.src}
                  className="relative aspect-square rounded-md overflow-hidden"
                >
                  <SafeImage
                    src={image.src}
                    fallbackSrc={image.fallback}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Volledig verzorgd */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              kicker="Volledig verzorgd"
              title="Alles geregeld vanaf aankomst in Niederau"
              intro="Zodat je je volledig kunt richten op het programma, de groep en je eigen ontwikkeling. Alleen de heen- en terugreis naar Niederau regel je zelf."
              className="mb-0"
            />
            <ul className="space-y-4">
              {verzorging.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-bronze mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-base md:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Omgeving */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <SafeImage
          src={images.paragliding.src}
          fallbackSrc={images.paragliding.fallback}
          alt={images.paragliding.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <Kicker>De omgeving</Kicker>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              De Wildschönau: bergen, almen en authentieke dorpen
            </h2>
            <p className="text-lg text-white/85 leading-relaxed">
              Het hooggelegen dal van de Wildschönau in de Kitzbüheler Alpen biedt alles
              wat het programma nodig heeft: uitdagende hikes en mountainbiketochten,
              bergrestaurants met uitzicht, en de rust van een authentiek Tiroler dorp.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/programma">
                Bekijk het programma
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
