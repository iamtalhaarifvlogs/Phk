import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteShell-BIXSGFop.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "Purple Hearts Karachi",
	short: "Purple Hearts",
	tagline: "Film & fashion talent of Karachi",
	phoneLocal: "03210855593",
	phoneDisplay: "0321 085 5593",
	tel: "tel:+923210855593",
	whatsapp: "923210855593",
	whatsappUrl: "https://wa.me/923210855593?text=" + encodeURIComponent("Hello Purple Hearts Karachi — I would like to book film or fashion talent."),
	city: "Karachi, Pakistan",
	area: "Clifton & DHA",
	hours: "Open daily, 10:00 – 00:00 PKT",
	email: "book@purpleheartskarachi.com"
};
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/talent",
		label: "Talent"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/karachi",
		label: "Karachi"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var TALENT = [
	{
		slug: "ayesha-noor",
		name: "Ayesha Noor",
		role: "Film & Couture",
		height: "5'9\"",
		hair: "Dark brown",
		eyes: "Hazel",
		based: "Clifton",
		specialties: [
			"Lead film",
			"Couture",
			"Campaign"
		],
		image: "/images/talent/ayesha.jpg",
		featured: true,
		bio: "Ayesha is the face most directors ask for when a Karachi story needs stillness and voltage in the same frame. She moves between Lollywood leads, couture lookbooks, and night-city campaigns with a camera discipline rare at twenty-three."
	},
	{
		slug: "zara-malik",
		name: "Zara Malik",
		role: "Editorial & Runway",
		height: "5'10\"",
		hair: "Black bob",
		eyes: "Dark brown",
		based: "DHA Phase 6",
		specialties: [
			"Runway",
			"Editorial",
			"Luxury retail"
		],
		image: "/images/talent/zara.jpg",
		featured: true,
		bio: "Zara’s line is architectural. Casting directors book her when a gown, a colonnade, or a marble hall has to feel like a character. She is a favourite for Karachi Fashion Week and heritage-location editorials."
	},
	{
		slug: "hira-qureshi",
		name: "Hira Qureshi",
		role: "Film Lead",
		height: "5'8\"",
		hair: "Black",
		eyes: "Brown",
		based: "PECHS",
		specialties: [
			"Drama",
			"Music video",
			"Brand film"
		],
		image: "/images/talent/hira.jpg",
		featured: true,
		bio: "Hira reads as cinema even in a still. Night rooftops, teal practicals, long takes — she is the model directors call when a sequence has to feel like a Pakistani film that could travel."
	},
	{
		slug: "sana-rizvi",
		name: "Sana Rizvi",
		role: "Campaign & Palace",
		height: "5'9\"",
		hair: "Chestnut",
		eyes: "Green-brown",
		based: "Bath Island",
		specialties: [
			"Jewellery",
			"Palace editorial",
			"Festive couture"
		],
		image: "/images/talent/sana.jpg",
		featured: true,
		bio: "Sana carries gold, emerald silk, and carved interiors without being worn by them. Jewellery houses and festive campaigns book her for a regal register that still feels contemporary Karachi."
	},
	{
		slug: "meher-khan",
		name: "Meher Khan",
		role: "Commercial & Lifestyle",
		height: "5'7\"",
		hair: "Honey brown",
		eyes: "Hazel",
		based: "Sea View",
		specialties: [
			"Lifestyle",
			"Beauty",
			"Seaside campaign"
		],
		image: "/images/talent/meher.jpg",
		bio: "Meher is daylight and motion — the face for seaside campaigns, beauty stills, and brands that want Karachi to look like a coast, not a rumour. Casting teams trust her for a warm, camera-true smile."
	},
	{
		slug: "rania-ahmed",
		name: "Rania Ahmed",
		role: "Couture & Festival",
		height: "5'8\"",
		hair: "Raven",
		eyes: "Black",
		based: "Clifton Block 2",
		specialties: [
			"Red carpet",
			"Festive film",
			"Couture"
		],
		image: "/images/talent/rania.jpg",
		bio: "Rania is built for the long red carpet and the festival still. Sari-couture, spotlight, wet stone — she gives a frame the gravity of a premiere without ever leaving Karachi."
	},
	{
		slug: "noor-fatima",
		name: "Noor Fatima",
		role: "Bridal Couture",
		height: "5'7\"",
		hair: "Black",
		eyes: "Brown",
		based: "North Nazimabad",
		specialties: [
			"Bridal",
			"Still life beauty",
			"Print"
		],
		image: "/images/talent/noor.jpg",
		bio: "Noor’s register is quiet luxury. Bridal houses and print stories book her when the brief is porcelain light, an off-shoulder line, and a face that holds a room without raising its voice."
	},
	{
		slug: "alina-shah",
		name: "Alina Shah",
		role: "Avant-Garde",
		height: "5'11\"",
		hair: "Black ponytail",
		eyes: "Dark",
		based: "Korangi Creative District",
		specialties: [
			"Avant-garde",
			"Gallery",
			"Lookbook"
		],
		image: "/images/talent/alina.jpg",
		bio: "Alina is the sharp line in the book. Designers who work in leather, concrete, and violet gel light book her for campaigns that need Karachi to feel like a capital of new fashion, not a footnote."
	}
];
var LOCATIONS = [
	{
		slug: "sea-view",
		name: "Sea View, Clifton",
		image: "/images/locations/seaview.jpg",
		copy: "Golden-hour coast, wet sand, and the Arabian Sea as an infinite cyclorama. The city’s most booked outdoor set."
	},
	{
		slug: "frere-hall",
		name: "Frere Hall",
		image: "/images/locations/frere.jpg",
		copy: "Venetian-Gothic sandstone, checkered marble, and a staircase that turns a gown into architecture."
	},
	{
		slug: "mazar-e-quaid",
		name: "Mazar-e-Quaid",
		image: "/images/locations/mazar.jpg",
		copy: "White marble and night floodlight — ceremonial, graphic, unmistakably Karachi."
	},
	{
		slug: "dha-penthouse",
		name: "DHA Penthouse",
		image: "/images/locations/penthouse.jpg",
		copy: "Floor-to-ceiling city, marble, and controlled interior light. Campaigns that need a private skyline."
	},
	{
		slug: "skyline",
		name: "Night Skyline",
		image: "/images/locations/skyline.jpg",
		copy: "The city’s true character after dark — amber, violet, and a horizon that reads as cinema."
	},
	{
		slug: "do-darya",
		name: "Do Darya",
		image: "/images/locations/dodarya.jpg",
		copy: "Sea-edge terraces, lanterns, and the sound of the water. Dinner-table luxury with a real horizon."
	},
	{
		slug: "mohatta",
		name: "Mohatta Palace",
		image: "/images/locations/mohatta.jpg",
		copy: "Pink stone, jharokhas, and late-afternoon gold. Heritage couture’s favourite Karachi palace."
	}
];
var SERVICES = [
	{
		slug: "film",
		title: "Film & Television",
		image: "/images/work/filmset.jpg",
		copy: "Leads, supporting faces, and presence for Lollywood features, dramas, and streaming. We brief like a casting office: look, register, availability, and a clean booking."
	},
	{
		slug: "fashion",
		title: "Fashion Campaigns",
		image: "/images/work/runway.jpg",
		copy: "Lookbooks, couture stills, runway, and seasonal campaigns for houses that want Karachi to photograph like a capital."
	},
	{
		slug: "commercial",
		title: "Commercials & Brand Film",
		image: "/images/locations/penthouse.jpg",
		copy: "Beauty, jewellery, auto, hospitality, and lifestyle. Faces that hold a product without swallowing it."
	},
	{
		slug: "music",
		title: "Music Videos",
		image: "/images/locations/skyline.jpg",
		copy: "Night-city performance, choreography-ready talent, and a booking desk that understands a 2 a.m. call time."
	},
	{
		slug: "events",
		title: "Runway & Live",
		image: "/images/work/runway.jpg",
		copy: "Fashion weeks, brand launches, and gala presence. Walk, timing, and a team that arrives camera-ready."
	},
	{
		slug: "locations",
		title: "Location Casting",
		image: "/images/locations/mohatta.jpg",
		copy: "Talent plus the city. We pair faces with Sea View, palaces, penthouses, and stages so the frame is finished."
	}
];
var WHY = [
	{
		title: "Faces that hold a frame",
		copy: "Every model on our board is cast for cinema and couture, not a catalogue of extras. Directors get a short, serious roster."
	},
	{
		title: "Karachi, properly lit",
		copy: "We know which hour Sea View turns gold, which staircase at Frere Hall loves a train, and which penthouse clears a night permit."
	},
	{
		title: "A single booking line",
		copy: "Call or WhatsApp 0321 085 5593. Availability, rates, and call sheets move through one desk — not a maze of agents."
	},
	{
		title: "Hollywood-level finish",
		copy: "Hair, wardrobe, and stills are treated like a premiere. The brief is Vogue and a Karachi night, not a compromise between them."
	},
	{
		title: "Discreet, on-time, on-set",
		copy: "Production days run to the clock. Talent arrives briefed, styled, and ready for the first mark."
	},
	{
		title: "Built for film, fashion, brands",
		copy: "One house for Lollywood, campaigns, music video, and live. You do not re-cast a city every time the brief changes."
	}
];
var FAQS = [
	{
		q: "How do I book a Purple Hearts Karachi model?",
		a: "Call 0321 085 5593 or WhatsApp +92 321 085 5593 with the date, usage (film, campaign, event), and location. We return with availability and a rate card the same day."
	},
	{
		q: "Do you work with productions outside Karachi?",
		a: "Yes. The roster is based in Karachi and travels for features, campaigns, and festivals across Pakistan and the Gulf. Travel is quoted with the booking."
	},
	{
		q: "Can you supply locations as well as talent?",
		a: "We pair faces with Sea View, Frere Hall, Mohatta Palace, DHA interiors, and studio stages. Location support is part of a production booking."
	},
	{
		q: "What is Premium Karachi?",
		a: "It is our name for the city’s high-finish side — Clifton light, palace stone, penthouse glass, and the night skyline — shot with the same standard as an international campaign."
	},
	{
		q: "Are the models available for film and fashion?",
		a: "Yes. Each face is listed with specialties. Film leads, runway, bridal couture, beauty, and avant-garde are booked from the same board."
	}
];
var STATS = [
	{
		value: "8",
		label: "Board faces"
	},
	{
		value: "7",
		label: "Signature locations"
	},
	{
		value: "24/7",
		label: "Booking line"
	},
	{
		value: "Karachi",
		label: "Home city"
	}
];
var WORK = [
	{
		title: "Night City Lead",
		kind: "Film still",
		image: "/images/talent/hira.jpg"
	},
	{
		title: "Couture at Frere Hall",
		kind: "Editorial",
		image: "/images/talent/zara.jpg"
	},
	{
		title: "Violet Gown Campaign",
		kind: "Lookbook",
		image: "/images/talent/ayesha.jpg"
	},
	{
		title: "Fashion Week Walk",
		kind: "Runway",
		image: "/images/work/runway.jpg"
	},
	{
		title: "Soundstage Sequence",
		kind: "Production",
		image: "/images/work/filmset.jpg"
	},
	{
		title: "Palace Jewellery",
		kind: "Campaign",
		image: "/images/talent/sana.jpg"
	},
	{
		title: "Sea View Lifestyle",
		kind: "Brand film",
		image: "/images/talent/meher.jpg"
	},
	{
		title: "Festival Carpet",
		kind: "Couture",
		image: "/images/talent/rania.jpg"
	}
];
function talentBySlug(slug) {
	return TALENT.find((t) => t.slug === slug);
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-surface",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.jpg",
							alt: "Purple Hearts Karachi",
							className: "size-16 rounded-full object-cover ring-1 ring-primary/40",
							width: 64,
							height: 64
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-3xl text-primary",
							children: "Purple Hearts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm tracking-[0.28em] text-muted",
							children: "KARACHI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-md text-sm text-muted",
							children: [
								"Film and fashion talent for Karachi productions, campaigns, and premieres. Book the board on",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SITE.tel,
									className: "text-primary",
									children: SITE.phoneDisplay
								}),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.28em] text-subtle uppercase",
					children: "Visit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "hover:text-primary",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.28em] text-subtle uppercase",
					children: "Book"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.tel,
							className: "hover:text-primary",
							children: ["Call ", SITE.phoneDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-primary",
							children: ["WhatsApp +", SITE.whatsapp]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.city }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.hours })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-line px-4 py-5 text-center text-xs text-subtle md:px-8",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Purple Hearts Karachi · Film & fashion models · ",
				SITE.phoneDisplay
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 px-4 py-2.5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.jpg",
						alt: "Purple Hearts Karachi",
						className: "size-11 rounded-full object-cover ring-1 ring-primary/40",
						width: 44,
						height: 44
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden leading-tight sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-lg tracking-[0.18em] text-primary",
							children: "PURPLE HEARTS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] tracking-[0.42em] text-muted",
							children: "KARACHI"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("text-sm tracking-wide transition-colors duration-150", active ? "text-primary" : "text-muted hover:text-fg"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.tel,
						className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/40 bg-elevated px-3 text-sm text-primary transition-colors duration-150 hover:border-primary hover:text-fg md:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4 shrink-0",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden tabular-nums sm:inline",
								children: SITE.phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums sm:hidden",
								children: "Call"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 top-[61px] z-40 bg-bg/96 px-6 py-8 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-2",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "border-b border-line py-4 font-display text-3xl text-fg",
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SITE.whatsappUrl,
					className: "mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp text-bg",
					children: ["WhatsApp ", SITE.phoneDisplay]
				})]
			})
		}) : null]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: SITE.whatsappUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "WhatsApp Purple Hearts Karachi on 0321 085 5593",
		className: "fixed bottom-5 left-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-bg shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-150 ease-out hover:scale-105 active:scale-[0.96] md:bottom-7 md:left-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 pb-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { STATS as a, WHY as c, talentBySlug as d, SITE as i, WORK as l, LOCATIONS as n, SiteShell as o, SERVICES as r, TALENT as s, FAQS as t, cn as u };
