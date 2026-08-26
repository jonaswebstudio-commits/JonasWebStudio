import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Code2, ShoppingBag, Sparkles, LifeBuoy, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";
import workBella from "@/assets/work-bella.jpg";
import workIron from "@/assets/work-iron.jpg";
import workMeridian from "@/assets/work-meridian.jpg";
import workBarrington from "@/assets/work-barrington.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jonas Webstudio — Futuristic Web Design Studio" },
      {
        name: "description",
        content:
          "Jonas Webstudio designs and builds fast, distinctive websites that convert — usually within hours to a few days. Custom design, e-commerce, branding and support.",
      },
      { property: "og:title", content: "Jonas Webstudio — Futuristic Web Design Studio" },
      {
        property: "og:description",
        content:
          "Websites that feel like the future — fast, sharp, and built to convert. Custom sites from €245.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Code2, t: "s1t", b: "s1b" },
  { icon: ShoppingBag, t: "s2t", b: "s2b" },
  { icon: Sparkles, t: "s3t", b: "s3b" },
  { icon: LifeBuoy, t: "s4t", b: "s4b" },
];

const work = [
  { name: "Barrington & Cole", key: "wLaw", img: workBarrington, to: "/work/barrington-cole" },
  { name: "Ember & Oak", key: "wRestaurant", img: workBella, to: "/work/ember-oak" },
  { name: "Meridian Properties", key: "wRealEstate", img: workMeridian, to: "/work/meridian" },
  { name: "Iron & Comb", key: "wBarber", img: workIron, to: "/work/iron-comb" },
] as const;

const process = [
  { n: "01", t: "p1t", d: "p1d" },
  { n: "02", t: "p2t", d: "p2d" },
  { n: "03", t: "p3t", d: "p3d" },
  { n: "04", t: "p4t", d: "p4d" },
];

const why = ["why1", "why2", "why3", "why4", "why5"];

const stats = [
  { to: 24, suffix: "h", label: "stat1l" },
  { to: 100, suffix: "%", label: "stat2l" },
  { to: 3, suffix: "", label: "stat3l" },
  { to: 19, suffix: "+", label: "stat4l" },
];

function useParallax() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return offset;
}

function Index() {
  const { t } = useLanguage();
  const scrollY = useParallax();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <CustomCursor />
      <SiteHeader />

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1200}
            className="hero-motion h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 grid-lines grid-drift opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 scan-line bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--neon)_18%,transparent),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,transparent,var(--background)_70%)]" />
        <div className="orb absolute -left-32 top-24 h-96 w-96 bg-accent/30" />
        <div
          className="orb absolute -right-24 bottom-10 h-[28rem] w-[28rem] bg-primary/20"
          style={{ animationDelay: "-6s" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
          <Reveal>
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[var(--shadow-neon)]" />
              {t("heroBadge")}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 text-[clamp(3rem,11vw,10rem)] leading-[0.88] font-bold">
              Jonas
              <br />
              <span className="text-gradient">Webstudio</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
              {t("heroTagline")}
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-4 max-w-lg text-muted-foreground">{t("heroSub")}</p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-4 pb-20">
              <Link
                to="/"
                hash="contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-neon)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              >
                {t("heroCta1")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/"
                hash="work"
                className="glow-ring rounded-full border border-border px-7 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("heroCta2")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("servicesLabel")}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            {t("servicesHeading")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 120}>
              <div className="glass-panel glow-ring h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1">
                <s.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold">{t(s.t)}</h3>
                <p className="mt-3 text-muted-foreground">{t(s.b)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("workLabel")}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">{t("workHeading")}</h2>
          <p className="mt-5 max-w-xl text-muted-foreground">{t("workSub")}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.name} delay={i * 140}>
              <Link
                to={w.to}
                className="work-card group block h-full overflow-hidden rounded-3xl border border-border bg-card/40"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={w.img}
                    alt={`${w.name} — ${t(w.key)}`}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="work-scroll absolute inset-x-0 top-0 h-[145%] w-full object-cover object-top group-hover:-translate-y-[31%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_oklab,var(--violet-glow)_25%,transparent),transparent_60%)]" />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-semibold">{w.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t(w.key)}</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {t("viewProject")}
                    <ArrowUpRight className="h-5 w-5 shrink-0" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative overflow-hidden py-28">
        <div className="orb absolute left-1/3 top-10 h-80 w-80 bg-accent/20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("processLabel")}</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
              {t("processHeading")}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 150}>
                <div className="h-full bg-background p-8 transition-colors duration-500 hover:bg-card">
                  <span className="font-display text-5xl font-bold text-gradient">{p.n}</span>
                  <h3 className="mt-6 text-xl font-semibold">{t(p.t)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t(p.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-primary">{t("whyLabel")}</p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">{t("whyHeading")}</h2>
            <ul className="mt-10 space-y-4">
              {why.map((w) => (
                <li key={w} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t(w)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="glass-panel rounded-3xl p-7">
                  <div className="font-display text-4xl font-bold text-gradient">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{t(s.label)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <PricingSection />

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-32">
        <div className="orb absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-accent/25" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] font-bold">
              {t("contactHeading")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">{t("contactSub")}</p>
          </Reveal>
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
