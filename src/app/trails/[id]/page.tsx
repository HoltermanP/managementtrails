import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Clock, Users, Euro, CheckCircle, Home } from 'lucide-react'
import { trails } from '@/lib/trails'

interface TrailPageProps {
  params: {
    id: string
  }
}

export default function TrailPage({ params }: TrailPageProps) {
  const trail = trails.find(t => t.id === params.id)

  if (!trail) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={trail.image}
          alt={trail.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{trail.title}</h1>
          <div className="flex items-center gap-4 text-lg">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {trail.location}
            </span>
            <Badge variant="secondary" className="text-sm">
              {trail.difficulty}
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Over deze Trail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {trail.description}
              </p>
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {trail.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Activiteiten</CardTitle>
              <CardDescription>
                Ontdek wat u tijdens deze trail gaat doen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trail.activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Links */}
          <Card>
            <CardHeader>
              <CardTitle>Meer Informatie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" asChild className="w-full justify-start">
                <Link href="/locatie">
                  <MapPin className="h-4 w-4 mr-2" />
                  Ontdek de locatie: Niederau & Wildschönau
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start">
                <Link href="/accommodatie">
                  <Home className="h-4 w-4 mr-2" />
                  Meer over de accommodatie
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start">
                <Link href="/off-grid">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Over het Off-Grid concept
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Booking Card */}
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Trail Informatie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Duur
                </span>
                <span className="font-medium">{trail.duration}</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Max. deelnemers
                </span>
                <span className="font-medium">{trail.maxParticipants}</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Euro className="h-4 w-4" />
                  Prijs per trail
                </span>
                <span className="font-medium text-2xl">€{trail.price}</span>
              </div>

              <Separator />

              <div className="pt-4">
                <Button asChild className="w-full" size="lg">
                  <Link href={`/trails/${trail.id}/boeken`}>
                    Nu Boeken
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Accommodatie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {trail.accommodation}
              </p>
              <p className="text-sm text-muted-foreground">
                Inclusief 4 overnachtingen voor uw hele groep.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/accommodatie">
                  Meer over de accommodatie
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Vragen?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Heeft u vragen over deze trail of wilt u meer informatie?
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact">Neem Contact Op</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}



