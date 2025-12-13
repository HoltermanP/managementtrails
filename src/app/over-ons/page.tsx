import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Target, Award, Heart } from 'lucide-react'

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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            alt="Team building in de bergen"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Waarden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
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
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ons Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Ervaren Coaches</CardTitle>
              <CardDescription>
                Professionele coaches met meer dan 15 jaar ervaring in leiderschapsontwikkeling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ons team bestaat uit gecertificeerde coaches die zelf succesvolle leiders zijn geweest.
                Zij combineren diepgaande kennis van managementtheorieën met praktische ervaring.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Target className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Lokale Experts</CardTitle>
              <CardDescription>
                Diepgaande kennis van de Oostenrijkse Alpen en lokale cultuur
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Onze lokale partners kennen elke trail en elk bergpad. Zij zorgen ervoor dat
                uw groep veilig en optimaal kan genieten van de Oostenrijkse natuur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Award className="h-12 w-12 text-muted-foreground" />
              </div>
              <CardTitle>Specialisten</CardTitle>
              <CardDescription>
                Experts in teamdynamiek, strategie en persoonlijke ontwikkeling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Van psychologen tot strategieconsultants - ons netwerk van specialisten
                zorgt ervoor dat elke trail aansluit bij uw specifieke ontwikkelbehoeften.
              </p>
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
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
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
