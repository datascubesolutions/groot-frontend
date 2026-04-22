// @ts-nocheck
"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ClientLottie({
  animationData,
  className,
  loop = true,
  autoplay = true,
}) {
  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={loop}
      autoplay={autoplay}
    />
  );
}
