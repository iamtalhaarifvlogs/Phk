import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./SiteShell-BIXSGFop.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-C1Y9uXvD.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, copy, image, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative flex flex-col justify-end overflow-hidden", compact ? "min-h-[52vh]" : "min-h-[68vh]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "ken absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-bg via-bg/55 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-6xl px-4 pb-14 pt-28 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.4em] text-primary uppercase",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-3xl text-fg md:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: copy
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
