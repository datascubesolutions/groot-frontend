// @ts-nocheck
"use client";

import { motion } from "framer-motion";

export const TextFlip = ({ text, className = "", as = "div" }) => {
  const words = text.split(" ");
  const MotionComponent = motion[as] || motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "50% 50% -50px",
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.175, 0.885, 0.32, 1.275], // Appromixates GSAP back.out(1.7)
      },
    },
  };

  return (
    <MotionComponent
      className={`flex flex-wrap justify-center gap-x-[0.2em] [perspective:1000px] ${className}`}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <span className="sr-only">{text}</span>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={charVariants}
              className="inline-block will-change-transform"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionComponent>
  );
};
