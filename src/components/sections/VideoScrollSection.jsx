// @ts-nocheck
"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.12]);

  // IntersectionObserver: play/pause video when visible
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-background"
      style={{
        height: "calc(100vh + 800px)", // 800px simulates the scroll distance
      }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pt-[5rem]">
        {/* Seamless transition grid pattern */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <motion.div
          className="backface-visibility-hidden relative z-10 transform-gpu rounded-3xl border border-border/50 bg-background p-3 shadow-2xl will-change-transform md:rounded-[2rem] md:p-4"
          style={{
            scale,
            width: "90%",
            maxWidth: "1600px",
            height: "80vh",
          }}
        >
          {/* Inner video container */}
          <div
            className="h-full w-full overflow-hidden"
            style={{
              borderRadius: "18px",
            }}
          >
            <video
              ref={videoRef}
              className="block h-full w-full object-cover"
              style={{
                pointerEvents: "none",
              }}
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              preload="none"
            >
              <source src="/video/homepage-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
