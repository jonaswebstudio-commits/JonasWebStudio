import { Button } from "@/components/ui/button";
import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";
import heroOffice from "@/showcase/barrington/assets/hero-office.jpg";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-ink">
      <img
        src={heroOffice}
        alt="Conference room of the Barrington & Cole law offices in Vilnius"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-55 [animation:heroPan_24s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,var(--ink)_18%,color-mix(in_oklab,var(--ink)_72%,transparent)_52%,color-mix(in_oklab,var(--ink)_28%,transparent)_100%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-36 pb-24 lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.hero.eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] text-ink-foreground">
            Barrington <span className="text-brass">&</span> Cole
          </h1>
        </Reveal>
        <Reveal delay={160} className="mt-8 max-w-xl border-l border-brass/50 pl-6">
          <p className="font-display text-2xl italic leading-snug text-ink-foreground/90 sm:text-3xl">
            {t.hero.lead}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/60">{t.hero.sub}</p>
        </Reveal>
        <Reveal delay={240} className="mt-11 flex flex-wrap gap-4">
          <Button variant="brass" size="xl" asChild>
            <a href="#contact">{t.hero.primary}</a>
          </Button>
          <Button variant="quietLight" size="xl" asChild>
            <a href="#practice">{t.hero.secondary}</a>
          </Button>
        </Reveal>

        <Reveal delay={320} className="mt-20">
          <dl className="grid max-w-3xl grid-cols-2 gap-px overflow-hidden border border-ink-foreground/15 sm:grid-cols-4">
            {t.hero.stats.map(([v, k]) => (
              <div
                key={k}
                className="bg-ink/40 px-5 py-6 backdrop-blur-sm transition-colors duration-500 hover:bg-ink/70"
              >
                <dt className="font-display text-3xl text-brass">{v}</dt>
                <dd className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-foreground/60">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
