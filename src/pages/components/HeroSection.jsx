"use client";

/**
 * Hero Section Component
 * 
 * @fileoverview Hero section with 3D portal tunnel effect - Twinbru style
 * @module pages/components/HeroSection
 */

import { memo } from "react";
import { cn } from "@/lib/utils";
import PortalTunnelEffect from "@/components/three/PortalTunnel";

/**
 * @typedef {Object} HeroSectionProps
 * @property {string} [className] - Additional CSS classes
 */

function HeroSection({ className = "" }) {
  return (
    <>
      {/* Scroll spacer - allows scroll for camera movement */}
      <div className="h-[200vh] w-full bg-[#f5d4c4]" />
      
      {/* Fixed portal tunnel - stays in viewport (EXACT Twinbru style) */}
      <section 
        className={cn("fixed top-0 left-0 w-full h-screen overflow-hidden", className)}
        style={{ 
          zIndex: 10,
          backgroundColor: '#f5d4c4'
        }}
      >
        {/* Portal Tunnel - Fixed viewport, camera moves through */}
        <div className="absolute inset-0 w-full h-full">
          <PortalTunnelEffect className="z-0" />
        </div>
      </section>
    </>
  );
}

export default memo(HeroSection);

