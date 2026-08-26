import listingOldTown from "@/showcase/meridian/assets/listing-oldtown.jpg";
import listingZverynas from "@/showcase/meridian/assets/listing-zverynas.jpg";
import listingLoft from "@/showcase/meridian/assets/listing-loft.jpg";
import listingPenthouse from "@/showcase/meridian/assets/listing-penthouse.jpg";
import type { LangCode } from "@/showcase/meridian/i18n";

export type Listing = {
  slug: string;
  image: string;
  title: string;
  price: string;
  alt: string;
  district: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  floor: string;
  year: string;
  energy: string;
  parking: string;
  summary: Record<LangCode, string>;
  description: Record<LangCode, string>;
  highlights: Record<LangCode, string[]>;
};

export const listings: Listing[] = [
  {
    slug: "old-town-residence",
    image: listingOldTown,
    title: "Old Town Residence",
    price: "€245,000",
    alt: "Modern minimalist apartment interior with city view through large windows",
    district: "Senamiestis",
    size: "110 m²",
    bedrooms: "3",
    bathrooms: "2",
    floor: "4 / 5",
    year: "1908 / 2022",
    energy: "B",
    parking: "1",
    summary: {
      en: "Modern 3-bedroom apartment • 110 m² • renovated, balcony with city view",
      lt: "Modernus 3 miegamųjų butas • 110 m² • renovuotas, balkonas su vaizdu į miestą",
      de: "Moderne 3-Zimmer-Wohnung • 110 m² • saniert, Balkon mit Stadtblick",
      fr: "Appartement moderne 3 chambres • 110 m² • rénové, balcon avec vue",
      es: "Piso moderno de 3 dormitorios • 110 m² • reformado, balcón con vistas",
    },
    description: {
      en: "A fully renovated apartment in a restored 1908 building, moments from the cathedral. Original proportions kept intact, with oak floors, restored windows and a quiet inner-courtyard balcony overlooking the rooftops.",
      lt: "Visiškai renovuotas butas restauruotame 1908 m. name, vos kelios minutės nuo katedros. Išsaugotos originalios proporcijos, ąžuolinės grindys, restauruoti langai ir ramus balkonas su vaizdu į stogus.",
      de: "Komplett sanierte Wohnung in einem restaurierten Haus von 1908, wenige Schritte von der Kathedrale. Originalproportionen, Eichenparkett, restaurierte Fenster und ein ruhiger Innenhofbalkon.",
      fr: "Appartement entièrement rénové dans un immeuble de 1908 restauré, à deux pas de la cathédrale. Proportions d'origine, parquet chêne, fenêtres restaurées et balcon calme sur cour.",
      es: "Piso totalmente reformado en un edificio restaurado de 1908, a pasos de la catedral. Proporciones originales, suelos de roble, ventanas restauradas y balcón tranquilo al patio.",
    },
    highlights: {
      en: ["Restored heritage building", "Oak herringbone floors", "Courtyard balcony", "Underfloor heating"],
      lt: ["Restauruotas paveldo pastatas", "Ąžuolo eglutės parketas", "Balkonas į kiemą", "Grindinis šildymas"],
      de: ["Restauriertes Denkmalhaus", "Eichenfischgrätparkett", "Hofbalkon", "Fußbodenheizung"],
      fr: ["Immeuble patrimonial restauré", "Parquet chêne à chevrons", "Balcon sur cour", "Chauffage au sol"],
      es: ["Edificio histórico restaurado", "Parquet de roble en espiga", "Balcón al patio", "Suelo radiante"],
    },
  },
  {
    slug: "zverynas-garden-estate",
    image: listingZverynas,
    title: "Žvėrynas Garden Estate",
    price: "€520,000",
    alt: "Luxury family home with private garden and modern wooden facade",
    district: "Žvėrynas",
    size: "180 m²",
    bedrooms: "4",
    bathrooms: "3",
    floor: "2",
    year: "2016",
    energy: "A+",
    parking: "2",
    summary: {
      en: "Family house • 4 bedrooms • 180 m² • private garden",
      lt: "Šeimos namas • 4 miegamieji • 180 m² • privatus sodas",
      de: "Familienhaus • 4 Schlafzimmer • 180 m² • privater Garten",
      fr: "Maison familiale • 4 chambres • 180 m² • jardin privé",
      es: "Casa familiar • 4 dormitorios • 180 m² • jardín privado",
    },
    description: {
      en: "A contemporary family home on a mature, tree-lined plot in Žvėrynas. Timber and glass facade, double-height living room, and a south-facing garden that stays private all day.",
      lt: "Šiuolaikiški šeimos namai želdiniais apaugusiame sklype Žvėryne. Medžio ir stiklo fasadas, dviejų aukštų svetainė ir į pietus orientuotas sodas, ramus visą dieną.",
      de: "Zeitgenössisches Familienhaus auf einem alten Baumgrundstück in Žvėrynas. Holz-Glas-Fassade, Wohnraum über zwei Etagen und ein nach Süden ausgerichteter, uneinsehbarer Garten.",
      fr: "Maison familiale contemporaine sur un terrain arboré à Žvėrynas. Façade bois et verre, séjour double hauteur et jardin plein sud parfaitement privatif.",
      es: "Casa familiar contemporánea en una parcela arbolada de Žvėrynas. Fachada de madera y vidrio, salón a doble altura y jardín orientado al sur totalmente privado.",
    },
    highlights: {
      en: ["Double-height living room", "Mature private garden", "Two-car carport", "Heat pump, A+ rating"],
      lt: ["Dviejų aukštų svetainė", "Subrendęs privatus sodas", "Pastogė dviem automobiliams", "Šilumos siurblys, A+"],
      de: ["Wohnraum über zwei Etagen", "Gewachsener Privatgarten", "Carport für zwei Autos", "Wärmepumpe, A+"],
      fr: ["Séjour double hauteur", "Jardin privatif arboré", "Carport deux voitures", "Pompe à chaleur, A+"],
      es: ["Salón a doble altura", "Jardín privado maduro", "Cochera para dos coches", "Bomba de calor, A+"],
    },
  },
  {
    slug: "city-center-loft",
    image: listingLoft,
    title: "City Center Loft",
    price: "€98,000",
    alt: "Industrial studio loft with high ceilings and exposed brick walls",
    district: "Centras",
    size: "45 m²",
    bedrooms: "1",
    bathrooms: "1",
    floor: "3 / 3",
    year: "1935 / 2019",
    energy: "C",
    parking: "—",
    summary: {
      en: "Studio loft • high ceilings • 45 m² • exposed brick",
      lt: "Studijos tipo loftas • aukštos lubos • 45 m² • plytų siena",
      de: "Studio-Loft • hohe Decken • 45 m² • Sichtziegel",
      fr: "Loft studio • hauteur sous plafond • 45 m² • brique apparente",
      es: "Loft estudio • techos altos • 45 m² • ladrillo visto",
    },
    description: {
      en: "A compact loft with 3.6 m ceilings in a converted 1930s workshop. Exposed brick, steel-framed windows and a mezzanine sleeping platform — an easy lock-and-leave city base or a strong short-let investment.",
      lt: "Kompaktiškas loftas su 3,6 m lubomis buvusiose 1930-ųjų dirbtuvėse. Plytų siena, metaliniai langai ir antresolė miegui — patogus miesto būstas ar investicija trumpalaikei nuomai.",
      de: "Kompaktes Loft mit 3,6 m Deckenhöhe in einer umgebauten Werkstatt der 1930er. Sichtziegel, Stahlfenster und Schlafempore — ideal als Stadtdomizil oder Kurzzeitvermietung.",
      fr: "Loft compact sous 3,6 m de plafond dans un atelier des années 1930 réhabilité. Brique apparente, menuiseries acier et mezzanine nuit — pied-à-terre ou investissement locatif.",
      es: "Loft compacto con techos de 3,6 m en un taller de los años treinta rehabilitado. Ladrillo visto, ventanas de acero y altillo para dormir — base urbana o inversión de alquiler.",
    },
    highlights: {
      en: ["3.6 m ceilings", "Mezzanine sleeping level", "Original steel windows", "Strong rental yield"],
      lt: ["3,6 m lubos", "Antresolė miegui", "Originalūs metaliniai langai", "Gera nuomos grąža"],
      de: ["3,6 m Deckenhöhe", "Schlafempore", "Original Stahlfenster", "Hohe Mietrendite"],
      fr: ["Plafonds 3,6 m", "Mezzanine nuit", "Fenêtres acier d'origine", "Bon rendement locatif"],
      es: ["Techos de 3,6 m", "Altillo dormitorio", "Ventanas de acero originales", "Buena rentabilidad"],
    },
  },
  {
    slug: "naujamiestis-penthouse",
    image: listingPenthouse,
    title: "Naujamiestis Penthouse",
    price: "€610,000",
    alt: "Modern penthouse rooftop terrace with outdoor furniture overlooking city skyline",
    district: "Naujamiestis",
    size: "140 m²",
    bedrooms: "3",
    bathrooms: "2",
    floor: "9 / 9",
    year: "2021",
    energy: "A",
    parking: "2",
    summary: {
      en: "Rooftop terrace • 2 parking spots • 140 m²",
      lt: "Terasa ant stogo • 2 parkavimo vietos • 140 m²",
      de: "Dachterrasse • 2 Stellplätze • 140 m²",
      fr: "Terrasse sur le toit • 2 places de parking • 140 m²",
      es: "Terraza en la azotea • 2 plazas de garaje • 140 m²",
    },
    description: {
      en: "Top-floor penthouse with a wrap-around terrace and uninterrupted skyline views. Floor-to-ceiling glazing, a concealed kitchen, and two secure underground parking spaces with lift access.",
      lt: "Viršutinio aukšto penthausas su terasa aplink butą ir nepertraukiamu miesto panoramos vaizdu. Stiklinės sienos nuo grindų iki lubų, integruota virtuvė ir dvi požeminio parkingo vietos su liftu.",
      de: "Penthouse im Obergeschoss mit umlaufender Terrasse und freiem Skylineblick. Bodentiefe Verglasung, verdeckte Küche und zwei Tiefgaragenplätze mit Aufzugszugang.",
      fr: "Penthouse au dernier étage avec terrasse d'angle et vue dégagée sur la skyline. Baies toute hauteur, cuisine dissimulée et deux places en sous-sol desservies par ascenseur.",
      es: "Ático en la última planta con terraza envolvente y vistas despejadas al skyline. Acristalamiento de suelo a techo, cocina oculta y dos plazas de garaje con ascensor.",
    },
    highlights: {
      en: ["Wrap-around roof terrace", "Skyline views on three sides", "Concealed designer kitchen", "Two underground spaces"],
      lt: ["Terasa aplink butą", "Panorama iš trijų pusių", "Integruota dizainerio virtuvė", "Dvi požeminės vietos"],
      de: ["Umlaufende Dachterrasse", "Skylineblick auf drei Seiten", "Verdeckte Designerküche", "Zwei Tiefgaragenplätze"],
      fr: ["Terrasse d'angle sur le toit", "Vues sur trois côtés", "Cuisine design dissimulée", "Deux places en sous-sol"],
      es: ["Terraza envolvente", "Vistas en tres orientaciones", "Cocina de diseño oculta", "Dos plazas subterráneas"],
    },
  },
];

export function getListing(slug: string) {
  return listings.find((l) => l.slug === slug);
}
