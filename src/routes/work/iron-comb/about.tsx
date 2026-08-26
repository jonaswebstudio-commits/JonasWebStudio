import { createFileRoute } from "@tanstack/react-router";

import aboutImg from "@/showcase/iron-comb/assets/about.jpg";
import g2 from "@/showcase/iron-comb/assets/gallery-2.jpg";

export const Route = createFileRoute("/work/iron-comb/about")({
  head: () => ({
    meta: [
      { title: "About Iron & Comb — Barbers Built on Craft" },
      {
        name: "description",
        content:
          "Iron & Comb is a Vilnius barbershop built on craft, not trends — classic cuts, proper shaves and unhurried visits.",
      },
      { property: "og:title", content: "About Iron & Comb — Barbers Built on Craft" },
      {
        property: "og:description",
        content: "A barbershop built on craft, not trends. Every visit unhurried.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Trained first", body: "Years on the classic cut before anyone touches a fade." },
  { title: "No rush", body: "Chairs are booked with room to breathe. Nobody gets hurried out." },
  { title: "Old tools, sharp hands", body: "Straight razors, hot towels, clippers kept honed." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">About us</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] font-bold sm:text-7xl">
        A shop that feels like it's been here for decades
      </h1>
      <div className="rule-brass mt-8 h-px w-32" />

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Iron &amp; Comb is a barbershop built on craft, not trends. Our barbers trained for years
          to master the classic cut before touching a fade. Every visit is unhurried — a proper
          shave, a sharp lineup, and a shop that feels like it's been here for decades, even if it
          hasn't.
        </p>
        <img
          src={aboutImg}
          alt="Barber tools laid out on dark wood"
          width={1100}
          height={1300}
          loading="lazy"
          className="aspect-4/3 w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="border border-border bg-card/40 p-8 transition-colors duration-500 hover:border-primary/50"
          >
            <h2 className="text-lg">{v.title}</h2>
            <p className="mt-3 text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <img
        src={g2}
        alt="Interior of the Iron & Comb barbershop"
        width={1100}
        height={900}
        loading="lazy"
        className="mt-20 h-96 w-full object-cover"
      />
    </div>
  );
}
