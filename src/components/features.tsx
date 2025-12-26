import Link from 'next/link'
import { Mountain, Users, Home, Lightbulb, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Mountain,
    title: 'Kitzbüheler Alpen',
    description: 'Ervaar de inspirerende kracht van de Kitzbüheler Alpen in Niederau & Wildschönau tijdens uw management trail.',
    link: '/locatie',
    linkText: 'Ontdek de locatie'
  },
  {
    icon: Users,
    title: 'Maximaal 8 Personen',
    description: 'Intieme groepsgrootte voor optimale interactie en persoonlijke aandacht.',
    link: '/trails',
    linkText: 'Bekijk alle trails'
  },
  {
    icon: Home,
    title: 'Luxe Penthouse',
    description: '4 nachten verblijf in een exclusief penthouse met panoramisch uitzicht op de Alpen.',
    link: '/accommodatie',
    linkText: 'Meer over accommodatie'
  },
  {
    icon: Lightbulb,
    title: 'Nieuwe Inzichten',
    description: 'Keer terug met verse ideeën, versterkte relaties en nieuwe energie voor uw bedrijf.',
    link: '/over-ons',
    linkText: 'Lees onze verhalen'
  }
]

export function Features() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Waarom kiezen voor Management Trails?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek hoe een trail in Niederau & Wildschönau uw managementteam kan transformeren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                <Button variant="ghost" asChild className="w-full group-hover:text-primary">
                  <Link href={feature.link} className="flex items-center justify-center gap-2">
                    {feature.linkText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


