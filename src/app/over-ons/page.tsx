import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Mensgericht',
    description: 'We geloven dat effectief leiderschap begint met het begrijpen van mensen en hun behoeften.'
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'Onze trails zijn ontworpen om meetbare verandering en duurzame resultaten te bereiken.'
  },
  {
    icon: Award,
    title: 'Kwaliteit',
    description: 'We hanteren de hoogste standaarden in alles wat we doen, geïnspireerd door Oostenrijkse precisie.'
  },
  {
    icon: Heart,
    title: 'Passie',
    description: 'We zijn gepassioneerd over het helpen van organisaties om hun volledige potentieel te bereiken.'
  }
]

const stats = [
  { number: '500+', label: 'Managers getraind' },
  { number: '50+', label: 'Bedrijven geholpen' },
  { number: '98%', label: 'Tevredenheidsscore' },
  { number: '10+', label: 'Jaar ervaring' }
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Over Management Trails
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Wij geloven dat de beste leiders worden gevormd in uitdagende omgevingen,
          weg van de dagelijkse routine. In de Oostenrijkse Alpen creëren we ervaringen
          die managers transformeren.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Onze Missie</h2>
          <p className="text-lg text-muted-foreground">
            Management Trails is opgericht met één duidelijke missie: organisaties helpen
            om betere leiders te ontwikkelen. We geloven dat traditionele training methoden
            vaak tekortschieten omdat ze losstaan van de echte wereld.
          </p>
          <p className="text-lg text-muted-foreground">
            Door managers mee te nemen naar de Oostenrijkse Alpen, plaatsen we hen in een
            omgeving waar natuurlijke uitdagingen parallellen trekken met zakelijke obstakels.
            Dit leidt tot diepgaande inzichten en duurzame verandering.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Leiderschapsontwikkeling</Badge>
            <Badge variant="secondary">Team Building</Badge>
            <Badge variant="secondary">Strategisch Denken</Badge>
            <Badge variant="secondary">Innovatie</Badge>
          </div>
        </div>

        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
            alt="Team building in de bergen"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Founder Section */}
      <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Luit de Jong - Oprichter van Management Trails</h2>
            <p className="text-lg text-muted-foreground">
              Luit de Jong is een gepassioneerde wandelaar, doorgewinterde Oostenrijk-liefhebber
              en visionaire ondernemer. Als oprichter van Management Trails combineert hij zijn
              liefde voor de bergen met zijn expertise in leiderschapsontwikkeling om unieke
              ervaringen te creëren die managers transformeren.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">De Hiker</h3>
                <p className="text-muted-foreground">
                  Luit is een ervaren wandelaar die duizenden kilometers heeft afgelegd door de
                  Oostenrijkse Alpen. Zijn diepgaande kennis van de trails en zijn passie voor
                  de natuur vormen de basis van elk Management Trails programma.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Oostenrijk Liefhebber</h3>
                <p className="text-muted-foreground">
                  Oostenrijk is meer dan een locatie voor Luit - het is een levensfilosofie.
                  De precisie, kwaliteit en innovatie van de Oostenrijkse cultuur inspireren
                  zijn aanpak bij het ontwikkelen van leiderschapstrajecten.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">De Ondernemer</h3>
                <p className="text-muted-foreground">
                  Met meer dan 15 jaar ervaring in management consulting richtte Luit Management
                  Trails op om traditionele trainingsmethoden te revolutioneren. Hij geloofde dat
                  ware transformatie plaatsvindt buiten de vergaderzaal, in de rauwe schoonheid
                  van de natuur.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=800&h=600&fit=crop"
              alt="Luit de Jong in de Oostenrijkse Alpen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Niederau & Wildschonau */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Niederau & Wildschonau</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop"
              alt="Wildschonau dal in Tirol"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Het Hart van de Kitzbüheler Alpen</h3>
            <p className="text-muted-foreground">
              Niederau ligt in het prachtige Wildschonau dal, omgeven door de majestueuze
              Kitzbüheler Alpen. Dit gebied staat bekend om zijn adembenemende natuur,
              traditionele Oostenrijkse cultuur en uitstekende wandelmogelijkheden.
            </p>
            <p className="text-muted-foreground">
              Vanuit Niederau heeft u direct toegang tot meer dan 200 kilometer aan gemarkeerde
              wandelpaden, variërend van ontspannen dalwandelingen tot uitdagende bergtochten
              naar toppen boven de 2000 meter.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2000m+</div>
                <div className="text-sm text-muted-foreground">Bergtoppen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200km+</div>
                <div className="text-sm text-muted-foreground">Wandelpaden</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-Grid Concept */}
      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">No Mobile - Het Off-Grid Concept</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bij Management Trails geloven we dat echte transformatie plaatsvindt wanneer
            je loskomt van de dagelijkse afleidingen. Daarom hanteren we een strikt
            "no mobile" beleid tijdens al onze programma's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Volledige Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Zonder de constante stroom van emails, berichten en notificaties kunnen
                deelnemers zich volledig richten op hun persoonlijke en professionele ontwikkeling.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Diepe Connectie</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Het off-grid concept bevordert diepere verbindingen tussen teamleden en
                creëert ruimte voor authentieke gesprekken en inzichten.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Mobiel in de Kluis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Uw telefoon gaat veilig in onze kluis aan het begin van het programma.
                Geen afleidingen, alleen pure focus op wat echt belangrijk is.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Waarden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/trails" className="flex items-center gap-2">
              Ontdek hoe onze waarden terugkomen in onze trails
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact" className="flex items-center gap-2">
              Word onderdeel van onze impact
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Ervaren Coaches</CardTitle>
              <CardDescription>
                Professionele coaches met meer dan 15 jaar ervaring in leiderschapsontwikkeling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Ons team bestaat uit gecertificeerde coaches die zelf succesvolle leiders zijn geweest.
                Zij combineren diepgaande kennis van managementtheorieën met praktische ervaring.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/trails">Bekijk onze trails</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Target className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Lokale Experts</CardTitle>
              <CardDescription>
                Diepgaande kennis van de Oostenrijkse Alpen en lokale cultuur
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Onze lokale partners kennen elke trail en elk bergpad. Zij zorgen ervoor dat
                uw groep veilig en optimaal kan genieten van de Oostenrijkse natuur.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/locatie">Ontdek de locatie</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Award className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Specialisten</CardTitle>
              <CardDescription>
                Experts in teamdynamiek, strategie en persoonlijke ontwikkeling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Van psychologen tot strategieconsultants - ons netwerk van specialisten
                zorgt ervoor dat elke trail aansluit bij uw specifieke ontwikkelbehoeften.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Neem contact op</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Austria */}
      <section className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Waarom Oostenrijk?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Oostenrijk staat wereldwijd bekend om zijn precisie, kwaliteit en innovatie.
              Deze waarden vormen de basis van onze aanpak. De Alpen bieden niet alleen
              een inspirerende omgeving, maar dagen managers ook uit om buiten hun comfortzone te treden.
            </p>
            <p className="text-muted-foreground">
              Van Mozart tot Red Bull - Oostenrijk combineert rijke traditie met moderne innovatie.
              Dit maakt het de ideale locatie voor organisaties die willen groeien en vernieuwen.
            </p>
          </div>

          <div className="relative h-64 rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
              alt="Oostenrijkse cultuur en natuur"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}


