// @ts-nocheck
/**
 * Animation Components Index
 *
 * @fileoverview Exports for animation wrapper components
 * @module components/animations
 */

// Animation wrapper components
// export { FadeIn } from './FadeIn';
// export { SlideIn } from './SlideIn';
// export { ScaleIn } from './ScaleIn';
// export { StaggerChildren } from './StaggerChildren';
// export { RevealOnScroll } from './RevealOnScroll';

// Neural Network Background
import dynamic from "next/dynamic";

export const NeuralNetworkBackground = dynamic(
  () =>
    import("./NeuralNetworkBackground").then(
      (mod) => mod.NeuralNetworkBackground
    ),
  { ssr: false }
);

// Side Particles (Left/Right)
export const SideParticles = dynamic(
  () => import("./SideParticles").then((mod) => mod.SideParticles),
  { ssr: false }
);

// Placeholder export to prevent import errors
export {};
