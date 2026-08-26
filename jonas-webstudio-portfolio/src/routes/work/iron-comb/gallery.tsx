import { createFileRoute } from "@tanstack/react-router";

import g1 from "@/showcase/iron-comb/assets/gallery-1.jpg";
import g2 from "@/showcase/iron-comb/assets/gallery-2.jpg";
import g3 from "@/showcase/iron-comb/assets/gallery-3.jpg";
import g4 from "@/showcase/iron-comb/assets/gallery-4.jpg";
import g5 from "@/showcase/iron-comb/assets/gallery-5.jpg";
import hero from "@/showcase/iron-comb/assets/hero.jpg";

export const Route = createFileRoute("/work/iron-comb/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Iron & Comb" },
      {
        name: "description",
        content:
          "Photos from the Iron & Comb barbershop: fades, beard work, hot towel shaves and the shop itself.",
      },
      { property: "og:title", content: "Gallery — Inside Iron & Comb" },
      {
        property: "og:description",
        content: "Fades, beard work, hot towel shaves and the shop itself.",
      },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: hero, alt: "Barber at work in the shop", span: "sm:col-span-2 sm:row-span-2" },
  { src: g1, alt: "Straight razor and shaving brush on leather", span: "" },
  { src: g4, alt: "Client with a classic cut and groomed beard", span: "" },
  { src: g5, alt: "Hot towel shave close-up", span: "sm:col-span-2" },
  { src: g2, alt: "Vintage barber chairs lined up in the shop", span: "" },
  { src: g3, alt: "Clippers finishing a neckline", span: "" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <p className="eyebrow">Gallery</p>
      <h1 className="mt-4 text-5xl font-bold sm:text-7xl">Inside the shop</h1>
      <div className="rule-brass mt-8 h-px w-32" />

      <div className="mt-14 grid auto-rows-[220px] gap-4 sm:grid-cols-4">
        {shots.map((s) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className={`h-full w-full object-cover grayscale-[0.15] transition-all duration-500 hover:grayscale-0 ${s.span}`}
          />
        ))}
      </div>
    </div>
  );
}
