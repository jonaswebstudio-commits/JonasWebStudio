import { useState } from "react";
import { Check, Repeat } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { InquiryDialog } from "@/components/InquiryDialog";
import { useLanguage } from "@/lib/i18n";
import { CARE_PLAN, CUSTOM_PACKAGE_KEY, PRICING } from "@/lib/site-data";

type Inquiry = { packageKey: string; addons: readonly string[] };

export function PricingSection() {
  const { t } = useLanguage();
  const [inquiry, setInquiry] = useState<Inquiry | null>(null);

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("pricingLabel")}</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">{t("pricingHeading")}</h2>
        <p className="mt-5 max-w-xl text-muted-foreground">{t("pricingSub")}</p>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground/80">{t("pricingNote")}</p>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PRICING.map((p, i) => (
          <Reveal key={p.key} delay={i * 120}>
            <div
              className={`glass-panel relative flex h-full flex-col rounded-3xl p-8 ${
                p.featured
                  ? "border-primary/40 shadow-[var(--shadow-glow)] lg:-translate-y-4"
                  : "glow-ring"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-neon)] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-foreground">
                  {t("mostPopular")}
                </span>
              )}
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                {t(p.key)}
              </h3>
              <div className="mt-4 font-display text-5xl font-bold">{p.price}</div>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t(f)}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setInquiry({ packageKey: p.key, addons: [] })}
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-[image:var(--gradient-neon)] text-primary-foreground"
                    : "border border-border text-foreground"
                }`}
              >
                {t("startWith")} {t(p.key)}
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="glass-panel glow-ring mt-6 flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-primary">
              <Repeat className="h-3.5 w-3.5" /> {t("careLabel")}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">
              {t("careName")} — {CARE_PLAN.price}{" "}
              <span className="text-base font-normal text-muted-foreground">
                {t("careInterval")}
              </span>
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t("careDesc")}</p>
            <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {CARE_PLAN.featureKeys.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t(f)}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setInquiry({ packageKey: CUSTOM_PACKAGE_KEY, addons: ["care"] })}
            className="shrink-0 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            {t("careCta")}
          </button>
        </div>
      </Reveal>

      {inquiry && (
        <InquiryDialog
          packageKey={inquiry.packageKey}
          addons={inquiry.addons}
          onClose={() => setInquiry(null)}
        />
      )}
    </section>
  );
}
