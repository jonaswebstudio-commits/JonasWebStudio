import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

/**
 * Wraps a client showcase so it renders in its own design system.
 *
 * Every showcase keeps the palette, radii and typography it was designed with.
 * Those values live in `styles.css` under `[data-site="<site>"]`, so the whole
 * subtree re-resolves the same Tailwind utilities against a different theme.
 *
 * The back link is deliberately styled with fixed values rather than theme
 * tokens: it belongs to the portfolio, not to the site being shown.
 */
export function ShowcaseFrame({ site, children }: { site: string; children: ReactNode }) {
  return (
    <div data-site={site} className="showcase-frame">
      {children}
      <Link
        to="/"
        hash="work"
        className="fixed bottom-4 left-4 z-[200] inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0b0d14]/90 px-4 py-2 text-xs font-medium tracking-wide text-white/85 shadow-lg backdrop-blur-md transition-colors hover:border-white/50 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to portfolio
      </Link>
    </div>
  );
}
