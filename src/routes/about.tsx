import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SITE } from "@/lib/site";

const COVERAGE_PILLARS = [
  {
    sector: "Clifton & Sea View",
    title: "Escorts in Clifton Karachi",
    description:
      "For VIP escorts in Karachi our Discreet residential and coastal suite dispatch across Clifton Blocks 1 through 9, Bath Island, and Sea View luxury apartments with 30-to-45-minute arrival.",
  },
  {
    sector: "Defence Housing Authority",
    title: "Escorts in DHA Karachi",
    description:
      "Verified independent Karachi escorts stationed directly across DHA Phases 1 to 8, Bukhari Commercial, and Phase 8 waterfront villas for private meetings and overnight stays.",
  },
  {
    sector: "Five-Star Hospitality",
    title: "VIP Escorts in Marriott & PC Hotel Karachi",
    description:
      "Seasoned, poised escorts accustomed to five-star lobby etiquette and executive suite visits at Pearl Continental (PC) Hotel, Karachi Marriott, Mövenpick, and Avari Towers.",
  },
  {
    sector: "Central & Suburban Hubs",
    title: "Karachi Escorts in Gulshan-e-Iqbal & Nazimabad",
    description:
      "Reliable, confidential outcall coverage extending beyond coastal zones into PECHS, Gulshan-e-Iqbal, Bahadurabad, and Nazimabad with identical verification standards.",
  },
];

const HOUSE_STANDARDS = [
  {
    step: "01",
    title: "100% Physically Verified Board",
    copy: "Every escorts profile featured at Purple Hearts Karachi undergoes strict in-person verification. We eliminate stock images and outdated portfolios so the exact companion you select arrives at your suite or residence.",
  },
  {
    step: "02",
    title: "Single-Desk Confidentiality",
    copy: `Your inquiry on ${SITE.phoneDisplay} connects directly to our primary concierge desk—never third-party brokers. Client numbers, hotel room details, and booking records are purged immediately after each engagement.`,
  },
  {
    step: "03",
    title: "Refined Etiquette & Punctuality",
    copy: "Whether accompanying corporate executives to formal dinners or providing private relaxation after long-haul flights, our companions uphold poised presentation, conversational grace, and on-time arrival.",
  },
];

const ABOUT_FAQS = [
  {
    question: "What makes Purple Hearts the benchmark for premium Karachi escorts?",
    answer:
      "Unlike unverified classified directories, Purple Hearts Karachi operates as a curated, private hospitality house. Every companion is verified in person, dispatch across DHA and Clifton is rapid, and all arrangements are coordinated directly through one official concierge line.",
  },
  {
    question: "Do you provide VIP escorts to PC Hotel and Marriott Hotel Karachi?",
    answer:
      "Yes. Our VIP Karachi escorts regularly visit five-star properties including Pearl Continental (PC) Hotel, Karachi Marriott, Mövenpick, Avari Towers, and Ramada Creek DHA with complete discretion.",
  },
  {
    question: "Which residential areas in Karachi are covered for private outcalls?",
    answer:
      "We cover Clifton (Blocks 1–9), DHA Phases 1–8, Sea View, PECHS, Gulshan-e-Iqbal, and Nazimabad, as well as private Airbnb apartments and residences.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: `About Purple Hearts · Premium Karachi Escorts ${SITE.phoneLocal}`,
      },
      {
        name: "description",
        content: `Discover Purple Hearts Karachi—the trusted house for verified premium Karachi escorts, escorts in DHA & Clifton, and 5-star hotel outcalls. Call ${SITE.phoneLocal}.`,
      },
      {
        name: "keywords",
        content:
          "premium Karachi escorts, escorts in Karachi, escorts in Clifton Karachi, escorts in DHA Karachi, VIP Karachi escorts, VIP escorts in Marriott hotel Karachi, premium Karachi escorts in PC hotel Karachi, Karachi escorts in Gulshan e Iqbal, VIP escorts in Nazimabad",
      },
      {
        property: "og:title",
        content: `About Purple Hearts · Premium Karachi Escorts (${SITE.phoneLocal})`,
      },
      {
        property: "og:description",
        content:
          "Verified independent companions and VIP Karachi escorts across DHA, Clifton, PC Hotel, Marriott, Gulshan-e-Iqbal, and Nazimabad.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://purpleheartskarachi.site/about",
      },
    ],
  }),
});

function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Purple Hearts Karachi",
        url: "https://purpleheartskarachi.site/about",
        logo: "https://purpleheartskarachi.site/logo.jpg",
        telephone: SITE.phoneDisplay,
        areaServed: [
          "Clifton Karachi",
          "DHA Karachi",
          "PC Hotel Karachi",
          "Marriott Hotel Karachi",
          "Gulshan-e-Iqbal Karachi",
          "Nazimabad Karachi",
        ],
        description:
          "Purple Hearts Karachi provides verified premium Karachi escorts and discreet 24/7 VIP companion outcalls across DHA, Clifton, and five-star hotels.",
      },
      {
        "@type": "FAQPage",
        mainEntity: ABOUT_FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main>
        {/* High-SEO Semantic H1 Hero */}
        <PageHero
          eyebrow="About Purple Hearts Karachi · 24/7 Discreet Concierge"
          title="Premium Karachi Escorts & Verified VIP Companionship"
          copy="Setting the benchmark for discreet hotel outcalls, verified independent models, and private hospitality across Clifton, DHA Phase 1–8, and Karachi’s finest five-star hotels."
          image="/images/locations/penthouse.jpg"
          compact
        />

        {/* Brand Story & Editorial Positioning */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
          <div className="relative mx-auto">
            <img
              src="/logo.jpg"
              alt="Purple Hearts Karachi — Verified Premium Karachi Escorts Emblem"
              className="mx-auto w-72 rounded-full ring-2 ring-primary/40 shadow-2xl"
              width={288}
              height={288}
            />
            <div className="mt-6 text-center">
              <span className="inline-block rounded-full bg-surface px-4 py-1.5 text-xs font-medium tracking-wider text-primary ring-1 ring-primary/30">
                DIRECT CONCIERGE · {SITE.phoneDisplay}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              Verified Excellence · Zero Compromises
            </p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-fg sm:text-4xl">
              Redefining Escorts in Karachi With Privacy, Poise &amp; Authenticity
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Purple Hearts Karachi was established for discerning gentlemen, corporate
              travelers, and private residents who value genuine presentation over generic
              online catalogues. As a premier house for{" "}
              <strong className="font-medium text-fg">premium Karachi escorts</strong>, we
              maintain a selective, personally verified board where every companion embodies
              sophistication, warmth, and social grace.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether arranging{" "}
              <strong className="font-medium text-fg">escorts in Clifton Karachi</strong> for an
              intimate evening along Sea View or coordinating{" "}
              <strong className="font-medium text-fg">escorts in DHA Karachi</strong> for a
              private residence in Phase 6 or Phase 8, our direct desk on{" "}
              <span className="text-fg">{SITE.phoneDisplay}</span> handles every detail with
              unmatched discretion and punctuality.
            </p>

            {/* Key Metrics Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <p className="font-display text-2xl text-primary">100%</p>
                <p className="mt-1 text-xs text-muted">Verified Profiles</p>
              </div>
              <div>
                <p className="font-display text-2xl text-primary">30–45m</p>
                <p className="mt-1 text-xs text-muted">DHA &amp; Clifton Dispatch</p>
              </div>
              <div>
                <p className="font-display text-2xl text-primary">24/7</p>
                <p className="mt-1 text-xs text-muted">Hotel Outcall Desk</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Core Pillars of the House */}
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-primary">
                Our Operating Standard
              </p>
              <h2 className="mt-2 font-display text-3xl text-fg">
                Why Discerning Clients Choose Purple Hearts
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                From first inquiry to suite arrival, our protocol protects your anonymity while
                delivering consistent, five-star hospitality.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {HOUSE_STANDARDS.map((item) => (
                <article
                  key={item.step}
                  className="rounded-xl bg-bg p-7 ring-1 ring-line transition hover:ring-primary/40"
                >
                  <span className="font-display text-sm tracking-widest text-primary">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Semantic Location & Hospitality Matrix */}
        <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-primary">
                Citywide Outcall Coverage
              </p>
              <h2 className="mt-2 font-display text-3xl text-fg">
                VIP Karachi Escorts Across Prime Sectors &amp; Luxury Hotels
              </h2>
            </div>
            <p className="text-sm text-muted">
              Available for short visits, dinner dates &amp; overnight stays
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {COVERAGE_PILLARS.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl bg-surface p-7 ring-1 ring-line transition hover:ring-primary/40"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {area.sector}
                </span>
                <h3 className="mt-2 font-display text-2xl text-fg">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>
              </article>
            ))}
          </div>

          {/* Dedicated Five-Star Hotel & Executive Note */}
          <div className="mt-10 rounded-2xl bg-surface p-8 ring-1 ring-primary/30">
            <h3 className="font-display text-2xl text-fg">
              Executive Suite &amp; Five-Star Hotel Hospitality
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              For international guests and corporate delegates staying along Club Road or
              Shahrah-e-Faisal, Purple Hearts coordinates{" "}
              <strong className="font-medium text-fg">
                premium Karachi escorts in PC hotel Karachi
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-fg">
                VIP escorts in Marriott hotel Karachi
              </strong>{" "}
              with seamless, understated arrival. Beyond coastal districts, our concierge also
              fulfills verified requests for{" "}
              <strong className="font-medium text-fg">
                Karachi escorts in Gulshan-e-Iqbal
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-fg">VIP escorts in Nazimabad</strong>,
              ensuring citywide reliability 24 hours a day.
            </p>
          </div>
        </section>

        {/* Structured About FAQ Section */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <p className="text-xs uppercase tracking-widest text-primary">
              Direct Answers · {SITE.phoneDisplay}
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {ABOUT_FAQS.map((faq) => (
                <div key={faq.question} className="rounded-xl bg-bg p-6 ring-1 ring-line">
                  <h3 className="font-display text-xl text-fg">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </SiteShell>
  );
}
