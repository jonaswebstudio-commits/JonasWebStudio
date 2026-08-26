import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "lt", label: "LT", name: "Lietuvių" },
  { code: "ru", label: "RU", name: "Русский" },
] as const;

export type Lang = (typeof languages)[number]["code"];

const en = {
  nav: {
    practice: "Practice",
    firm: "Firm",
    team: "Team",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Consultation",
    menu: "Open menu",
  },
  brand: {
    tagline: "Attorneys at law",
  },
  hero: {
    eyebrow: "Vilnius · Est. 2004",
    lead: "Counsel you can trust when it matters most",
    sub: "A boutique Vilnius firm advising founders, families and companies through the decisions that define them.",
    primary: "Book a free consultation",
    secondary: "Our practice areas",
    stats: [
      ["22+", "Years experience"],
      ["1,200+", "Cases handled"],
      ["96%", "Satisfaction"],
      ["40+", "Industries"],
    ] as [string, string][],
  },
  practice: {
    eyebrow: "Practice areas",
    title: "Six disciplines, one standard of care",
    intro:
      "Each matter is led by a partner and staffed only as far as it needs to be. No hand-offs, no surprises on the invoice.",
    items: [
      ["Corporate & Commercial Law", "Mergers, contracts, governance."],
      ["Real Estate Law", "Transactions, disputes, development."],
      ["Family Law", "Divorce, custody, estate planning."],
      ["Litigation & Dispute Resolution", "Civil litigation, arbitration, mediation."],
      ["Intellectual Property", "Trademarks, patents, licensing."],
      ["Employment Law", "Workplace disputes, contracts, compliance."],
    ] as [string, string][],
  },
  firm: {
    eyebrow: "Why choose us",
    titleA: "A firm measured by ",
    titleEm: "outcomes",
    titleB: ", not billable hours",
    body: "Clients come to us at decisive moments — a sale, a dispute, a separation. We answer with senior attention from the first call and plain language at every stage.",
    stats: [
      ["22+", "Years of combined experience"],
      ["1,200+", "Cases handled"],
      ["96%", "Client satisfaction rate"],
      ["40+", "Industries served"],
    ] as [string, string][],
  },
  team: {
    eyebrow: "Our team",
    title: "The attorneys you will actually work with",
    members: [
      [
        "Richard Barrington",
        "Founding Partner",
        "Corporate & Commercial Law",
        "Two decades advising companies through mergers, funding rounds, and disputes.",
      ],
      [
        "Elena Cole",
        "Founding Partner",
        "Litigation & Dispute Resolution",
        "Known for calm, precise courtroom strategy in high-stakes cases.",
      ],
      [
        "Marcus Ihejirika",
        "Senior Associate",
        "Real Estate & Employment Law",
        "Focuses on practical, fast resolutions for growing businesses.",
      ],
      [
        "Sofia Marchetti",
        "Associate",
        "Family Law & Estate Planning",
        "Brings a personal, steady hand to difficult family matters.",
      ],
    ] as [string, string, string, string][],
    portrait: "Portrait of",
  },
  process: {
    eyebrow: "Our process",
    title: "Four steps, no surprises",
    steps: [
      ["Consultation", "We listen first — a free initial call, entirely confidential."],
      ["Strategy", "A clear plan tailored to your case, with realistic expectations."],
      ["Representation", "Direct access to your attorney throughout the matter."],
      ["Resolution", "Outcomes explained in plain language. No jargon."],
    ] as [string, string][],
  },
  testimonials: {
    eyebrow: "Client words",
    items: [
      [
        "They handled our acquisition flawlessly, and explained every step in language we actually understood.",
        "David H.",
        "CEO",
      ],
      ["Elena's courtroom presence changed the outcome of our case.", "Anna K.", ""],
      ["Finally, a firm that returns calls the same day.", "Peter M.", ""],
    ] as [string, string, string][],
  },
  faq: {
    eyebrow: "Questions",
    title: "Answered plainly",
    items: [
      ["How much does a consultation cost?", "The first consultation is free and confidential."],
      ["How quickly can you take on my case?", "Most new clients are reviewed within 48 hours."],
      [
        "Do you work on a contingency basis?",
        "Available for select litigation matters — ask during your consultation.",
      ],
      [
        "Do you handle cases outside Vilnius?",
        "Yes, we represent clients across Lithuania and the Baltics.",
      ],
    ] as [string, string][],
  },
  contact: {
    eyebrow: "Consultation",
    title: "Schedule a free consultation",
    body: "By phone, email, or the form — whichever suits you. We reply to every enquiry within one business day.",
    labels: {
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      email: "Email",
    },
    hours: "Mon–Fri 9:00–18:00",
    form: {
      name: "Name",
      email: "Email",
      matter: "Matter",
      matterPlaceholder: "e.g. Corporate, Family, Litigation",
      message: "How can we help?",
      messagePlaceholder: "A few lines about your situation",
      submit: "Request consultation",
      sent: "Request received",
      privacy: "Your message is confidential and never shared with third parties.",
      toast: "Thank you — we'll be in touch within one business day.",
      invalidEmail: "Please enter a valid email address.",
      short: "Please add a little more detail (at least 10 characters).",
    },
  },
  footer: {
    rights: "All rights reserved.",
    nav: "Sitemap",
    legal: "Portfolio demo site. Not legal advice.",
  },
};

type Dict = typeof en;

const lt: Dict = {
  nav: {
    practice: "Praktika",
    firm: "Apie mus",
    team: "Komanda",
    process: "Procesas",
    faq: "DUK",
    contact: "Kontaktai",
    cta: "Konsultacija",
    menu: "Atidaryti meniu",
  },
  brand: { tagline: "Advokatų kontora" },
  hero: {
    eyebrow: "Vilnius · Nuo 2004",
    lead: "Patarimai, kuriais galite pasitikėti svarbiausiu metu",
    sub: "Nedidelė Vilniaus kontora, konsultuojanti verslo steigėjus, šeimas ir įmones lemiamais sprendimų momentais.",
    primary: "Nemokama konsultacija",
    secondary: "Praktikos sritys",
    stats: [
      ["22+", "Metų patirtis"],
      ["1 200+", "Bylų"],
      ["96%", "Pasitenkinimas"],
      ["40+", "Sektorių"],
    ],
  },
  practice: {
    eyebrow: "Praktikos sritys",
    title: "Šešios sritys, vienas rūpestingumo standartas",
    intro:
      "Kiekvienai bylai vadovauja partneris, o komanda telkiama tik tiek, kiek iš tiesų reikia. Jokių perdavimų ir netikėtumų sąskaitoje.",
    items: [
      ["Įmonių ir komercinė teisė", "Susijungimai, sutartys, valdysena."],
      ["Nekilnojamojo turto teisė", "Sandoriai, ginčai, plėtra."],
      ["Šeimos teisė", "Skyrybos, globa, paveldėjimo planavimas."],
      ["Bylinėjimasis ir ginčų sprendimas", "Civilinės bylos, arbitražas, mediacija."],
      ["Intelektinė nuosavybė", "Prekių ženklai, patentai, licencijos."],
      ["Darbo teisė", "Darbo ginčai, sutartys, atitiktis."],
    ],
  },
  firm: {
    eyebrow: "Kodėl mes",
    titleA: "Kontora, vertinama pagal ",
    titleEm: "rezultatus",
    titleB: ", o ne valandas",
    body: "Klientai kreipiasi lemiamu momentu — parduodant verslą, kilus ginčui, skiriantis. Nuo pirmo skambučio dirba partneris ir kalbame aiškiai.",
    stats: [
      ["22+", "Metų bendra patirtis"],
      ["1 200+", "Išnagrinėtų bylų"],
      ["96%", "Klientų pasitenkinimas"],
      ["40+", "Aptarnaujamų sektorių"],
    ],
  },
  team: {
    eyebrow: "Mūsų komanda",
    title: "Advokatai, su kuriais iš tikrųjų dirbsite",
    members: [
      [
        "Richard Barrington",
        "Kontoros partneris",
        "Įmonių ir komercinė teisė",
        "Du dešimtmečius konsultuoja įmones susijungimų, investicijų ir ginčų klausimais.",
      ],
      [
        "Elena Cole",
        "Kontoros partnerė",
        "Bylinėjimasis ir ginčų sprendimas",
        "Žinoma dėl ramios ir tikslios strategijos sudėtingose bylose.",
      ],
      [
        "Marcus Ihejirika",
        "Vyresnysis teisininkas",
        "NT ir darbo teisė",
        "Siekia praktiškų ir greitų sprendimų augančiam verslui.",
      ],
      [
        "Sofia Marchetti",
        "Teisininkė",
        "Šeimos teisė ir paveldėjimas",
        "Jautriai ir užtikrintai padeda sudėtingose šeimos bylose.",
      ],
    ],
    portrait: "Portretas:",
  },
  process: {
    eyebrow: "Mūsų procesas",
    title: "Keturi žingsniai be netikėtumų",
    steps: [
      ["Konsultacija", "Pirmiausia išklausome — pirmas pokalbis nemokamas ir konfidencialus."],
      ["Strategija", "Aiškus planas pagal jūsų situaciją ir realūs lūkesčiai."],
      ["Atstovavimas", "Tiesioginis ryšys su savo advokatu viso proceso metu."],
      ["Rezultatas", "Rezultatus paaiškiname aiškia kalba, be teisinio žargono."],
    ],
  },
  testimonials: {
    eyebrow: "Klientų atsiliepimai",
    items: [
      [
        "Įsigijimo sandorį sutvarkė nepriekaištingai ir kiekvieną žingsnį paaiškino suprantamai.",
        "David H.",
        "Vadovas",
      ],
      ["Elenos laikysena teisme pakeitė mūsų bylos baigtį.", "Anna K.", ""],
      ["Pagaliau kontora, kuri perskambina tą pačią dieną.", "Peter M.", ""],
    ],
  },
  faq: {
    eyebrow: "Klausimai",
    title: "Atsakome aiškiai",
    items: [
      ["Kiek kainuoja konsultacija?", "Pirma konsultacija nemokama ir konfidenciali."],
      ["Kaip greitai imsitės mano bylos?", "Daugumą naujų klientų įvertiname per 48 valandas."],
      [
        "Ar dirbate už sėkmės mokestį?",
        "Taikoma atskiroms bylinėjimosi byloms — pasiteiraukite konsultacijos metu.",
      ],
      ["Ar dirbate ne tik Vilniuje?", "Taip, atstovaujame klientams visoje Lietuvoje ir Baltijos šalyse."],
    ],
  },
  contact: {
    eyebrow: "Konsultacija",
    title: "Užsisakykite nemokamą konsultaciją",
    body: "Telefonu, el. paštu arba užpildę formą — kaip jums patogiau. Į kiekvieną užklausą atsakome per vieną darbo dieną.",
    labels: { address: "Adresas", hours: "Darbo laikas", phone: "Telefonas", email: "El. paštas" },
    hours: "I–V 9:00–18:00",
    form: {
      name: "Vardas",
      email: "El. paštas",
      matter: "Sritis",
      matterPlaceholder: "pvz. verslo, šeimos, bylinėjimosi",
      message: "Kuo galime padėti?",
      messagePlaceholder: "Keli sakiniai apie jūsų situaciją",
      submit: "Registruotis konsultacijai",
      sent: "Užklausa gauta",
      privacy: "Jūsų žinutė konfidenciali ir neperduodama tretiesiems asmenims.",
      toast: "Ačiū — susisieksime per vieną darbo dieną.",
      invalidEmail: "Įveskite teisingą el. pašto adresą.",
      short: "Parašykite šiek tiek plačiau (bent 10 simbolių).",
    },
  },
  footer: {
    rights: "Visos teisės saugomos.",
    nav: "Svetainės medis",
    legal: "Portfolio pavyzdys. Tai nėra teisinė konsultacija.",
  },
};

const ru: Dict = {
  nav: {
    practice: "Практика",
    firm: "О фирме",
    team: "Команда",
    process: "Процесс",
    faq: "Вопросы",
    contact: "Контакты",
    cta: "Консультация",
    menu: "Открыть меню",
  },
  brand: { tagline: "Адвокатское бюро" },
  hero: {
    eyebrow: "Вильнюс · с 2004",
    lead: "Юристы, которым можно доверять в решающий момент",
    sub: "Небольшое вильнюсское бюро, сопровождающее предпринимателей, семьи и компании в важнейших решениях.",
    primary: "Бесплатная консультация",
    secondary: "Наши практики",
    stats: [
      ["22+", "Года опыта"],
      ["1 200+", "Дел"],
      ["96%", "Довольных клиентов"],
      ["40+", "Отраслей"],
    ],
  },
  practice: {
    eyebrow: "Практики",
    title: "Шесть направлений, один стандарт заботы",
    intro:
      "Каждое дело ведёт партнёр, а команда подключается ровно настолько, насколько нужно. Без передач и сюрпризов в счёте.",
    items: [
      ["Корпоративное и коммерческое право", "Сделки M&A, договоры, управление."],
      ["Недвижимость", "Сделки, споры, девелопмент."],
      ["Семейное право", "Развод, опека, наследственное планирование."],
      ["Судебные споры", "Гражданские дела, арбитраж, медиация."],
      ["Интеллектуальная собственность", "Товарные знаки, патенты, лицензии."],
      ["Трудовое право", "Трудовые споры, договоры, комплаенс."],
    ],
  },
  firm: {
    eyebrow: "Почему мы",
    titleA: "Бюро, которое оценивают по ",
    titleEm: "результату",
    titleB: ", а не по часам",
    body: "К нам приходят в решающие моменты — продажа бизнеса, спор, развод. С первого звонка делом занимается партнёр, и мы говорим понятным языком.",
    stats: [
      ["22+", "Года совокупного опыта"],
      ["1 200+", "Проведённых дел"],
      ["96%", "Удовлетворённость клиентов"],
      ["40+", "Отраслей"],
    ],
  },
  team: {
    eyebrow: "Команда",
    title: "Адвокаты, с которыми вы будете работать лично",
    members: [
      [
        "Richard Barrington",
        "Партнёр-основатель",
        "Корпоративное и коммерческое право",
        "Двадцать лет сопровождает компании в сделках, раундах инвестиций и спорах.",
      ],
      [
        "Elena Cole",
        "Партнёр-основатель",
        "Судебные споры",
        "Известна спокойной и точной стратегией в делах с высокими ставками.",
      ],
      [
        "Marcus Ihejirika",
        "Старший юрист",
        "Недвижимость и трудовое право",
        "Находит практичные и быстрые решения для растущего бизнеса.",
      ],
      [
        "Sofia Marchetti",
        "Юрист",
        "Семейное право и наследование",
        "Ведёт сложные семейные дела бережно и уверенно.",
      ],
    ],
    portrait: "Портрет:",
  },
  process: {
    eyebrow: "Процесс",
    title: "Четыре шага без сюрпризов",
    steps: [
      ["Консультация", "Сначала слушаем — первый разговор бесплатный и конфиденциальный."],
      ["Стратегия", "Понятный план под вашу ситуацию и реалистичные ожидания."],
      ["Представительство", "Прямой контакт с вашим адвокатом на всех этапах."],
      ["Результат", "Объясняем итог простым языком, без юридического жаргона."],
    ],
  },
  testimonials: {
    eyebrow: "Отзывы клиентов",
    items: [
      [
        "Сделку по приобретению провели безупречно и объяснили каждый шаг понятным языком.",
        "David H.",
        "CEO",
      ],
      ["Выступление Елены в суде изменило исход нашего дела.", "Anna K.", ""],
      ["Наконец бюро, которое перезванивает в тот же день.", "Peter M.", ""],
    ],
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Отвечаем прямо",
    items: [
      ["Сколько стоит консультация?", "Первая консультация бесплатная и конфиденциальная."],
      ["Как быстро вы возьмётесь за дело?", "Большинство новых обращений рассматриваем за 48 часов."],
      [
        "Работаете ли вы за процент от результата?",
        "Возможно по отдельным судебным делам — уточните на консультации.",
      ],
      ["Работаете ли вы за пределами Вильнюса?", "Да, представляем клиентов по всей Литве и Балтии."],
    ],
  },
  contact: {
    eyebrow: "Консультация",
    title: "Запишитесь на бесплатную консультацию",
    body: "По телефону, почте или через форму — как вам удобнее. Отвечаем на каждое обращение в течение одного рабочего дня.",
    labels: { address: "Адрес", hours: "Часы работы", phone: "Телефон", email: "Эл. почта" },
    hours: "Пн–Пт 9:00–18:00",
    form: {
      name: "Имя",
      email: "Эл. почта",
      matter: "Направление",
      matterPlaceholder: "напр. бизнес, семья, суд",
      message: "Чем можем помочь?",
      messagePlaceholder: "Несколько строк о вашей ситуации",
      submit: "Записаться на консультацию",
      sent: "Заявка получена",
      privacy: "Ваше сообщение конфиденциально и не передаётся третьим лицам.",
      toast: "Спасибо — свяжемся с вами в течение одного рабочего дня.",
      invalidEmail: "Введите корректный адрес эл. почты.",
      short: "Опишите чуть подробнее (минимум 10 символов).",
    },
  },
  footer: {
    rights: "Все права защищены.",
    nav: "Карта сайта",
    legal: "Демо-сайт портфолио. Не является юридической консультацией.",
  },
};

const dictionaries: Record<Lang, Dict> = { en, lt, ru };

const STORAGE_KEY = "bc-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        window.localStorage.setItem(STORAGE_KEY, l);
      },
      t: dictionaries[lang],
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}
