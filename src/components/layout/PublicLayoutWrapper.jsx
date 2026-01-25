"use client";

import { usePathname } from "next/navigation";

export function PublicLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return null;
  }

  return <>{children}</>;
}
