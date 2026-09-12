import { Link } from "@tanstack/react-router";
import type { Talent } from "@/lib/site";

export function TalentCard({ person }: { person: Talent }) {
  return (
    <Link
      to="/talent/$slug"
      params={{ slug: person.slug }}
      className="group block"
    >
      <article className="overflow-hidden rounded-xl bg-surface ring-1 ring-line transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-1">
        <div className="relative aspect-portrait overflow-hidden">
          <img
            src={person.image}
            alt={`${person.name}, ${person.role} with Purple Hearts Karachi`}
            className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-bg via-bg/50 to-transparent p-4">
            <p className="font-display text-2xl text-fg">{person.name}</p>
            <p className="text-xs tracking-[0.22em] text-primary uppercase">
              {person.role}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
