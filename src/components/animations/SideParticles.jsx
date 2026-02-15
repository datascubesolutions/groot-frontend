"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { memo, useCallback, useEffect, useRef, useState } from "react";

// ── Static config objects (hoisted outside component to avoid re-creation) ──

const baseOptions = {
  fpsLimit: 30,
  detectRetina: true,
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  smooth: true,
  reduceDuplicates: true,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  background: {
    color: { value: "transparent" }
  }
};

const chaoticOptions = {
  ...baseOptions,
  particles: {
    color: { value: "#1D9278" },
    links: {
      color: "#10b981",
      distance: 130,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "bounce" },
    },
    number: {
      value: 80,
      density: { enable: true, width: 400, height: 1000 },
    },
    opacity: { value: 0.9 },
    shape: { type: "circle" },
    size: { value: { min: 2, max: 4 } },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: { enable: true, delay: 0.5 },
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 1, color: "#32d0b1" },
      },
    },
  },
};

const structuredOptions = {
  ...baseOptions,
  particles: {
    color: { value: "#1D9278" },
    links: {
      color: "#10b981",
      distance: 130,
      enable: true,
      opacity: 0.4,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "top",
      random: false,
      straight: false,
      outModes: { default: "out" },
    },
    number: {
      value: 80,
      density: { enable: true, width: 400, height: 1000 },
    },
    opacity: { value: 0.9 },
    shape: { type: "circle" },
    size: { value: { min: 2, max: 4 } },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: { enable: true, delay: 0.5 },
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 1, color: "#32d0b1" },
      },
    },
  },
};

const optionsMap = {
  chaotic: chaoticOptions,
  structured: structuredOptions,
};

// ── Component ──

function SideParticlesInner({ side = "left", variant = "chaotic" }) {
  const [init, setInit] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const particleContainerRef = useRef(null);

  // Gate: only initialize on desktop (lg breakpoint = 1024px)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Only load the particle engine on desktop
  useEffect(() => {
    if (!isDesktop) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [isDesktop]);

  const particlesLoaded = useCallback((container) => {
    particleContainerRef.current = container;
    if (typeof document !== "undefined") {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          container?.pause();
        } else {
          container?.play();
        }
      };
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }
  }, []);

  // IntersectionObserver: pause particles when hero scrolls out of view
  useEffect(() => {
    const el = containerRef.current;
    const pc = particleContainerRef.current;
    if (!el || !pc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pc.play();
        } else {
          pc.pause();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [init]);

  // Don't render anything on mobile/tablet
  if (!isDesktop || !init) {
    return null;
  }

  const options = optionsMap[variant] || chaoticOptions;

  return (
    <div
      ref={containerRef}
      className={`absolute top-0 h-full pointer-events-none z-[1] ${side === "left" ? "left-0" : "right-0"
        }`}
      style={{
        width: "40%",
        maxWidth: "600px",
        contain: "strict",
        maskImage:
          side === "left"
            ? "linear-gradient(to right, black 0%, black 70%, transparent 100%)"
            : "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          side === "left"
            ? "linear-gradient(to right, black 0%, black 70%, transparent 100%)"
            : "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <Particles
        id={`tsparticles-${side}`}
        options={options}
        particlesLoaded={particlesLoaded}
        className="w-full h-full"
      />
    </div>
  );
}

export const SideParticles = memo(SideParticlesInner);
