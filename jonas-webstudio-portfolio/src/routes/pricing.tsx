import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — Jonas Webstudio" },
      {
        name: "description",
        content:
          "Example website pricing from €245. One-page sites, multi-page builds and full custom projects with animations and support — every project quoted individually.",
      },
      { property: "og:title", content: "Pricing & Packages — Jonas Webstudio" },
      {
        property: "og:description",
        content:
          "Clear example prices for custom websites, from €245. Send an inquiry for a free, individual quote.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-40 pb-4">
        <div className="absolute inset-0 grid-lines grid-drift opacity-40" />
        <div className="orb absolute -left-24 top-10 h-80 w-80 bg-accent/25" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] font-bold">
              {t("navPricing")} <span className="text-gradient">{t("pricingSuffix")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t("pricingSub")}</p>
          </Reveal>
        </div>
      </section>

      <PricingSection />

      <section id="contact" className="relative overflow-hidden px-6 pb-32">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">{t("contactHeading")}</h2>
            <p className="mt-5 text-muted-foreground">{t("contactSub")}</p>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
