import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as WHY, i as SITE, o as SiteShell } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C4wrIZYw.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The house",
			title: "Purple Hearts Karachi",
			copy: "A talent house built for the city’s film and fashion years — not a generic catalogue.",
			image: "/images/locations/penthouse.jpg",
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/logo.jpg",
				alt: "Purple Hearts Karachi emblem",
				className: "mx-auto w-72 rounded-full ring-1 ring-primary/40",
				width: 288,
				height: 288
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "A Karachi house with a premiere standard"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted",
					children: [
						"Purple Hearts was founded for directors, fashion houses, and brand teams who were tired of casting a city from a spreadsheet. The board is small on purpose. Every face can hold a lead, a campaign, or a carpet. The number on the site — ",
						SITE.phoneDisplay,
						" ",
						"— is the same number on the call sheet."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "We work in film, fashion, commercials, music video, and live. We know Premium Karachi the way a local DP knows the light: which hour, which palace, which penthouse, which stretch of Sea View still photographs as cinema."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-fg",
					children: "Why Choose Purple Hearts Karachi"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: WHY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-bg p-6 ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: item.copy
						})]
					}, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] }) });
}
//#endregion
export { AboutPage as component };
