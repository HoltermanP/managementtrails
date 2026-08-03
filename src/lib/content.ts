// Inhoud op basis van het conceptdocument 'Ondernemersretreat Tirol' v1.0 (juli 2026).

export interface ProgramDay {
  day: string
  title: string
  intro: string
  items: string[]
}

export const programDays: ProgramDay[] = [
  {
    day: 'Maandag',
    title: 'Aankomst en loskomen',
    intro: 'De overgang van dagelijkse hectiek naar volledige aandacht.',
    items: [
      'Zelfstandig reizen naar Niederau en ontvangst in Kristall Plaza.',
      'Inchecken in de eigen slaapkamer en kennismaken met de groep.',
      'Gezamenlijk diner in een authentiek restaurant.',
      'Opening: intenties, persoonlijke ontwikkelvraag en afspraken voor de week.',
    ],
  },
  {
    day: 'Dinsdag',
    title: 'Koers en uitdaging',
    intro: 'De eerste inhoudelijke verdieping, gecombineerd met actief buiten zijn.',
    items: [
      'Gezamenlijk ontbijt en korte coachsessie.',
      'Hike of mountainbiketocht; individuele coachgesprekken onderweg.',
      'Verzorgde lunch onderweg of in het appartement.',
      'Middagsessie: huidige situatie, ambities en blokkades.',
      'Rustmoment, diner op een bijzondere locatie en informele avondreflectie.',
    ],
  },
  {
    day: 'Woensdag',
    title: 'Verdiepen en doorbreken',
    intro: 'Patronen herkennen, perspectieven verbreden en elkaar uitdagen.',
    items: [
      'Ontbijt en dagstart met persoonlijke reflectie.',
      'Intensieve activiteit in de bergen, afgestemd op voorkeur en niveau.',
      'Kruisbestuivingssessie: deelnemers werken mee aan elkaars vraagstukken.',
      'Verdieping in innovatie, AI en toekomstgericht ondernemen.',
      'Diner in een bergrestaurant of authentiek dorp.',
    ],
  },
  {
    day: 'Donderdag',
    title: 'De doorbraak en het plan',
    intro: 'Een langere fysieke uitdaging en de vertaling van inzicht naar actie.',
    items: [
      'Keuze voor een lange wandeling van circa 20 kilometer of een passend alternatief.',
      'Coaching in beweging en ruimte voor individuele gesprekken.',
      'Afrondende sessie: besluiten, koers en concreet actieplan.',
      'Feestelijk slotdiner en gezamenlijke terugblik.',
    ],
  },
  {
    day: 'Vrijdag',
    title: 'Vasthouden en vertrekken',
    intro: 'Afronden met duidelijke afspraken voor na de reis.',
    items: [
      'Gezamenlijk ontbijt.',
      'Persoonlijke commitment: wat ga je anders doen en wanneer?',
      'Vertrek naar Nederland na het ontbijt.',
    ],
  },
]

export const pillars = [
  {
    title: 'Businesscoaching',
    text: 'Onder begeleiding van een ervaren coach met achtergrond in defensie, de energiesector en innovatie.',
  },
  {
    title: 'Ondernemerservaring',
    text: 'Eerlijke lessen uit de praktijk: groei, keuzes, verantwoordelijkheid, tegenslag en persoonlijke ontwikkeling.',
  },
  {
    title: 'Innovatie en AI',
    text: 'Praktische verdieping in technologische ontwikkelingen, kansen en de betekenis van AI voor organisaties en ondernemerschap.',
  },
  {
    title: 'Fysieke uitdaging',
    text: 'Hiken, lange wandelingen en mountainbiken als middel voor focus, doorzettingsvermogen en gesprekken zonder vergadertafel.',
  },
  {
    title: 'Rust en herstel',
    text: 'Ruimte om inzichten te verwerken, te ontspannen en zonder permanente afleiding aanwezig te zijn.',
  },
]

export const outcomes = [
  'Een heldere persoonlijke en zakelijke koers.',
  'Concrete besluiten over vraagstukken die al langer aandacht vragen.',
  'Een praktisch actieplan met duidelijke eerstvolgende stappen.',
  'Meer inzicht in persoonlijke patronen, leiderschap en besluitvorming.',
  'Nieuwe energie en mentale afstand van de dagelijkse hectiek.',
  'Een waardevol netwerk en nieuwe perspectieven door kruisbestuiving.',
  'Voor bedrijfsgroepen: meer vertrouwen, verbinding en een gedeelde richting.',
]

export const distinctives = [
  {
    title: 'Kleinschalig en persoonlijk',
    text: 'Maximaal acht deelnemers; daardoor is er tijd voor ieders vraagstuk.',
  },
  {
    title: 'Coaching in beweging',
    text: 'Individuele gesprekken vinden ook plaats tijdens het hiken of mountainbiken.',
  },
  {
    title: 'Kruisbestuiving',
    text: 'Deelnemers denken actief mee over elkaars uitdagingen en delen hun eigen ervaring.',
  },
  {
    title: 'Luxe zonder afstandelijkheid',
    text: 'Een eigen slaapkamer, goede restaurants en persoonlijke gastvrijheid.',
  },
  {
    title: 'Volledig verzorgd',
    text: 'Alles is geregeld vanaf aankomst in Niederau, zodat je je volledig kunt richten op het programma.',
  },
  {
    title: 'Hoofd én lichaam',
    text: 'Strategisch denken gecombineerd met fysieke inspanning, doorzettingsvermogen en herstel.',
  },
]

export const momenten = [
  'Je wilt doorgroeien, maar mist overzicht of een heldere volgende stap.',
  'Je staat voor een belangrijke zakelijke of persoonlijke keuze.',
  'Je bent succesvol, maar merkt dat de dagelijkse operatie te veel aandacht vraagt.',
  'Je wilt patronen doorbreken en steviger leidinggeven.',
  'Je zoekt nieuwe energie, inspiratie en eerlijke feedback van gelijkgestemden.',
  'Je wilt met je team bouwen aan vertrouwen, verbinding en een gezamenlijke koers.',
]

export const EDITION_CAPACITY = 8

export interface Edition {
  id: string
  label: string
  dates: string
  type: string
  /** Aantal bezette plaatsen (van EDITION_CAPACITY). Undefined = geen telling (bijv. op aanvraag). */
  taken?: number
  soldOut?: boolean
  note?: string
}

export const editions: Edition[] = [
  {
    id: 'september-2026-1',
    label: 'Najaarseditie I',
    dates: 'ma 14 – vr 18 september 2026',
    type: 'Individuele inschrijving',
    taken: 8,
    soldOut: true,
  },
  {
    id: 'september-2026-2',
    label: 'Najaarseditie II',
    dates: 'ma 21 – vr 25 september 2026',
    type: 'Individuele inschrijving',
    taken: 6,
    note: 'Data onder voorbehoud; definitieve bevestiging volgt na de intake.',
  },
  {
    id: 'oktober-2026-besloten',
    label: 'Besloten bedrijfseditie',
    dates: 'ma 5 – vr 9 oktober 2026',
    type: 'Managementteam (besloten)',
    taken: 8,
    soldOut: true,
  },
  {
    id: 'mei-2027',
    label: 'Voorjaarseditie',
    dates: 'ma 10 – vr 14 mei 2027',
    type: 'Individuele inschrijving',
    taken: 4,
    note: 'Data onder voorbehoud; definitieve bevestiging volgt na de intake.',
  },
  {
    id: 'besloten',
    label: 'Besloten bedrijfseditie',
    dates: 'Datum in overleg',
    type: 'Directie-, management- of bedrijfsteam',
    note: 'Programma en coaching afgestemd op jullie gezamenlijke vraagstukken en doelen.',
  },
]

export function editionStatus(edition: Edition): string {
  if (edition.soldOut) return 'Volgeboekt'
  if (edition.taken !== undefined) {
    const left = EDITION_CAPACITY - edition.taken
    return left === 1 ? 'Nog 1 plaats beschikbaar' : `Nog ${left} plaatsen beschikbaar`
  }
  return 'Op aanvraag'
}

export const included = [
  'Vier overnachtingen in een eigen slaapkamer',
  'Ontbijt, lunch en diner, inclusief drankjes',
  'Businesscoaching en begeleide sessies',
  'Begeleide activiteiten: hiken en mountainbiken',
  'Materiaalhuur, gondels en benodigde entrees',
]

export const notIncluded = ['Heen- en terugreis naar Niederau']

export const cancellationPolicy = [
  {
    moment: 'Binnen 14 dagen na boeking, mits de reis over meer dan 90 dagen start',
    refund: '100% terugbetaling',
  },
  {
    moment: 'Meer dan 90 dagen voor vertrek',
    refund: '75% terugbetaling; de aanbetaling van 25% blijft verschuldigd',
  },
  { moment: '60 tot en met 90 dagen voor vertrek', refund: '50% terugbetaling' },
  { moment: '30 tot en met 59 dagen voor vertrek', refund: '25% terugbetaling' },
  { moment: 'Minder dan 30 dagen voor vertrek', refund: 'Geen terugbetaling' },
]

export const bookingSteps = [
  'Kies een editie of vraag een besloten bedrijfstraject aan.',
  'Vul het compacte aanmeldformulier in.',
  'We plannen een korte persoonlijke kennismaking (intake).',
  'Na wederzijdse bevestiging ontvang je de boeking en factuur.',
  'Je betaalt 25% aan; je plek is daarna definitief gereserveerd.',
  'Het resterende bedrag betaal je uiterlijk 30 dagen voor vertrek.',
  'Voor vertrek ontvang je praktische informatie en de uitgebreide intake.',
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Moet ik een ervaren ondernemer zijn?',
    answer:
      'Nee. De reis is bedoeld voor ondernemers, zzp’ers, managers en directeuren die zich willen ontwikkelen. Belangrijker dan ervaring is dat je openstaat voor reflectie, feedback en actieve deelname.',
  },
  {
    question: 'Kan ik alleen deelnemen?',
    answer:
      'Ja. Je kunt individueel aansluiten bij een groep met losse aanmeldingen. Vooraf voeren we een korte intake om te zorgen dat verwachtingen en groepssamenstelling goed aansluiten.',
  },
  {
    question: 'Kunnen we de reis met ons bedrijf of managementteam boeken?',
    answer:
      'Ja. Voor bedrijven en teams bieden we besloten edities aan. Coaching en programma worden afgestemd op jullie doelen, bijvoorbeeld strategie, leiderschap, innovatie, samenwerking of teambuilding.',
  },
  {
    question: 'Hoe fit moet ik zijn?',
    answer:
      'Een goede basisconditie en doorzettingsvermogen zijn nodig. De activiteiten vinden plaats in bergachtig terrein. Via de intake bespreken we je ervaring, conditie en voorkeuren.',
  },
  {
    question: 'Kan ik kiezen tussen wandelen en mountainbiken?',
    answer:
      'Je voorkeur kun je vooraf aangeven. De definitieve invulling hangt af van de groep, het weer en de lokale omstandigheden. Materiaalhuur en georganiseerde activiteiten zijn inbegrepen.',
  },
  {
    question: 'Heb ik een eigen slaapkamer?',
    answer:
      'Ja. Iedere deelnemer beschikt over een eigen slaapkamer in Kristall Plaza of een aanvullend appartement in hetzelfde luxe gebouw.',
  },
  {
    question: 'Wat is bij de prijs inbegrepen?',
    answer:
      'Verblijf, alle maaltijden, drinken, coaching, activiteiten, materiaalhuur, gondels en benodigde entrees zijn inbegrepen. Je regelt zelf de heen- en terugreis naar Niederau.',
  },
  {
    question: 'Wordt rekening gehouden met dieetwensen?',
    answer:
      'Ja. Allergieën en dieetwensen worden vooraf geïnventariseerd. We zoeken binnen redelijke mogelijkheden naar een passende invulling.',
  },
  {
    question: 'Wat gebeurt er bij slecht weer?',
    answer:
      'Het programma wordt aangepast wanneer weer of veiligheid daarom vraagt. De inhoudelijke kwaliteit, fysieke component en gezamenlijke ervaring blijven leidend.',
  },
  {
    question: 'Wat houdt off-grid precies in?',
    answer:
      'Tijdens een off-grideditie gebruiken we geen WhatsApp, e-mail of sociale media. Voor noodgevallen is de groep bereikbaar via één centraal nummer. Vooraf maken we duidelijke afspraken met deelnemers en thuisfront.',
  },
]

// Lokale foto's (public/images) met een passende fallback zolang de
// eigen fotografie nog niet is geplaatst — zie public/images/README.md.
export const images = {
  heroValley: {
    src: '/images/hero-wildschoenau.jpg',
    fallback:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=80&fit=crop',
    alt: 'Uitzicht over het dal van de Wildschönau in Tirol',
  },
  terrace: {
    src: '/images/terras-kristall-plaza.jpg',
    fallback:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80&fit=crop',
    alt: 'Dakterras van Kristall Plaza met uitzicht op de bergen',
  },
  village: {
    src: '/images/alpendorp.jpg',
    fallback:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80&fit=crop',
    alt: 'Bergdorp in de Wildschönau tussen groene alpenweiden',
  },
  mountainbike: {
    src: '/images/mountainbiken.jpg',
    fallback:
      'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1600&q=80&fit=crop',
    alt: 'Mountainbikers op een bergpad in de Alpen',
  },
  hotelNight: {
    src: '/images/kristall-plaza-avond.jpg',
    fallback:
      'https://images.unsplash.com/photo-1518602164578-cd0074062767?w=1600&q=80&fit=crop',
    alt: 'Kristall Plaza in Niederau in de avond',
  },
  hotelDay: {
    src: '/images/kristall-plaza.jpg',
    fallback:
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1600&q=80&fit=crop',
    alt: 'Kristall Plaza in Niederau',
  },
  bedroom: {
    src: '/images/slaapkamer.jpg',
    fallback:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80&fit=crop',
    alt: 'Eigen slaapkamer in Kristall Plaza',
  },
  livingRoom: {
    src: '/images/woonkamer.jpg',
    fallback:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80&fit=crop',
    alt: 'Ruime woonkamer van het appartement in Kristall Plaza',
  },
  hiking: {
    src: '/images/hike.jpg',
    fallback:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1600&q=80&fit=crop',
    alt: 'Hiken over een bergkam in Tirol',
  },
  paragliding: {
    src: '/images/paragliding.jpg',
    fallback:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&fit=crop',
    alt: 'Paragliders boven het dal in Tirol',
  },
}
