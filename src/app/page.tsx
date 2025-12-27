import Link from 'next/link'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { OffGridSection } from '@/components/off-grid-section'
import { AustriaSection } from '@/components/austria-section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <OffGridSection />
      <AustriaSection />
      
      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background relative overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Ontdek Meer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verken alle aspecten van uw Management Trail ervaring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/trails" className="group block">
              <Card className="relative hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 font-bold">Onze Trails</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Bekijk alle beschikbare management trails
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Bekijk Trails
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>

            <Link href="/over-ons" className="group block">
              <Card className="relative hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 font-bold">Over Ons</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Leer meer over Management Trails
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Over Ons
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>

            <Link href="/locatie" className="group block">
              <Card className="relative hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 font-bold">De Locatie</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Ontdek Niederau & Wildschönau
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Bekijk Locatie
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>

            <Link href="/contact" className="group block">
              <Card className="relative hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:-translate-y-3 hover:scale-[1.02] cursor-pointer h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 font-bold">Contact</CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    Neem contact met ons op
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    Contact
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
