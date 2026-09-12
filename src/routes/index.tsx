import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { CtaBand } from "@/components/layout/CtaBand";
import { FaqList } from "@/components/layout/FaqList";
import { TalentCard } from "@/components/layout/TalentCard";
import {
  LOCATIONS,
  SITE,
  STATS,
  TALENT,
  WHY,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "Purple Hearts Karachi Models 03210855593 | Film & Fashion Talent",
      },
      {
        name: "description",
        content:
          "Purple Hearts Karachi Models 03210855593 — film and fashion talent for Karachi cinema, campaigns, runway and premieres. WhatsApp +92 321 085 5593.",
      },
    ],
  }),
});

function Home() {
  const featured = TALENT.filter((t) => t.featured);

  return (
    <SiteShell>
      <main>
        <section className="relative min-h-[100dvh] overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="Karachi film and fashion model in a crystal violet couture gown overlooking the city skyline at twilight"
            className="ken absolute inset-0 hidden size-full object-cover object-left md:block"
          />
          <img
            src="/images/talent/ayesha.jpg"
            alt=""
            className="ken absolute inset-0 size-full object-cover object-top md:hidden"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/50 via-35% to-transparent" />
          <div className="absolute inset-0 hidden bg-linear-to-r from-transparent via-bg/5 to-bg/75 md:block" />
          <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 md:items-end md:px-8 md:text-right">
            <p className="rise text-xs tracking-[0.42em] text-primary uppercase">
              Karachi film & fashion
            </p>
            <h1 className="rise mt-4 max-w-3xl font-display text-4xl text-fg md:text-5xl">
              Purple Hearts Karachi Models{" "}
              <a href={SITE.tel} className="block text-primary">
                03210855593
              </a>
            </h1>
            <p className="rise mt-5 max-w-lg text-muted md:ml-auto">
              The board for cinema, couture, and campaign faces in Karachi.
              Hollywood finish, local light, one number on every page.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3 md:justify-end">
              <a
                href={SITE.tel}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg"
              >
                <Phone className="size-4" />
                Call {SITE.phoneDisplay}
              </a>
              <Link
                to="/talent"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 text-sm text-fg hover:border-primary"
              >
                View the board
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-8">
                <p className="font-display text-3xl text-primary">{s.value}</p>
                <p className="mt-1 text-xs tracking-[0.22em] text-subtle uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
          <p className="text-xs tracking-[0.4em] text-primary uppercase">
            Why choose us
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-fg">
            Why Choose Purple Hearts Karachi
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Productions come to us when the brief is a Karachi face that can
            stand next to an international campaign — and a desk that answers
            on {SITE.phoneDisplay}.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-surface p-6 ring-1 ring-line"
              >
                <h3 className="font-display text-2xl text-fg">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs tracking-[0.4em] text-primary uppercase">
                  The board
                </p>
                <h2 className="mt-3 font-display text-3xl text-fg">
                  Karachi models for film and fashion
                </h2>
              </div>
              <Link
                to="/talent"
                className="hidden min-h-11 items-center text-sm text-primary md:inline-flex"
              >
                All talent
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((person) => (
                <TalentCard key={person.slug} person={person} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-8">
          <img
            src="/images/locations/seaview.jpg"
            alt="Sea View Clifton at golden hour, a signature Purple Hearts Karachi location"
            className="aspect-wide w-full rounded-xl object-cover ring-1 ring-line"
          />
          <div>
            <p className="text-xs tracking-[0.4em] text-primary uppercase">
              The city
            </p>
            <h2 className="mt-3 font-display text-3xl text-fg">
              What is Premium Karachi?
            </h2>
            <p className="mt-4 text-muted">
              Premium Karachi is the city’s high-finish register — Clifton
              light on wet sand, palace stone at Mohatta, penthouse glass over
              DHA, Frere Hall’s staircase, and the night skyline that already
              looks like a film. It is not a tourist postcard. It is the
              production value directors fly in for.
            </p>
            <p className="mt-4 text-muted">
              Purple Hearts pairs that city with faces who know how to wear it.
              One booking covers talent, location sense, and a line that stays
              live until wrap.
            </p>
            <Link
              to="/karachi"
              className="mt-6 inline-flex min-h-11 items-center text-sm text-primary"
            >
              Explore locations
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <p className="text-xs tracking-[0.4em] text-primary uppercase">
              Locations
            </p>
            <h2 className="mt-3 font-display text-3xl text-fg">
              Exotic places and Karachi models
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Sea, palace, colonial hall, penthouse, soundstage. We place the
              board against the frames Karachi is famous for.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {LOCATIONS.slice(0, 6).map((loc) => (
                <article
                  key={loc.slug}
                  className="group relative overflow-hidden rounded-xl ring-1 ring-line"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="aspect-wide w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-2xl text-fg">{loc.name}</h3>
                    <p className="mt-1 text-sm text-muted">{loc.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqList />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
