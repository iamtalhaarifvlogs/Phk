import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as WHY, o as SiteShell, r as SERVICES } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
import { t as FaqList } from "./FaqList-CdOQCqjd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-ENtR5but.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "What we book",
			title: "Film, fashion, and live talent for Karachi",
			copy: "One house for Lollywood, campaigns, music video, and the gala walk. The desk is 0321 085 5593.",
			image: "/images/work/filmset.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl bg-surface ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.title,
						className: "aspect-film w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-fg",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: s.copy
						})]
					})]
				}, s.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-fg",
						children: "Why Choose Purple Hearts Karachi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-3",
						children: WHY.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-bg p-6 ring-1 ring-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-fg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: item.copy
							})]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "mt-8 inline-flex min-h-11 items-center text-sm text-primary",
						children: "The house story"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] }) });
}
//#endregion
export { ServicesPage as component };
