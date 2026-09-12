export const SITE = {
  name: "Purple Hearts Karachi",
  short: "Purple Hearts",
  tagline: "Film & fashion talent of Karachi",
  phoneLocal: "03210855593",
  phoneDisplay: "0321 085 5593",
  tel: "tel:+923210855593",
  whatsapp: "923210855593",
  whatsappUrl:
    "https://wa.me/923210855593?text=" +
    encodeURIComponent(
      "Hello Purple Hearts Karachi — I would like to book film or fashion talent.",
    ),
  city: "Karachi, Pakistan",
  area: "Clifton & DHA",
  hours: "Open daily, 10:00 – 00:00 PKT",
  email: "book@purpleheartskarachi.com",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/talent", label: "Talent" },
  { to: "/services", label: "Services" },
  { to: "/karachi", label: "Karachi" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type Talent = {
  slug: string;
  name: string;
  role: string;
  height: string;
  hair: string;
  eyes: string;
  based: string;
  specialties: string[];
  image: string;
  bio: string;
  featured?: boolean;
};

export const TALENT: Talent[] = [
  {
    slug: "ayesha-noor",
    name: "Ayesha Noor",
    role: "Film & Couture",
    height: "5'9\"",
    hair: "Dark brown",
    eyes: "Hazel",
    based: "Clifton",
    specialties: ["Lead film", "Couture", "Campaign"],
    image: "/images/talent/ayesha.jpg",
    featured: true,
    bio: "Ayesha is the face most directors ask for when a Karachi story needs stillness and voltage in the same frame. She moves between Lollywood leads, couture lookbooks, and night-city campaigns with a camera discipline rare at twenty-three.",
  },
  {
    slug: "zara-malik",
    name: "Zara Malik",
    role: "Editorial & Runway",
    height: "5'10\"",
    hair: "Black bob",
    eyes: "Dark brown",
    based: "DHA Phase 6",
    specialties: ["Runway", "Editorial", "Luxury retail"],
    image: "/images/talent/zara.jpg",
    featured: true,
    bio: "Zara’s line is architectural. Casting directors book her when a gown, a colonnade, or a marble hall has to feel like a character. She is a favourite for Karachi Fashion Week and heritage-location editorials.",
  },
  {
    slug: "hira-qureshi",
    name: "Hira Qureshi",
    role: "Film Lead",
    height: "5'8\"",
    hair: "Black",
    eyes: "Brown",
    based: "PECHS",
    specialties: ["Drama", "Music video", "Brand film"],
    image: "/images/talent/hira.jpg",
    featured: true,
    bio: "Hira reads as cinema even in a still. Night rooftops, teal practicals, long takes — she is the model directors call when a sequence has to feel like a Pakistani film that could travel.",
  },
  {
    slug: "sana-rizvi",
    name: "Sana Rizvi",
    role: "Campaign & Palace",
    height: "5'9\"",
    hair: "Chestnut",
    eyes: "Green-brown",
    based: "Bath Island",
    specialties: ["Jewellery", "Palace editorial", "Festive couture"],
    image: "/images/talent/sana.jpg",
    featured: true,
    bio: "Sana carries gold, emerald silk, and carved interiors without being worn by them. Jewellery houses and festive campaigns book her for a regal register that still feels contemporary Karachi.",
  },
  {
    slug: "meher-khan",
    name: "Meher Khan",
    role: "Commercial & Lifestyle",
    height: "5'7\"",
    hair: "Honey brown",
    eyes: "Hazel",
    based: "Sea View",
    specialties: ["Lifestyle", "Beauty", "Seaside campaign"],
    image: "/images/talent/meher.jpg",
    bio: "Meher is daylight and motion — the face for seaside campaigns, beauty stills, and brands that want Karachi to look like a coast, not a rumour. Casting teams trust her for a warm, camera-true smile.",
  },
  {
    slug: "rania-ahmed",
    name: "Rania Ahmed",
    role: "Couture & Festival",
    height: "5'8\"",
    hair: "Raven",
    eyes: "Black",
    based: "Clifton Block 2",
    specialties: ["Red carpet", "Festive film", "Couture"],
    image: "/images/talent/rania.jpg",
    bio: "Rania is built for the long red carpet and the festival still. Sari-couture, spotlight, wet stone — she gives a frame the gravity of a premiere without ever leaving Karachi.",
  },
  {
    slug: "noor-fatima",
    name: "Noor Fatima",
    role: "Bridal Couture",
    height: "5'7\"",
    hair: "Black",
    eyes: "Brown",
    based: "North Nazimabad",
    specialties: ["Bridal", "Still life beauty", "Print"],
    image: "/images/talent/noor.jpg",
    bio: "Noor’s register is quiet luxury. Bridal houses and print stories book her when the brief is porcelain light, an off-shoulder line, and a face that holds a room without raising its voice.",
  },
  {
    slug: "alina-shah",
    name: "Alina Shah",
    role: "Avant-Garde",
    height: "5'11\"",
    hair: "Black ponytail",
    eyes: "Dark",
    based: "Korangi Creative District",
    specialties: ["Avant-garde", "Gallery", "Lookbook"],
    image: "/images/talent/alina.jpg",
    bio: "Alina is the sharp line in the book. Designers who work in leather, concrete, and violet gel light book her for campaigns that need Karachi to feel like a capital of new fashion, not a footnote.",
  },
];

export const LOCATIONS = [
  {
    slug: "sea-view",
    name: "Sea View, Clifton",
    image: "/images/locations/seaview.jpg",
    copy: "Golden-hour coast, wet sand, and the Arabian Sea as an infinite cyclorama. The city’s most booked outdoor set.",
  },
  {
    slug: "frere-hall",
    name: "Frere Hall",
    image: "/images/locations/frere.jpg",
    copy: "Venetian-Gothic sandstone, checkered marble, and a staircase that turns a gown into architecture.",
  },
  {
    slug: "mazar-e-quaid",
    name: "Mazar-e-Quaid",
    image: "/images/locations/mazar.jpg",
    copy: "White marble and night floodlight — ceremonial, graphic, unmistakably Karachi.",
  },
  {
    slug: "dha-penthouse",
    name: "DHA Penthouse",
    image: "/images/locations/penthouse.jpg",
    copy: "Floor-to-ceiling city, marble, and controlled interior light. Campaigns that need a private skyline.",
  },
  {
    slug: "skyline",
    name: "Night Skyline",
    image: "/images/locations/skyline.jpg",
    copy: "The city’s true character after dark — amber, violet, and a horizon that reads as cinema.",
  },
  {
    slug: "do-darya",
    name: "Do Darya",
    image: "/images/locations/dodarya.jpg",
    copy: "Sea-edge terraces, lanterns, and the sound of the water. Dinner-table luxury with a real horizon.",
  },
  {
    slug: "mohatta",
    name: "Mohatta Palace",
    image: "/images/locations/mohatta.jpg",
    copy: "Pink stone, jharokhas, and late-afternoon gold. Heritage couture’s favourite Karachi palace.",
  },
];

export const SERVICES = [
  {
    slug: "film",
    title: "Film & Television",
    image: "/images/work/filmset.jpg",
    copy: "Leads, supporting faces, and presence for Lollywood features, dramas, and streaming. We brief like a casting office: look, register, availability, and a clean booking.",
  },
  {
    slug: "fashion",
    title: "Fashion Campaigns",
    image: "/images/work/runway.jpg",
    copy: "Lookbooks, couture stills, runway, and seasonal campaigns for houses that want Karachi to photograph like a capital.",
  },
  {
    slug: "commercial",
    title: "Commercials & Brand Film",
    image: "/images/locations/penthouse.jpg",
    copy: "Beauty, jewellery, auto, hospitality, and lifestyle. Faces that hold a product without swallowing it.",
  },
  {
    slug: "music",
    title: "Music Videos",
    image: "/images/locations/skyline.jpg",
    copy: "Night-city performance, choreography-ready talent, and a booking desk that understands a 2 a.m. call time.",
  },
  {
    slug: "events",
    title: "Runway & Live",
    image: "/images/work/runway.jpg",
    copy: "Fashion weeks, brand launches, and gala presence. Walk, timing, and a team that arrives camera-ready.",
  },
  {
    slug: "locations",
    title: "Location Casting",
    image: "/images/locations/mohatta.jpg",
    copy: "Talent plus the city. We pair faces with Sea View, palaces, penthouses, and stages so the frame is finished.",
  },
];

export const WHY = [
  {
    title: "Faces that hold a frame",
    copy: "Every model on our board is cast for cinema and couture, not a catalogue of extras. Directors get a short, serious roster.",
  },
  {
    title: "Karachi, properly lit",
    copy: "We know which hour Sea View turns gold, which staircase at Frere Hall loves a train, and which penthouse clears a night permit.",
  },
  {
    title: "A single booking line",
    copy: "Call or WhatsApp 0321 085 5593. Availability, rates, and call sheets move through one desk — not a maze of agents.",
  },
  {
    title: "Hollywood-level finish",
    copy: "Hair, wardrobe, and stills are treated like a premiere. The brief is Vogue and a Karachi night, not a compromise between them.",
  },
  {
    title: "Discreet, on-time, on-set",
    copy: "Production days run to the clock. Talent arrives briefed, styled, and ready for the first mark.",
  },
  {
    title: "Built for film, fashion, brands",
    copy: "One house for Lollywood, campaigns, music video, and live. You do not re-cast a city every time the brief changes.",
  },
];

export const FAQS = [
  {
    q: "How do I book a Purple Hearts Karachi model?",
    a: "Call 0321 085 5593 or WhatsApp +92 321 085 5593 with the date, usage (film, campaign, event), and location. We return with availability and a rate card the same day.",
  },
  {
    q: "Do you work with productions outside Karachi?",
    a: "Yes. The roster is based in Karachi and travels for features, campaigns, and festivals across Pakistan and the Gulf. Travel is quoted with the booking.",
  },
  {
    q: "Can you supply locations as well as talent?",
    a: "We pair faces with Sea View, Frere Hall, Mohatta Palace, DHA interiors, and studio stages. Location support is part of a production booking.",
  },
  {
    q: "What is Premium Karachi?",
    a: "It is our name for the city’s high-finish side — Clifton light, palace stone, penthouse glass, and the night skyline — shot with the same standard as an international campaign.",
  },
  {
    q: "Are the models available for film and fashion?",
    a: "Yes. Each face is listed with specialties. Film leads, runway, bridal couture, beauty, and avant-garde are booked from the same board.",
  },
];

export const STATS = [
  { value: "8", label: "Board faces" },
  { value: "7", label: "Signature locations" },
  { value: "24/7", label: "Booking line" },
  { value: "Karachi", label: "Home city" },
];

export const WORK = [
  {
    title: "Night City Lead",
    kind: "Film still",
    image: "/images/talent/hira.jpg",
  },
  {
    title: "Couture at Frere Hall",
    kind: "Editorial",
    image: "/images/talent/zara.jpg",
  },
  {
    title: "Violet Gown Campaign",
    kind: "Lookbook",
    image: "/images/talent/ayesha.jpg",
  },
  {
    title: "Fashion Week Walk",
    kind: "Runway",
    image: "/images/work/runway.jpg",
  },
  {
    title: "Soundstage Sequence",
    kind: "Production",
    image: "/images/work/filmset.jpg",
  },
  {
    title: "Palace Jewellery",
    kind: "Campaign",
    image: "/images/talent/sana.jpg",
  },
  {
    title: "Sea View Lifestyle",
    kind: "Brand film",
    image: "/images/talent/meher.jpg",
  },
  {
    title: "Festival Carpet",
    kind: "Couture",
    image: "/images/talent/rania.jpg",
  },
];

export function talentBySlug(slug: string) {
  return TALENT.find((t) => t.slug === slug);
}

export function pageTitle(parts: string[]) {
  return [...parts, SITE.name].join(" · ");
}
