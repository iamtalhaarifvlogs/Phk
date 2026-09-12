import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { FaqList } from "@/components/layout/FaqList";
import { SERVICES, SITE, WHY } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Casting, Fashion & Film Services · Purple Hearts ${SITE.phoneLocal}` },
      {
        name: "description",
        content:
          "Purple Hearts Karachi books film talent, fashion campaigns, commercials, music videos and runway. Call 03210855593.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="What we book"
          title="Film, fashion, and live talent for Karachi"
          copy="One house for Lollywood, campaigns, music video, and the gala walk. The desk is 0321 085 5593."
          image="/images/work/filmset.jpg"
        />
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <article
                key={s.slug}
                className="overflow-hidden rounded-xl bg-surface ring-1 ring-line"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-film w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="font-display text-2xl text-fg">{s.title}</h2>
                  <p className="mt-3 text-sm text-muted">{s.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl text-fg">
              Why Choose Purple Hearts Karachi
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {WHY.slice(0, 3).map((item) => (
                <article key={item.title} className="rounded-xl bg-bg p-6 ring-1 ring-line">
                  <h3 className="font-display text-2xl text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.copy}</p>
                </article>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex min-h-11 items-center text-sm text-primary"
            >
              The house story
            </Link>
          </div>
        </section>
        <FaqList />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
