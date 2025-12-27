'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Oostenrijkse Alpen - Management Trails"
          fill
          className="object-cover scale-105 animate-scale-in"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-slide-up">
        <div className="mb-4 inline-block">
          <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-white/90">
            Leiderschap in de Alpen
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block">Management</span>
          <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Trails
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
          Breng uw managementteam naar Niederau & Wildschönau in de Kitzbüheler Alpen voor inspiratie, strategie en teamontwikkeling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            <Link href="/trails" className="flex items-center gap-2">
              Ontdek onze Trails
              <ArrowDown className="h-5 w-5 rotate-[-90deg]" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
            <Link href="/contact">Neem Contact Op</Link>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  )
}


