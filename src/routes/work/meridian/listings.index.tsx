import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { ListingCard } from "@/showcase/meridian/components/ListingCard";
import { listings } from "@/showcase/meridian/listings";
import { useI18n } from "@/showcase/meridian/i18n";

export const Route = createFileRoute("/work/meridian/listings/")({
  component: ListingsPage,
  head: () => ({
    meta: [
      { title: "Featured Listings | Meridian Properties Vilnius" },
      { name: "description", content: "Browse the full Meridian Properties collection — apartments, family homes, lofts and penthouses across Vilnius." },
      { property: "og:title", content: "Featured Listings | Meridian Properties" },
      { property: "og:description", content: "Hand-selected homes across Vilnius, updated as the market moves." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ListingsPage() {
  const { t } = useI18n();

  return (
    <div className="px-6 pt-32 pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-forest">{t("listings.location")}</p>
          <h1 className="font-serif text-4xl font-medium md:text-6xl">{t("listings.all")}</h1>
          <p className="mt-6 max-w-[52ch] text-lg text-ink/70">{t("listings.intro")}</p>
        </Reveal>

        <div className="mt-20 grid gap-x-12 gap-y-24 md:grid-cols-2">
          {listings.map((listing, index) => (
            <Reveal key={listing.slug} delay={(index % 2) * 120}>
              <ListingCard listing={listing} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
