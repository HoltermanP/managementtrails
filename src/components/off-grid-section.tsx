import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Smartphone, Focus, Users, Lock, ArrowRight } from 'lucide-react'

const offGridBenefits = [
  {
    icon: Focus,
    title: 'Volledige Focus',
    description: 'Door afstand te nemen van dagelijkse afleidingen ontstaat er ruimte voor diepgaande reflectie en strategisch denken.'
  },
  {
    icon: Users,
    title: 'Diepere Connectie',
    description: 'Zonder digitale onderbrekingen ontstaat er meer ruimte voor authentieke gesprekken en sterkere teamverbanden.'
  },
  {
    icon: Smartphone,
    title: 'No Phones',
    description: 'Het unieke concept waarbij alle mobiele apparaten worden weggelaten voor volledige focus op de training.'
  }
]

export function OffGridSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Smartphone className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              No Mobile - Het Off-Grid Concept
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Een uitleg van het unieke concept waarbij deelnemers hun telefoon weglaten
            voor volledige focus op de training.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offGridBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/off-grid" className="flex items-center gap-2">
                Lees meer over het Off-Grid concept
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
