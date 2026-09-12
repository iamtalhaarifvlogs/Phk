import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "line" | "whatsapp";

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-bg hover:bg-primary-strong hover:text-fg border-transparent",
  ghost:
    "bg-transparent text-fg border-line hover:border-primary hover:text-primary",
  line: "bg-elevated text-fg border-line hover:border-primary",
  whatsapp: "bg-whatsapp text-bg border-transparent hover:opacity-90",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  staticPress?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = "primary", staticPress, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-[transform,opacity,background-color,border-color,color] duration-150 ease-out",
        !staticPress && "active:not-disabled:scale-[0.96]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
});
