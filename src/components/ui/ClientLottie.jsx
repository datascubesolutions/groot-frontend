"use client";

import Lottie from "lottie-react";

export default function ClientLottie({ animationData, className, loop = true, autoplay = true }) {
  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
    />
  );
}
