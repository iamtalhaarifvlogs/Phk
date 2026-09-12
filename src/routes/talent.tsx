import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { TalentCard } from "@/components/layout/TalentCard";
import { CtaBand } from "@/components/layout/CtaBand";
import { SITE, TALENT } from "@/lib/site";

export const Route = createFileRoute("/talent")({
  component: TalentPage,
  head: () => ({
    meta: [
      { title: "Karachi Models & Film Talent · Purple Hearts 03210855593" },
      {
        name: "description",
        content:
          "Meet the Purple Hearts Karachi board — film leads, couture, runway and campaign faces. Book models on 03210855593.",
      },
    ],
  }),
});

const FILTERS = ["All", "Film", "Couture", "Runway", "Campaign", "Bridal"] as const;

function TalentPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = useMemo(() => {
    if (filter === "All") return TALENT;
    const key = filter.toLowerCase();
    return TALENT.filter(
      (t) =>
        t.role.toLowerCase().includes(key) ||
        t.specialties.some((s) => s.toLowerCase().includes(key)),
    );
  }, [filter]);

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The board"
          title={`Purple Hearts Karachi Models ${SITE.phoneLocal}`}
          copy="Eight faces. Film, fashion, campaign, live. Every booking runs through 0321 085 5593."
          image="/images/work/runway.jpg"
        />
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={
                  filter === f
                    ? "min-h-11 rounded-full bg-primary px-4 text-sm text-bg"
                    : "min-h-11 rounded-full border border-line px-4 text-sm text-muted hover:text-fg"
                }
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((person) => (
              <TalentCard key={person.slug} person={person} />
            ))}
          </div>
          {list.length === 0 ? (
            <p className="mt-10 text-muted">
              No faces in that lane yet. Call {SITE.phoneDisplay} and we will
              pull from the wider book.
            </p>
          ) : null}
        </section>
        <CtaBand title="Cast from the Karachi board" />
      </main>
    </SiteShell>
  );
}
