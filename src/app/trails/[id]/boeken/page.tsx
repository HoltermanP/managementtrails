'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, Users, Euro } from 'lucide-react'
import { format } from 'date-fns'
import { nl } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import { trails } from '@/lib/trails'
import { notFound } from 'next/navigation'

const bookingSchema = z.object({
  companyName: z.string().min(2, 'Bedrijfsnaam is verplicht'),
  contactName: z.string().min(2, 'Contactpersoon naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Telefoonnummer is verplicht'),
  participants: z.string().min(1, 'Aantal deelnemers is verplicht'),
  preferredDate: z.date().refine((date) => date !== undefined, {
    message: 'Voorkeursdatum is verplicht',
  }),
  specialRequests: z.string().optional(),
})

type BookingForm = z.infer<typeof bookingSchema>

interface BookingPageProps {
  params: {
    id: string
  }
}

export default function BookingPage({ params }: BookingPageProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const trail = trails.find(t => t.id === params.id)

  if (!trail) {
    notFound()
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  })

  const preferredDate = watch('preferredDate')

  const onSubmit = async (data: BookingForm) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Booking data:', { ...data, trailId: params.id })

    // In a real app, this would send to your backend
    alert('Bedankt voor uw boeking! We nemen binnen 24 uur contact met u op.')

    setIsSubmitting(false)
    router.push('/trails')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Boek {trail.title}
          </h1>
          <p className="text-muted-foreground">
            Vul het formulier in om uw trail te boeken. We nemen binnen 24 uur contact met u op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Boekingsgegevens</CardTitle>
                <CardDescription>
                  Alle velden zijn verplicht tenzij anders aangegeven.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Bedrijfsnaam</Label>
                      <Input
                        id="companyName"
                        {...register('companyName')}
                        placeholder="Uw bedrijfsnaam"
                      />
                      {errors.companyName && (
                        <p className="text-sm text-destructive">{errors.companyName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contactpersoon</Label>
                      <Input
                        id="contactName"
                        {...register('contactName')}
                        placeholder="Naam van contactpersoon"
                      />
                      {errors.contactName && (
                        <p className="text-sm text-destructive">{errors.contactName.message}</p>
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
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        placeholder="+31 6 12345678"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="participants">Aantal deelnemers</Label>
                      <Select onValueChange={(value) => setValue('participants', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecteer aantal" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'persoon' : 'personen'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.participants && (
                        <p className="text-sm text-destructive">{errors.participants.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Voorkeursdatum</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !preferredDate && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {preferredDate ? (
                              format(preferredDate, 'PPP', { locale: nl })
                            ) : (
                              <span>Kies een datum</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={preferredDate}
                            onSelect={(date) => date && setValue('preferredDate', date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.preferredDate && (
                        <p className="text-sm text-destructive">{errors.preferredDate.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Speciale wensen (optioneel)</Label>
                    <Textarea
                      id="specialRequests"
                      {...register('specialRequests')}
                      placeholder="Bijvoorbeeld: dieetwensen, specifieke doelen, of andere bijzonderheden..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Bezig met verzenden...' : 'Boeking Verzenden'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trail Samenvatting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">{trail.title}</h3>
                  <p className="text-sm text-muted-foreground">{trail.location}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duur:</span>
                    <span>{trail.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Max. deelnemers:</span>
                    <span>{trail.maxParticipants}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Totaal:</span>
                    <span>€{trail.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Wat is inbegrepen?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>4 overnachtingen in penthouse</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Alle maaltijden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Begeleiding door ervaren coaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Alle activiteiten en materialen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 ondersteuning</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
