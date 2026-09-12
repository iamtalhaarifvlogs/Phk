import { type FormEvent, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { SITE, TALENT } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `Contact Purple Hearts Karachi ${SITE.phoneLocal}` },
      {
        name: "description",
        content:
          "Book Purple Hearts Karachi models. Call 03210855593 or WhatsApp +92 321 085 5593. Clifton & DHA, Karachi.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !phone || !message) {
      setError("Name, phone, and a short brief are required.");
      return;
    }
    const row = {
      name,
      phone,
      email: String(data.get("email") || ""),
      talent: String(data.get("talent") || ""),
      message,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("ph-inquiries") || "[]") as unknown[];
      localStorage.setItem("ph-inquiries", JSON.stringify([row, ...prev].slice(0, 50)));
    } catch {
      /* ignore quota */
    }
    setError("");
    setSent(true);
    form.reset();
  }

  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="The desk"
          title={`Call ${SITE.phoneDisplay}`}
          copy="Bookings, availability, and location support. The WhatsApp on the bottom left is the same number."
          image="/images/locations/dodarya.jpg"
          compact
        />
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-3xl text-fg">Reach Purple Hearts</h2>
            <ul className="mt-8 space-y-4 text-muted">
              <li>
                Phone{" "}
                <a href={SITE.tel} className="text-primary">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                WhatsApp{" "}
                <a href={SITE.whatsappUrl} className="text-primary">
                  +{SITE.whatsapp}
                </a>
              </li>
              <li>{SITE.city}</li>
              <li>{SITE.area}</li>
              <li>{SITE.hours}</li>
            </ul>
            <a
              href={SITE.tel}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg"
            >
              <Phone className="size-4" />
              {SITE.phoneLocal}
            </a>
          </div>
          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-surface p-6 ring-1 ring-line md:p-8"
          >
            <p className="font-display text-2xl text-fg">Send a brief</p>
            <p className="mt-2 text-sm text-muted">
              We reply by phone or WhatsApp. Nothing here is a public listing.
            </p>
            <label className="mt-6 block text-sm text-muted">
              Name
              <input
                name="name"
                required
                className={fieldClass}
                autoComplete="name"
              />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Phone
              <input
                name="phone"
                required
                className={fieldClass}
                autoComplete="tel"
              />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Email
              <input
                name="email"
                type="email"
                className={fieldClass}
                autoComplete="email"
              />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Talent of interest
              <select name="talent" className={cn(fieldClass, "bg-elevated")}>
                <option value="">Any / advise us</option>
                {TALENT.map((t) => (
                  <option key={t.slug} value={t.name}>
                    {t.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-4 block text-sm text-muted">
              Brief
              <textarea name="message" required rows={5} className={fieldClass} />
            </label>
            {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
            {sent ? (
              <p className="mt-3 text-sm text-primary">
                Brief received. For a same-hour reply, call or WhatsApp{" "}
                {SITE.phoneDisplay}.
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-bg"
            >
              Send to the desk
            </button>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}

const fieldClass =
  "mt-1.5 block w-full rounded-lg border border-line bg-elevated px-3 py-2.5 text-fg outline-none ring-primary/0 transition-[box-shadow,border-color] duration-150 focus:border-primary focus:ring-2 focus:ring-primary/40";
