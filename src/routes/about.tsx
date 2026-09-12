import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SITE, WHY } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About Purple Hearts Karachi · Models ${SITE.phoneLocal}` },
      {
        name: "description",
        content:
          "Purple Hearts Karachi is a film and fashion talent house. Hollywood finish, Karachi light. Call 03210855593.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The house"
          title="Purple Hearts Karachi"
          copy="A talent house built for the city’s film and fashion years — not a generic catalogue."
          image="/images/locations/penthouse.jpg"
          compact
        />
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
          <img
            src="/logo.jpg"
            alt="Purple Hearts Karachi emblem"
            className="mx-auto w-72 rounded-full ring-1 ring-primary/40"
            width={288}
            height={288}
          />
          <div>
            <h2 className="font-display text-3xl text-fg">
              A Karachi house with a premiere standard
            </h2>
            <p className="mt-4 text-muted">
              Purple Hearts was founded for directors, fashion houses, and
              brand teams who were tired of casting a city from a spreadsheet.
              The board is small on purpose. Every face can hold a lead, a
              campaign, or a carpet. The number on the site — {SITE.phoneDisplay}{" "}
              — is the same number on the call sheet.
            </p>
            <p className="mt-4 text-muted">
              We work in film, fashion, commercials, music video, and live. We
              know Premium Karachi the way a local DP knows the light: which
              hour, which palace, which penthouse, which stretch of Sea View
              still photographs as cinema.
            </p>
          </div>
        </section>
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl text-fg">
              Why Choose Purple Hearts Karachi
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {WHY.map((item) => (
                <article key={item.title} className="rounded-xl bg-bg p-6 ring-1 ring-line">
                  <h3 className="font-display text-2xl text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <CtaBand />
      </main>
    </SiteShell>
  );
}
