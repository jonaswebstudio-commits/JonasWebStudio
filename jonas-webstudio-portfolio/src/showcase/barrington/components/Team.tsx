import { Reveal } from "@/showcase/barrington/components/Reveal";
import { useI18n } from "@/showcase/barrington/i18n";
import richard from "@/showcase/barrington/assets/team-richard.jpg";
import elena from "@/showcase/barrington/assets/team-elena.jpg";
import marcus from "@/showcase/barrington/assets/team-marcus.jpg";
import sofia from "@/showcase/barrington/assets/team-sofia.jpg";

const images = [richard, elena, marcus, sofia];

export function Team() {
  const { t } = useI18n();

  return (
    <section id="team" className="scroll-mt-24 bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.team.eyebrow}</p>
          <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {t.team.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.members.map(([name, role, focus, bio], i) => (
            <Reveal as="article" key={name} delay={i * 90} className="group">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={images[i]}
                  alt={`${t.team.portrait} ${name}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight">{name}</h3>
              <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brass">
                {role}
              </p>
              <p className="mt-3 text-sm text-foreground/80">{focus}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
