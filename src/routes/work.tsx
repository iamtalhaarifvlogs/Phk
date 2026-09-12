import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SITE, WORK } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Selected Work · Purple Hearts Karachi ${SITE.phoneLocal}` },
      {
        name: "description",
        content:
          "Film stills, couture, runway and campaign frames from Purple Hearts Karachi. Book the board on 03210855593.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Selected frames"
          title="Work from the Karachi board"
          copy="A short edit of film, fashion, and campaign stills. For the full book, call the desk."
          image="/images/locations/skyline.jpg"
          compact
        />
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {WORK.map((item) => (
              <figure
                key={item.title}
                className="mb-4 break-inside-avoid overflow-hidden rounded-xl ring-1 ring-line"
              >
                <img src={item.image} alt={item.title} className="w-full object-cover" />
                <figcaption className="bg-surface px-4 py-3">
                  <p className="font-display text-xl text-fg">{item.title}</p>
                  <p className="text-xs tracking-[0.22em] text-primary uppercase">
                    {item.kind}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <CtaBand title="Commission the next frame" />
      </main>
    </SiteShell>
  );
}
