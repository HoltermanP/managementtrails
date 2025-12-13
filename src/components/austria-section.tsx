import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mountain, Heart, Coffee, Camera } from 'lucide-react'

const austriaFacts = [
  {
    icon: Mountain,
    title: 'Alpen Landschap',
    description: 'De Oostenrijkse Alpen bieden een inspirerende omgeving voor reflectie en strategische denken.'
  },
  {
    icon: Heart,
    title: 'Oostenrijkse Gastvrijheid',
    description: 'Ervaar de warme Oostenrijkse gastvrijheid en excellente service tijdens uw verblijf.'
  },
  {
    icon: Coffee,
    title: 'Lokale Cultuur',
    description: 'Ontdek de rijke Oostenrijkse cultuur, van traditionele koffiehuizen tot moderne innovatie.'
  },
  {
    icon: Camera,
    title: 'Natuurlijke Schoonheid',
    description: 'Geniet van adembenemende uitzichten die creativiteit en inspiratie stimuleren.'
  }
]

export function AustriaSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Waarom Oostenrijk?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De Oostenrijkse Alpen vormen het perfecte decor voor managementontwikkeling.
            Hier combineren we natuurlijke schoonheid met Oostenrijkse precisie en kwaliteit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop"
              alt="Oostenrijkse Alpen - Tirol"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">De Perfecte Locatie voor Leiderschap</h3>
            <p className="text-muted-foreground">
              Oostenrijk staat wereldwijd bekend om zijn precisie, kwaliteit en innovatie.
              Deze waarden vormen de basis van onze management trails. In de Alpen vinden
              uw managers niet alleen rust en inspiratie, maar ook de ruimte om diepgaand
              na te denken over strategie en leiderschap.
            </p>
            <p className="text-muted-foreground">
              Van de kristalheldere bergmeren tot de steile rotswanden - elke trail is
              zorgvuldig ontworpen om parallellen te trekken tussen natuurlijke uitdagingen
              en zakelijke obstakels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Regio's</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2000m+</div>
                <div className="text-sm text-muted-foreground">Hoogte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Austria Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {austriaFacts.map((fact, index) => (
            <Card key={index} className="text-center">
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

        {/* Locations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Onze Trail Locaties</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Tirol</CardTitle>
                <CardDescription>Het hart van de Oostenrijkse Alpen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-32 mb-4 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
                    alt="Tirol, Oostenrijk"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Bekend om zijn majestueuze bergen en kristalheldere meren.
                  Perfect voor reflectie en strategische workshops.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Salzburg</CardTitle>
                <CardDescription>Mozarts geboortestad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-32 mb-4 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop"
                    alt="Salzburg, Oostenrijk"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Combineert klassieke Oostenrijkse cultuur met moderne
                  innovatie. Inspirerend voor creatief denken.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vorarlberg</CardTitle>
                <CardDescription>De meest westelijke deelstaat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-32 mb-4 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=200&fit=crop"
                    alt="Vorarlberg, Oostenrijk"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Uitdagende trails voor teams die houden van avontuur
                  en grensverleggende ervaringen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
