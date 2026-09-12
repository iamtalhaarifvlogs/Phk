import { SITE } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ModelingAgency",
    name: SITE.name,
    telephone: "+923210855593",
    url: "/",
    image: "/logo.jpg",
    description:
      "Purple Hearts Karachi is a film and fashion talent house representing models for cinema, campaigns, runway, and brand work in Karachi, Pakistan.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: "Karachi",
    openingHours: "Mo-Su 10:00-00:00",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923210855593",
      contactType: "bookings",
      availableLanguage: ["en", "ur"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
