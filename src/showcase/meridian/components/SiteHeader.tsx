import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/showcase/meridian/i18n";
import { LanguageSwitcher } from "@/showcase/meridian/components/LanguageSwitcher";

const links = [
  { to: "/work/meridian", key: "nav.home" },
  { to: "/work/meridian/about", key: "nav.about" },
  { to: "/work/meridian/listings", key: "nav.listings" },
  { to: "/work/meridian/services", key: "nav.services" },
  { to: "/work/meridian/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-ink/10 bg-stone-50/85 backdrop-blur-md shadow-[0_10px_40px_-30px_rgba(28,28,28,0.6)]"
          : "border-transparent bg-stone-50/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/work/meridian" className="font-serif text-xl font-medium tracking-tight transition-opacity hover:opacity-70">
          Meridian
        </Link>

        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-widest text-ink/60 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/work/meridian" }}
              activeProps={{ className: "text-ink after:scale-x-100" }}
              className="nav-link relative transition-colors hover:text-ink"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-ink/10 p-2 text-ink/70 transition-colors hover:text-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-ink/10 bg-stone-50/95 px-6 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-widest text-ink/70">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/work/meridian" }}
                  activeProps={{ className: "text-ink" }}
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
