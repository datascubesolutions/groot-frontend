// @ts-nocheck
/**
 * useAdminAuth
 * Guards admin routes — redirects to /auth/login if not authenticated.
 * Returns `isAuthed`: null while checking, true once verified, false if not authed.
 * SSR-safe: never reads localStorage during server render.
 * @module hooks/useAdminAuth
 */

import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, startTransition } from "react";

export function useAdminAuth() {
  const router = useRouter();
  const routerRef = useRef(router);

  // null = "not yet checked" (avoids SSR/client mismatch)
  // true = authenticated, false = not authenticated
  const [isAuthed, setIsAuthed] = useState(null);

  // Keep routerRef current without re-triggering the auth effect
  useEffect(() => {
    routerRef.current = router;
  });

  // Runs only on the client after mount — safe to read localStorage here
  useEffect(() => {
    startTransition(() => {
      if (!authService.isAuthenticated()) {
        setIsAuthed(false);
        routerRef.current.replace("/auth/login");
      } else {
        setIsAuthed(true);
      }
    });
  }, []); // Run once on mount only

  return isAuthed;
}
