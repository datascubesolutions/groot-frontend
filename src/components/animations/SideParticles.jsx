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
      color: { value: "#1D9278" }, // Teal Green
      links: {
        color: "#10b981",
        distance: 150, // Matched distance
        enable: true,
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 1.5, // Consistent flow (matched)
        direction: "top", // Upward data stream (matched)
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        value: 150, // Matched density for symmetry
        density: { enable: true, width: 400, height: 1000 },
      },
      opacity: { value: 0.8 }, // Steady opacity (matched)
      shape: { type: "circle" },
      size: { value: 3 }, // Matched size
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Connect to mouse (matched)
        },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 1, color: "#32d0b1" }, // Highlight connection
        },
      },
    },
  };

  const structuredOptions = {
    ...baseOptions,
    particles: {
      color: { value: "#1D9278" }, // Teal Green
      links: {
        color: "#10b981",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 1.5, // Consistent flow
        direction: "top", // Upward data stream
        random: false,
        straight: false,
        outModes: { default: "out" }, // Exit and re-enter
      },
      number: {
        value: 150,
        density: { enable: true, width: 400, height: 1000 },
      },
      opacity: { value: 0.8 },
      shape: { type: "circle" }, // Could change to 'edge' (squares) for more structure if desired
      size: { value: 3 },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Connect to mouse
        },
        resize: { enable: true, delay: 0.5 },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: 1, color: "#32d0b1" }, // Highlight connection
        },
      },
    },
  };

  const options = variant === "chaotic" ? chaoticOptions : structuredOptions;

  return (
    <div
      className={`absolute top-0 h-full pointer-events-none z-[1] hidden lg:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        width: "35%", // Take up more space for the zones
        maxWidth: "500px",
        maskImage:
          side === "left"
            ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)"
            : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
        WebkitMaskImage:
          side === "left"
            ? "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)"
            : "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, transparent 100%)",
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
