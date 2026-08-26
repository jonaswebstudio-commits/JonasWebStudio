import { Link } from "@tanstack/react-router";
import { useI18n } from "@/showcase/meridian/i18n";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-ink/10 bg-stone-50 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <span className="font-serif text-2xl font-medium">Meridian Properties</span>
          <p className="mt-3 max-w-[32ch] text-sm text-ink/50">{t("hero.subtitle")}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm text-ink/60 md:items-center">
          <Link to="/work/meridian/about" className="transition-colors hover:text-ink">{t("nav.about")}</Link>
          <Link to="/work/meridian/listings" className="transition-colors hover:text-ink">{t("nav.listings")}</Link>
          <Link to="/work/meridian/services" className="transition-colors hover:text-ink">{t("nav.services")}</Link>
          <Link to="/work/meridian/contact" className="transition-colors hover:text-ink">{t("nav.contact")}</Link>
        </nav>

        <div className="text-sm text-ink/60 md:text-right">
          <p>Konstitucijos pr. 7, Vilnius</p>
          <p>+370 600 22222</p>
          <p>hello@meridianproperties.example</p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 md:flex-row">
        <p className="text-xs text-ink/40">
          © {new Date().getFullYear()} Meridian Properties. {t("footer.rights")}
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-ink/40 transition-colors hover:text-ink">
            Instagram
          </a>
          <a href="#" className="text-xs font-semibold uppercase tracking-widest text-ink/40 transition-colors hover:text-ink">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
