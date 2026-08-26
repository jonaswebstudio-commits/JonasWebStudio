import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGUAGES, useI18n, type LangCode } from "@/showcase/meridian/i18n";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t("nav.language")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-ink/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70 transition-all duration-300 hover:border-ink/30 hover:text-ink"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden="true" />
        {current.short}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul className="absolute right-0 z-50 mt-2 w-44 origin-top-right animate-scale-in overflow-hidden rounded-xl border border-ink/10 bg-stone-50 py-1 shadow-[0_20px_50px_-20px_rgba(28,28,28,0.35)]">
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code as LangCode);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-stone-100"
              >
                <span className={l.code === lang ? "font-medium text-ink" : "text-ink/70"}>{l.label}</span>
                {l.code === lang && <Check className="h-3.5 w-3.5 text-forest" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
