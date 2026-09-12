import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as FAQS } from "./SiteShell-BIXSGFop.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FaqList-CdOQCqjd.js
var import_jsx_runtime = require_jsx_runtime();
function FaqList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-20 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.4em] text-primary uppercase",
				children: "FAQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl text-fg",
				children: "Booking Purple Hearts Karachi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 divide-y divide-line border-y border-line",
				children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary transition-transform duration-150 group-open:rotate-45",
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: item.a
					})]
				}, item.q))
			})
		]
	});
}
//#endregion
export { FaqList as t };
