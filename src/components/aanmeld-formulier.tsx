'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { editions } from '@/lib/content'

const formSchema = z.object({
  naam: z.string().min(2, 'Vul je naam in'),
  email: z.string().email('Vul een geldig e-mailadres in'),
  telefoon: z.string().optional(),
  organisatie: z.string().optional(),
  functie: z.string().optional(),
  editie: z.string().min(1, 'Kies een voorkeur'),
  alternatieveDatum: z.string().optional(),
  ontwikkelvraag: z.string().min(10, 'Omschrijf kort je belangrijkste ontwikkelvraag'),
  doel: z.string().min(10, 'Omschrijf kort wat je concreet bereikt wilt hebben'),
  ervaring: z.string().min(2, 'Omschrijf kort je ervaring'),
  voorkeursactiviteit: z.string().min(1, 'Kies een voorkeur'),
  conditie: z.string().min(1, 'Kies een inschatting'),
  dieet: z.string().optional(),
  offgrid: z.string().min(1, 'Kies een optie'),
  akkoordIntake: z.boolean().refine((v) => v === true, {
    message: 'Een persoonlijke kennismaking is onderdeel van iedere aanmelding',
  }),
})

type FormValues = z.infer<typeof formSchema>

const selectClasses =
  'flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

function Veld({
  label,
  error,
  children,
  optional,
}: {
  label: string
  error?: string
  children: React.ReactNode
  optional?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label}
        {optional && (
          <span className="text-muted-foreground font-normal"> (optioneel)</span>
        )}
      </Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

export function AanmeldFormulier() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)

  const openEditions = editions.filter((e) => !e.soldOut)
  const preselect = searchParams.get('editie') ?? ''
  const editieDefault = openEditions.some((e) => e.id === preselect) ? preselect : ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      editie: editieDefault,
      voorkeursactiviteit: '',
      conditie: '',
      offgrid: '',
      akkoordIntake: false,
    },
  })

  // Nog geen backend/boekingssysteem gekoppeld (zie conceptdocument §10,
  // open besluiten): de aanvraag wordt voorlopig alleen bevestigd in beeld.
  const onSubmit = async (_values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-md p-10 md:p-14 text-center space-y-5">
        <CheckCircle2 className="h-14 w-14 text-bronze mx-auto" strokeWidth={1.5} />
        <h2 className="font-serif text-3xl text-primary">Bedankt voor je aanmelding</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
          We hebben je aanvraag ontvangen en nemen binnen twee werkdagen contact met je
          op voor een korte persoonlijke kennismaking.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card border border-border rounded-md p-8 md:p-12 space-y-10"
      noValidate
    >
      {/* Contactgegevens */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl text-primary mb-2">Contactgegevens</legend>
        <div className="grid md:grid-cols-2 gap-6">
          <Veld label="Naam" error={errors.naam?.message}>
            <Input {...register('naam')} autoComplete="name" />
          </Veld>
          <Veld label="E-mailadres" error={errors.email?.message}>
            <Input type="email" {...register('email')} autoComplete="email" />
          </Veld>
          <Veld label="Telefoonnummer" optional error={errors.telefoon?.message}>
            <Input type="tel" {...register('telefoon')} autoComplete="tel" />
          </Veld>
          <Veld label="Organisatie" optional error={errors.organisatie?.message}>
            <Input {...register('organisatie')} autoComplete="organization" />
          </Veld>
          <Veld label="Functie" optional error={errors.functie?.message}>
            <Input {...register('functie')} autoComplete="organization-title" />
          </Veld>
        </div>
      </fieldset>

      {/* Editie */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl text-primary mb-2">Jouw voorkeur</legend>
        <div className="grid md:grid-cols-2 gap-6">
          <Veld label="Editie" error={errors.editie?.message}>
            <select {...register('editie')} className={selectClasses}>
              <option value="">Maak een keuze…</option>
              {openEditions.map((edition) => (
                <option key={edition.id} value={edition.id}>
                  {edition.label} · {edition.dates}
                </option>
              ))}
              <option value="geen-voorkeur">Nog geen voorkeur / wachtlijst</option>
            </select>
          </Veld>
          <Veld
            label="Alternatieve datum of toelichting"
            optional
            error={errors.alternatieveDatum?.message}
          >
            <Input
              {...register('alternatieveDatum')}
              placeholder="Bijv. ook beschikbaar in mei"
            />
          </Veld>
        </div>
      </fieldset>

      {/* Ontwikkelvraag */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl text-primary mb-2">Jouw ontwikkelvraag</legend>
        <Veld
          label="Wat is je belangrijkste zakelijke of persoonlijke ontwikkelvraag?"
          error={errors.ontwikkelvraag?.message}
        >
          <Textarea rows={4} {...register('ontwikkelvraag')} />
        </Veld>
        <Veld
          label="Wat wil je na deze reis concreet bereikt hebben?"
          error={errors.doel?.message}
        >
          <Textarea rows={4} {...register('doel')} />
        </Veld>
      </fieldset>

      {/* Fysiek */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl text-primary mb-2">Actief in de bergen</legend>
        <Veld
          label="Ervaring met wandelen, hiken en mountainbiken"
          error={errors.ervaring?.message}
        >
          <Textarea
            rows={3}
            {...register('ervaring')}
            placeholder="Bijv. regelmatige wandelaar, weinig MTB-ervaring"
          />
        </Veld>
        <div className="grid md:grid-cols-2 gap-6">
          <Veld label="Voorkeursactiviteit" error={errors.voorkeursactiviteit?.message}>
            <select {...register('voorkeursactiviteit')} className={selectClasses}>
              <option value="">Maak een keuze…</option>
              <option value="hiken">Hiken</option>
              <option value="mountainbiken">Mountainbiken</option>
              <option value="beide">Beide</option>
              <option value="geen-voorkeur">Geen voorkeur</option>
            </select>
          </Veld>
          <Veld label="Globale conditie" error={errors.conditie?.message}>
            <select {...register('conditie')} className={selectClasses}>
              <option value="">Maak een keuze…</option>
              <option value="basis">Goede basisconditie</option>
              <option value="sportief">Sportief</option>
              <option value="zeer-sportief">Zeer sportief</option>
            </select>
          </Veld>
        </div>
        <Veld
          label="Dieetwensen, allergieën of medische aandachtspunten"
          optional
          error={errors.dieet?.message}
        >
          <Textarea rows={2} {...register('dieet')} />
        </Veld>
      </fieldset>

      {/* Afronding */}
      <fieldset className="space-y-6">
        <legend className="font-serif text-2xl text-primary mb-2">Tot slot</legend>
        <Veld
          label="Zou je willen deelnemen aan een off-grideditie (zonder telefoon)?"
          error={errors.offgrid?.message}
        >
          <select {...register('offgrid')} className={selectClasses}>
            <option value="">Maak een keuze…</option>
            <option value="ja">Ja, graag</option>
            <option value="misschien">Misschien, vertel me meer</option>
            <option value="nee">Nee, liever niet</option>
          </select>
        </Veld>
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register('akkoordIntake')}
              className="mt-1 h-4 w-4 accent-primary"
            />
            <span className="text-sm leading-relaxed">
              Ik ga akkoord met een persoonlijke kennismaking vóór definitieve deelname.
            </span>
          </label>
          {errors.akkoordIntake && (
            <p className="text-sm text-destructive">{errors.akkoordIntake.message}</p>
          )}
        </div>
      </fieldset>

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={isSubmitting} className={cn('w-full md:w-auto')}>
          {isSubmitting ? 'Versturen…' : 'Verstuur aanmelding'}
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Je aanmelding is een aanvraag, nog geen definitieve boeking. Na de
          kennismaking bevestigen we samen de deelname.
        </p>
      </div>
    </form>
  )
}
