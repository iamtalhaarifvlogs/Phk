import { Link } from "@tanstack/react-router";
import { SiteShell } from "./SiteShell";
import { SITE } from "@/lib/site";

export function NotFound() {
  return (
    <SiteShell>
      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
        <p className="text-xs tracking-[0.4em] text-primary uppercase">404</p>
        <h1 className="mt-4 font-display text-4xl text-fg">Page not found</h1>
        <p className="mt-4 text-muted">
          The frame you asked for is not on this board. Return home or call{" "}
          <a href={SITE.tel} className="text-primary">
            {SITE.phoneDisplay}
          </a>
          .
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm text-bg"
        >
          Back to Purple Hearts
        </Link>
      </main>
    </SiteShell>
  );
}
