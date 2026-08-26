import { Link } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="font-display text-sm font-semibold tracking-[0.3em] uppercase">
          Jonas<span className="text-gradient">Webstudio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex">
          <Link to="/" hash="services" className="transition-colors hover:text-foreground">
            {t("navServices")}
          </Link>
          <Link to="/" hash="work" className="transition-colors hover:text-foreground">
            {t("navWork")}
          </Link>
          <Link to="/" hash="process" className="transition-colors hover:text-foreground">
            {t("navProcess")}
          </Link>
          <Link
            to="/pricing"
            className="transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            {t("navPricing")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link
            to="/"
            hash="contact"
            className="glass-panel hidden rounded-full px-5 py-2 text-sm font-medium transition-shadow hover:shadow-[var(--shadow-neon)] sm:inline-flex"
          >
            {t("navQuote")}
          </Link>
        </div>
      </div>
    </header>
  );
}
