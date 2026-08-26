import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { SiteFooter, SiteHeader } from "@/showcase/iron-comb/site-chrome";

export const Route = createFileRoute("/work/iron-comb")({
  head: () => ({
    meta: [
      { title: "Iron & Comb — Barbershop in Vilnius" },
      {
        name: "description",
        content: "Sharp cuts, hot towels, no rush. A barbershop built on craft, not trends.",
      },
      { property: "og:title", content: "Iron & Comb — Barbershop in Vilnius" },
      {
        property: "og:description",
        content: "Sharp cuts, hot towels, no rush. A barbershop built on craft, not trends.",
      },
    ],
  }),
  component: IronCombLayout,
});

function IronCombLayout() {
  return (
    <ShowcaseFrame site="iron-comb">
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </ShowcaseFrame>
  );
}
