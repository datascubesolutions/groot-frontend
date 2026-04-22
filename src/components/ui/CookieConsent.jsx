// @ts-nocheck
"use client";

import { X } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

function ConsentToggle({ checked, onChange, disabled, id }) {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) onChange(!checked);
      }}
      className={[
        "group relative h-[30px] w-[52px] shrink-0 overflow-hidden rounded-full border transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card",
        checked
          ? "border-primary/35 bg-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_1px_2px_rgba(0,0,0,0.06)]"
          : "border-border/90 bg-muted shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]",
        disabled
          ? "cursor-not-allowed opacity-45"
          : "cursor-pointer hover:border-border",
      ].join(" ")}
    >
      <span className="sr-only">Toggle</span>
      {/* Sliding thumb — absolute so the track stays a true pill, never a circle */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-[3px] top-1/2 h-[24px] w-[24px] -translate-y-1/2 rounded-full",
          "bg-white",
          "shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_2px_6px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.08)]",
          "ring-1 ring-black/[0.04]",
          "ease-[cubic-bezier(0.34,1.3,0.64,1)] transition-[transform,box-shadow] duration-300",
          checked ? "translate-x-[22px]" : "translate-x-0",
          disabled
            ? "shadow-sm"
            : "group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]",
        ].join(" ")}
      />
    </button>
  );
}

const PREFS = [
  {
    key: "necessary",
    title: "Strictly necessary",
    description: "Required for the site to work. Always on.",
    locked: true,
  },
  {
    key: "performance",
    title: "Performance",
    description: "Helps us measure and improve the site.",
  },
  {
    key: "functional",
    title: "Functional",
    description: "Remembers choices and enables enhanced features.",
  },
  {
    key: "advertising",
    title: "Targeting",
    description: "Used for relevant ads on other platforms.",
  },
];

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("banner");
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: false,
    functional: false,
    advertising: false,
  });

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      const timer = setTimeout(
        () => startTransition(() => setIsVisible(true)),
        800
      );
      return () => clearTimeout(timer);
    }
    try {
      const savedPrefs = JSON.parse(localStorage.getItem("cookiePreferences"));
      if (savedPrefs) startTransition(() => setPreferences(savedPrefs));
    } catch {
      /* ignore */
    }
  }, []);

  const saveAndClose = (prefs, isCustom = false) => {
    setPreferences(prefs);
    localStorage.setItem("cookieConsent", isCustom ? "custom" : "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setIsVisible(false);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.performance ? "granted" : "denied",
        ad_storage: prefs.advertising ? "granted" : "denied",
        ad_user_data: prefs.advertising ? "granted" : "denied",
        ad_personalization: prefs.advertising ? "granted" : "denied",
        personalization_storage: prefs.functional ? "granted" : "denied",
      });
      // Trigger event to process queued tags after consent update
      if (window.dataLayer) {
        window.dataLayer.push({ event: "consent_update" });
      }
    }
  };

  const handleAcceptAll = () =>
    saveAndClose({
      necessary: true,
      performance: true,
      functional: true,
      advertising: true,
    });
  const handleRejectAll = () =>
    saveAndClose({
      necessary: true,
      performance: false,
      functional: false,
      advertising: false,
    });
  const handleSavePreferences = () => saveAndClose(preferences, true);

  const togglePreference = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[9999] flex justify-center p-4 sm:p-5"
      aria-live="polite"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className={`pointer-events-auto flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-[var(--shadow-elevated)] transition-all duration-300 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
      >
        {view === "banner" && (
          <div className="p-6 sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <h2
                id="cookie-consent-title"
                className="pr-2 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl"
              >
                Cookies and privacy
              </h2>
              <button
                type="button"
                onClick={handleRejectAll}
                aria-label="Reject non-essential cookies"
                className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              We use cookies to run the site, understand usage, and tailor
              content. You can accept all, reject non-essential cookies, or
              manage categories.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full rounded-xl bg-forest px-4 py-3 text-sm font-semibold text-forest-foreground transition-colors duration-200 hover:bg-forest/90"
              >
                Accept all
              </button>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setView("preferences")}
                  className="flex-1 rounded-xl border border-border bg-transparent px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="flex-1 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}

        {view === "preferences" && (
          <div className="flex max-h-[85vh] flex-col">
            <div className="flex shrink-0 items-center gap-3 border-b border-border px-6 pb-4 pt-6">
              <button
                type="button"
                onClick={() => setView("banner")}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Back
              </button>
            </div>
            <div className="px-6 pb-2 pt-4">
              <h2
                id="cookie-consent-title"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Cookie preferences
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Turn categories on or off, then save. Necessary cookies stay
                enabled.
              </p>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-border overflow-hidden rounded-xl border-y border-border bg-card">
                {PREFS.map(({ key, title, description, locked }) => (
                  <li key={key}>
                    <div
                      role={locked ? undefined : "button"}
                      tabIndex={locked ? undefined : 0}
                      className={`flex items-start justify-between gap-4 p-4 text-left sm:p-4 ${locked
                          ? "bg-muted/30"
                          : "cursor-pointer hover:bg-muted/20"
                        } transition-colors`}
                      onClick={locked ? undefined : () => togglePreference(key)}
                      onKeyDown={
                        locked
                          ? undefined
                          : (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              togglePreference(key);
                            }
                          }
                      }
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {description}
                        </p>
                      </div>
                      <ConsentToggle
                        id={locked ? undefined : `pref-${key}`}
                        checked={preferences[key]}
                        disabled={locked}
                        onChange={() => togglePreference(key)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex shrink-0 flex-col gap-2.5 border-t border-border p-6 pt-4">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="w-full rounded-xl bg-forest px-4 py-3 text-sm font-semibold text-forest-foreground transition-colors duration-200 hover:bg-forest/90"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full rounded-xl border border-border px-4 py-3 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                Accept all instead
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
