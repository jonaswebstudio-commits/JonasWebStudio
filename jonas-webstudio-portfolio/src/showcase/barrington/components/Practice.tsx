import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";

const numerals = ["I", "II", "III", "IV", "V", "VI"];

export function Practice() {
  const { t } = useI18n();

  return (
    <section id="practice" className="scroll-mt-24 bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.practice.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.practice.title}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t.practice.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.practice.items.map(([title, desc], i) => (
            <Reveal
              as="article"
              key={title}
              delay={i * 70}
              className="group relative bg-card px-8 py-12 transition-colors duration-500 hover:bg-secondary"
            >
              <span className="font-display text-sm tracking-[0.3em] text-brass">
                {numerals[i]}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <span className="mt-8 block h-px w-10 bg-brass transition-all duration-500 group-hover:w-20" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
