import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Focus, Users, Lock, CheckCircle, ArrowLeft, Brain, Heart, Eye } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'

const benefits = [
  {
    icon: Focus,
    title: 'Volledige Focus',
    description: 'Door afstand te nemen van dagelijkse afleidingen ontstaat er ruimte voor diepgaande reflectie en strategisch denken. Zonder de constante stroom van emails, berichten en notificaties kunnen deelnemers zich volledig richten op hun persoonlijke en professionele ontwikkeling.',
    details: [
      'Geen email onderbrekingen tijdens workshops',
      'Volledige aandacht voor teamgenoten',
      'Diepere concentratie tijdens reflectie momenten',
      'Betere opname van nieuwe inzichten'
    ]
  },
  {
    icon: Users,
    title: 'Diepere Connectie',
    description: 'Zonder digitale onderbrekingen ontstaat er meer ruimte voor authentieke gesprekken en sterkere teamverbanden. Het off-grid concept bevordert diepere verbindingen tussen teamleden en creëert ruimte voor authentieke gesprekken en inzichten.',
    details: [
      'Meer oogcontact en non-verbale communicatie',
      'Echte gesprekken zonder afleiding',
      'Sterkere teamverbanden door gedeelde ervaring',
      'Betere luistervaardigheden'
    ]
  },
  {
    icon: Brain,
    title: 'Cognitieve Rust',
    description: 'Onderzoek toont aan dat constante digitale stimulatie onze hersenen overbelast. Door een pauze te nemen van technologie, geven we onze hersenen de ruimte om te herstellen en nieuwe verbindingen te maken.',
    details: [
      'Verminderde mentale vermoeidheid',
      'Betere creativiteit en probleemoplossend vermogen',
      'Verbeterd geheugen en leervermogen',
      'Meer ruimte voor innovatieve ideeën'
    ]
  },
  {
    icon: Heart,
    title: 'Emotionele Veiligheid',
    description: 'In een omgeving zonder digitale afleiding voelen deelnemers zich veiliger om zich kwetsbaar op te stellen. Dit leidt tot meer openheid, eerlijkheid en diepere persoonlijke groei.',
    details: [
      'Meer vertrouwen binnen het team',
      'Openere feedback en reflectie',
      'Betere conflictresolutie',
      'Persoonlijke groei en zelfbewustzijn'
    ]
  }
]

const faq = [
  {
    question: 'Wat gebeurt er met mijn telefoon?',
    answer: 'Uw telefoon wordt veilig opgeborgen in een kluis aan het begin van het programma. U krijgt deze terug aan het einde van de trail. We zorgen ervoor dat alle telefoons veilig en georganiseerd worden bewaard.'
  },
  {
    question: 'Wat als er een noodgeval is?',
    answer: 'We hebben altijd een noodnummer beschikbaar voor uw familie en collega\'s. Ons team is 24/7 bereikbaar voor noodgevallen. Uw veiligheid en die van uw dierbaren staat altijd voorop.'
  },
  {
    question: 'Kan ik foto\'s maken?',
    answer: 'We begrijpen dat u deze ervaring wilt vastleggen. Daarom zorgen we voor professionele foto\'s tijdens de trail die u na afloop ontvangt. Zo kunt u genieten van de momenten zonder de afleiding van uw telefoon.'
  },
  {
    question: 'Hoe moeilijk is het om zonder telefoon te zijn?',
    answer: 'De eerste uren kunnen uitdagend zijn, maar deelnemers geven aan dat ze zich al snel bevrijd voelen. De meeste deelnemers zeggen dat ze zich na een dag al veel meer ontspannen en gefocust voelen.'
  }
]

export default function OffGridPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
        <SafeImage
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Off-Grid in de natuur"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-6 left-6 text-white">
          <Badge variant="secondary" className="mb-4">Uniek Concept</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            No Mobile - Het Off-Grid Concept
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Ontdek hoe volledige digitale disconnectie leidt tot diepere connectie en transformatie
          </p>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Terug naar home
          </Link>
        </Button>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className="h-12 w-12 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Waarom Off-Grid?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Bij Management Trails geloven we dat echte transformatie plaatsvindt wanneer
            je loskomt van de dagelijkse afleidingen. Daarom hanteren we een strikt
            "no mobile" beleid tijdens al onze programma's.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            In onze moderne wereld zijn we constant verbonden. Onze telefoons zijn altijd
            binnen handbereik, en we worden overspoeld met notificaties, emails en berichten.
            Dit constante bombardement van informatie maakt het moeilijk om echt te focussen,
            diep na te denken en authentieke verbindingen te maken met anderen.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">De Voordelen van Off-Grid</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Hoe Werkt Het?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Inleveren</h3>
              <p className="text-muted-foreground">
                Bij aankomst levert u uw telefoon en andere digitale apparaten in bij onze receptie.
                Ze worden veilig opgeborgen in een kluis.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Focus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Ervaren</h3>
              <p className="text-muted-foreground">
                Geniet van 5 dagen volledige focus op uw ontwikkeling, zonder digitale afleidingen.
                Ervaar de vrijheid en diepte die dit brengt.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Terugkrijgen</h3>
              <p className="text-muted-foreground">
                Aan het einde van de trail krijgt u uw apparaten terug, samen met nieuwe inzichten
                en een verfrissende kijk op technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde Vragen</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faq.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Wat Zeggen Onze Deelnemers?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic mb-4">
                "De eerste dag zonder telefoon was vreemd, maar al snel voelde ik me bevrijd.
                Ik had eindelijk tijd om echt na te denken zonder constant gestoord te worden."
              </p>
              <p className="font-semibold">- CEO, Tech Startup</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic mb-4">
                "Ik had niet verwacht dat het zo'n verschil zou maken. De gesprekken met mijn
                team waren zoveel dieper en betekenisvoller zonder de constante afleiding."
              </p>
              <p className="font-semibold">- Directeur, Marketing Bureau</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-muted/50 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Klaar voor de Off-Grid Ervaring?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Ontdek hoe volledige digitale disconnectie uw team kan transformeren
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/trails">Bekijk Onze Trails</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Neem Contact Op</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

