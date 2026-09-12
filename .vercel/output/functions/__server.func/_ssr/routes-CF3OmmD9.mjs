import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, r as Phone } from "../_libs/lucide-react.mjs";
import { a as STATS, c as WHY, i as SITE, n as LOCATIONS, o as SiteShell, s as TALENT } from "./SiteShell-BIXSGFop.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
import { t as TalentCard } from "./TalentCard-DvqmOuCP.mjs";
import { t as FaqList } from "./FaqList-CdOQCqjd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CF3OmmD9.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = TALENT.filter((t) => t.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[100dvh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Karachi film and fashion model in a crystal violet couture gown overlooking the city skyline at twilight",
					className: "ken absolute inset-0 hidden size-full object-cover object-left md:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/talent/ayesha.jpg",
					alt: "",
					className: "ken absolute inset-0 size-full object-cover object-top md:hidden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-bg/50 via-35% to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hidden bg-linear-to-r from-transparent via-bg/5 to-bg/75 md:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 md:items-end md:px-8 md:text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise text-xs tracking-[0.42em] text-primary uppercase",
							children: "Karachi film & fashion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "rise mt-4 max-w-3xl font-display text-4xl text-fg md:text-5xl",
							children: [
								"Purple Hearts Karachi Models",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SITE.tel,
									className: "block text-primary",
									children: "03210855593"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise mt-5 max-w-lg text-muted md:ml-auto",
							children: "The board for cinema, couture, and campaign faces in Karachi. Hollywood finish, local light, one number on every page."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise mt-8 flex flex-wrap gap-3 md:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.tel,
								className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
									"Call ",
									SITE.phoneDisplay
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/talent",
								className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 text-sm text-fg hover:border-primary",
								children: ["View the board", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-primary",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-[0.22em] text-subtle uppercase",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-24 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.4em] text-primary uppercase",
					children: "Why choose us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl text-fg",
					children: "Why Choose Purple Hearts Karachi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: [
						"Productions come to us when the brief is a Karachi face that can stand next to an international campaign — and a desk that answers on ",
						SITE.phoneDisplay,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: WHY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: item.copy
						})]
					}, item.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.4em] text-primary uppercase",
						children: "The board"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-fg",
						children: "Karachi models for film and fashion"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/talent",
						className: "hidden min-h-11 items-center text-sm text-primary md:inline-flex",
						children: ["All talent", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1 size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: featured.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, { person }, person.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/locations/seaview.jpg",
				alt: "Sea View Clifton at golden hour, a signature Purple Hearts Karachi location",
				className: "aspect-wide w-full rounded-xl object-cover ring-1 ring-line"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.4em] text-primary uppercase",
					children: "The city"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl text-fg",
					children: "What is Premium Karachi?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Premium Karachi is the city’s high-finish register — Clifton light on wet sand, palace stone at Mohatta, penthouse glass over DHA, Frere Hall’s staircase, and the night skyline that already looks like a film. It is not a tourist postcard. It is the production value directors fly in for."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Purple Hearts pairs that city with faces who know how to wear it. One booking covers talent, location sense, and a line that stays live until wrap."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/karachi",
					className: "mt-6 inline-flex min-h-11 items-center text-sm text-primary",
					children: ["Explore locations", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1 size-4" })]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.4em] text-primary uppercase",
						children: "Locations"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl text-fg",
						children: "Exotic places and Karachi models"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted",
						children: "Sea, palace, colonial hall, penthouse, soundstage. We place the board against the frames Karachi is famous for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: LOCATIONS.slice(0, 6).map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative overflow-hidden rounded-xl ring-1 ring-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: loc.image,
									alt: loc.name,
									className: "aspect-wide w-full object-cover transition-transform duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl text-fg",
										children: loc.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: loc.copy
									})]
								})
							]
						}, loc.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] }) });
}
//#endregion
export { Home as component };
