import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mountain, Heart, Coffee, Camera, MapPin, TreePine, ArrowRight } from 'lucide-react'

const niederauFacts = [
  {
    icon: Mountain,
    title: 'Kitzbüheler Alpen',
    description: 'In het hart van de Kitzbüheler Alpen bieden Niederau & Wildschönau een adembenemende natuurlijke omgeving voor reflectie en strategische denken.'
  },
  {
    icon: TreePine,
    title: 'Wandelmogelijkheden',
    description: 'Ontdek uitgebreide wandelroutes die variëren van ontspannen boswandelingen tot uitdagende bergtochten, perfect voor teamontwikkeling.'
  },
  {
    icon: Heart,
    title: 'Oostenrijkse Gastvrijheid',
    description: 'Ervaar de warme Oostenrijkse gastvrijheid en excellente service tijdens uw verblijf in deze pittoreske regio.'
  },
  {
    icon: Camera,
    title: 'Natuurlijke Schoonheid',
    description: 'Geniet van kristalheldere bergmeren, groene valleien en majestueuze bergtoppen die creativiteit en inspiratie stimuleren.'
  }
]

export function AustriaSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Niederau & Wildschönau
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meer informatie over de prachtige omgeving in het hart van de Kitzbüheler Alpen,
            met details over de wandelmogelijkheden en natuurlijke schoonheid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=800&h=600&fit=crop"
              alt="Oostenrijkse Alpen - Tirol"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Het Hart van de Kitzbüheler Alpen</h3>
            <p className="text-muted-foreground">
              Niederau & Wildschönau liggen in het hart van de Kitzbüheler Alpen, een regio
              die bekend staat om zijn natuurlijke schoonheid en uitstekende wandelmogelijkheden.
              Hier combineren we de Oostenrijkse precisie en kwaliteit met een unieke natuurlijke
              omgeving die perfect is voor managementontwikkeling.
            </p>
            <p className="text-muted-foreground">
              Van ontspannen wandelingen door groene valleien tot uitdagende bergtochten - elke trail
              is zorgvuldig ontworpen om parallellen te trekken tussen de natuurlijke schoonheid van
              deze regio en zakelijke uitdagingen. De kristalheldere bergmeren, dichte bossen en
              majestueuze bergtoppen bieden de ideale setting voor reflectie en strategisch denken.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">200km+</div>
                <div className="text-sm text-muted-foreground">Wandelroutes</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2000m+</div>
                <div className="text-sm text-muted-foreground">Hoogte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Niederau Facts */}
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/locatie" className="flex items-center gap-2">
              Ontdek alles over onze locatie
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Niederau & Wildschonau Details */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Waarom Niederau & Wildschönau?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Niederau
                </CardTitle>
                <CardDescription>Het centrum van de regio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 mb-4 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                    alt="Niederau, Kitzbüheler Alpen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Het charmante centrum van de regio met uitstekende toegang tot
                  wandelroutes en natuurlijke schoonheid. Perfect voor reflectie
                  en strategische workshops.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/locatie#niederau" className="flex items-center justify-center gap-2">
                    Meer over Niederau
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-5 w-5" />
                  Wildschönau
                </CardTitle>
                <CardDescription>De groene vallei</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 mb-4 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=200&fit=crop"
                    alt="Wildschönau, Kitzbüheler Alpen"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Een pittoreske vallei omgeven door majestueuze bergen.
                  Uitstekende wandelmogelijkheden voor teams die houden van
                  natuurlijke schoonheid en avontuur.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/locatie#wildschonau" className="flex items-center justify-center gap-2">
                    Meer over Wildschönau
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


