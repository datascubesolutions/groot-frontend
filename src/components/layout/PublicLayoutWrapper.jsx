"use client";

import { usePathname } from "next/navigation";

export function PublicLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isAuth = pathname?.startsWith("/auth");

  if (isAdmin || isAuth) {
    return null;
  }

  return <>{children}</>;
}
