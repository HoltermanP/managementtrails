import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mountain, Heart, Coffee, Camera, MapPin, TreePine, ArrowRight } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'

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
    <section className="py-20 bg-gradient-to-b from-background via-background to-background relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Niederau & Wildschönau</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meer informatie over de prachtige omgeving in het hart van de Kitzbüheler Alpen,
            met details over de wandelmogelijkheden en natuurlijke schoonheid.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <SafeImage
              src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=800&h=600&fit=crop"
              alt="Oostenrijkse Alpen - Tirol"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
              <div className="text-center p-4 bg-card border border-border/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">200km+</div>
                <div className="text-sm text-muted-foreground">Wandelroutes</div>
              </div>
              <div className="text-center p-4 bg-card border border-border/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">2000m+</div>
                <div className="text-sm text-muted-foreground">Hoogte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Niederau Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {niederauFacts.map((fact, index) => (
            <Link key={index} href="/locatie" className="group block">
              <Card 
                className="relative text-center hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl w-fit group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <fact.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {fact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    {fact.description}
                  </CardDescription>
                </CardContent>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link href="/locatie" className="flex items-center gap-2">
              Ontdek alles over onze locatie
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Niederau & Wildschonau Details */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Waarom Niederau & Wildschönau?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/locatie#niederau" className="block">
              <Card className="hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 bg-card hover:-translate-y-2 group cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <MapPin className="h-5 w-5 text-primary" />
                    Niederau
                  </CardTitle>
                  <CardDescription>Het centrum van de regio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden shadow-lg">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop"
                      alt="Niederau, Kitzbüheler Alpen"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Het charmante centrum van de regio met uitstekende toegang tot
                    wandelroutes en natuurlijke schoonheid. Perfect voor reflectie
                    en strategische workshops.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                    Meer over Niederau
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/locatie#wildschonau" className="block">
              <Card className="hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/50 bg-card hover:-translate-y-2 group cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                    <TreePine className="h-5 w-5 text-primary" />
                    Wildschönau
                  </CardTitle>
                  <CardDescription>De groene vallei</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-40 mb-4 rounded-xl overflow-hidden shadow-lg">
                    <SafeImage
                      src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=200&fit=crop"
                      alt="Wildschönau, Kitzbüheler Alpen"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Een pittoreske vallei omgeven door majestueuze bergen.
                    Uitstekende wandelmogelijkheden voor teams die houden van
                    natuurlijke schoonheid en avontuur.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                    Meer over Wildschönau
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


