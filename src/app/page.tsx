import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { OffGridSection } from '@/components/off-grid-section'
import { AustriaSection } from '@/components/austria-section'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <OffGridSection />
      <AustriaSection />
    </div>
  )
}
