import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, TreePine, Mountain, Camera, Heart, Coffee, ArrowLeft, Route, Users, Home } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'

const niederauFacts = [
  {
    icon: Route,
    title: '200km+ Wandelroutes',
    description: 'Uitgebreide netwerk van gemarkeerde wandelpaden voor alle niveaus'
  },
  {
    icon: Mountain,
    title: '2000m+ Hoogte',
    description: 'Bergtoppen met adembenemend uitzicht over de Kitzbüheler Alpen'
  },
  {
    icon: Camera,
    title: 'Fotogenieke Locaties',
    description: 'Kristalheldere bergmeren, groene valleien en majestueuze bergtoppen'
  },
  {
    icon: Heart,
    title: 'Oostenrijkse Gastvrijheid',
    description: 'Warme ontvangst en excellente service in traditionele Oostenrijkse stijl'
  }
]

const wildschonauFacts = [
  {
    icon: TreePine,
    title: 'Groene Vallei',
    description: 'Pittoreske vallei omgeven door dichte bossen en weelderige weiden'
  },
  {
    icon: Route,
    title: 'Diverse Routes',
    description: 'Van ontspannen dalwandelingen tot uitdagende bergtochten'
  },
  {
    icon: Mountain,
    title: 'Natuurlijke Schoonheid',
    description: 'Onvergetelijke landschappen die creativiteit en inspiratie stimuleren'
  },
  {
    icon: Users,
    title: 'Perfect voor Teams',
    description: 'Ideale omgeving voor teamontwikkeling en strategische sessies'
  }
]

export default function LocatiePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=1920&h=1080&fit=crop"
          alt="Niederau & Wildschönau, Kitzbüheler Alpen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-6 left-6 text-white">
          <Badge variant="secondary" className="mb-4">Kitzbüheler Alpen</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Niederau & Wildschönau
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Het hart van de Kitzbüheler Alpen - waar natuur en ontwikkeling samenkomen
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Het Hart van de Kitzbüheler Alpen
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Niederau & Wildschönau liggen in het hart van de Kitzbüheler Alpen, een regio
            die bekend staat om zijn natuurlijke schoonheid en uitstekende wandelmogelijkheden.
            Hier combineren we de Oostenrijkse precisie en kwaliteit met een unieke natuurlijke
            omgeving die perfect is voor managementontwikkeling.
          </p>
          <p className="text-lg text-muted-foreground">
            Van ontspannen wandelingen door groene valleien tot uitdagende bergtochten - elke trail
            is zorgvuldig ontworpen om parallellen te trekken tussen de natuurlijke schoonheid van
            deze regio en zakelijke uitdagingen. De kristalheldere bergmeren, dichte bossen en
            majestueuze bergtoppen bieden de ideale setting voor reflectie en strategisch denken.
          </p>
        </div>
      </section>

      {/* Niederau Section */}
      <section id="niederau" className="mb-16 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <SafeImage
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
              alt="Niederau, Kitzbüheler Alpen"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Niederau</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Niederau is het charmante centrum van de regio, gelegen in het prachtige Wildschönau dal.
              Met uitstekende toegang tot wandelroutes en natuurlijke schoonheid is dit de perfecte
              locatie voor reflectie en strategische workshops.
            </p>
            <p className="text-muted-foreground">
              Vanuit Niederau heeft u direct toegang tot meer dan 200 kilometer aan gemarkeerde
              wandelpaden. Het dorp zelf combineert traditionele Oostenrijkse architectuur met moderne
              faciliteiten, waardoor het de ideale uitvalsbasis is voor uw management trail.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">200km+</div>
                <div className="text-sm text-muted-foreground">Wandelroutes</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">850m</div>
                <div className="text-sm text-muted-foreground">Hoogte</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niederauFacts.map((fact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <fact.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {fact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Wildschönau Section */}
      <section id="wildschonau" className="mb-16 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <TreePine className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Wildschönau</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Wildschönau is een pittoreske vallei omgeven door majestueuze bergen. Deze groene
              oase biedt uitstekende wandelmogelijkheden voor teams die houden van natuurlijke
              schoonheid en avontuur.
            </p>
            <p className="text-muted-foreground">
              De vallei staat bekend om zijn rustige sfeer en ongerepte natuur. Hier kunt u
              volledig loskomen van de dagelijkse drukte en genieten van de serene omgeving.
              Perfect voor teams die op zoek zijn naar diepe reflectie en strategische inzichten.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">4 Dorpen</div>
                <div className="text-sm text-muted-foreground">In de vallei</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">1000m+</div>
                <div className="text-sm text-muted-foreground">Hoogteverschil</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden order-1 lg:order-2">
            <SafeImage
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop"
              alt="Wildschönau, Kitzbüheler Alpen"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wildschonauFacts.map((fact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <fact.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {fact.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why This Location */}
      <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Waarom Deze Locatie?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="h-6 w-6 text-primary" />
                Natuurlijke Inspiratie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                De adembenemende natuur van de Kitzbüheler Alpen dient als krachtige metafoor
                voor zakelijke uitdagingen. Bergtoppen vertegenwoordigen doelen, paden symboliseren
                strategieën, en de reis zelf leert waardevolle lessen over doorzettingsvermogen.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Perfecte Uitvalsbasis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Onze luxe penthouse accommodatie biedt niet alleen comfort, maar ook de perfecte
                balans tussen rust en toegankelijkheid. U bent dichtbij de natuur, maar heeft
                ook alle moderne faciliteiten die u nodig heeft.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Oostenrijkse Kwaliteit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Oostenrijk staat bekend om precisie, kwaliteit en innovatie. Deze waarden
                weerspiegelen zich in alles - van de wandelpaden tot de accommodatie en service.
                U ervaart de beste Oostenrijkse gastvrijheid.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="h-6 w-6 text-primary" />
                Uitgebreide Routes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Met meer dan 200 kilometer aan gemarkeerde wandelpaden heeft u oneindig veel
                mogelijkheden. Van korte reflectie wandelingen tot uitdagende dagtochten - er
                is voor elk team en elk doel een perfecte route.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Activities in the Area */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Activiteiten in de Omgeving</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <SafeImage
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
                alt="Bergwandelingen"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Bergwandelingen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ontdek de prachtige bergwereld met gidsen die elke route kennen. Perfect voor
                strategische gesprekken tijdens het wandelen.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <SafeImage
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Bergmeren"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Bergmeren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reflectie momenten bij kristalheldere bergmeren. Deze serene omgeving is perfect
                voor diepgaande gesprekken en persoonlijke reflectie.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <SafeImage
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
                alt="Lokale Cultuur"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle>Lokale Cultuur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ervaar de traditionele Oostenrijkse cultuur, van lokale restaurants tot
                culturele bezienswaardigheden. Leer van de Oostenrijkse aanpak.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-muted/50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Klaar om Niederau & Wildschönau te Ontdekken?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Boek een trail en ervaar zelf de transformatieve kracht van deze unieke locatie
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

