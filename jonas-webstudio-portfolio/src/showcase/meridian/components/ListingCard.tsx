import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/showcase/meridian/i18n";
import type { Listing } from "@/showcase/meridian/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  const { lang, t } = useI18n();

  return (
    <Link
      to="/work/meridian/listings/$slug"
      params={{ slug: listing.slug }}
      className="group block"
    >
      <div className="mb-6 aspect-4/5 overflow-hidden rounded-xl bg-stone-200 outline-1 -outline-offset-1 outline-black/5">
        <img
          src={listing.image}
          alt={listing.alt}
          width={1024}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="mb-1 flex items-center gap-1.5 text-xl font-medium">
            {listing.title}
            <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </h3>
          <p className="text-sm text-ink/50">{listing.summary[lang]}</p>
          <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-forest opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {t("listings.viewDetails")}
          </span>
        </div>
        <span className="font-serif text-xl whitespace-nowrap">{listing.price}</span>
      </div>
    </Link>
  );
}
