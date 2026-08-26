import { createFileRoute } from "@tanstack/react-router";
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { LanguageProvider } from "@/showcase/barrington/i18n";
import { Header } from "@/showcase/barrington/components/Header";
import { Hero } from "@/showcase/barrington/components/Hero";
import { Practice } from "@/showcase/barrington/components/Practice";
import { Firm } from "@/showcase/barrington/components/Firm";
import { Team } from "@/showcase/barrington/components/Team";
import { Process } from "@/showcase/barrington/components/Process";
import { Testimonials } from "@/showcase/barrington/components/Testimonials";
import { Faq } from "@/showcase/barrington/components/Faq";
import { Contact } from "@/showcase/barrington/components/Contact";
import { Footer } from "@/showcase/barrington/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Barrington & Cole",
  description:
    "Premium Vilnius law firm advising on corporate, real estate, family, litigation, IP and employment matters.",
  areaServed: "Lithuania",
  availableLanguage: ["English", "Lithuanian", "Russian"],
  telephone: "+370 600 33333",
  email: "consult@barringtoncole.example",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jogailos g. 4",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

export const Route = createFileRoute("/work/barrington-cole")({
  head: () => ({
    meta: [
      { title: "Barrington & Cole — Premium Law Firm in Vilnius" },
      {
        name: "description",
        content:
          "Corporate, real estate, family, litigation, IP and employment counsel in Vilnius. Free first consultation with a senior attorney.",
      },
      { property: "og:title", content: "Barrington & Cole — Premium Law Firm in Vilnius" },
      {
        property: "og:description",
        content: "Counsel you can trust when it matters most. Free, confidential first consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <ShowcaseFrame site="barrington">
      <LanguageProvider>
        <main className="min-h-screen bg-background">
          <Header />
          <Hero />
          <Practice />
          <Firm />
          <Team />
          <Process />
          <Testimonials />
          <Faq />
          <Contact />
          <Footer />
        </main>
      </LanguageProvider>
    </ShowcaseFrame>
  );
}
