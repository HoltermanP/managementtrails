import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Oostenrijkse Alpen - Management Trails"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Management Trails
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Breng uw managementteam naar Niederau & Wildschönau in de Kitzbüheler Alpen voor inspiratie, strategie en teamontwikkeling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg px-8 py-3">
            <Link href="/trails">Ontdek onze Trails</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-black">
            <Link href="/contact">Neem Contact Op</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


