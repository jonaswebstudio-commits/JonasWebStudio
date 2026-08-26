import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
        </Reveal>
        <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
          {t.testimonials.items.map(([quote, author, title], i) => (
            <Reveal
              as="figure"
              key={author}
              delay={i * 90}
              className="flex flex-col justify-between bg-card px-8 py-12 transition-colors duration-500 hover:bg-secondary"
            >
              <blockquote className="font-display text-2xl italic leading-snug text-foreground/90">
                “{quote}”
              </blockquote>
              <figcaption className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-brass">{author}</span>
                {title ? ` · ${title}` : ""}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
