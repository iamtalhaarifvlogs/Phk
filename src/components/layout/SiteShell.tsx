import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <div className="flex-1 pb-20">{children}</div>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
