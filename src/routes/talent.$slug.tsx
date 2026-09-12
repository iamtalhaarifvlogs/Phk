import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaBand } from "@/components/layout/CtaBand";
import { TalentCard } from "@/components/layout/TalentCard";
import { SITE, TALENT, talentBySlug } from "@/lib/site";

export const Route = createFileRoute("/talent/$slug")({
  component: TalentProfile,
  loader: ({ params }) => {
    const person = talentBySlug(params.slug);
    if (!person) throw notFound();
    return person;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.name ?? "Talent"} · Purple Hearts Karachi ${SITE.phoneLocal}`,
      },
      {
        name: "description",
        content: `${loaderData?.name ?? "Talent"} — ${loaderData?.role ?? "model"} with Purple Hearts Karachi. Book on ${SITE.phoneDisplay}.`,
      },
    ],
  }),
});

function TalentProfile() {
  const person = Route.useLoaderData();
  const others = TALENT.filter((t) => t.slug !== person.slug).slice(0, 4);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hello Purple Hearts Karachi — I would like to book ${person.name} (${person.role}).`,
  )}`;

  return (
    <SiteShell>
      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20">
          <div className="self-start overflow-hidden rounded-xl ring-1 ring-line">
            <img
              src={person.image}
              alt={`${person.name}, ${person.role} represented by Purple Hearts Karachi`}
              className="aspect-portrait w-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.4em] text-primary uppercase">
              {person.role}
            </p>
            <h1 className="mt-3 font-display text-4xl text-fg">{person.name}</h1>
            <p className="mt-2 text-sm text-muted">
              Purple Hearts Karachi · {person.based} · Book {SITE.phoneDisplay}
            </p>
            <p className="mt-6 text-muted">{person.bio}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-subtle">Height</dt>
                <dd className="text-fg">{person.height}</dd>
              </div>
              <div>
                <dt className="text-subtle">Hair</dt>
                <dd className="text-fg">{person.hair}</dd>
              </div>
              <div>
                <dt className="text-subtle">Eyes</dt>
                <dd className="text-fg">{person.eyes}</dd>
              </div>
              <div>
                <dt className="text-subtle">Based</dt>
                <dd className="text-fg">{person.based}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              {person.specialties.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 text-xs tracking-wide text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.tel}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg"
              >
                <Phone className="size-4" />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full bg-whatsapp px-6 text-sm font-medium text-bg"
              >
                WhatsApp to book {person.name.split(" ")[0]}
              </a>
            </div>
          </div>
        </section>
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="font-display text-3xl text-fg">More of the board</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((t) => (
                <TalentCard key={t.slug} person={t} />
              ))}
            </div>
            <Link
              to="/talent"
              className="mt-8 inline-flex min-h-11 items-center text-sm text-primary"
            >
              Full roster
            </Link>
          </div>
        </section>
        <CtaBand title={`Book ${person.name} for your next frame`} />
      </main>
    </SiteShell>
  );
}
