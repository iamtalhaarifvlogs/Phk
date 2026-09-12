import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Phone } from "../_libs/lucide-react.mjs";
import { i as SITE } from "./SiteShell-BIXSGFop.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaBand-DVlNd9Kd.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Book Purple Hearts Karachi", copy = "Tell us the date, the brief, and the city. The board answers on the same line used across this site." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-y border-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/locations/skyline.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 py-20 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.4em] text-primary uppercase",
						children: "Booking desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl text-fg",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-muted",
						children: copy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.tel,
							className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
								"Call ",
								SITE.phoneDisplay
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex min-h-12 items-center rounded-full bg-whatsapp px-6 text-sm font-medium text-bg",
							children: "WhatsApp the desk"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { CtaBand as t };
