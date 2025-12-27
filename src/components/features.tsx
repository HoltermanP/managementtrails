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
    <section className="py-20 bg-gradient-to-b from-background via-background to-background relative overflow-hidden border-t border-border/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Waarom kiezen</span> voor Management Trails?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ontdek hoe een trail in Niederau & Wildschönau uw managementteam kan transformeren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} className="group block">
              <Card 
                className="relative text-center hover:shadow-2xl transition-all duration-500 group border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] animate-slide-up cursor-pointer h-full overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="mx-auto mb-6 p-5 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-3xl w-fit group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-6 pt-0">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    <span>{feature.linkText}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


