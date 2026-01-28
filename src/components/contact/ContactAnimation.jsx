"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ClientLottie = dynamic(() => import("@/components/ui/ClientLottie"), {
  ssr: false,
});

export default function ContactAnimation({ className }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const mod = await import("@/design/contact-design.json");
        setAnimationData(mod.default);
      } catch (error) {
        console.error("Failed to load animation data:", error);
      }
    };

    // Small delay to prioritize main content
    const timer = setTimeout(loadData, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!animationData) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <div className="animate-in fade-in duration-700">
      <ClientLottie animationData={animationData} className={className} />
    </div>
  );
}
