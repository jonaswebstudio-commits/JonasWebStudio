import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import heroImg from "@/showcase/ember-oak/assets/hero.jpg";
import dish1 from "@/showcase/ember-oak/assets/dish-1.jpg";
import dish2 from "@/showcase/ember-oak/assets/dish-2.jpg";
import dish3 from "@/showcase/ember-oak/assets/dish-3.jpg";
import dish4 from "@/showcase/ember-oak/assets/dish-4.jpg";
import chefImg from "@/showcase/ember-oak/assets/chef.jpg";
import wineImg from "@/showcase/ember-oak/assets/wine.jpg";
import interiorImg from "@/showcase/ember-oak/assets/interior.jpg";

export const Route = createFileRoute("/work/ember-oak")({
  head: () => ({
    meta: [
      { title: "Ember & Oak — Modern Wood-Fired Dining" },
      {
        name: "description",
        content:
          "Ember & Oak is a modern wood-fired restaurant. Seasonal tasting menus, oak-grilled plates, natural wine, and an intimate candlelit room. Reserve a table.",
      },
      { property: "og:title", content: "Ember & Oak — Modern Wood-Fired Dining" },
      {
        property: "og:description",
        content:
          "Seasonal menus, oak-grilled plates, and an intimate, candlelit room. Reserve your table at Ember & Oak.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Ember & Oak",
          servesCuisine: "Modern wood-fired",
          priceRange: "$$$",
          telephone: "+1-555-014-8270",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42 Foundry Lane",
            addressLocality: "Riverside",
          },
          openingHours: "We-Su 17:30-22:30",
        }),
      },
    ],
  }),
  component: Index,
});

const signatures = [
  {
    name: "Oak-Fired Ribeye",
    desc: "45-day dry-aged ribeye, bone-marrow butter, charred rosemary, smoked salt.",
    price: "54",
    img: dish1,
    tag: "Signature",
  },
  {
    name: "Heirloom from the Coals",
    desc: "Rainbow carrots, blistered shishitos, burnt shallot, smoked aioli.",
    price: "24",
    img: dish2,
    tag: "Garden",
  },
  {
    name: "Ember Chocolate Fondant",
    desc: "Molten dark chocolate, bourbon caramel, charred marshmallow, gold leaf.",
    price: "18",
    img: dish3,
    tag: "Sweet",
  },
  {
    name: "Hearth Bread & Smoked Butter",
    desc: "Three-day sourdough, ash-cured butter, cracked pepper, sea flake.",
    price: "12",
    img: dish4,
    tag: "To Start",
  },
];

const courses = [
  {
    course: "To Begin",
    items: [
      ["Hearth Bread & Smoked Butter", "12"],
      ["Oysters over Coals, mignonette", "21"],
      ["Charred Leek, hazelnut, cured yolk", "17"],
      ["Ember Beets, whipped feta, dill", "16"],
    ],
  },
  {
    course: "From the Fire",
    items: [
      ["Oak-Fired Ribeye, bone-marrow butter", "54"],
      ["Whole Turbot, brown butter, capers", "48"],
      ["Coal-Roast Duck, cherry, juniper", "42"],
      ["Heirloom Vegetables, smoked aioli", "24"],
    ],
  },
  {
    course: "To Finish",
    items: [
      ["Ember Chocolate Fondant", "18"],
      ["Grilled Peach, brown-sugar cream", "15"],
      ["Oak-Smoked Cheese, honeycomb", "19"],
      ["Espresso & Petit Fours", "9"],
    ],
  },
];

const accolades = [
  "Michelin Guide · Recommended",
  "Best Live-Fire Kitchen 2025",
  "Chef Mara Voss · Rising Star",
  "Wine Spectator · Award of Excellence",
  "Top 50 Tables in the Region",
];

const testimonials = [
  {
    quote:
      "The ribeye arrives smelling of oak smoke before you even see it. Easily the most confident cooking in the city.",
    name: "Elena Marsh",
    role: "The Riverside Review",
  },
  {
    quote:
      "A room that hums. Candlelight, cast iron, and a wine list that rewards curiosity all night long.",
    name: "Tomas Bell",
    role: "Table & Vine",
  },
  {
    quote:
      "We booked for an anniversary and stayed three hours. The team reads a table beautifully.",
    name: "Priya Raman",
    role: "Guest since 2021",
  },
];

const faqs = [
  [
    "Do you accommodate dietary needs?",
    "Yes. Tell us in the reservation notes and the kitchen will build around allergies, vegetarian, and vegan preferences.",
  ],
  [
    "Is there a dress code?",
    "Smart casual. Come as you are — we'd rather you were comfortable through twelve courses.",
  ],
  [
    "Can we book the chef's counter?",
    "The counter seats eight and is released a month ahead. Full buyouts are available Wednesdays.",
  ],
  [
    "Do you take walk-ins?",
    "The bar keeps ten seats unreserved each night, first come from 5:30.",
  ],
];

function Index() {
  return (
    <ShowcaseFrame site="ember-oak">
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <Marquee />
          <MenuHighlights />
          <FullMenu />
          <ChefQuote />
          <About />
          <Testimonials />
          <PrivateDining />
          <Reservation />
          <Faq />
        </main>
        <Footer />
      </div>
    </ShowcaseFrame>
  );
}

function Wordmark({ size = "text-2xl" }: { size?: string }) {
  return (
    <a href="#top" className="flex items-baseline gap-2">
      <span className={`font-serif ${size} font-medium tracking-wide text-cream`}>
        Ember
      </span>
      <span className={`font-serif ${size} italic text-ember-glow`}>&</span>
      <span className={`font-serif ${size} font-medium tracking-wide text-cream`}>
        Oak
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Wordmark />
        <div className="hidden items-center gap-10 md:flex">
          {[
            ["Menu", "#menu"],
            ["Story", "#story"],
            ["Events", "#events"],
            ["Reserve", "#reserve"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium uppercase tracking-luxe text-cream/80 transition-colors hover:text-ember-glow"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#reserve"
          className="rounded-full border border-cream/30 px-5 py-2 text-xs font-medium uppercase tracking-luxe text-cream transition-all hover:border-ember-glow hover:bg-ember-glow/15"
        >
          Book a Table
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Warm candlelit interior of Ember & Oak with an open wood-fired grill"
        width={1600}
        height={1067}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/45 to-charcoal/90" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-luxe text-ember-glow">
            Modern Wood-Fired Dining · Est. 2018
          </p>
          <h1 className="font-serif text-5xl font-light leading-[1.05] text-cream md:text-7xl lg:text-8xl">
            Fire, smoke,
            <br />
            <span className="italic text-ember-gradient">& quiet luxury.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/80 md:text-lg">
            A seasonal table built around the live-fire grill. Oak embers,
            heirloom produce, and an intimate room that glows long after dark.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-ember-gradient px-8 py-3.5 text-sm font-medium uppercase tracking-luxe text-cream shadow-warm transition-transform hover:scale-[1.03]"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium uppercase tracking-luxe text-cream transition-all hover:border-ember-glow hover:bg-cream/10"
            >
              Explore the Menu
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {[
              ["Dinner", "Wed – Sun"],
              ["Service", "5:30 – 10:30"],
              ["Room", "42 seats"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-luxe text-cream/50">
                  {label}
                </dt>
                <dd className="mt-1 font-serif text-xl text-cream">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/30 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-ember-glow" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-charcoal py-4">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
        {[...accolades, ...accolades].map((a, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-[11px] uppercase tracking-luxe text-cream/60"
          >
            {a}
            <span className="text-ember-glow" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-ember">
      {children}
    </p>
  );
}

function MenuHighlights() {
  return (
    <section id="menu" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>From the Grill</SectionLabel>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-6xl">
            A taste of the table
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Four plates from this season's menu. Everything is kissed by the
            open flame and built around what the growers send us each week.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {signatures.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-warm"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-charcoal/75 px-3 py-1 text-[10px] font-medium uppercase tracking-luxe text-cream backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-serif text-lg text-ember">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullMenu() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-ember-glow">
              The Seasonal Menu
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
              Three courses,
              <span className="italic text-ember-gradient"> one fire.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            The full menu changes with the market. A twelve-course tasting is
            offered nightly at $145 per guest, with pairings at $95.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {courses.map((group) => (
            <div key={group.course}>
              <h3 className="border-b border-cream/15 pb-4 font-serif text-2xl font-light text-cream">
                {group.course}
              </h3>
              <ul className="mt-6 space-y-5">
                {group.items.map(([name, price]) => (
                  <li key={name} className="flex items-baseline gap-3">
                    <span className="text-sm text-cream/80">{name}</span>
                    <span className="h-px flex-1 border-b border-dashed border-cream/20" />
                    <span className="font-serif text-base text-ember-glow">
                      ${price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChefQuote() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-5 md:px-10">
        <div className="md:col-span-2">
          <img
            src={chefImg}
            alt="Chef Mara Voss plating a wood-fired dish at the pass"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-warm"
          />
        </div>
        <blockquote className="md:col-span-3">
          <span className="font-serif text-6xl leading-none text-ember" aria-hidden>
            &ldquo;
          </span>
          <p className="mt-2 font-serif text-3xl font-light italic leading-snug text-foreground md:text-4xl">
            Fire is the only ingredient we can't buy. Everything else is just
            timing, salt, and paying attention.
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <span className="h-px w-12 bg-ember" />
            <div>
              <p className="text-sm font-medium text-foreground">Mara Voss</p>
              <p className="text-xs uppercase tracking-luxe text-muted-foreground">
                Chef & Founder
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="story" className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative order-2 md:order-1">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={interiorImg}
              alt="A chef tending the open oak-fired grill"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-ember-gradient p-6 text-cream shadow-warm md:block">
            <p className="font-serif text-4xl font-light">8 yrs</p>
            <p className="mt-1 text-xs uppercase tracking-luxe text-cream/80">
              over the coals
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-ember-glow">
            Our Story
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
            Cooked low. Served slow.
            <br />
            <span className="italic text-ember-gradient">Built on fire.</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-cream/75">
            <p>
              Ember & Oak began with a single oak log and a stubborn belief: that
              the best flavors come from patience, smoke, and a fire that never
              quite goes out.
            </p>
            <p>
              Chef Mara Voss trained across Basque country and the American South
              before settling here. Every plate passes through the live-fire
              grill — the ribeye, the carrots, even the dessert. Nothing is
              rushed, and nothing is fussed over.
            </p>
            <p>
              We work with eleven growers within sixty miles, butcher whole
              animals in-house, and keep a cellar of low-intervention wine that
              leans toward the smoky and the strange.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {[
              ["12", "Course tasting"],
              ["42", "Seats nightly"],
              ["11", "Local growers"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="font-serif text-3xl font-light text-ember-glow">
                  {num}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-luxe text-cream/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Kind Words</SectionLabel>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            What the room says
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-shadow duration-500 hover:shadow-warm"
            >
              <div>
                <div className="flex gap-1 text-ember" aria-label="Five out of five">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-serif text-lg text-foreground">{t.name}</p>
                <p className="text-[11px] uppercase tracking-luxe text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivateDining() {
  return (
    <section id="events" className="relative overflow-hidden">
      <img
        src={wineImg}
        alt="A glass of red wine beside candlelight on an oak table"
        width={1200}
        height={912}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/80" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
        <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-ember-glow">
          Private Dining & Events
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
          Take the whole room,
          <span className="italic text-ember-gradient"> or just the fire.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75">
          The chef's counter seats eight beside the grill. The cellar room holds
          eighteen. Full buyouts run Wednesdays with a bespoke menu written for
          your table.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Chef's Counter", "8 guests · tasting only"],
            ["The Cellar", "18 guests · seated"],
            ["Full Buyout", "42 guests · Wednesdays"],
          ].map(([title, detail]) => (
            <div
              key={title}
              className="rounded-2xl border border-cream/15 bg-cream/5 p-6 backdrop-blur"
            >
              <p className="font-serif text-xl text-cream">{title}</p>
              <p className="mt-2 text-xs uppercase tracking-luxe text-cream/60">
                {detail}
              </p>
            </div>
          ))}
        </div>
        <a
          href="#reserve"
          className="mt-10 inline-block rounded-full bg-ember-gradient px-8 py-3.5 text-sm font-medium uppercase tracking-luxe text-cream shadow-warm transition-transform hover:scale-[1.03]"
        >
          Enquire about an event
        </a>
      </div>
    </section>
  );
}

function Reservation() {
  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-warm">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <SectionLabel>Reservations</SectionLabel>
              <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                Pull up a chair
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We seat parties of up to six. For larger gatherings or private
                events, leave us a note and we'll be in touch within a day.
              </p>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name");
                  alert(`Thank you, ${name}. We'll confirm your table shortly.`);
                  form.reset();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="Date" name="date" type="date" />
                  <Field label="Time" name="time" type="time" />
                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-luxe text-muted-foreground"
                    >
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="notes"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-luxe text-muted-foreground"
                  >
                    Notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Allergies, celebrations, seating preferences…"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ember-gradient px-8 py-3.5 text-sm font-medium uppercase tracking-luxe text-cream shadow-warm transition-transform hover:scale-[1.01]"
                >
                  Request Reservation
                </button>
              </form>
            </div>

            <div className="relative bg-charcoal p-8 text-cream md:p-12">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-ember-glow">
                    Find Us
                  </p>
                  <h3 className="font-serif text-3xl font-light text-cream">
                    42 Foundry Lane
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">
                    The Old Cooperage, Riverside
                  </p>
                </div>

                <div className="mt-10 space-y-6">
                  <InfoRow label="Dinner">
                    <p className="text-sm text-cream/85">Wed – Sun · 5:30 – 10:30</p>
                    <p className="text-sm text-cream/60">Closed Mon & Tue</p>
                  </InfoRow>
                  <InfoRow label="Contact">
                    <p className="text-sm text-cream/85">+1 (555) 014-8270</p>
                    <p className="text-sm text-cream/85">hello@emberandoak.co</p>
                  </InfoRow>
                  <InfoRow label="Private dining">
                    <p className="text-sm text-cream/85">
                      Chef's counter for 8 · buyouts available
                    </p>
                  </InfoRow>
                  <InfoRow label="Getting here">
                    <p className="text-sm text-cream/85">
                      Valet from 5pm · Riverside station, 6 min walk
                    </p>
                  </InfoRow>
                </div>

                <div className="mt-10 border-t border-cream/15 pt-6">
                  <p className="text-xs leading-relaxed text-cream/50">
                    A 24-hour cancellation notice is kindly requested. A deposit
                    secures parties of four or more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <SectionLabel>Good to Know</SectionLabel>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            Before you arrive
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl text-foreground marker:hidden">
                {q}
                <span className="text-ember transition-transform duration-300 group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium uppercase tracking-luxe text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30"
      />
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 text-[11px] font-medium uppercase tracking-luxe text-ember-glow">
        {label}
      </p>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal py-16 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              A modern wood-fired kitchen. Cooked over oak, served by hand, lit
              by candle and flame.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-ember-glow">
              Visit
            </p>
            <p className="mt-4 text-sm text-cream/70">42 Foundry Lane</p>
            <p className="text-sm text-cream/70">The Old Cooperage, Riverside</p>
            <p className="mt-3 text-sm text-cream/70">Wed – Sun · 5:30 – 10:30</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-luxe text-ember-glow">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
              <a href="#menu" className="hover:text-ember-glow">Menu</a>
              <a href="#story" className="hover:text-ember-glow">Story</a>
              <a href="#events" className="hover:text-ember-glow">Private dining</a>
              <a href="#reserve" className="hover:text-ember-glow">Reserve</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-luxe text-cream/40">
          © 2026 Ember & Oak · Portfolio example
        </div>
      </div>
    </footer>
  );
}

export default Index;
