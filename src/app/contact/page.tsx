'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SafeImage } from '@/components/safe-image'

const contactSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  company: z.string().min(2, 'Bedrijfsnaam is verplicht'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Onderwerp is verplicht'),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Contact form data:', data)

    // In a real app, this would send to your backend
    alert('Bedankt voor uw bericht! We nemen binnen 24 uur contact met u op.')

    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
          <SafeImage
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
            alt="Contact Management Trails"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Neem Contact Op
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Heeft u vragen over onze management trails in Oostenrijk?
                Wilt u meer informatie of een custom trail op maat? We helpen u graag verder.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Stuur ons een bericht</CardTitle>
              <CardDescription>
                Vul het formulier in en we nemen zo snel mogelijk contact met u op.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="Uw naam"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Bedrijfsnaam</Label>
                    <Input
                      id="company"
                      {...register('company')}
                      placeholder="Uw bedrijfsnaam"
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="uw.email@bedrijf.nl"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer (optioneel)</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Onderwerp</Label>
                  <Select onValueChange={(value) => setValue('subject', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecteer een onderwerp" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Algemene informatie</SelectItem>
                      <SelectItem value="booking">Boeking maken</SelectItem>
                      <SelectItem value="custom-trail">Custom trail aanvragen</SelectItem>
                      <SelectItem value="pricing">Prijzen en pakketten</SelectItem>
                      <SelectItem value="dates">Beschikbare data</SelectItem>
                      <SelectItem value="other">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Vertel ons meer over uw wensen of vragen..."
                    rows={6}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Bezig met verzenden...' : 'Bericht Versturen'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contactgegevens</CardTitle>
                <CardDescription>
                  Direct contact met ons opnemen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefoon</p>
                    <p className="text-muted-foreground">+31 6 12345678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-muted-foreground">info@managementtrails.nl</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Locatie</p>
                    <p className="text-muted-foreground">Oostenrijk</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Reactietijd</p>
                    <p className="text-muted-foreground">Binnen 24 uur</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Over Management Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=600&h=400&fit=crop"
                    alt="Management Trails team"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Wij zijn gespecialiseerd in het organiseren van inspirerende management trails
                  in de Oostenrijkse Alpen. Met meer dan 10 jaar ervaring helpen we bedrijven
                  om hun leiderschapspotentieel te ontwikkelen.
                </p>
                <p className="text-muted-foreground">
                  Van strategische visie tot teamdynamiek - onze trails zijn ontworpen om
                  duurzame verandering teweeg te brengen in uw organisatie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Veelgestelde Vragen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Wat is de maximale groepsgrootte?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Al onze trails zijn ontworpen voor maximaal 8 personen voor optimale interactie.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-sm">
                    <Link href="/trails">Bekijk alle trails →</Link>
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Kan ik een custom trail aanvragen?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Ja, we ontwikkelen graag trails op maat voor uw specifieke behoeften.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-sm">
                    <Link href="/over-ons">Lees meer over ons →</Link>
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Wat is de duur van een trail?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Standaard 5 dagen inclusief 4 overnachtingen in een luxe penthouse.
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-sm">
                    <Link href="/accommodatie">Meer over accommodatie →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meer Informatie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/trails">
                    Bekijk alle trails
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/locatie">
                    Ontdek de locatie
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/off-grid">
                    Over het Off-Grid concept
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/accommodatie">
                    Meer over accommodatie
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}



