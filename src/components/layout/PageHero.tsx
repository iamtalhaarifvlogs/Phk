import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  compact,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-end overflow-hidden",
        compact ? "min-h-[52vh]" : "min-h-[68vh]",
      )}
    >
      <img src={image} alt="" className="ken absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/55 to-bg/20" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-28 md:px-8">
        <p className="text-xs tracking-[0.4em] text-primary uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl text-fg md:text-4xl">{title}</h1>
        <p className="mt-4 max-w-xl text-muted">{copy}</p>
      </div>
    </section>
  );
}
