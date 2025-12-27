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
    <section className="py-20 bg-gradient-to-br from-background via-background to-background relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">No Mobile</span> - Het Off-Grid Concept
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Een uitleg van het unieke concept waarbij deelnemers hun telefoon weglaten
            voor volledige focus op de training.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {offGridBenefits.map((benefit, index) => (
              <Link key={index} href="/off-grid" className="group block">
                <Card 
                  className="relative text-center hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl w-fit group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                      <benefit.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link href="/off-grid" className="flex items-center gap-2">
                Lees meer over het Off-Grid concept
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
