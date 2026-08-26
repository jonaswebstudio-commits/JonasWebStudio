import { Link } from "@tanstack/react-router";
import { Menu, Phone, Scissors } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/work/iron-comb", label: "Home" },
  { to: "/work/iron-comb/about", label: "About" },
  { to: "/work/iron-comb/services", label: "Services" },
  { to: "/work/iron-comb/gallery", label: "Gallery" },
  { to: "/work/iron-comb/book", label: "Book" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/work/iron-comb" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Scissors className="size-5 text-primary" strokeWidth={1.6} />
          <span className="font-display text-lg uppercase tracking-[0.28em]">Iron &amp; Comb</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.slice(0, 4).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="font-display text-xs uppercase tracking-[0.22em] transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/work/iron-comb/book"
            className="border border-primary px-4 py-2 font-display text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Book a chair
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="size-6 text-primary" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 px-5 py-3 font-display text-sm uppercase tracking-[0.22em] text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Scissors className="size-5 text-primary" strokeWidth={1.6} />
            <span className="font-display text-base uppercase tracking-[0.28em]">
              Iron &amp; Comb
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Sharp cuts, hot towels, no rush.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <h3 className="text-xs tracking-[0.24em] text-foreground">Find us</h3>
          <p className="mt-4">Gedimino pr. 22, Vilnius</p>
          <p className="mt-1">Mon–Sat 10:00–20:00</p>
          <p>Sun closed</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <h3 className="text-xs tracking-[0.24em] text-foreground">Talk to us</h3>
          <a
            href="tel:+37060011111"
            className="mt-4 inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Phone className="size-4" /> +370 600 11111
          </a>
          <p className="mt-2">Walk-ins welcome when space allows.</p>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Iron &amp; Comb — Portfolio example
      </div>
    </footer>
  );
}
