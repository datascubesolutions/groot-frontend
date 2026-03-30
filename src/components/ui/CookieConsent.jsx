"use client";

import { useState, useEffect } from "react";
import { X, ShieldCheck, ChevronRight, Fingerprint, Activity, Layers, Target } from "lucide-react";

// Zero-Lag Pure CSS Toggle
const PremiumToggle = ({ checked, onChange, disabled, id }) => {
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
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        checked ? "bg-gray-900" : "bg-gray-300"
      } ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-opacity-90"}`}
    >
      <span className="sr-only">Toggle setting</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState("banner"); // "banner" | "preferences"
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: false,
    functional: false,
    advertising: false,
  });

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const savedPrefs = JSON.parse(localStorage.getItem("cookiePreferences"));
        if (savedPrefs) setPreferences(savedPrefs);
      } catch (e) {}
    }
  }, []);

  const saveAndClose = (prefs, isCustom = false) => {
    setPreferences(prefs);
    localStorage.setItem("cookieConsent", isCustom ? "custom" : "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleAcceptAll = () => saveAndClose({ necessary: true, performance: true, functional: true, advertising: true });
  const handleRejectAll = () => saveAndClose({ necessary: true, performance: false, functional: false, advertising: false });
  const handleSavePreferences = () => saveAndClose(preferences, true);

  const togglePreference = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 flex justify-center sm:justify-start">
      <div 
        className={`w-full max-w-[440px] bg-white border border-gray-200 shadow-2xl sm:rounded-3xl rounded-2xl overflow-hidden relative overflow-y-auto transition-all duration-300 ease-in-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ maxHeight: '90vh' }}
      >
        {/* Top Accent explicitly for light theme */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gray-900" />
        
        {view === "banner" && (
          <div className="p-7 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-gray-50 w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                <Fingerprint className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
              </div>
              <button 
                onClick={handleRejectAll}
                className="text-gray-400 hover:text-gray-900 transition-colors p-2 -mr-2 -mt-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <h3 className="text-[22px] font-semibold tracking-tight text-gray-900 mb-3">
              Your Privacy Matters
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
              We use cookies and similar technologies to elevate your browsing experience, analyze our traffic, and curate essential performance metrics.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleAcceptAll}
                className="flex-1 sm:order-2 bg-gray-900 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-black transition-all duration-200 active:scale-[0.98] shadow-md shadow-gray-900/10"
              >
                Accept All
              </button>
              <div className="flex flex-1 gap-3 sm:order-1">
                <button 
                  onClick={() => setView("preferences")}
                  className="flex-[1.5] bg-white text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-[0.98] shadow-sm"
                >
                  Manage
                </button>
                <button 
                  onClick={handleRejectAll}
                  className="flex-1 bg-transparent text-gray-500 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-[0.98]"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}

        {view === "preferences" && (
          <div className="p-6 sm:p-8 flex flex-col h-full animate-in slide-in-from-right-4 fade-in duration-200">
            <div className="flex items-center mb-6 shrink-0">
              <button 
                onClick={() => setView("banner")}
                className="text-gray-400 hover:text-gray-900 p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors mr-3"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                Cookie Preferences
              </h3>
            </div>

            <div className="space-y-3 flex-grow overflow-y-auto pr-2 pb-2">
              
              {/* Necessary */}
              <div className="group relative p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-900 transition-colors" />
                    <div>
                      <label className="text-[14px] font-semibold text-gray-900 block mb-1">Strictly Necessary</label>
                      <p className="text-[13px] text-gray-500 leading-relaxed">Fundamental for the site to function properly. This cannot be disabled.</p>
                    </div>
                  </div>
                  <PremiumToggle checked={preferences.necessary} disabled={true} />
                </div>
              </div>

              {/* Performance */}
              <div 
                role="button"
                tabIndex={0}
                className="w-full text-left group relative p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => togglePreference("performance")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePreference("performance");
                  }
                }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-3">
                    <Activity className="w-5 h-5 text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-900 transition-colors" />
                    <div>
                      <span className="text-[14px] font-semibold text-gray-900 block mb-1">Performance</span>
                      <p className="text-[13px] text-gray-500 leading-relaxed">Metrics & analytics allowing us to measure and improve our site.</p>
                    </div>
                  </div>
                  <PremiumToggle id="pref-performance" checked={preferences.performance} onChange={() => togglePreference("performance")} />
                </div>
              </div>

              {/* Functional */}
              <div 
                role="button"
                tabIndex={0}
                className="w-full text-left group relative p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => togglePreference("functional")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePreference("functional");
                  }
                }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-3">
                    <Layers className="w-5 h-5 text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-900 transition-colors" />
                    <div>
                      <span className="text-[14px] font-semibold text-gray-900 block mb-1">Functional</span>
                      <p className="text-[13px] text-gray-500 leading-relaxed">Advanced features and deep personalization of your experience.</p>
                    </div>
                  </div>
                  <PremiumToggle id="pref-functional" checked={preferences.functional} onChange={() => togglePreference("functional")} />
                </div>
              </div>

              {/* Advertising */}
              <div 
                role="button"
                tabIndex={0}
                className="w-full text-left group relative p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => togglePreference("advertising")}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    togglePreference("advertising");
                  }
                }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-3">
                    <Target className="w-5 h-5 text-gray-400 mt-0.5 shrink-0 group-hover:text-gray-900 transition-colors" />
                    <div>
                      <span className="text-[14px] font-semibold text-gray-900 block mb-1">Targeting</span>
                      <p className="text-[13px] text-gray-500 leading-relaxed">Used to curate the advertising delivered to you on other platforms.</p>
                    </div>
                  </div>
                  <PremiumToggle id="pref-advertising" checked={preferences.advertising} onChange={() => togglePreference("advertising")} />
                </div>
              </div>

            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3 shrink-0">
              <button 
                onClick={handleSavePreferences}
                className="w-full bg-gray-900 text-white font-semibold py-3.5 px-4 rounded-xl hover:bg-black transition-all duration-200 active:scale-[0.98] shadow-md shadow-gray-900/10"
              >
                Save My Choices
              </button>
              <button 
                onClick={handleAcceptAll}
                className="w-full bg-white text-gray-600 font-medium py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 active:scale-[0.98]"
              >
                Accept All Instead
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
