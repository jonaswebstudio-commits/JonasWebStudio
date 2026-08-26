import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "lt", label: "Lietuvių", short: "LT" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "es", label: "Español", short: "ES" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.listings": "Listings",
  "nav.services": "Services",
  "nav.contact": "Contact",
  "nav.language": "Language",

  "hero.title": "Meridian Properties",
  "hero.subtitle": "Finding the right address, not just any address",
  "hero.cta": "View the collection",
  "hero.scroll": "Scroll",

  "about.eyebrow": "About us",
  "about.heading": "A decade of localized expertise and personal stewardship.",
  "about.body":
    "Meridian Properties has spent over a decade helping people buy, sell, and invest in homes across the city. We believe real estate is personal — every listing gets the same care whether it's a first apartment or a family home. Our agents know the neighborhoods block by block, not just the listings.",
  "about.more": "Read our story",
  "about.stat1": "Years in the market",
  "about.stat2": "Homes matched",
  "about.stat3": "Client referral rate",
  "about.values": "What we stand for",
  "about.value1.title": "Local knowledge",
  "about.value1.body": "We walk the streets we sell. Every district, every courtyard, every commute.",
  "about.value2.title": "Straight answers",
  "about.value2.body": "If a property isn't right, we say so — even when it costs us the sale.",
  "about.value3.title": "One point of contact",
  "about.value3.body": "The agent you meet first is the agent who closes your deal.",

  "listings.eyebrow": "Featured Collection",
  "listings.location": "Vilnius, LT",
  "listings.seeMore": "See more listings",
  "listings.all": "The full collection",
  "listings.intro": "Hand-selected homes across Vilnius, updated as the market moves.",
  "listings.viewDetails": "View details",
  "listings.back": "Back to listings",
  "listings.highlights": "Highlights",
  "listings.enquire": "Enquire about this home",
  "listings.notFound": "This listing is no longer available.",

  "spec.size": "Size",
  "spec.bedrooms": "Bedrooms",
  "spec.bathrooms": "Bathrooms",
  "spec.floor": "Floor",
  "spec.year": "Built",
  "spec.energy": "Energy class",
  "spec.parking": "Parking",
  "spec.district": "District",

  "services.eyebrow": "Capabilities",
  "services.heading": "Services",
  "services.intro": "Four ways we work with clients, from first viewing to long-term portfolio.",
  "svc.buy.title": "Buying",
  "svc.buy.desc": "Guidance from search to closing.",
  "svc.buy.long": "We shortlist properties against your real criteria, arrange viewings, negotiate the price, and coordinate notaries and paperwork through to the keys.",
  "svc.sell.title": "Selling",
  "svc.sell.desc": "Pricing strategy, staging advice, and marketing.",
  "svc.sell.long": "Comparative pricing analysis, professional photography, staging guidance, and a targeted campaign to reach qualified buyers quickly.",
  "svc.rent.title": "Renting",
  "svc.rent.desc": "Tenant screening and lease management.",
  "svc.rent.long": "We advertise, screen tenants, draft compliant leases, and handle renewals so your property stays occupied and cared for.",
  "svc.invest.title": "Investment consulting",
  "svc.invest.desc": "Market analysis for buy-to-let and portfolio growth.",
  "svc.invest.long": "Yield modelling, district-level demand data, and acquisition strategy for buy-to-let investors building a portfolio.",

  "testimonials.eyebrow": "Clients",
  "t1": "They found us a home in three weeks that checked every box.",
  "t2": "Sold our apartment above asking price, no stress at all.",
  "t3": "Honest advice, even when it meant telling us to walk away from a listing.",

  "contact.heading": "Get in Touch",
  "contact.intro": "Schedule a viewing by phone, email, or the contact form.",
  "contact.office": "Office",
  "contact.inquiries": "Inquiries",
  "contact.hours": "Hours",
  "contact.hours1": "Mon–Fri 09:00–19:00",
  "contact.hours2": "Sat 10:00–15:00",
  "contact.name": "Name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.submit": "Schedule a Viewing",
  "contact.sent": "Thank you — we'll be in touch shortly.",
  "contact.cta": "Contact us",

  "footer.rights": "All rights reserved.",
};

const lt: Dict = {
  "nav.home": "Pradžia",
  "nav.about": "Apie mus",
  "nav.listings": "Objektai",
  "nav.services": "Paslaugos",
  "nav.contact": "Kontaktai",
  "nav.language": "Kalba",

  "hero.title": "Meridian Properties",
  "hero.subtitle": "Randame tinkamą adresą, o ne bet kokį adresą",
  "hero.cta": "Peržiūrėti kolekciją",
  "hero.scroll": "Slinkti",

  "about.eyebrow": "Apie mus",
  "about.heading": "Dešimtmetis vietos patirties ir asmeninio rūpesčio.",
  "about.body":
    "„Meridian Properties“ jau daugiau nei dešimtmetį padeda žmonėms pirkti, parduoti ir investuoti į būstą mieste. Tikime, kad nekilnojamasis turtas yra asmeniškas dalykas — kiekvienam objektui skiriame tiek pat dėmesio, ar tai pirmasis butas, ar šeimos namai. Mūsų agentai pažįsta rajonus kvartalas po kvartalo, o ne tik skelbimus.",
  "about.more": "Mūsų istorija",
  "about.stat1": "Metai rinkoje",
  "about.stat2": "Rasti namai",
  "about.stat3": "Klientų rekomendacijos",
  "about.values": "Kuo tikime",
  "about.value1.title": "Vietos išmanymas",
  "about.value1.body": "Vaikštome gatvėmis, kurias parduodame. Kiekvienas rajonas, kiemas ir kelias į darbą.",
  "about.value2.title": "Tiesūs atsakymai",
  "about.value2.body": "Jei objektas netinka — pasakome, net jei prarandame sandorį.",
  "about.value3.title": "Vienas kontaktas",
  "about.value3.body": "Agentas, kurį sutinkate pirmą, užbaigia jūsų sandorį.",

  "listings.eyebrow": "Išskirtinė kolekcija",
  "listings.location": "Vilnius, LT",
  "listings.seeMore": "Žiūrėti daugiau objektų",
  "listings.all": "Visa kolekcija",
  "listings.intro": "Kruopščiai atrinkti būstai Vilniuje, atnaujinami kintant rinkai.",
  "listings.viewDetails": "Plačiau",
  "listings.back": "Grįžti į objektus",
  "listings.highlights": "Ypatumai",
  "listings.enquire": "Teirautis dėl šio būsto",
  "listings.notFound": "Šis objektas nebepasiekiamas.",

  "spec.size": "Plotas",
  "spec.bedrooms": "Miegamieji",
  "spec.bathrooms": "Vonios",
  "spec.floor": "Aukštas",
  "spec.year": "Statyba",
  "spec.energy": "Energinė klasė",
  "spec.parking": "Parkavimas",
  "spec.district": "Rajonas",

  "services.eyebrow": "Galimybės",
  "services.heading": "Paslaugos",
  "services.intro": "Keturi būdai, kaip dirbame su klientais — nuo pirmos apžiūros iki portfelio.",
  "svc.buy.title": "Pirkimas",
  "svc.buy.desc": "Pagalba nuo paieškos iki sandorio.",
  "svc.buy.long": "Atrenkame objektus pagal jūsų realius kriterijus, organizuojame apžiūras, derame kainą ir tvarkome dokumentus iki raktų perdavimo.",
  "svc.sell.title": "Pardavimas",
  "svc.sell.desc": "Kainodara, patarimai dėl paruošimo ir rinkodara.",
  "svc.sell.long": "Lyginamoji kainų analizė, profesionali fotografija, būsto paruošimas ir tikslinė kampanija kvalifikuotiems pirkėjams.",
  "svc.rent.title": "Nuoma",
  "svc.rent.desc": "Nuomininkų patikra ir sutarčių administravimas.",
  "svc.rent.long": "Skelbiame, tikriname nuomininkus, rengiame sutartis ir tvarkome pratęsimus, kad būstas būtų išnuomotas ir prižiūrėtas.",
  "svc.invest.title": "Investicijų konsultacijos",
  "svc.invest.desc": "Rinkos analizė nuomos verslui ir portfelio augimui.",
  "svc.invest.long": "Grąžos modeliavimas, rajonų paklausos duomenys ir įsigijimo strategija investuotojams.",

  "testimonials.eyebrow": "Klientai",
  "t1": "Per tris savaites rado namus, atitinkančius visus mūsų kriterijus.",
  "t2": "Pardavė mūsų butą už didesnę nei prašoma kainą, visiškai be streso.",
  "t3": "Sąžiningi patarimai — net kai reikėjo pasakyti atsisakyti objekto.",

  "contact.heading": "Susisiekime",
  "contact.intro": "Apžiūrą užsisakykite telefonu, el. paštu arba per formą.",
  "contact.office": "Biuras",
  "contact.inquiries": "Užklausos",
  "contact.hours": "Darbo laikas",
  "contact.hours1": "I–V 09:00–19:00",
  "contact.hours2": "VI 10:00–15:00",
  "contact.name": "Vardas",
  "contact.email": "El. paštas",
  "contact.message": "Žinutė",
  "contact.submit": "Registruotis apžiūrai",
  "contact.sent": "Ačiū — netrukus susisieksime.",
  "contact.cta": "Susisiekti",

  "footer.rights": "Visos teisės saugomos.",
};

const de: Dict = {
  "nav.home": "Start",
  "nav.about": "Über uns",
  "nav.listings": "Objekte",
  "nav.services": "Leistungen",
  "nav.contact": "Kontakt",
  "nav.language": "Sprache",

  "hero.title": "Meridian Properties",
  "hero.subtitle": "Die richtige Adresse finden, nicht irgendeine",
  "hero.cta": "Kollektion ansehen",
  "hero.scroll": "Scrollen",

  "about.eyebrow": "Über uns",
  "about.heading": "Ein Jahrzehnt lokaler Expertise und persönlicher Betreuung.",
  "about.body":
    "Meridian Properties begleitet seit über zehn Jahren Menschen beim Kauf, Verkauf und bei Investitionen in Immobilien in der ganzen Stadt. Immobilien sind für uns etwas Persönliches — jedes Objekt erhält dieselbe Sorgfalt, ob erste Wohnung oder Familienhaus. Unsere Makler kennen die Viertel Block für Block.",
  "about.more": "Unsere Geschichte",
  "about.stat1": "Jahre am Markt",
  "about.stat2": "Vermittelte Objekte",
  "about.stat3": "Weiterempfehlungsrate",
  "about.values": "Wofür wir stehen",
  "about.value1.title": "Lokale Kenntnis",
  "about.value1.body": "Wir kennen jede Straße, die wir verkaufen — Viertel, Hinterhöfe, Wege zur Arbeit.",
  "about.value2.title": "Klare Antworten",
  "about.value2.body": "Passt ein Objekt nicht, sagen wir es — auch wenn es den Abschluss kostet.",
  "about.value3.title": "Ein Ansprechpartner",
  "about.value3.body": "Wer Sie zuerst berät, führt den Abschluss auch durch.",

  "listings.eyebrow": "Ausgewählte Objekte",
  "listings.location": "Vilnius, LT",
  "listings.seeMore": "Mehr Objekte ansehen",
  "listings.all": "Die gesamte Kollektion",
  "listings.intro": "Handverlesene Immobilien in Vilnius, laufend aktualisiert.",
  "listings.viewDetails": "Details ansehen",
  "listings.back": "Zurück zu den Objekten",
  "listings.highlights": "Höhepunkte",
  "listings.enquire": "Objekt anfragen",
  "listings.notFound": "Dieses Objekt ist nicht mehr verfügbar.",

  "spec.size": "Fläche",
  "spec.bedrooms": "Schlafzimmer",
  "spec.bathrooms": "Bäder",
  "spec.floor": "Etage",
  "spec.year": "Baujahr",
  "spec.energy": "Energieklasse",
  "spec.parking": "Parkplatz",
  "spec.district": "Stadtteil",

  "services.eyebrow": "Kompetenzen",
  "services.heading": "Leistungen",
  "services.intro": "Vier Wege der Zusammenarbeit — von der ersten Besichtigung bis zum Portfolio.",
  "svc.buy.title": "Kaufen",
  "svc.buy.desc": "Begleitung von der Suche bis zum Abschluss.",
  "svc.buy.long": "Wir wählen Objekte nach Ihren echten Kriterien aus, organisieren Besichtigungen, verhandeln den Preis und koordinieren Notar und Unterlagen.",
  "svc.sell.title": "Verkaufen",
  "svc.sell.desc": "Preisstrategie, Home Staging und Vermarktung.",
  "svc.sell.long": "Vergleichende Preisanalyse, professionelle Fotografie, Staging-Beratung und eine gezielte Kampagne für qualifizierte Käufer.",
  "svc.rent.title": "Vermieten",
  "svc.rent.desc": "Mieterprüfung und Vertragsmanagement.",
  "svc.rent.long": "Wir inserieren, prüfen Mieter, erstellen rechtssichere Verträge und übernehmen Verlängerungen.",
  "svc.invest.title": "Investmentberatung",
  "svc.invest.desc": "Marktanalyse für Buy-to-let und Portfolioaufbau.",
  "svc.invest.long": "Renditemodelle, Nachfragedaten je Stadtteil und Ankaufsstrategie für Investoren.",

  "testimonials.eyebrow": "Kunden",
  "t1": "Sie fanden in drei Wochen ein Zuhause, das jeden Punkt erfüllte.",
  "t2": "Unsere Wohnung wurde über dem Angebotspreis verkauft — völlig stressfrei.",
  "t3": "Ehrliche Beratung, auch wenn sie hieß: Finger weg von diesem Objekt.",

  "contact.heading": "Kontakt aufnehmen",
  "contact.intro": "Besichtigung per Telefon, E-Mail oder Formular vereinbaren.",
  "contact.office": "Büro",
  "contact.inquiries": "Anfragen",
  "contact.hours": "Öffnungszeiten",
  "contact.hours1": "Mo–Fr 09:00–19:00",
  "contact.hours2": "Sa 10:00–15:00",
  "contact.name": "Name",
  "contact.email": "E-Mail",
  "contact.message": "Nachricht",
  "contact.submit": "Besichtigung vereinbaren",
  "contact.sent": "Vielen Dank — wir melden uns in Kürze.",
  "contact.cta": "Kontakt",

  "footer.rights": "Alle Rechte vorbehalten.",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.listings": "Biens",
  "nav.services": "Services",
  "nav.contact": "Contact",
  "nav.language": "Langue",

  "hero.title": "Meridian Properties",
  "hero.subtitle": "Trouver la bonne adresse, pas n'importe laquelle",
  "hero.cta": "Voir la collection",
  "hero.scroll": "Défiler",

  "about.eyebrow": "À propos",
  "about.heading": "Une décennie d'expertise locale et d'accompagnement personnel.",
  "about.body":
    "Meridian Properties accompagne depuis plus de dix ans les particuliers qui achètent, vendent et investissent dans l'immobilier de la ville. L'immobilier est une affaire personnelle — chaque bien reçoit le même soin, du premier appartement à la maison familiale. Nos agents connaissent les quartiers rue par rue.",
  "about.more": "Notre histoire",
  "about.stat1": "Années sur le marché",
  "about.stat2": "Biens attribués",
  "about.stat3": "Taux de recommandation",
  "about.values": "Nos convictions",
  "about.value1.title": "Connaissance locale",
  "about.value1.body": "Nous arpentons les rues que nous vendons : quartiers, cours, trajets.",
  "about.value2.title": "Réponses franches",
  "about.value2.body": "Si un bien ne convient pas, nous le disons — même au prix de la vente.",
  "about.value3.title": "Un seul interlocuteur",
  "about.value3.body": "L'agent rencontré au départ conclut votre transaction.",

  "listings.eyebrow": "Collection choisie",
  "listings.location": "Vilnius, LT",
  "listings.seeMore": "Voir plus de biens",
  "listings.all": "Toute la collection",
  "listings.intro": "Des biens sélectionnés à Vilnius, actualisés au fil du marché.",
  "listings.viewDetails": "Voir le détail",
  "listings.back": "Retour aux biens",
  "listings.highlights": "Points forts",
  "listings.enquire": "Demander des informations",
  "listings.notFound": "Ce bien n'est plus disponible.",

  "spec.size": "Surface",
  "spec.bedrooms": "Chambres",
  "spec.bathrooms": "Salles de bain",
  "spec.floor": "Étage",
  "spec.year": "Construction",
  "spec.energy": "Classe énergie",
  "spec.parking": "Stationnement",
  "spec.district": "Quartier",

  "services.eyebrow": "Compétences",
  "services.heading": "Services",
  "services.intro": "Quatre façons de travailler ensemble, de la visite au portefeuille.",
  "svc.buy.title": "Achat",
  "svc.buy.desc": "Accompagnement de la recherche à la signature.",
  "svc.buy.long": "Nous sélectionnons les biens selon vos critères réels, organisons les visites, négocions le prix et coordonnons notaires et documents.",
  "svc.sell.title": "Vente",
  "svc.sell.desc": "Stratégie de prix, mise en valeur et marketing.",
  "svc.sell.long": "Analyse comparative des prix, photographie professionnelle, home staging et campagne ciblée vers des acheteurs qualifiés.",
  "svc.rent.title": "Location",
  "svc.rent.desc": "Sélection des locataires et gestion des baux.",
  "svc.rent.long": "Nous diffusons l'annonce, sélectionnons les locataires, rédigeons les baux et gérons les renouvellements.",
  "svc.invest.title": "Conseil en investissement",
  "svc.invest.desc": "Analyse de marché pour l'investissement locatif.",
  "svc.invest.long": "Modélisation des rendements, données de demande par quartier et stratégie d'acquisition.",

  "testimonials.eyebrow": "Clients",
  "t1": "Ils nous ont trouvé en trois semaines un logement qui cochait toutes les cases.",
  "t2": "Appartement vendu au-dessus du prix demandé, sans le moindre stress.",
  "t3": "Des conseils honnêtes, même pour nous dire de renoncer à un bien.",

  "contact.heading": "Nous contacter",
  "contact.intro": "Planifiez une visite par téléphone, e-mail ou formulaire.",
  "contact.office": "Bureau",
  "contact.inquiries": "Demandes",
  "contact.hours": "Horaires",
  "contact.hours1": "Lun–Ven 09:00–19:00",
  "contact.hours2": "Sam 10:00–15:00",
  "contact.name": "Nom",
  "contact.email": "E-mail",
  "contact.message": "Message",
  "contact.submit": "Planifier une visite",
  "contact.sent": "Merci — nous vous recontactons rapidement.",
  "contact.cta": "Contact",

  "footer.rights": "Tous droits réservés.",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.about": "Nosotros",
  "nav.listings": "Propiedades",
  "nav.services": "Servicios",
  "nav.contact": "Contacto",
  "nav.language": "Idioma",

  "hero.title": "Meridian Properties",
  "hero.subtitle": "Encontrar la dirección correcta, no una cualquiera",
  "hero.cta": "Ver la colección",
  "hero.scroll": "Desplazar",

  "about.eyebrow": "Nosotros",
  "about.heading": "Una década de experiencia local y trato personal.",
  "about.body":
    "Meridian Properties lleva más de una década ayudando a comprar, vender e invertir en vivienda por toda la ciudad. Creemos que el sector inmobiliario es algo personal: cada propiedad recibe el mismo cuidado, sea un primer piso o una casa familiar. Nuestros agentes conocen los barrios calle a calle.",
  "about.more": "Nuestra historia",
  "about.stat1": "Años en el mercado",
  "about.stat2": "Hogares encontrados",
  "about.stat3": "Clientes que recomiendan",
  "about.values": "En qué creemos",
  "about.value1.title": "Conocimiento local",
  "about.value1.body": "Caminamos las calles que vendemos: barrios, patios y trayectos.",
  "about.value2.title": "Respuestas claras",
  "about.value2.body": "Si una propiedad no encaja, lo decimos, aunque perdamos la venta.",
  "about.value3.title": "Un único contacto",
  "about.value3.body": "El agente que le atiende primero cierra su operación.",

  "listings.eyebrow": "Colección destacada",
  "listings.location": "Vilna, LT",
  "listings.seeMore": "Ver más propiedades",
  "listings.all": "La colección completa",
  "listings.intro": "Viviendas seleccionadas en Vilna, actualizadas según el mercado.",
  "listings.viewDetails": "Ver detalles",
  "listings.back": "Volver a propiedades",
  "listings.highlights": "Destacados",
  "listings.enquire": "Consultar por esta vivienda",
  "listings.notFound": "Esta propiedad ya no está disponible.",

  "spec.size": "Superficie",
  "spec.bedrooms": "Dormitorios",
  "spec.bathrooms": "Baños",
  "spec.floor": "Planta",
  "spec.year": "Construcción",
  "spec.energy": "Clase energética",
  "spec.parking": "Aparcamiento",
  "spec.district": "Barrio",

  "services.eyebrow": "Capacidades",
  "services.heading": "Servicios",
  "services.intro": "Cuatro formas de trabajar juntos, de la primera visita a la cartera.",
  "svc.buy.title": "Compra",
  "svc.buy.desc": "Acompañamiento desde la búsqueda hasta la firma.",
  "svc.buy.long": "Seleccionamos propiedades según sus criterios reales, organizamos visitas, negociamos el precio y coordinamos notaría y documentación.",
  "svc.sell.title": "Venta",
  "svc.sell.desc": "Estrategia de precio, puesta en escena y marketing.",
  "svc.sell.long": "Análisis comparativo de precios, fotografía profesional, home staging y campaña dirigida a compradores cualificados.",
  "svc.rent.title": "Alquiler",
  "svc.rent.desc": "Selección de inquilinos y gestión de contratos.",
  "svc.rent.long": "Publicamos, filtramos inquilinos, redactamos contratos y gestionamos renovaciones.",
  "svc.invest.title": "Consultoría de inversión",
  "svc.invest.desc": "Análisis de mercado para alquiler y crecimiento de cartera.",
  "svc.invest.long": "Modelos de rentabilidad, datos de demanda por barrio y estrategia de adquisición.",

  "testimonials.eyebrow": "Clientes",
  "t1": "En tres semanas encontraron una casa que cumplía todo.",
  "t2": "Vendieron nuestro piso por encima del precio pedido, sin estrés.",
  "t3": "Consejos honestos, incluso cuando implicaba descartar una propiedad.",

  "contact.heading": "Hablemos",
  "contact.intro": "Agende una visita por teléfono, correo o el formulario.",
  "contact.office": "Oficina",
  "contact.inquiries": "Consultas",
  "contact.hours": "Horario",
  "contact.hours1": "Lun–Vie 09:00–19:00",
  "contact.hours2": "Sáb 10:00–15:00",
  "contact.name": "Nombre",
  "contact.email": "Correo",
  "contact.message": "Mensaje",
  "contact.submit": "Agendar una visita",
  "contact.sent": "Gracias — le contactaremos en breve.",
  "contact.cta": "Contacto",

  "footer.rights": "Todos los derechos reservados.",
};

export const DICTIONARIES: Record<LangCode, Dict> = { en, lt, de, fr, es };

type I18nValue = {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "meridian-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (stored && stored in DICTIONARIES) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: LangCode) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((key: string) => DICTIONARIES[lang][key] ?? DICTIONARIES.en[key] ?? key, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
