import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SITE } from "@/lib/site";

interface BlogArticle {
  id: string;
  category: "Clifton & DHA" | "5-Star Hotels" | "VIP Etiquette" | "Privacy & Rates";
  datePublished: string;
  readTime: string;
  title: string;
  subtitle: string;
  keywords: string[];
  lead: string;
  sections: {
    heading: string;
    body: string;
  }[];
  keyTakeaway: string;
}

const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "clifton-dha-vip-companionship-guide",
    category: "Clifton & DHA",
    datePublished: "2026-11-16",
    readTime: "5 min read",
    title: "The Definitive Guide to Verified VIP Companions in Clifton & DHA Phase 5–8",
    subtitle:
      "How discerning clients arrange discreet, verified independent companionship across Karachi’s premier coastal and residential districts.",
    keywords: [
      "Escorts in Clifton Karachi",
      "VIP Companions DHA Phase 6",
      "Independent Models Karachi",
      "Purple Hearts Karachi",
    ],
    lead:
      "Across Clifton Blocks 1–9, Sea View, and DHA Phases 5 through 8, expectations around hospitality, punctuality, and privacy operate at an international standard. Whether hosting at a private penthouse or dining along the coast, choosing a verified talent house eliminates uncertainty.",
    sections: [
      {
        heading: "1. Why Verified Boards Outperform Generic Listings",
        body: "Unlike unverified directories that circulate outdated images, Purple Hearts Karachi maintains a curated roster where every profile is verified in person. What appears on our board is exactly who arrives at your residence or suite—ensuring poise, photogenic elegance, and genuine warmth.",
      },
      {
        heading: "2. Seamless Dispatch Across DHA & Clifton",
        body: "Proximity matters in Karachi. Because our independent companions and VIP models operate directly within Clifton, DHA Phase 5, Phase 6, Phase 7, and Phase 8, confirmation via WhatsApp or direct call on 0321 085 5593 typically results in discreet arrival within 30 to 45 minutes.",
      },
      {
        heading: "3. Tailored Arrangements for Short Visits or Overnight Stays",
        body: "From two-hour evening dinner dates to full overnight companionship, every booking is structured around clear communication, mutual respect, and zero last-minute surprises.",
      },
    ],
    keyTakeaway:
      "Always confirm location sector (Clifton Block or DHA Phase) and preferred duration upfront on 0321 085 5593 for immediate, priority scheduling.",
  },
  {
    id: "five-star-hotel-outcalls-karachi",
    category: "5-Star Hotels",
    datePublished: "2026-11-12",
    readTime: "4 min read",
    title: "Five-Star Hotel Outcalls in Karachi: PC Hotel, Marriott & Mövenpick Protocol",
    subtitle:
      "Everything visiting corporate executives and international travelers need to know about smooth, confidential hotel suite visits.",
    keywords: [
      "Hotel Outcalls Karachi",
      "PC Hotel Escorts Karachi",
      "Marriott Karachi VIP Companions",
      "Executive Escort Service Karachi",
    ],
    lead:
      "Business travelers arriving via Jinnah International Airport frequently stay at Club Road and Shahrah-e-Faisal landmarks including Pearl Continental (PC) Hotel, Karachi Marriott, Mövenpick, and Avari Towers. Navigating five-star hotel security requires seasoned, well-presented companions.",
    sections: [
      {
        heading: "1. Refined Presentation That Blends Into Luxury Hospitality",
        body: "Our models dress with understated sophistication suited for five-star lobbies, executive lounges, and private dining rooms—attracting zero unwanted attention while elevating your evening.",
      },
      {
        heading: "2. Effortless Check-In & Suite Arrival",
        body: "Simply share your hotel name and preferred timing when calling or messaging 0321 085 5593. Our coordinator handles arrival timing smoothly so you can relax in your suite without delays.",
      },
      {
        heading: "3. Corporate Travel & Extended Weekend Companionship",
        body: "For executives in Karachi on multi-day assignments, extended overnight and weekend arrangements offer consistent, intelligent company throughout your stay.",
      },
    ],
    keyTakeaway:
      "Five-star hotel outcalls are available 24/7 with priority dispatch to Club Road, Clifton, and Shahrah-e-Faisal properties.",
  },
  {
    id: "cinematic-elegance-karachi-nightlife",
    category: "VIP Etiquette",
    datePublished: "2026-11-08",
    readTime: "6 min read",
    title: "Hollywood Finish, Karachi Light: Inside Karachi’s Private Luxury Social Scene",
    subtitle:
      "From Sea View sunset drives to private penthouse gatherings, how Purple Hearts brings editorial-grade poise to private companionship.",
    keywords: [
      "High Profile Models Karachi",
      "Luxury Escorts Sea View Karachi",
      "VIP Dinner Date Karachi",
      "Elite Call Girls Karachi",
    ],
    lead:
      "Karachi comes alive after dusk. Beyond crowded public venues lies a private circuit of penthouse dinners, coastal drives along Nishat and Bukhari Commercial, and intimate gatherings where articulate, charismatic company transforms the atmosphere.",
    sections: [
      {
        heading: "1. Beyond Looks: Conversational Grace & Charisma",
        body: "A true VIP companion brings more than striking aesthetics. Our board is selected for intelligence, social fluency, and warmth—making them equally comfortable at an intimate candlelit dinner or a high-profile social event.",
      },
      {
        heading: "2. Etiquette for an Unforgettable Evening",
        body: "Clear communication, punctuality, and mutual courtesy set the tone for an extraordinary encounter. Let our desk know the vibe of your evening—whether relaxed and intimate or glamorous and social—so we can recommend the ideal match.",
      },
    ],
    keyTakeaway:
      "Share the occasion and preferred ambiance when booking so our house can pair you with a companion whose personality matches your evening.",
  },
  {
    id: "client-confidentiality-and-booking-standards",
    category: "Privacy & Rates",
    datePublished: "2026-11-02",
    readTime: "4 min read",
    title: "Absolute Discretion & Transparent Standards: How Purple Hearts Protects Client Privacy",
    subtitle:
      "Our zero-leak privacy architecture, direct single-line booking policy, and upfront rate clarity for local and overseas clients.",
    keywords: [
      "Discreet Escort Agency Karachi",
      "Verified Call Girls Karachi Rates",
      "Safe Outcall Service DHA Karachi",
      "24/7 Escorts Karachi",
    ],
    lead:
      "Privacy is the foundation of luxury service. High-net-worth individuals, diplomats, and visiting executives choose Purple Hearts Karachi because every inquiry is handled directly through one verified desk—never outsourced to third-party brokers.",
    sections: [
      {
        heading: "1. One Official Number on the Call Sheet",
        body: "The number displayed across our site—0321 085 5593—connects you directly with our primary house coordinator. We never share client numbers, hotel details, or booking histories with external parties.",
      },
      {
        heading: "2. Upfront Clarity With Zero Hidden Charges",
        body: "Before confirming any outcall or overnight stay, all terms and rates are communicated transparently over WhatsApp or phone—guaranteeing complete peace of mind from start to finish.",
      },
    ],
    keyTakeaway:
      "Book exclusively via our official line (0321 085 5593) to ensure verified profiles, direct coordination, and strict confidentiality.",
  },
];

const SEO_FAQS = [
  {
    question: "Which areas in Karachi does Purple Hearts cover for outcalls?",
    answer:
      "We provide 24/7 discreet outcalls across Clifton (Blocks 1–9), DHA Phases 1 through 8, Sea View, PECHS, Bath Island, and major 5-star hotels including PC Hotel, Marriott, and Mövenpick.",
  },
  {
    question: "Are the model profiles and photos on Purple Hearts Karachi verified?",
    answer:
      "Yes. Every independent model and VIP companion on our board is personally verified so the exact companion you select arrives at your location.",
  },
  {
    question: "How quickly can I arrange a hotel outcall or private meeting in DHA or Clifton?",
    answer:
      "Once confirmed via call or WhatsApp at 0321 085 5593, typical dispatch across Clifton and DHA takes 30 to 45 minutes.",
  },
  {
    question: "Do you offer overnight stays and dinner companionship?",
    answer:
      "Yes. We arrange short private visits, evening dinner dates, and full overnight stays tailored to your schedule.",
  },
];

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
  head: () => ({
    meta: [
      {
        title: `Journal & VIP Guides · Purple Hearts Karachi ${SITE.phoneLocal}`,
      },
      {
        name: "description",
        content: `Read luxury lifestyle guides, 5-star hotel outcall etiquette, and verified VIP companion insights across Clifton & DHA Phase 5–8 Karachi. Call ${SITE.phoneLocal}.`,
      },
      {
        name: "keywords",
        content:
          "Escorts in Clifton Karachi, VIP Companions DHA Phase 5-8, Hotel Outcalls Karachi, PC Hotel Escorts, Marriott Karachi Companions, Purple Hearts Karachi Blog",
      },
      {
        property: "og:title",
        content: `Purple Hearts Karachi · VIP Lifestyle Journal & Guides (${SITE.phoneLocal})`,
      },
      {
        property: "og:description",
        content:
          "Discreet hotel outcalls, Clifton & DHA Phase 5–8 guides, and verified VIP companion insights in Karachi.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://purpleheartskarachi.com/blogs",
      },
    ],
  }),
});

function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Clifton & DHA", "5-Star Hotels", "VIP Etiquette", "Privacy & Rates"];

  const filteredArticles =
    selectedCategory === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((article) => article.category === selectedCategory);

  // Structured JSON-LD Schema for Rich Google Snippets (Blog + Articles + FAQs)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Purple Hearts Karachi Journal",
        description:
          "Editorial guides on verified VIP companionship, 5-star hotel outcalls, and luxury lifestyle in Clifton & DHA Karachi.",
        publisher: {
          "@type": "Organization",
          name: "Purple Hearts Karachi",
          telephone: SITE.phoneDisplay,
        },
        blogPost: BLOG_ARTICLES.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.subtitle,
          datePublished: post.datePublished,
          keywords: post.keywords.join(", "),
          author: {
            "@type": "Organization",
            name: "Purple Hearts Karachi",
          },
          articleBody: [post.lead, ...post.sections.map((s) => `${s.heading}: ${s.body}`)].join(
            "\n\n"
          ),
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: SEO_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <SiteShell>
      {/* JSON-LD SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        {/* Native PageHero matching your About & Location pages */}
        <PageHero
          eyebrow="The Journal"
          title="Karachi Luxury & VIP Guides"
          copy="Editorial insights on discreet hotel outcalls, Clifton & DHA etiquette, and verified private companionship."
          image="/images/locations/penthouse.jpg"
          compact
        />

        {/* Category Filter & Quick Jump Index */}
        <section className="mx-auto max-w-6xl px-4 pt-14 md:px-8">
          <div className="flex flex-col gap-6 rounded-2xl bg-surface p-6 ring-1 ring-line md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">
                Browse Topics · 24/7 Concierge {SITE.phoneDisplay}
              </p>
              <h2 className="mt-1 font-display text-2xl text-fg">
                Curated Reading for Discerning Guests
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition ${
                      active
                        ? "bg-primary text-bg shadow-sm"
                        : "bg-bg text-muted ring-1 ring-line hover:text-fg"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Article Table of Contents (Boosts UX & Crawlability) */}
          <nav
            aria-label="Article index"
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredArticles.map((article, idx) => (
              <a
                key={article.id}
                href={`#${article.id}`}
                className="group rounded-xl bg-surface p-5 ring-1 ring-line transition hover:ring-primary/50"
              >
                <div className="flex items-center justify-between text-xs text-primary">
                  <span>0{idx + 1} · {article.category}</span>
                  <span className="text-muted">{article.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-fg group-hover:text-primary">
                  {article.title}
                </h3>
                <span className="mt-4 inline-block text-xs font-medium text-muted group-hover:text-fg">
                  Jump to article ↓
                </span>
              </a>
            ))}
          </nav>
        </section>

        {/* Full Long-Form Articles Section (All indexed directly on /blogs) */}
        <section className="mx-auto max-w-4xl space-y-16 px-4 py-16 md:px-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="scroll-mt-28 rounded-2xl bg-surface p-6 ring-1 ring-line sm:p-10"
            >
              {/* Meta Bar */}
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider text-primary">
                <span className="rounded-full bg-bg px-3 py-1 ring-1 ring-primary/30">
                  {article.category}
                </span>
                <span className="text-muted">•</span>
                <time dateTime={article.datePublished} className="text-muted">
                  {article.datePublished}
                </time>
                <span className="text-muted">•</span>
                <span className="text-muted">{article.readTime}</span>
              </div>

              {/* Article Headline & Lead */}
              <h2 className="mt-4 font-display text-2xl leading-tight text-fg sm:text-4xl">
                {article.title}
              </h2>
              <p className="mt-3 text-base font-medium text-primary/90 sm:text-lg">
                {article.subtitle}
              </p>

              <p className="mt-6 border-b border-line pb-6 text-base leading-relaxed text-muted">
                {article.lead}
              </p>

              {/* Full Editorial Subsections */}
              <div className="mt-6 space-y-6">
                {article.sections.map((sec) => (
                  <div key={sec.heading}>
                    <h3 className="font-display text-xl text-fg">{sec.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Takeaway & Direct Action Strip */}
              <div className="mt-8 rounded-xl bg-bg p-5 ring-1 ring-primary/30">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  House Note
                </p>
                <p className="mt-1 text-sm text-fg">{article.keyTakeaway}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${SITE.phoneLocal}`}
                    className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-bg transition hover:opacity-90"
                  >
                    Call {SITE.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/92${SITE.phoneLocal.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-surface px-5 py-2 text-xs font-semibold text-fg ring-1 ring-line transition hover:ring-primary/50"
                  >
                    WhatsApp Concierge ↗
                  </a>
                </div>
              </div>

              {/* Semantic Keyword Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {article.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-md bg-bg px-2.5 py-1 text-[11px] text-muted ring-1 ring-line"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* High-SEO Local FAQ Section */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <p className="text-xs uppercase tracking-widest text-primary">
              Clifton · DHA Phase 5–8 · 5-Star Hotels
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {SEO_FAQS.map((faq) => (
                <div key={faq.question} className="rounded-xl bg-bg p-6 ring-1 ring-line">
                  <h3 className="font-display text-lg text-fg">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Native Bottom Call-To-Action Band */}
        <CtaBand />
      </main>
    </SiteShell>
  );
}

