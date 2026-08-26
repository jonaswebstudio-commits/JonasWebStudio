import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Quote } from "lucide-react";

import heroImg from "@/showcase/iron-comb/assets/hero.jpg";
import aboutImg from "@/showcase/iron-comb/assets/about.jpg";
import g2 from "@/showcase/iron-comb/assets/gallery-2.jpg";
import g4 from "@/showcase/iron-comb/assets/gallery-4.jpg";
import g5 from "@/showcase/iron-comb/assets/gallery-5.jpg";

export const Route = createFileRoute("/work/iron-comb/")({
  head: () => ({
    meta: [
      { title: "Iron & Comb — Barbershop in Vilnius" },
      {
        name: "description",
        content:
          "Sharp cuts, hot towels, no rush. Classic cuts, skin fades and straight razor shaves at Gedimino pr. 22, Vilnius.",
      },
      { property: "og:title", content: "Iron & Comb — Barbershop in Vilnius" },
      {
        property: "og:description",
        content: "Sharp cuts, hot towels, no rush. Book a chair at Gedimino pr. 22, Vilnius.",
      },
    ],
  }),
  component: Home,
});

const testimonials = [
  { quote: "Best fade I've had in this city, hands down.", name: "Marius T." },
  { quote: "The hot towel shave alone is worth the trip.", name: "Dovydas K." },
  { quote: "Feels like an old-school shop with modern skill.", name: "Tomas R." },
];

function Home() {
  return (
    <>
      <section className="relative">
        <img
          src={heroImg}
          alt="Barber cutting a client's hair in the Iron & Comb shop"
          width={1600}
          height={1104}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-16">
            <p className="eyebrow">Est. Vilnius — Gedimino pr. 22</p>
            <h1 className="mt-4 text-6xl leading-[0.9] font-bold sm:text-8xl">
              Iron
              <span className="text-primary"> &amp; </span>
              Comb
            </h1>
            <p className="mt-5 max-w-md font-display text-lg tracking-[0.12em] text-muted-foreground uppercase">
              Sharp cuts, hot towels, no rush
            </p>
            <Link
              to="/work/iron-comb/book"
              className="mt-8 inline-block bg-primary px-8 py-4 font-display text-sm tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Book a chair
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 text-sm text-muted-foreground sm:grid-cols-2">
          <p className="flex items-center gap-3">
            <MapPin className="size-4 text-primary" /> Gedimino pr. 22, Vilnius
          </p>
          <p className="flex items-center gap-3 sm:justify-end">
            <Clock className="size-4 text-primary" /> Mon–Sat 10:00–20:00 · Sun closed
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <img
          src={aboutImg}
          alt="Brass barber scissors and combs on dark wood"
          width={1100}
          height={1300}
          loading="lazy"
          className="aspect-4/5 w-full object-cover"
        />
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">Craft, not trends</h2>
          <div className="rule-brass mt-6 h-px w-24" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Iron &amp; Comb is a barbershop built on craft, not trends. Our barbers trained for
            years to master the classic cut before touching a fade. Every visit is unhurried — a
            proper shave, a sharp lineup, and a shop that feels like it's been here for decades,
            even if it hasn't.
          </p>
          <Link
            to="/work/iron-comb/about"
            className="mt-8 inline-block border border-border px-6 py-3 font-display text-xs tracking-[0.24em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            More about the shop
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">On the board</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Signature work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { name: "Skin fade", price: "€22" },
              { name: "Hot towel straight razor shave", price: "€20" },
              { name: "The Full Service", price: "€35" },
            ].map((s) => (
              <div key={s.name} className="border border-border bg-background p-8">
                <span className="font-display text-3xl text-primary">{s.price}</span>
                <h3 className="mt-3 text-lg">{s.name}</h3>
              </div>
            ))}
          </div>
          <Link
            to="/work/iron-comb/services"
            className="mt-10 inline-block border border-primary px-6 py-3 font-display text-xs tracking-[0.24em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Full price list
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">In the chair</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">The shop</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <img
            src={g2}
            alt="Iron & Comb shop interior with vintage barber chairs"
            width={1100}
            height={900}
            loading="lazy"
            className="h-72 w-full object-cover sm:col-span-2"
          />
          <img
            src={g4}
            alt="Client with a sharp classic haircut and groomed beard"
            width={900}
            height={1100}
            loading="lazy"
            className="h-72 w-full object-cover"
          />
          <img
            src={g5}
            alt="Hot towel shave in progress"
            width={1100}
            height={900}
            loading="lazy"
            className="h-72 w-full object-cover sm:col-span-3"
          />
        </div>
        <Link
          to="/work/iron-comb/gallery"
          className="mt-10 inline-block border border-border px-6 py-3 font-display text-xs tracking-[0.24em] uppercase transition-colors hover:border-primary hover:text-primary"
        >
          See the gallery
        </Link>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Word from the chair</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-border bg-background p-8">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-5 text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 font-display text-xs tracking-[0.24em] text-muted-foreground uppercase">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">Take a seat</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Book online or by phone — walk-ins welcome when space allows.
        </p>
        <Link
          to="/work/iron-comb/book"
          className="mt-8 inline-block bg-primary px-8 py-4 font-display text-sm tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Reserve a time
        </Link>
      </section>
    </>
  );
}
