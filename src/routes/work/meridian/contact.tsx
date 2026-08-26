import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/showcase/meridian/components/Reveal";
import { useI18n } from "@/showcase/meridian/i18n";

export const Route = createFileRoute("/work/meridian/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Meridian Properties Vilnius" },
      { name: "description", content: "Schedule a viewing by phone, email, or form. Meridian Properties, Konstitucijos pr. 7, Vilnius." },
      { property: "og:title", content: "Contact Meridian Properties" },
      { property: "og:description", content: "Schedule a viewing by phone, email, or the contact form in Vilnius." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <div className="px-6 pt-32 pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="font-serif text-4xl font-medium md:text-6xl">{t("contact.heading")}</h1>
          <p className="mt-6 max-w-[52ch] text-lg text-ink/70">{t("contact.intro")}</p>
        </Reveal>

        <div className="mt-20 grid gap-24 lg:grid-cols-2">
          <Reveal className="space-y-8">
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink/40">{t("contact.office")}</h2>
              <p className="text-lg">Konstitucijos pr. 7, Vilnius</p>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink/40">{t("contact.inquiries")}</h2>
              <p className="text-lg">
                <a href="tel:+37060022222" className="transition-colors hover:text-forest">+370 600 22222</a>
              </p>
              <p className="text-lg">
                <a href="mailto:hello@meridianproperties.example" className="transition-colors hover:text-forest">
                  hello@meridianproperties.example
                </a>
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink/40">{t("contact.hours")}</h2>
              <p className="text-sm">{t("contact.hours1")}</p>
              <p className="text-sm">{t("contact.hours2")}</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-xl bg-stone-100 p-8 ring-1 ring-black/5">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest">
                    {t("contact.name")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full border-b border-ink/20 bg-transparent py-2 text-sm transition-colors focus:border-forest focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest">
                    {t("contact.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border-b border-ink/20 bg-transparent py-2 text-sm transition-colors focus:border-forest focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full resize-none border-b border-ink/20 bg-transparent py-2 text-sm transition-colors focus:border-forest focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-forest py-4 text-sm font-semibold uppercase tracking-widest text-stone-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(42,60,51,0.8)]"
              >
                {t("contact.submit")}
              </button>
              {sent && <p className="animate-fade-in text-sm text-forest">{t("contact.sent")}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
