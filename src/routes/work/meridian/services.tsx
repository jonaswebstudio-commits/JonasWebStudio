import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { useI18n } from "@/showcase/meridian/i18n";

export const Route = createFileRoute("/work/meridian/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Meridian Properties Vilnius" },
      { name: "description", content: "Buying, selling, renting, and investment consulting — how Meridian Properties works with clients in Vilnius." },
      { property: "og:title", content: "Services | Meridian Properties" },
      { property: "og:description", content: "Buying, selling, renting, and investment consulting in Vilnius." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const keys = ["buy", "sell", "rent", "invest"];

function ServicesPage() {
  const { t } = useI18n();

  return (
    <div className="px-6 pt-32 pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-forest">{t("services.eyebrow")}</p>
          <h1 className="font-serif text-4xl font-medium md:text-6xl">{t("services.heading")}</h1>
          <p className="mt-6 max-w-[52ch] text-lg text-ink/70">{t("services.intro")}</p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-xl bg-ink/10 sm:grid-cols-2">
          {keys.map((key, index) => (
            <Reveal
              key={key}
              delay={index * 90}
              className="group bg-stone-50 p-10 transition-colors duration-500 hover:bg-stone-100"
            >
              <span className="font-serif text-4xl text-ink/15 transition-colors duration-500 group-hover:text-forest/40">
                0{index + 1}
              </span>
              <h2 className="mt-6 mb-4 text-sm font-semibold uppercase tracking-widest text-forest">
                {t(`svc.${key}.title`)}
              </h2>
              <p className="mb-4 text-lg text-ink">{t(`svc.${key}.desc`)}</p>
              <p className="max-w-[46ch] text-base leading-relaxed text-ink/60">{t(`svc.${key}.long`)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Link
            to="/work/meridian/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-xs font-semibold uppercase tracking-widest text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(42,60,51,0.8)]"
          >
            {t("contact.cta")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
