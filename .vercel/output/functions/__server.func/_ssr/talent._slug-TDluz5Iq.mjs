import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Phone } from "../_libs/lucide-react.mjs";
import { i as SITE, o as SiteShell, s as TALENT } from "./SiteShell-BIXSGFop.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
import { t as TalentCard } from "./TalentCard-DvqmOuCP.mjs";
import { n as Route } from "./router-CXvG-2Hh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talent._slug-TDluz5Iq.js
var import_jsx_runtime = require_jsx_runtime();
function TalentProfile() {
	const person = Route.useLoaderData();
	const others = TALENT.filter((t) => t.slug !== person.slug).slice(0, 4);
	const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello Purple Hearts Karachi — I would like to book ${person.name} (${person.role}).`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:px-8 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "self-start overflow-hidden rounded-xl ring-1 ring-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: person.image,
					alt: `${person.name}, ${person.role} represented by Purple Hearts Karachi`,
					className: "aspect-portrait w-full object-cover object-top"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.4em] text-primary uppercase",
						children: person.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl text-fg",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Purple Hearts Karachi · ",
							person.based,
							" · Book ",
							SITE.phoneDisplay
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted",
						children: person.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 grid grid-cols-2 gap-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Height"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: person.height
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Hair"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: person.hair
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Eyes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: person.eyes
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Based"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-fg",
								children: person.based
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: person.specialties.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-line px-3 py-1 text-xs tracking-wide text-muted",
							children: s
						}, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.tel,
							className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
								"Call ",
								SITE.phoneDisplay
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: wa,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex min-h-12 items-center rounded-full bg-whatsapp px-6 text-sm font-medium text-bg",
							children: ["WhatsApp to book ", person.name.split(" ")[0]]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-fg",
						children: "More of the board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: others.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, { person: t }, t.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/talent",
						className: "mt-8 inline-flex min-h-11 items-center text-sm text-primary",
						children: "Full roster"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: `Book ${person.name} for your next frame` })
	] }) });
}
//#endregion
export { TalentProfile as component };
