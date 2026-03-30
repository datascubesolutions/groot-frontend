"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
        disabled ? "cursor-not-allowed opacity-45" : "cursor-pointer hover:border-border",
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
          "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.3,0.64,1)]",
          checked ? "translate-x-[22px]" : "translate-x-0",
          disabled ? "shadow-sm" : "group-hover:shadow-[0_2px_8px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06)]",
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
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
    try {
      const savedPrefs = JSON.parse(localStorage.getItem("cookiePreferences"));
      if (savedPrefs) setPreferences(savedPrefs);
    } catch {
      /* ignore */
    }
  }, []);

  const saveAndClose = (prefs, isCustom = false) => {
    setPreferences(prefs);
    localStorage.setItem("cookieConsent", isCustom ? "custom" : "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setIsVisible(false);
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
      className="fixed inset-x-0 bottom-0 z-[9999] p-4 sm:p-5 flex justify-center pointer-events-none"
      aria-live="polite"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        className={`pointer-events-auto w-full max-w-lg bg-card text-card-foreground border border-border rounded-2xl shadow-[var(--shadow-elevated)] overflow-hidden max-h-[85vh] flex flex-col transition-all duration-300 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        {view === "banner" && (
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4 mb-5">
              <h2
                id="cookie-consent-title"
                className="text-lg sm:text-xl font-semibold tracking-tight text-foreground leading-snug pr-2"
              >
                Cookies and privacy
              </h2>
              <button
                type="button"
                onClick={handleRejectAll}
                aria-label="Reject non-essential cookies"
                className="shrink-0 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We use cookies to run the site, understand usage, and tailor content. You can accept all, reject
              non-essential cookies, or manage categories.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full rounded-xl bg-forest py-3 px-4 text-sm font-semibold text-forest-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                Accept all
              </button>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setView("preferences")}
                  className="flex-1 rounded-xl border border-border bg-transparent py-3 px-4 text-sm font-medium text-foreground hover:bg-muted transition-colors duration-200"
                >
                  Manage preferences
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="flex-1 rounded-xl py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}

        {view === "preferences" && (
          <div className="flex flex-col max-h-[85vh]">
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-border shrink-0">
              <button
                type="button"
                onClick={() => setView("banner")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <h2 id="cookie-consent-title" className="text-lg font-semibold tracking-tight text-foreground">
                Cookie preferences
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Turn categories on or off, then save. Necessary cookies stay enabled.
              </p>
            </div>
            <div className="flex-1 overflow-y-auto px-6 min-h-0">
              <ul className="divide-y divide-border border-y border-border rounded-xl overflow-hidden bg-card">
                {PREFS.map(({ key, title, description, locked }) => (
                  <li key={key}>
                    <div
                      role={locked ? undefined : "button"}
                      tabIndex={locked ? undefined : 0}
                      className={`flex gap-4 items-start justify-between p-4 sm:p-4 text-left ${
                        locked ? "bg-muted/30" : "hover:bg-muted/20 cursor-pointer"
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
                        <p className="text-sm font-medium text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
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
            <div className="p-6 pt-4 flex flex-col gap-2.5 shrink-0 border-t border-border">
              <button
                type="button"
                onClick={handleSavePreferences}
                className="w-full rounded-xl bg-forest py-3 px-4 text-sm font-semibold text-forest-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="w-full rounded-xl border border-border py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
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
