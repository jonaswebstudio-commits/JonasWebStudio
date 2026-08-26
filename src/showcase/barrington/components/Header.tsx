import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/showcase/barrington/components/LanguageSwitcher";
import { useI18n } from "@/showcase/barrington/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.practice, href: "#practice" },
    { label: t.nav.firm, href: "#firm" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-ink-foreground/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-12",
          scrolled ? "py-4" : "py-7",
        )}
      >
        <a href="#top" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-2xl tracking-[0.02em] text-ink-foreground">
            Barrington <span className="text-brass">&</span> Cole
          </span>
          <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-ink-foreground/60">
            {t.brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/70 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-500 hover:text-brass hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <Button variant="quietLight" size="lg" className="hidden lg:inline-flex" asChild>
            <a href="#contact">{t.nav.cta}</a>
          </Button>
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink-foreground/20 text-ink-foreground transition-colors hover:border-brass hover:text-brass lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-ink-foreground/10 bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
          {[...links, { label: t.nav.contact, href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-foreground/10 py-4 font-display text-2xl text-ink-foreground transition-colors hover:text-brass"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher className="mt-6 self-start sm:hidden" />
        </nav>
      </div>
    </header>
  );
}
