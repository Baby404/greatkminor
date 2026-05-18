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

      <ContentSection title="Guitar Institute Registration Form">
        <form className="glass space-y-4 rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Full Name" />
            <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Email Address" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Phone Number" />
            <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Country / City" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <select defaultValue="" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100">
              <option value="" disabled>
                Current Skill Level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select defaultValue="" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100">
              <option value="" disabled>
                Preferred Training Track
              </option>
              <option>Beginner Guitar Foundations</option>
              <option>Contemporary Lead Guitar Development</option>
              <option>Stage, Session & Tone Excellence</option>
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <select defaultValue="" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100">
              <option value="" disabled>
                Learning Format
              </option>
              <option>One-on-One Online</option>
              <option>Group Online</option>
              <option>Hybrid (When Available)</option>
            </select>

            <input type="date" className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" />
          </div>

          <textarea className="h-32 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Tell us your goals, current challenges, and what you want to achieve in the next 3 months." />

          <div className="flex flex-wrap gap-3">
            <Button>Submit Registration</Button>
            <Button href="/contact" variant="ghost">Need Help First</Button>
          </div>
        </form>
      </ContentSection>
    </>
  );
}
