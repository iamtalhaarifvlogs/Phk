import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img
            src="/logo.jpg"
            alt="Purple Hearts Karachi"
            className="size-16 rounded-full object-cover ring-1 ring-primary/40"
            width={64}
            height={64}
          />
          <p className="mt-5 font-display text-3xl text-primary">Purple Hearts</p>
          <p className="mt-1 text-sm tracking-[0.28em] text-muted">KARACHI</p>
          <p className="mt-4 max-w-md text-sm text-muted">
            Film and fashion talent for Karachi productions, campaigns, and
            premieres. Book the board on{" "}
            <a href={SITE.tel} className="text-primary">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-subtle uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.28em] text-subtle uppercase">Book</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={SITE.tel} className="hover:text-primary">
                Call {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp +{SITE.whatsapp}
              </a>
            </li>
            <li>{SITE.city}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-5 text-center text-xs text-subtle md:px-8">
        © {new Date().getFullYear()} Purple Hearts Karachi · Film & fashion
        models · {SITE.phoneDisplay}
      </div>
    </footer>
  );
}
