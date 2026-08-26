import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";

export function Faq() {
  const { t } = useI18n();

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border bg-secondary py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <Reveal>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.faq.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl transition-colors hover:text-brass hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
