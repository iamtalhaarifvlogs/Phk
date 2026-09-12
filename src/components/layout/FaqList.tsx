import { FAQS } from "@/lib/site";

export function FaqList() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 md:px-8">
      <p className="text-xs tracking-[0.4em] text-primary uppercase">FAQ</p>
      <h2 className="mt-3 font-display text-3xl text-fg">
        Booking Purple Hearts Karachi
      </h2>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {FAQS.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-fg">
              <span className="font-medium">{item.q}</span>
              <span className="text-primary transition-transform duration-150 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
