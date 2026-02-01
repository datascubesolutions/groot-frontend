"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const videoWrapRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative bg-background z-20"
      style={{
        height: "100vh",
        paddingTop: "80px", // Restored standard navbar height for proper alignment
      }}
    >
      <div className="h-full w-full flex items-center justify-center">
        {/*
          GoodData Structure:
          - Outer: .video-wrap with white BG, 12px padding, 30px radius, shadow
          - Inner: video with 18px radius (30 - 12 = 18 for perfect nesting)
        */}
        <div
          ref={videoWrapRef}
          className="will-change-transform backface-visibility-hidden transform-gpu" // Hardware acceleration hints
          style={{
            width: "90%", // Wider base
            maxWidth: "1600px", // Cap max width so it doesn't get too large on wide screens
            height: "80vh", // Taller presence

            borderRadius: "30px",
            backgroundColor: "#FFFFFF", // White background acts as visual "border"
            padding: "12px", // Creates the border effect
            boxShadow:
              "rgba(28, 13, 63, 0.07) 0px 60.86px 81.15px 0px, rgba(28, 13, 63, 0.05) 0px 60.36px 48.29px 0px, rgba(28, 13, 63, 0.04) 0px 32.27px 25.82px 0px, rgba(28, 13, 63, 0.04) 0px 18.09px 14.47px 0px, rgba(28, 13, 63, 0.03) 0px 9.61px 7.69px 0px, rgba(28, 13, 63, 0.02) 0px 4.00px 3.20px 0px",
          }}
        >
          {/* Inner video container */}
          <div
            className="overflow-hidden w-full h-full"
            style={{
              borderRadius: "18px", // 30 - 12 = 18 (perfect nested radius)
            }}
          >
            <video
              className="w-full h-full object-cover block"
              style={{
                pointerEvents: "none", // Prevent interaction with video
              }}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
            >
              <source src="/video/homepage-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
