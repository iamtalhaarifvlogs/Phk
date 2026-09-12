import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 md:px-8">
        <Link to="/" className="flex min-h-11 items-center gap-3">
          <img
            src="/logo.jpg"
            alt="Purple Hearts Karachi"
            className="size-11 rounded-full object-cover ring-1 ring-primary/40"
            width={44}
            height={44}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg tracking-[0.18em] text-primary">
              PURPLE HEARTS
            </span>
            <span className="block text-[10px] tracking-[0.42em] text-muted">
              KARACHI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-150",
                  active ? "text-primary" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.tel}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/40 bg-elevated px-3 text-sm text-primary transition-colors duration-150 hover:border-primary hover:text-fg md:px-4"
          >
            <Phone className="size-4 shrink-0" strokeWidth={1.75} />
            <span className="hidden tabular-nums sm:inline">{SITE.phoneDisplay}</span>
            <span className="tabular-nums sm:hidden">Call</span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[61px] z-40 bg-bg/96 px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 font-display text-3xl text-fg"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.whatsappUrl}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp text-bg"
            >
              WhatsApp {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
