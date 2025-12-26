export interface Trail {
  id: string
  title: string
  description: string
  location: string
  duration: string
  maxParticipants: number
  price: number
  image: string
  highlights: string[]
  activities: string[]
  accommodation: string
  difficulty: 'Beginner' | 'Gemiddeld' | 'Uitdagend'
}

export const trails: Trail[] = [
  {
    id: 'alpine-leadership',
    title: 'Alpine Leadership Trail',
    description: 'Een intensieve trail gericht op leiderschapsontwikkeling in de Kitzbüheler Alpen. Ontdek hoe natuurlijke uitdagingen parallellen trekken met zakelijke obstakels.',
    location: 'Niederau, Kitzbüheler Alpen',
    duration: '5 dagen',
    maxParticipants: 8,
    price: 4000,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    highlights: [
      'Persoonlijke leiderschapsanalyse',
      'Team building oefeningen in de bergen',
      'Strategische sessies met panoramisch uitzicht',
      'Reflectie momenten bij bergmeren'
    ],
    activities: [
      'Bergwandelingen met coaching',
      'Rope courses voor vertrouwen',
      'Strategische workshops',
      'Mindfulness in de natuur'
    ],
    accommodation: 'Luxe penthouse in de bergen met uitzicht op de Alpen',
    difficulty: 'Gemiddeld'
  },
  {
    id: 'strategic-vision',
    title: 'Strategic Vision Trail',
    description: 'Ontwikkel strategisch denken en visie tijdens deze inspirerende trail. De natuur van de Kitzbüheler Alpen dient als metafoor voor langetermijnplanning.',
    location: 'Wildschönau, Kitzbüheler Alpen',
    duration: '5 dagen',
    maxParticipants: 8,
    price: 4000,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    highlights: [
      'Strategische visie oefeningen',
      'Innovatie workshops',
      'Netwerkmomenten',
      'Persoonlijke actieplannen'
    ],
    activities: [
      'Vision quest wandelingen',
      'Creativiteit sessies',
      'Strategische spelletjes',
      'Reflectie in stilte'
    ],
    accommodation: 'Exclusief penthouse met moderne faciliteiten',
    difficulty: 'Beginner'
  },
  {
    id: 'team-dynamics',
    title: 'Team Dynamics Trail',
    description: 'Versterk teamdynamiek en samenwerking in een uitdagende omgeving. Leer van elkaar terwijl u samen de bergen van de Kitzbüheler Alpen trotseert.',
    location: 'Niederau & Wildschönau, Kitzbüheler Alpen',
    duration: '5 dagen',
    maxParticipants: 8,
    price: 4000,
    image: 'https://images.unsplash.com/photo-1464822759844-d150f39bf846?w=800&h=600&fit=crop',
    highlights: [
      'Team performance analyse',
      'Communicatie oefeningen',
      'Conflict resolutie training',
      'Samenwerkingsactiviteiten'
    ],
    activities: [
      'Groepsuitdagingen',
      'Rolverdeling oefeningen',
      'Feedback sessies',
      'Team building games'
    ],
    accommodation: 'Comfortabel penthouse voor optimale interactie',
    difficulty: 'Uitdagend'
  }
]


