import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SITE, n as LOCATIONS, o as SiteShell, s as TALENT } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
import { t as TalentCard } from "./TalentCard-DvqmOuCP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karachi-Cy0xtfUy.js
var import_jsx_runtime = require_jsx_runtime();
function KarachiPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The city",
			title: "What is Premium Karachi?",
			copy: "The high-finish side of the city — coast, palace, colonial stone, penthouse glass — shot with models who belong in the frame.",
			image: "/images/locations/mohatta.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-3xl px-4 py-16 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-lg text-muted",
				children: [
					"Premium Karachi is a production idea. It is Clifton at the hour the water turns copper. It is Mohatta’s pink stone, Frere Hall’s staircase, a DHA penthouse after the call to prayer, Do Darya when the lanterns come on, and a skyline that already looks graded. Purple Hearts exists to put the right face in those places — and to keep ",
					SITE.phoneDisplay,
					" on the call sheet."
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "Exotic places, Karachi light"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-xl ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: loc.image,
							alt: loc.name,
							className: "aspect-wide w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-fg",
								children: loc.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: loc.copy
							})]
						})]
					}, loc.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "Models of the city"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Faces cast for Karachi — not imported from a generic board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: TALENT.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, { person: p }, p.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Shoot Premium Karachi with our board" })
	] }) });
}
//#endregion
export { KarachiPage as component };
