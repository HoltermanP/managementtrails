import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Users, Euro } from 'lucide-react'
import { trails } from '@/lib/trails'

export default function TrailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Onze Management Trails
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Kies uit onze zorgvuldig samengestelde trails in Niederau & Wildschönau, ontworpen om uw managementteam
          te inspireren en te ontwikkelen in een unieke natuurlijke omgeving.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {trails.map((trail) => (
          <Card key={trail.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={trail.image}
                alt={trail.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="secondary">{trail.difficulty}</Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{trail.title}</CardTitle>
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

              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href={`/trails/${trail.id}`}>
                    Meer Informatie
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Interesse in een Custom Trail?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Wilt u een trail die perfect aansluit bij uw specifieke behoeften?
          We kunnen een volledig op maat gemaakte trail ontwikkelen voor uw team.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Neem Contact Op</Link>
        </Button>
      </div>
    </div>
  )
}


