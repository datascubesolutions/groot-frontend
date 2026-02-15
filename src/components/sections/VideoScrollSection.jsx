"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const videoWrapRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // GoodData exact animation: Scale 0.7 -> 1.12
      gsap.fromTo(
        videoWrapRef.current,
        {
          scale: 0.7, // Start larger (simulating ~63% width)
        },
        {
          scale: 1.12, // End very large (edge to edge)
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800", // "No effort" - very short scroll distance
            scrub: 0.6, // "Perfect smooth" - balanced momentum
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
          ease: "power1.out", // Soft landing, feels natural (not robotic)
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // IntersectionObserver: play/pause video when visible
  useLayoutEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
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
      className="relative bg-background z-20"
      style={{
        height: "100vh",
        paddingTop: "5rem", // 80px navbar clearance
      }}
    >
      {/* Seamless transition grid pattern */}
      <div className="absolute top-0 inset-x-0 h-40 bg-[linear-gradient(to_right,hsl(var(--border)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />

      <div className="h-full w-full flex items-center justify-center relative z-10">
        <div
          ref={videoWrapRef}
          className="will-change-transform backface-visibility-hidden transform-gpu bg-background p-3 md:p-4 rounded-3xl md:rounded-[2rem] shadow-2xl border border-border/50"
          style={{
            width: "90%",
            maxWidth: "1600px",
            height: "80vh",
          }}
        >
          {/* Inner video container */}
          <div
            className="overflow-hidden w-full h-full"
            style={{
              borderRadius: "18px",
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover block"
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
        </div>
      </div>
    </section>
  );
}
