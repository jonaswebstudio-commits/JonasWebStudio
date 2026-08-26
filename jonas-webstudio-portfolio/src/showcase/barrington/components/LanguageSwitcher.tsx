import { languages, useI18n } from "@/showcase/barrington/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={cn("flex items-center gap-1 border border-ink-foreground/20 px-1 py-1", className)}
      role="group"
      aria-label="Language"
    >
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-label={l.name}
          aria-pressed={lang === l.code}
          className={cn(
            "px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition-colors",
            lang === l.code
              ? "bg-brass text-ink"
              : "text-ink-foreground/60 hover:text-brass",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
