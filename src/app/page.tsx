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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ontdek Meer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Onze Trails</CardTitle>
                <CardDescription>
                  Bekijk alle beschikbare management trails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/trails" className="flex items-center justify-center gap-2">
                    Bekijk Trails
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Over Ons</CardTitle>
                <CardDescription>
                  Leer meer over Management Trails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/over-ons" className="flex items-center justify-center gap-2">
                    Over Ons
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>De Locatie</CardTitle>
                <CardDescription>
                  Ontdek Niederau & Wildschönau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/locatie" className="flex items-center justify-center gap-2">
                    Bekijk Locatie
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Neem contact met ons op
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Contact
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
