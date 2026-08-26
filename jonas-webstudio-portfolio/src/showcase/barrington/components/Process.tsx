import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";

export function Process() {
  const { t } = useI18n();

  return (
    <section
      id="process"
      className="scroll-mt-24 border-y border-border bg-secondary py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.process.title}
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map(([title, desc], i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="group border-t border-brass/40 pt-6"
            >
              <span className="font-display text-5xl leading-none text-brass/70 transition-colors duration-500 group-hover:text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
