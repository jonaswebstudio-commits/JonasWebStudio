import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work/iron-comb/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices — Iron & Comb Barbershop" },
      {
        name: "description",
        content:
          "Classic haircut €18, skin fade €22, hot towel straight razor shave €20, The Full Service €35. Full Iron & Comb price list.",
      },
      { property: "og:title", content: "Services & Prices — Iron & Comb Barbershop" },
      {
        property: "og:description",
        content: "Cuts, beard work, hot towel shaves and combos — the full Iron & Comb price list.",
      },
    ],
  }),
  component: Services,
});

const groups = [
  {
    title: "Cuts",
    items: [
      ["Classic haircut", "€18"],
      ["Skin fade", "€22"],
      ["Kids cut (under 12)", "€14"],
      ["Buzz cut", "€12"],
    ],
  },
  {
    title: "Beard & shave",
    items: [
      ["Beard trim & shape", "€10"],
      ["Hot towel straight razor shave", "€20"],
      ["Beard + hot towel combo", "€15"],
    ],
  },
  {
    title: "Combos",
    items: [
      ["Haircut + beard trim", "€25"],
      ["The Full Service (cut, beard, hot towel shave)", "€35"],
    ],
  },
  {
    title: "Extras",
    items: [
      ["Hair wash & style", "€8"],
      ["Kids cut + candy", "€14"],
    ],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-20">
      <p className="eyebrow">Price list</p>
      <h1 className="mt-4 text-5xl font-bold sm:text-7xl">Services</h1>
      <div className="rule-brass mt-8 h-px w-32" />

      <div className="mt-14 space-y-14">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="text-2xl text-primary">{g.title}</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {g.items.map(([name, price]) => (
                <li key={name} className="flex items-baseline gap-4 py-4">
                  <span className="text-lg">{name}</span>
                  <span className="mx-2 flex-1 border-b border-dotted border-border" />
                  <span className="font-display text-xl">{price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Link
        to="/work/iron-comb/book"
        className="mt-16 inline-block bg-primary px-8 py-4 font-display text-sm tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Book a chair
      </Link>
    </div>
  );
}
