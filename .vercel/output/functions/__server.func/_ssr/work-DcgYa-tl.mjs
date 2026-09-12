import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as WORK, o as SiteShell } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DcgYa-tl.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Selected frames",
			title: "Work from the Karachi board",
			copy: "A short edit of film, fashion, and campaign stills. For the full book, call the desk.",
			image: "/images/locations/skyline.jpg",
			compact: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 gap-4 sm:columns-2 lg:columns-3",
				children: WORK.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mb-4 break-inside-avoid overflow-hidden rounded-xl ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.title,
						className: "w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-primary uppercase",
							children: item.kind
						})]
					})]
				}, item.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Commission the next frame" })
	] }) });
}
//#endregion
export { WorkPage as component };
