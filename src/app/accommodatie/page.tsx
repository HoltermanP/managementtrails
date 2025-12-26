import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Home, Bed, Users, Wifi, Utensils, Mountain, ArrowLeft, CheckCircle, Coffee, Car } from 'lucide-react'

const features = [
  {
    icon: Bed,
    title: 'Luxe Slaapkamers',
    description: 'Elke slaapkamer is ruim opgezet met comfortabele bedden en eigen badkamer. Perfect voor een goede nachtrust na een dag vol activiteiten.'
  },
  {
    icon: Users,
    title: 'Gemeenschappelijke Ruimtes',
    description: 'Grote woonkamer en eetkamer waar uw team samen kan komen voor workshops, strategische sessies en gezellige momenten.'
  },
  {
    icon: Mountain,
    title: 'Panoramisch Uitzicht',
    description: 'Geniet van adembenemend uitzicht op de Kitzbüheler Alpen vanuit elke ruimte. Perfect voor inspiratie en reflectie.'
  },
  {
    icon: Utensils,
    title: 'Volledig Uitgeruste Keuken',
    description: 'Moderne keuken met alle benodigdheden voor het bereiden van maaltijden. Of laat u verrassen door lokale catering.'
  },
  {
    icon: Wifi,
    title: 'Moderne Faciliteiten',
    description: 'Hoewel we off-grid werken, heeft de accommodatie alle moderne voorzieningen die u nodig heeft voor een comfortabel verblijf.'
  },
  {
    icon: Car,
    title: 'Goede Bereikbaarheid',
    description: 'Centraal gelegen met uitstekende toegang tot wandelroutes en lokale voorzieningen. Parkeergelegenheid beschikbaar.'
  }
]

const amenities = [
  '4 Luxe slaapkamers met eigen badkamer',
  'Grote woonkamer met open haard',
  'Moderne keuken met alle apparatuur',
  'Eetkamer voor 8 personen',
  'Balkon met panoramisch uitzicht',
  'Wasruimte met wasmachine en droger',
  'Parkeergelegenheid',
  'Centrale verwarming',
  'Volledig ingericht en gestoffeerd',
  'Hoge kwaliteit meubilair en beddengoed'
]

const whatIncluded = [
  {
    title: '4 Overnachtingen',
    description: 'Volledige accommodatie voor uw hele groep gedurende 5 dagen'
  },
  {
    title: 'Alle Faciliteiten',
    description: 'Gebruik van alle ruimtes en faciliteiten in het penthouse'
  },
  {
    title: 'Schoonmaak',
    description: 'Eindschoonmaak is inbegrepen, zodat u zich kunt focussen op uw trail'
  },
  {
    title: 'Linnengoed',
    description: 'Alle beddengoed en handdoeken zijn aanwezig en worden verzorgd'
  }
]

export default function AccommodatiePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&h=1080&fit=crop"
          alt="Luxe penthouse accommodatie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-6 left-6 text-white">
          <Badge variant="secondary" className="mb-4">Luxe Accommodatie</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Onze Accommodatie
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Verblijf in een exclusief penthouse met panoramisch uitzicht op de Kitzbüheler Alpen
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </Button>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="h-12 w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Luxe Penthouse in de Bergen
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Uw verblijf tijdens de Management Trail is in een exclusief penthouse dat speciaal
            is geselecteerd voor zijn ligging, comfort en inspirerende omgeving. Met ruimte voor
            maximaal 8 personen biedt deze accommodatie de perfecte balans tussen privacy en
            gemeenschappelijke ruimte.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            Het penthouse combineert moderne luxe met de rustieke charme van de Oostenrijkse Alpen.
            Elke ruimte is zorgvuldig ingericht om zowel comfort als inspiratie te bieden, met
            panoramisch uitzicht op de majestueuze bergtoppen die uw trail omringen.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
              alt="Woonkamer"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop"
              alt="Slaapkamer"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=600&h=400&fit=crop"
              alt="Keuken"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
              alt="Balkon met uitzicht"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop"
              alt="Eetkamer"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop"
              alt="Badkamer"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Faciliteiten & Voorzieningen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Amenities List */}
      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Wat is Inbegrepen?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Inclusief in Uw Trail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {whatIncluded.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why This Accommodation */}
      <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Waarom Deze Accommodatie?</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Perfecte Balans</h3>
              <p className="text-muted-foreground">
                Het penthouse biedt de perfecte balans tussen privacy en gemeenschappelijke ruimte.
                Elke deelnemer heeft zijn eigen comfortabele slaapkamer, terwijl er voldoende
                ruimte is voor gezamenlijke activiteiten, workshops en strategische sessies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Inspirerende Omgeving</h3>
              <p className="text-muted-foreground">
                Het panoramische uitzicht op de Kitzbüheler Alpen creëert een constante bron van
                inspiratie. Of u nu aan het werk bent in de woonkamer, kookt in de keuken, of
                ontspant op het balkon - de majestueuze bergen zijn altijd zichtbaar.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Centrale Locatie</h3>
              <p className="text-muted-foreground">
                Gelegen in het hart van Niederau, heeft u direct toegang tot wandelroutes,
                lokale restaurants en alle voorzieningen die u nodig heeft. Tegelijkertijd
                biedt de locatie de rust en privacy die essentieel zijn voor een succesvolle trail.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Wat Zeggen Onze Gasten?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic mb-4">
                "De accommodatie was perfect voor ons team. Ruim, comfortabel en met een
                adembenemend uitzicht. We voelden ons meteen thuis en konden ons volledig
                focussen op de trail."
              </p>
              <p className="font-semibold">- Management Team, Fintech Bedrijf</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic mb-4">
                "Het penthouse bood precies wat we nodig hadden - privacy voor reflectie en
                ruimte voor gezamenlijke activiteiten. De keuken was perfect voor onze
                teammaaltijden en de woonkamer was ideaal voor workshops."
              </p>
              <p className="font-semibold">- Directie, Marketing Bureau</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-muted/50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Klaar om te Verblijven?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Boek een trail en ervaar zelf de luxe en comfort van onze accommodatie
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/trails">Bekijk Onze Trails</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Neem Contact Op</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

