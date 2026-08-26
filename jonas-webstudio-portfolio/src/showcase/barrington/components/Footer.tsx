import { CONTACT } from "@/showcase/barrington/components/Contact";
import { useI18n } from "@/showcase/barrington/i18n";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { label: t.nav.practice, href: "#practice" },
    { label: t.nav.firm, href: "#firm" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-ink-foreground/10 bg-ink py-14 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:px-12">
        <div>
          <a href="#top" className="font-display text-2xl tracking-wide">
            Barrington <span className="text-brass">&</span> Cole
          </a>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/45">
            {CONTACT.address} ·{" "}
            <a href={CONTACT.phoneHref} className="transition-colors hover:text-brass">
              {CONTACT.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-brass">
              {CONTACT.email}
            </a>
          </p>
        </div>

        <nav aria-label={t.footer.nav} className="flex flex-wrap gap-x-7 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-foreground/60 transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-ink-foreground/10 px-6 pt-6 text-[0.65rem] uppercase tracking-[0.2em] text-ink-foreground/35 lg:px-12">
        <span>
          © {new Date().getFullYear()} Barrington &amp; Cole. {t.footer.rights}
        </span>
        <span>{t.footer.legal}</span>
      </div>
    </footer>
  );
}
