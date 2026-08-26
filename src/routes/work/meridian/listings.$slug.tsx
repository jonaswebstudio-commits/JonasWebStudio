import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { getListing, listings } from "@/showcase/meridian/listings";
import { useI18n } from "@/showcase/meridian/i18n";

export const Route = createFileRoute("/work/meridian/listings/$slug")({
  loader: ({ params }) => {
    const listing = getListing(params.slug);
    if (!listing) throw notFound();
    return { slug: listing.slug, title: listing.title, price: listing.price };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Listing unavailable | Meridian Properties" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.title} — ${loaderData.price} | Meridian Properties`;
    const description = `${loaderData.title} in Vilnius, offered at ${loaderData.price} by Meridian Properties.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ListingNotFound,
  component: ListingDetail,
});

function ListingNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center">
      <h1 className="font-serif text-3xl font-medium">Listing not found</h1>
      <Link to="/work/meridian/listings" className="mt-6 inline-block text-xs font-semibold uppercase tracking-widest text-forest">
        Back to listings
      </Link>
    </div>
  );
}

function ListingDetail() {
  const { slug } = Route.useParams();
  const { lang, t } = useI18n();
  const listing = getListing(slug);

  if (!listing) return <ListingNotFound />;

  const specs = [
    { label: "spec.size", value: listing.size },
    { label: "spec.bedrooms", value: listing.bedrooms },
    { label: "spec.bathrooms", value: listing.bathrooms },
    { label: "spec.floor", value: listing.floor },
    { label: "spec.year", value: listing.year },
    { label: "spec.energy", value: listing.energy },
    { label: "spec.parking", value: listing.parking },
    { label: "spec.district", value: listing.district },
  ];

  const others = listings.filter((l) => l.slug !== listing.slug).slice(0, 3);

  return (
    <div className="px-6 pt-28 pb-32">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/work/meridian/listings"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink/50 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          {t("listings.back")}
        </Link>

        <Reveal className="mt-8 overflow-hidden rounded-xl bg-stone-200">
          <img
            src={listing.image}
            alt={listing.alt}
            width={1600}
            height={1000}
            className="h-[46vh] w-full animate-ken-burns object-cover md:h-[64vh]"
          />
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-forest">{listing.district}</p>
            <h1 className="font-serif text-4xl font-medium md:text-5xl">{listing.title}</h1>
            <p className="mt-4 text-lg text-ink/60">{listing.summary[lang]}</p>
            <p className="mt-8 max-w-[58ch] text-pretty text-lg leading-relaxed text-ink/80">
              {listing.description[lang]}
            </p>

            <h2 className="mt-12 mb-5 text-sm font-semibold uppercase tracking-widest text-forest">
              {t("listings.highlights")}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {listing.highlights[lang].map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-base text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-xl bg-stone-100 p-8 ring-1 ring-black/5">
              <p className="font-serif text-4xl font-medium">{listing.price}</p>
              <dl className="mt-8 grid grid-cols-2 gap-y-5">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-ink/40">{t(spec.label)}</dt>
                    <dd className="mt-1 text-base text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/work/meridian/contact"
                className="group mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-forest py-4 text-xs font-semibold uppercase tracking-widest text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(42,60,51,0.8)]"
              >
                {t("listings.enquire")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-32 border-t border-ink/10 pt-16">
          <h2 className="mb-10 font-serif text-3xl font-medium">{t("listings.all")}</h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 100}>
                <Link to="/work/meridian/listings/$slug" params={{ slug: other.slug }} className="group block">
                  <div className="mb-4 aspect-4/3 overflow-hidden rounded-xl bg-stone-200">
                    <img
                      src={other.image}
                      alt={other.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{other.title}</h3>
                  <p className="text-sm text-ink/50">{other.price}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
