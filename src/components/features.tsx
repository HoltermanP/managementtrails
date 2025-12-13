import { Mountain, Users, Home, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Mountain,
    title: 'Oostenrijkse Alpen',
    description: 'Ervaar de inspirerende kracht van de Oostenrijkse bergen tijdens uw management trail.'
  },
  {
    icon: Users,
    title: 'Maximaal 8 Personen',
    description: 'Intieme groepsgrootte voor optimale interactie en persoonlijke aandacht.'
  },
  {
    icon: Home,
    title: 'Luxe Penthouse',
    description: '4 nachten verblijf in een exclusief penthouse met panoramisch uitzicht op de Alpen.'
  },
  {
    icon: Lightbulb,
    title: 'Nieuwe Inzichten',
    description: 'Keer terug met verse ideeën, versterkte relaties en nieuwe energie voor uw bedrijf.'
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
            Ontdek hoe een trail in Oostenrijk uw managementteam kan transformeren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
