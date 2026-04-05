"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/analytics";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && GA_MEASUREMENT_ID) {
      const url = pathname + searchParams.toString();
      pageview(url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Check if consent is already configured, otherwise set default
            if (!localStorage.getItem("cookieConsent")) {
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'personalization_storage': 'denied',
                'functionality_storage': 'granted',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
            } else {
              try {
                const prefs = JSON.parse(localStorage.getItem("cookiePreferences") || '{}');
                gtag('consent', 'default', {
                  'analytics_storage': prefs.performance ? 'granted' : 'denied',
                  'ad_storage': prefs.advertising ? 'granted' : 'denied',
                  'ad_user_data': prefs.advertising ? 'granted' : 'denied',
                  'ad_personalization': prefs.advertising ? 'granted' : 'denied',
                  'personalization_storage': prefs.functional ? 'granted' : 'denied',
                  'functionality_storage': 'granted',
                  'security_storage': 'granted'
                });
              } catch(e) {
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied',
                });
              }
            }

            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
