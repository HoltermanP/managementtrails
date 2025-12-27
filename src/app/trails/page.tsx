import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Users, Euro, ArrowRight } from 'lucide-react'
import { trails } from '@/lib/trails'
import { SafeImage } from '@/components/safe-image'

export default function TrailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Management Trails in de Alpen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Onze Management Trails
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Kies uit onze zorgvuldig samengestelde trails in Niederau & Wildschönau, ontworpen om uw managementteam
              te inspireren en te ontwikkelen in een unieke natuurlijke omgeving.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {trails.map((trail) => (
          <Link key={trail.id} href={`/trails/${trail.id}`} className="block">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 cursor-pointer h-full group">
              <div className="relative h-48">
                <SafeImage
                  src={trail.image}
                  alt={trail.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">{trail.difficulty}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{trail.title}</CardTitle>
                <CardDescription className="text-base">
                  {trail.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{trail.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{trail.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Max {trail.maxParticipants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4 text-muted-foreground" />
                    <span>€{trail.price}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                  Meer Informatie
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/contact" className="block">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 group cursor-pointer h-full">
            <div className="relative h-48 overflow-hidden">
              <SafeImage
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
                alt="Custom Trail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Interesse in een Custom Trail?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Wilt u een trail die perfect aansluit bij uw specifieke behoeften?
                We kunnen een volledig op maat gemaakte trail ontwikkelen voor uw team.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                Neem Contact Op
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/locatie" className="block">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 group cursor-pointer h-full">
            <div className="relative h-48 overflow-hidden">
              <SafeImage
                src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=600&h=400&fit=crop"
                alt="Locatie"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Meer over de Locatie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ontdek alles over Niederau & Wildschönau, het hart van de Kitzbüheler Alpen,
                en waarom deze locatie perfect is voor uw management trail.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                Ontdek de Locatie
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/off-grid" className="block">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 group cursor-pointer h-full">
            <div className="relative h-48 overflow-hidden">
              <SafeImage
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Off-Grid"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Off-Grid Concept</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Leer meer over ons unieke "No Mobile" concept en hoe volledige digitale
                disconnectie leidt tot diepere connectie en transformatie.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300">
                Lees Meer
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}


