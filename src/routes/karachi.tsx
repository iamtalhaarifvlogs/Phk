import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { LOCATIONS, SITE, TALENT } from "@/lib/site";
import { TalentCard } from "@/components/layout/TalentCard";

export const Route = createFileRoute("/karachi")({
  component: KarachiPage,
  head: () => ({
    meta: [
      { title: `Premium Karachi Locations & Models · Purple Hearts ${SITE.phoneLocal}` },
      {
        name: "description",
        content:
          "What is Premium Karachi? Sea View, Frere Hall, Mohatta Palace, DHA penthouses and the night skyline — with Purple Hearts models. 03210855593.",
      },
    ],
  }),
});

function KarachiPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The city"
          title="What is Premium Karachi?"
          copy="The high-finish side of the city — coast, palace, colonial stone, penthouse glass — shot with models who belong in the frame."
          image="/images/locations/mohatta.jpg"
        />
        <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
          <p className="text-lg text-muted">
            Premium Karachi is a production idea. It is Clifton at the hour the
            water turns copper. It is Mohatta’s pink stone, Frere Hall’s
            staircase, a DHA penthouse after the call to prayer, Do Darya when
            the lanterns come on, and a skyline that already looks graded.
            Purple Hearts exists to put the right face in those places — and
            to keep {SITE.phoneDisplay} on the call sheet.
          </p>
        </section>
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl text-fg">
              Exotic places, Karachi light
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <article
                  key={loc.slug}
                  className="overflow-hidden rounded-xl ring-1 ring-line"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="aspect-wide w-full object-cover"
                  />
                  <div className="bg-bg p-5">
                    <h3 className="font-display text-2xl text-fg">{loc.name}</h3>
                    <p className="mt-2 text-sm text-muted">{loc.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <h2 className="font-display text-3xl text-fg">Models of the city</h2>
          <p className="mt-3 max-w-xl text-muted">
            Faces cast for Karachi — not imported from a generic board.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TALENT.slice(0, 4).map((p) => (
              <TalentCard key={p.slug} person={p} />
            ))}
          </div>
        </section>
        <CtaBand title="Shoot Premium Karachi with our board" />
      </main>
    </SiteShell>
  );
}
