import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";

export function Firm() {
  const { t } = useI18n();

  return (
    <section id="firm" className="scroll-mt-24 bg-ink py-28 text-ink-foreground lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.firm.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.firm.titleA}
            <em className="text-brass">{t.firm.titleEm}</em>
            {t.firm.titleB}
          </h2>
          <p className="mt-7 max-w-md text-sm leading-relaxed text-ink-foreground/65">
            {t.firm.body}
          </p>
        </Reveal>

        <dl className="grid grid-cols-1 gap-px bg-ink-foreground/15 sm:grid-cols-2">
          {t.firm.stats.map(([v, k], i) => (
            <Reveal
              key={k}
              delay={i * 80}
              className="bg-ink px-8 py-12 transition-colors duration-500 hover:bg-ink/70"
            >
              <dt className="font-display text-6xl leading-none text-brass">{v}</dt>
              <dd className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
                {k}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
