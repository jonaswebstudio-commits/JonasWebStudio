import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/showcase/meridian/assets/hero-architecture.jpg";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { ListingCard } from "@/showcase/meridian/components/ListingCard";
import { listings } from "@/showcase/meridian/listings";
import { useI18n } from "@/showcase/meridian/i18n";

export const Route = createFileRoute("/work/meridian/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Meridian Properties | Premium Real Estate in Vilnius" },
      { name: "description", content: "Meridian Properties — finding the right address, not just any address. Browse featured homes, services, and contact our Vilnius agency." },
      { property: "og:title", content: "Meridian Properties | Premium Real Estate in Vilnius" },
      { property: "og:description", content: "Finding the right address, not just any address. Featured listings, buying, selling, renting, and investment consulting in Vilnius." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meridian Properties | Premium Real Estate in Vilnius" },
      { name: "twitter:description", content: "Finding the right address, not just any address. Featured listings and real estate services in Vilnius." },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  const featured = listings.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center pt-16">
        <div className="absolute inset-0 px-6 py-6 md:py-12">
          <div className="h-full w-full overflow-hidden rounded-[min(1vw,12px)] bg-stone-200 outline-1 -outline-offset-1 outline-black/5">
            <img
              src={heroImage}
              alt="High-end brutalist concrete architecture with soft afternoon shadows"
              width={1920}
              height={1080}
              className="h-full w-full animate-ken-burns object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 px-6 text-center">
          <h1 className="animate-rise mx-auto mb-6 max-w-[20ch] text-balance font-serif text-5xl leading-tight font-medium md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="animate-rise mx-auto max-w-[40ch] text-balance font-serif text-lg italic text-ink/70 [animation-delay:180ms] md:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="animate-rise mt-10 [animation-delay:360ms]">
            <Link
              to="/work/meridian/listings"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(42,60,51,0.8)]"
            >
              {t("hero.cta")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-stone-50 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-forest">{t("about.eyebrow")}</p>
              <h2 className="text-balance font-serif text-3xl font-medium md:text-4xl">{t("about.heading")}</h2>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5 lg:col-start-7">
              <p className="max-w-[48ch] text-pretty text-lg leading-relaxed text-ink/80 md:text-xl">{t("about.body")}</p>
              <Link
                to="/work/meridian/about"
                className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest"
              >
                {t("about.more")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured listings */}
      <section className="bg-stone-100 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 flex items-end justify-between">
            <h2 className="font-serif text-4xl font-medium">{t("listings.eyebrow")}</h2>
            <span className="text-sm font-medium uppercase tracking-widest text-ink/40">{t("listings.location")}</span>
          </Reveal>

          <div className="grid gap-x-12 gap-y-24 md:grid-cols-2">
            {featured.map((listing, index) => (
              <Reveal key={listing.slug} delay={index * 120}>
                <ListingCard listing={listing} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 flex justify-center">
            <Link
              to="/work/meridian/listings"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:border-forest hover:bg-forest hover:text-stone-50"
            >
              {t("listings.seeMore")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services teaser */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-ink/10 pt-16 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-medium">{t("services.eyebrow")}</h2>
              <Link
                to="/work/meridian/services"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-forest"
              >
                {t("services.heading")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <div className="lg:col-span-8">
              <div className="grid gap-12 sm:grid-cols-2">
                {["buy", "sell", "rent", "invest"].map((key, index) => (
                  <Reveal key={key} delay={index * 90}>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-forest">
                      {t(`svc.${key}.title`)}
                    </h4>
                    <p className="max-w-[40ch] text-base text-ink/70">{t(`svc.${key}.desc`)}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest px-6 py-32 text-stone-100">
        <div className="mx-auto grid max-w-7xl gap-16">
          {[
            { key: "t1", author: "Rūta P." },
            { key: "t2", author: "Mindaugas V." },
            { key: "t3", author: "Ieva K." },
          ].map((item, index) => (
            <Reveal key={item.author} delay={index * 100}>
              {index > 0 && <div className="mb-16 h-px w-full bg-stone-100/10" />}
              <blockquote className={index % 2 === 1 ? "ml-auto max-w-[40ch] text-right" : "max-w-[40ch]"}>
                <p className="mb-8 text-balance font-serif text-3xl leading-tight italic">"{t(item.key)}"</p>
                <cite className="text-sm font-medium uppercase tracking-widest not-italic text-stone-400">
                  — {item.author}
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-stone-50 px-6 py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-4xl font-medium">{t("contact.heading")}</h2>
          <p className="mb-10 text-lg text-ink/70">{t("contact.intro")}</p>
          <Link
            to="/work/meridian/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-xs font-semibold uppercase tracking-widest text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(42,60,51,0.8)]"
          >
            {t("contact.cta")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
