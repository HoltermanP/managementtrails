# Management Trails - Oostenrijk

Een professionele website voor het aanbieden van management trails in de Oostenrijkse Alpen.

## Over het Project

Deze website is ontworpen voor het aanbieden van exclusieve management trails voor maximaal 8 personen. De trails vinden plaats in de Oostenrijkse Alpen en bevatten 4 overnachtingen in een luxe penthouse voor €4000,- per trail.

### Belangrijke Specificaties:
- **Maximaal 8 deelnemers** per trail
- **4 overnachtingen** in luxe penthouse
- **Prijs: €4000,-** per trail
- **Locatie: Oostenrijk** (Tirol, Salzburg, Vorarlberg)

## Technische Stack

- **Framework:** Next.js 14 met App Router
- **Styling:** Tailwind CSS
- **UI Componenten:** shadcn/ui
- **Forms:** React Hook Form + Zod validatie
- **TypeScript:** Volledig getypeerd
- **Deployment:** Production-ready build

## Lokale Ontwikkeling

### Vereisten
- Node.js 18+
- npm of yarn

### Installatie
```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev
```

De website is beschikbaar op `http://localhost:3000`

### Build voor productie
```bash
# Type checking en build
npm run build

# Preview productie build
npm start
```

## Website Structuur

### Pagina's
- **/** - Homepage met hero sectie en features
- **/trails** - Overzicht van beschikbare trails
- **/trails/[id]** - Detailpagina per trail
- **/trails/[id]/boeken** - Boeking formulier
- **/over-ons** - Informatie over het bedrijf
- **/contact** - Contact formulier

### Componenten
- `Hero` - Belangrijkste call-to-action sectie
- `Features` - Belangrijke kenmerken van trails
- `AustriaSection` - Informatie over Oostenrijk
- `Navigation` - Hoofdnavigatie
- `TrailCard` - Trail overzichtskaartjes

## Data Structuur

Trails worden gedefinieerd in `src/lib/trails.ts` met de volgende eigenschappen:
- `id`: Unieke identifier
- `title`: Trail naam
- `description`: Korte beschrijving
- `location`: Locatie in Oostenrijk
- `duration`: Duur van de trail
- `maxParticipants`: Maximaal aantal deelnemers (altijd 8)
- `price`: Prijs (altijd €4000)
- `image`: Afbeelding URL
- `highlights`: Belangrijke punten
- `activities`: Uitgevoerde activiteiten
- `accommodation`: Verblijf informatie
- `difficulty`: Moeilijkheidsgraad

## Features

### ✅ Geïmplementeerd
- Volledig responsive design
- TypeScript ondersteuning
- Form validatie met Zod
- Datum picker voor boekingen
- SEO-geoptimaliseerd
- Oostenrijk-specifieke content
- Professionele UI met shadcn/ui
- Contact formulier
- Boeking systeem (frontend)

### 🚧 Toekomstige Verbeteringen
- Backend integratie voor boekingen
- Betalingssysteem
- Beheerderspanel
- E-mail notificaties
- Multi-language ondersteuning

## Deployment

### Vercel (Aanbevolen)
```bash
# Vercel CLI installeren
npm i -g vercel

# Deployen
vercel
```

### Andere Platforms
De website kan worden gedeployed naar elke hosting provider die Next.js ondersteunt:
- Netlify
- Railway
- DigitalOcean App Platform

## Contact

Voor vragen over de website of het project:
- E-mail: info@managementtrails.nl
- Telefoon: +31 6 12345678

---

**Let op:** Voordat u naar GitHub pusht, zorg ervoor dat er geen TypeScript fouten zijn door `npm run build` uit te voeren.
