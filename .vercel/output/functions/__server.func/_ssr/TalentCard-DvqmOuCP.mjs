import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TalentCard-DvqmOuCP.js
var import_jsx_runtime = require_jsx_runtime();
function TalentCard({ person }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/talent/$slug",
		params: { slug: person.slug },
		className: "group block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "overflow-hidden rounded-xl bg-surface ring-1 ring-line transition-[transform,box-shadow] duration-200 ease-out group-hover:-translate-y-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-portrait overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: person.image,
					alt: `${person.name}, ${person.role} with Purple Hearts Karachi`,
					className: "size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-bg via-bg/50 to-transparent p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-fg",
						children: person.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.22em] text-primary uppercase",
						children: person.role
					})]
				})]
			})
		})
	});
}
//#endregion
export { TalentCard as t };
