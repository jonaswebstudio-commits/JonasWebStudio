import { useLanguage } from "@/lib/i18n";
import { STUDIO_EMAIL } from "@/lib/site-data";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <span className="font-display tracking-[0.3em] uppercase">Jonas Webstudio</span>
        <a className="hover:text-foreground" href={`mailto:${STUDIO_EMAIL}`}>
          {STUDIO_EMAIL}
        </a>
        <span>
          © {new Date().getFullYear()} — {t("footerRights")}
        </span>
      </div>
    </footer>
  );
}
