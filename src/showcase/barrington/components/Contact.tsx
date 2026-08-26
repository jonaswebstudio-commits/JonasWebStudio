import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";
import { toast } from "sonner";

export const CONTACT = {
  address: "Jogailos g. 4, Vilnius",
  phone: "+370 600 33333",
  phoneHref: "tel:+37060033333",
  email: "consult@barringtoncole.example",
};

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", matter: "", message: "" });

  const set = (k: keyof typeof values) => (v: string) => setValues((s) => ({ ...s, [k]: v }));

  const details: [string, string, string | null][] = [
    [t.contact.labels.address, CONTACT.address, null],
    [t.contact.labels.hours, t.contact.hours, null],
    [t.contact.labels.phone, CONTACT.phone, CONTACT.phoneHref],
    [t.contact.labels.email, CONTACT.email, `mailto:${CONTACT.email}`],
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
      toast.error(t.contact.form.invalidEmail);
      return;
    }
    if (values.message.trim().length < 10) {
      toast.error(t.contact.form.short);
      return;
    }
    setSent(true);
    toast.success(t.contact.form.toast);
  };

  const fieldClass =
    "rounded-none border-ink-foreground/20 bg-transparent text-ink-foreground transition-colors placeholder:text-ink-foreground/30 focus-visible:border-brass";
  const labelClass = "text-xs uppercase tracking-[0.16em] text-ink-foreground/70";

  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-28 text-ink-foreground lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-foreground/65">
            {t.contact.body}
          </p>

          <dl className="mt-12 grid gap-px bg-ink-foreground/15 sm:grid-cols-2">
            {details.map(([k, v, href]) => (
              <div key={k} className="bg-ink py-6 sm:px-6">
                <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brass">
                  {k}
                </dt>
                <dd className="mt-2 text-sm text-ink-foreground/85">
                  {href ? (
                    <a href={href} className="transition-colors hover:text-brass">
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <form className="border border-ink-foreground/15 p-8 sm:p-10" onSubmit={onSubmit} noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name" className={labelClass}>
                  {t.contact.form.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={(e) => set("name")(e.target.value)}
                  className={fieldClass}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className={labelClass}>
                  {t.contact.form.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={(e) => set("email")(e.target.value)}
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="mt-6 grid gap-2">
              <Label htmlFor="matter" className={labelClass}>
                {t.contact.form.matter}
              </Label>
              <Input
                id="matter"
                name="matter"
                placeholder={t.contact.form.matterPlaceholder}
                value={values.matter}
                onChange={(e) => set("matter")(e.target.value)}
                className={fieldClass}
              />
            </div>
            <div className="mt-6 grid gap-2">
              <Label htmlFor="message" className={labelClass}>
                {t.contact.form.message}
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder={t.contact.form.messagePlaceholder}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                className={fieldClass}
              />
            </div>
            <Button type="submit" variant="brass" size="xl" className="mt-8 w-full">
              {sent ? t.contact.form.sent : t.contact.form.submit}
            </Button>
            <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-ink-foreground/45">
              {t.contact.form.privacy}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
