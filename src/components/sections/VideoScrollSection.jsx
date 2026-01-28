"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive start width: 85% on mobile (<768px), 55% on desktop
      const isMobile = window.innerWidth < 768;
      const startWidth = isMobile ? "90%" : "55%";
      const startHeight = isMobile ? "50vh" : "60vh";

      // Select inner container
      const innerContainer = videoContainerRef.current.querySelector(".video-inner");

      // Animation: Start small, grow to full width/height
      gsap.fromTo(
        videoContainerRef.current,
        {
          width: startWidth, // Responsive start size
          height: startHeight,
          borderRadius: "40px",
          padding: "12px", // Initial border thickness
          boxShadow: "0 20px 50px rgba(8, 112, 184, 0.7)", // Initial heavy shadow
        },
        {
          width: "100%", // End size (Full screen)
          height: "100vh",
          borderRadius: "0px",
          padding: "0px", // Remove border
          boxShadow: "none", // Remove shadow
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // When section hits top
            end: "+=1000", // Scroll distance (pixels) to complete animation
            scrub: 0.5, // Faster scrubbing
            pin: true, // Pin the section while animating
            pinSpacing: true, // Maintain spacing so next section waits
          },
          ease: "power1.inOut",
        }
      );

      // Animate inner radius in sync
      gsap.fromTo(
        innerContainer,
        { borderRadius: "28px" },
        {
          borderRadius: "0px",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: 0.5,
          },
          ease: "power1.inOut",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    // Height is determined by the pin spacer, so we can just use h-screen or a minimal height for the trigger
    <section ref={sectionRef} className="relative h-screen bg-background">
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={videoContainerRef}
          className="relative overflow-hidden bg-white"
        >
          {/* Video Inner Container */}
          <div className="video-inner relative w-full h-full overflow-hidden rounded-[28px] bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            // poster="/placeholder-poster.jpg"
            >
              <source src="/video/homepage-hero.mp4" type="video/mp4" />
            </video>
            {/* No text overlay, purely visual */}
          </div>
        </div>
      </div>
    </section>
  );
}
