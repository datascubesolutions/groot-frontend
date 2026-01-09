"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const TextFlip = ({ text, className = "", as: Component = "div" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const chars = containerRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        rotationX: -90,
        opacity: 0,
        transformOrigin: "50% 50% -50px",
      },
      {
        rotationX: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
  }, [text]);

  const words = text.split(" ");

  return (
    <Component
      ref={containerRef}
      className={`[perspective:1000px] flex flex-wrap justify-center gap-x-[0.2em] ${className}`}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block opacity-0 will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};
