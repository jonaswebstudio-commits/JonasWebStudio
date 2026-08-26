import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { useI18n } from "@/showcase/meridian/i18n";
import heroImage from "@/showcase/meridian/assets/hero-architecture.jpg";

export const Route = createFileRoute("/work/meridian/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Meridian Properties | Vilnius Real Estate Agency" },
      { name: "description", content: "A decade of localized expertise and personal stewardship — meet the Vilnius agency behind Meridian Properties." },
      { property: "og:title", content: "About Meridian Properties" },
      { property: "og:description", content: "A decade of localized expertise and personal stewardship in Vilnius real estate." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function AboutPage() {
  const { t } = useI18n();

  const stats = [
    { value: "10+", key: "about.stat1" },
    { value: "480", key: "about.stat2" },
    { value: "72%", key: "about.stat3" },
  ];

  const values = ["value1", "value2", "value3"];

  return (
    <div className="px-6 pt-32 pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-forest">{t("about.eyebrow")}</p>
          <h1 className="max-w-[22ch] text-balance font-serif text-4xl font-medium md:text-6xl">{t("about.heading")}</h1>
        </Reveal>

        <Reveal delay={120} className="mt-16 overflow-hidden rounded-xl bg-stone-200">
          <img
            src={heroImage}
            alt="Meridian Properties architecture with soft afternoon shadows"
            width={1920}
            height={1080}
            className="h-[42vh] w-full object-cover transition-transform duration-[1400ms] hover:scale-105 md:h-[56vh]"
          />
        </Reveal>

        <Reveal delay={80} className="mt-16 max-w-[62ch]">
          <p className="text-pretty text-lg leading-relaxed text-ink/80 md:text-xl">{t("about.body")}</p>
        </Reveal>

        <div className="mt-24 grid gap-12 border-t border-ink/10 pt-16 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.key} delay={index * 100}>
              <p className="font-serif text-5xl font-medium text-forest">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-ink/50">{t(stat.key)}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-serif text-3xl font-medium">{t("about.values")}</h2>
          </Reveal>
          <div className="grid gap-10 lg:col-span-8">
            {values.map((v, index) => (
              <Reveal key={v} delay={index * 100} className="border-b border-ink/10 pb-8 last:border-0">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest">{t(`about.${v}.title`)}</h3>
                <p className="max-w-[52ch] text-lg text-ink/70">{t(`about.${v}.body`)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
