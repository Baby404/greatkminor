import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";

export default function GuitarInstitutePage() {
  return (
    <>
      <PageHero
        title="Great Kminor Guitar Institute"
        subtitle="Premium guitar mentorship for beginners, intermediate players, and emerging professionals — technique, tone, creativity, and live performance confidence."
      />

      <ContentSection title="Training Tracks">
        <GenericGrid
          items={[
            {
              title: "Beginner Guitar Foundations",
              text: "Posture, chord vocabulary, rhythm timing, strumming control, and practical routines that build strong musical confidence from day one."
            },
            {
              title: "Contemporary Lead Guitar Development",
              text: "Melodic phrasing, scales in context, improvisation drills, fills, transitions, and expressive solo building for real-world performance."
            },
            {
              title: "Stage, Session & Tone Excellence",
              text: "Tone shaping, effects workflow, band communication, rehearsal discipline, and studio/live readiness for professional delivery."
            }
          ]}
        />
      </ContentSection>

      <ContentSection title="What You’ll Gain">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Structured Growth",
              text: "Step-by-step learning path with weekly practice targets and measurable progress checkpoints."
            },
            {
              title: "Practical Application",
              text: "Every lesson is built around real playing situations: live sets, rehearsals, recordings, and personal performance goals."
            },
            {
              title: "Mentorship Access",
              text: "Direct coaching feedback to refine your playing style, sharpen your musical decisions, and build confidence."
            }
          ].map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Book Your Guitar Institute Session">
        <div className="glass space-y-4 rounded-3xl p-4 md:p-6">
          <iframe
            src="https://calendly.com/okundareayokunle99/gkguitarinstitute"
            title="Great Kminor Guitar Institute Booking"
            className="h-[720px] w-full rounded-2xl border border-zinc-300 dark:border-zinc-700"
          />
          <div className="flex flex-wrap gap-3">
            <Button href="https://calendly.com/okundareayokunle99/gkguitarinstitute">
              Open Calendly in Full Page
            </Button>
            <Button href="/contact" variant="ghost">Need Help First</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
