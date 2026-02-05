"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useEffect, useState } from "react";

export function SideParticles({ side = "left", variant = "chaotic" }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback((container) => {
    // Pause particles when tab is not visible
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

  if (!init) {
    return null;
  }

  // Common options
  const baseOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "parallax",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10
          }
        },
        resize: {
          enable: true,
          delay: 0.5,
        },
      },
      modes: {
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
    },
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
        distance: 130, // Reduced distance
        enable: true,
        opacity: 0.4, // Softened links
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2, // Slower, elegant chaos
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: 80, // Reduced density
        density: { enable: true, width: 400, height: 1000 },
      },
      opacity: { value: 0.9 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } }, // Varied size
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
        speed: 0.8, // Very calm, premium flow
        direction: "top",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        value: 80, // Balanced density
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

  const options = variant === "chaotic" ? chaoticOptions : structuredOptions;

  return (
    <div
      className={`absolute top-0 h-full pointer-events-none z-[1] hidden lg:block ${side === "left" ? "left-0" : "right-0"
        }`}
      style={{
        width: "40%", // Slightly wider
        maxWidth: "600px",
        maskImage:
          side === "left"
            ? "linear-gradient(to right, black 0%, black 70%, transparent 100%)" // Clearer, sharper fade
            : "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
        WebkitMaskImage:
          side === "left"
            ? "linear-gradient(to right, black 0%, black 70%, transparent 100%)"
            : "linear-gradient(to left, black 0%, black 70%, transparent 100%)",
        willChange: "transform",
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
