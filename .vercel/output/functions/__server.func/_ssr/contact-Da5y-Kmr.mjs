import { i as __toESM } from "../_runtime.mjs";
import { B as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Phone } from "../_libs/lucide-react.mjs";
import { i as SITE, o as SiteShell, s as TALENT, u as cn } from "./SiteShell-BIXSGFop.mjs";
import { t as PageHero } from "./PageHero-C1Y9uXvD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Da5y-Kmr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") || "").trim();
		const phone = String(data.get("phone") || "").trim();
		const message = String(data.get("message") || "").trim();
		if (!name || !phone || !message) {
			setError("Name, phone, and a short brief are required.");
			return;
		}
		const row = {
			name,
			phone,
			email: String(data.get("email") || ""),
			talent: String(data.get("talent") || ""),
			message,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("ph-inquiries") || "[]");
			localStorage.setItem("ph-inquiries", JSON.stringify([row, ...prev].slice(0, 50)));
		} catch {}
		setError("");
		setSent(true);
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "The desk",
		title: `Call ${SITE.phoneDisplay}`,
		copy: "Bookings, availability, and location support. The WhatsApp on the bottom left is the same number.",
		image: "/images/locations/dodarya.jpg",
		compact: true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg",
				children: "Reach Purple Hearts"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 space-y-4 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Phone",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.tel,
							className: "text-primary",
							children: SITE.phoneDisplay
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"WhatsApp",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.whatsappUrl,
							className: "text-primary",
							children: ["+", SITE.whatsapp]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.city }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.area }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: SITE.hours })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: SITE.tel,
				className: "mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), SITE.phoneLocal]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "rounded-xl bg-surface p-6 ring-1 ring-line md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg",
					children: "Send a brief"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "We reply by phone or WhatsApp. Nothing here is a public listing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-6 block text-sm text-muted",
					children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						required: true,
						className: fieldClass,
						autoComplete: "name"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm text-muted",
					children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "phone",
						required: true,
						className: fieldClass,
						autoComplete: "tel"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm text-muted",
					children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						className: fieldClass,
						autoComplete: "email"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm text-muted",
					children: ["Talent of interest", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						name: "talent",
						className: cn(fieldClass, "bg-elevated"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Any / advise us"
						}), TALENT.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: t.name,
							children: t.name
						}, t.slug))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm text-muted",
					children: ["Brief", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						rows: 5,
						className: fieldClass
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: error
				}) : null,
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-primary",
					children: [
						"Brief received. For a same-hour reply, call or WhatsApp",
						" ",
						SITE.phoneDisplay,
						"."
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-bg",
					children: "Send to the desk"
				})
			]
		})]
	})] }) });
}
var fieldClass = "mt-1.5 block w-full rounded-lg border border-line bg-elevated px-3 py-2.5 text-fg outline-none ring-primary/0 transition-[box-shadow,border-color] duration-150 focus:border-primary focus:ring-2 focus:ring-primary/40";
//#endregion
export { ContactPage as component };
