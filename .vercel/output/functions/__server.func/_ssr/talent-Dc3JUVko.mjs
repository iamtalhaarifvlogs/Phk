import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SITE, o as SiteShell, s as TALENT } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
import { t as CtaBand } from "./CtaBand-DVlNd9Kd.mjs";
import { t as TalentCard } from "./TalentCard-DvqmOuCP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talent-Dc3JUVko.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"All",
	"Film",
	"Couture",
	"Runway",
	"Campaign",
	"Bridal"
];
function TalentPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => {
		if (filter === "All") return TALENT;
		const key = filter.toLowerCase();
		return TALENT.filter((t) => t.role.toLowerCase().includes(key) || t.specialties.some((s) => s.toLowerCase().includes(key)));
	}, [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The board",
			title: `Purple Hearts Karachi Models ${SITE.phoneLocal}`,
			copy: "Eight faces. Film, fashion, campaign, live. Every booking runs through 0321 085 5593.",
			image: "/images/work/runway.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: filter === f ? "min-h-11 rounded-full bg-primary px-4 text-sm text-bg" : "min-h-11 rounded-full border border-line px-4 text-sm text-muted hover:text-fg",
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: list.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalentCard, { person }, person.slug))
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-muted",
					children: [
						"No faces in that lane yet. Call ",
						SITE.phoneDisplay,
						" and we will pull from the wider book."
					]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Cast from the Karachi board" })
	] }) });
}
//#endregion
export { TalentPage as component };
