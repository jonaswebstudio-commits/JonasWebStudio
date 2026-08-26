import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { I18nProvider } from "@/showcase/meridian/i18n";
import { SiteFooter } from "@/showcase/meridian/components/SiteFooter";
import { SiteHeader } from "@/showcase/meridian/components/SiteHeader";

export const Route = createFileRoute("/work/meridian")({
  head: () => ({
    meta: [
      { title: "Meridian Properties" },
      {
        name: "description",
        content:
          "Meridian Properties — premium real estate agency in Vilnius. Finding the right address, not just any address.",
      },
      { property: "og:title", content: "Meridian Properties" },
      {
        property: "og:description",
        content:
          "Premium real estate agency in Vilnius. Finding the right address, not just any address.",
      },
    ],
  }),
  component: MeridianLayout,
});

function MeridianLayout() {
  return (
    <ShowcaseFrame site="meridian">
      <I18nProvider>
        <div className="min-h-screen bg-stone-50 font-sans text-ink selection:bg-forest/10">
          <SiteHeader />
          <main>
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </I18nProvider>
    </ShowcaseFrame>
  );
}
