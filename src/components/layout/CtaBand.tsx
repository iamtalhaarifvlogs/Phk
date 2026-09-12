import { SITE } from "@/lib/site";
import { Phone } from "lucide-react";

export function CtaBand({
  title = "Book Purple Hearts Karachi",
  copy = "Tell us the date, the brief, and the city. The board answers on the same line used across this site.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <img
        src="/images/locations/skyline.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-bg/70" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <p className="text-xs tracking-[0.4em] text-primary uppercase">
          Booking desk
        </p>
        <h2 className="mt-4 font-display text-3xl text-fg">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{copy}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SITE.tel}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg"
          >
            <Phone className="size-4" />
            Call {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-whatsapp px-6 text-sm font-medium text-bg"
          >
            WhatsApp the desk
          </a>
        </div>
      </div>
    </section>
  );
}
