"use client";

/**
 * Portal Tunnel Effect - Twinbru Style
 * 
 * @fileoverview WebGL portal tunnel effect with multiple receding arches
 * @module components/three/PortalTunnel
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, SSAO, ToneMapping, Vignette } from "@react-three/postprocessing";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Create realistic terracotta wall texture (EXACT Twinbru colors from screenshot)
 * Deep reddish-brown terracotta for arches, textured stucco-like surface
 */
function createTerracottaWallTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // EXACT Twinbru deep terracotta colors (from screenshot analysis)
  // Deep reddish-brown, not light peach
  const gradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
  gradient.addColorStop(0, "#a67c52"); // Deep terracotta center
  gradient.addColorStop(0.3, "#8b6f47"); // Darker terracotta
  gradient.addColorStop(0.7, "#7d5f3f"); // Dark brown-red
  gradient.addColorStop(1, "#6b4e35"); // Deepest terracotta
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);

  // Add stucco-like texture variation (rough, organic)
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const size = 20 + Math.random() * 60;
    ctx.fillStyle = `rgba(${140 + Math.random() * 30}, ${100 + Math.random() * 25}, ${70 + Math.random() * 20}, 0.3)`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }

  // Add fine stucco texture lines (rough surface)
  for (let i = 0; i < 150; i++) {
    const y = (i / 150) * 1024;
    ctx.strokeStyle = `rgba(${120 + Math.random() * 40}, ${85 + Math.random() * 35}, ${60 + Math.random() * 25}, 0.2)`;
    ctx.lineWidth = 0.3 + Math.random() * 1.2;
    ctx.beginPath();
    ctx.moveTo(0, y + Math.sin(i * 0.1) * 8);
    ctx.lineTo(1024, y + Math.sin(i * 0.1) * 8);
    ctx.stroke();
  }

  // Add random texture spots for realism
  for (let i = 0; i < 200; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    ctx.fillStyle = `rgba(${130 + Math.random() * 50}, ${95 + Math.random() * 40}, ${65 + Math.random() * 30}, ${0.1 + Math.random() * 0.2})`;
    ctx.fillRect(x, y, 2 + Math.random() * 4, 2 + Math.random() * 4);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  return texture;
}

/**
 * Portal Arch - Single arch in the tunnel with stylish design
 */
function PortalArch({ position, index, total, scrollProgress, wallTexture }) {
  const archRef = useRef();
  const materialRef = useRef();

  // Arch dimensions - get smaller as they recede
  const scale = 1 - (index / total) * 0.3;
  const archWidth = 3.5 * scale;
  const archHeight = 4.5 * scale;
  const archDepth = 0.4;

  // EXACT Twinbru deep terracotta colors (from screenshot - deep reddish-brown)
  const colorIntensity = 1 - (index / total) * 0.2;
  // Deep terracotta RGB: #a67c52 = rgb(166, 124, 82)
  const archColor = new THREE.Color(
    0.65 * colorIntensity,  // R - Deep red-brown
    0.49 * colorIntensity,  // G - Brown
    0.32 * colorIntensity   // B - Dark brown
  );

  useFrame((state) => {
    if (archRef.current) {
      // Subtle animation
      const time = state.clock.getElapsedTime();
      const pulse = 1 + Math.sin(time * 0.5 + index) * 0.02;
      archRef.current.scale.set(scale * pulse, scale * pulse, scale);
    }

    // Fade based on scroll progress
    if (materialRef.current) {
      const fadeProgress = scrollProgress * total;
      const opacity = index < fadeProgress ? 0.3 : 1;
      materialRef.current.opacity = opacity;
    }
  });

  return (
    <group ref={archRef} position={position}>
      {/* Modern Door Frame - Outer Frame (Stylish Cover) */}
      <mesh position={[0, 0, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[archWidth + 0.4, archHeight + 0.4, 0.15]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Modern Door Frame - Inner Frame (Recessed) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[archWidth + 0.2, archHeight + 0.2, 0.2]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.15}
          roughness={0.75}
        />
      </mesh>

      {/* Arch Frame - Top (Modern Style) */}
      <mesh position={[0, archHeight / 2, 0.05]} castShadow receiveShadow>
        <boxGeometry args={[archWidth + 0.2, archDepth, archDepth]} />
        <meshStandardMaterial
          ref={materialRef}
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Arch Frame - Left */}
      <mesh position={[-archWidth / 2, 0, 0.05]} castShadow receiveShadow>
        <boxGeometry args={[archDepth, archHeight, archDepth]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Arch Frame - Right */}
      <mesh position={[archWidth / 2, 0, 0.05]} castShadow receiveShadow>
        <boxGeometry args={[archDepth, archHeight, archDepth]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Left Wall - Exact left of door, in front (z > 0) */}
      <mesh position={[-archWidth / 2 - 1.5, 0, 0.05]} rotation={[0, Math.PI / 2, 0]} receiveShadow castShadow>
        <planeGeometry args={[archHeight + 1, archHeight + 1]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Right Wall - Exact right of door, in front (z > 0) */}
      <mesh position={[archWidth / 2 + 1.5, 0, 0.05]} rotation={[0, -Math.PI / 2, 0]} receiveShadow castShadow>
        <planeGeometry args={[archHeight + 1, archHeight + 1]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Top Wall Section - Above door, connecting left and right */}
      <mesh position={[0, archHeight / 2 + 0.75, 0.05]} receiveShadow castShadow>
        <boxGeometry args={[archWidth + 3, 0.5, 0.15]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Bottom Wall Section - Below door, connecting left and right */}
      <mesh position={[0, -archHeight / 2 - 0.75, 0.05]} receiveShadow castShadow>
        <boxGeometry args={[archWidth + 3, 0.5, 0.15]} />
        <meshStandardMaterial
          map={wallTexture}
          color={archColor}
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Modern Door Cover - Decorative Elements */}
      <mesh position={[0, archHeight * 0.3, 0.08]} castShadow>
        <boxGeometry args={[archWidth * 0.6, 0.1, 0.05]} />
        <meshStandardMaterial
          color={archColor}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>
      <mesh position={[0, -archHeight * 0.3, 0.08]} castShadow>
        <boxGeometry args={[archWidth * 0.6, 0.1, 0.05]} />
        <meshStandardMaterial
          color={archColor}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Portal Opening - Clean opening */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[archWidth * 0.92, archHeight * 0.92]} />
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

    </group>
  );
}

/**
 * Realistic Curved Sofa Component (Twinbru style - pink/peach)
 */
function RealisticSofa({ position, rotation = [0, 0, 0], color = "#f5d4c4" }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Sofa Base - Curved shape */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.7, 1.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>
      {/* Sofa Back - Curved */}
      <mesh position={[0, 0.9, -0.5]} castShadow>
        <boxGeometry args={[3, 1.1, 0.25]} />
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>
      {/* Sofa Arms - Rounded */}
      <mesh position={[-1.5, 0.55, 0]} castShadow>
        <boxGeometry args={[0.25, 0.7, 1.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>
      <mesh position={[1.5, 0.55, 0]} castShadow>
        <boxGeometry args={[0.25, 0.7, 1.2]} />
        <meshStandardMaterial
          color={color}
          metalness={0.05}
          roughness={0.95}
        />
      </mesh>
      {/* Cushions - Light pink */}
      <mesh position={[-0.8, 0.55, 0.25]} castShadow>
        <boxGeometry args={[1, 0.2, 0.7]} />
        <meshStandardMaterial
          color="#f5e6d3"
          metalness={0.02}
          roughness={0.98}
        />
      </mesh>
      <mesh position={[0.8, 0.55, 0.25]} castShadow>
        <boxGeometry args={[1, 0.2, 0.7]} />
        <meshStandardMaterial
          color="#f5e6d3"
          metalness={0.02}
          roughness={0.98}
        />
      </mesh>
      {/* Back cushion */}
      <mesh position={[0, 0.9, -0.3]} castShadow>
        <boxGeometry args={[2.8, 0.25, 0.4]} />
        <meshStandardMaterial
          color="#f5e6d3"
          metalness={0.02}
          roughness={0.98}
        />
      </mesh>
    </group>
  );
}

/**
 * Realistic Coffee Table (Twinbru style - dark terracotta)
 */
function CoffeeTable({ position }) {
  return (
    <group position={position}>
      {/* Table Top - Dark terracotta */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.06, 0.8]} />
        <meshStandardMaterial
          color="#a67c52"
          metalness={0.15}
          roughness={0.85}
        />
      </mesh>
      {/* Table Legs - Rounded */}
      {[[-0.6, -0.2, -0.3], [0.6, -0.2, -0.3], [-0.6, -0.2, 0.3], [0.6, -0.2, 0.3]].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.4, 12]} />
          <meshStandardMaterial
            color="#8b6f47"
            metalness={0.2}
            roughness={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * Animated Data Particle
 */
function DataParticle({ initialPos, color, offset }) {
  const particleRef = useRef();
  useFrame((state) => {
    if (particleRef.current) {
      const time = state.clock.getElapsedTime();
      particleRef.current.position.x = initialPos[0] + Math.sin(time + offset) * 0.3;
      particleRef.current.position.y = initialPos[1] + Math.cos(time * 0.7 + offset) * 0.3;
      particleRef.current.position.z = initialPos[2] + Math.sin(time * 0.5 + offset) * 0.2;
    }
  });
  return (
      <mesh ref={particleRef} position={initialPos}>
        <sphereGeometry args={[0.02 + Math.random() * 0.03, 6, 6]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
        />
      </mesh>
  );
}

/**
 * Animated Bar Chart Bar
 */
function AnimatedBar({ baseHeight, offset, position }) {
  const barRef = useRef();
  useFrame((state) => {
    if (barRef.current) {
      const time = state.clock.getElapsedTime();
      const height = baseHeight + Math.abs(Math.sin(time * 0.5 + offset)) * 0.3;
      barRef.current.scale.y = height / baseHeight;
      barRef.current.position.y = position[1] - 1.8 + height / 2;
    }
  });
  return (
      <mesh ref={barRef} position={[position[0], position[1], position[2]]}>
        <boxGeometry args={[0.15, baseHeight, 0.15]} />
        <meshStandardMaterial
          color="#00d4ff"
        />
      </mesh>
  );
}

/**
 * Realistic Interior Room (Twinbru style - terracotta/peach)
 * With Data Analysis Elements - Charts, Graphs, Dashboards
 */
function InteriorRoom({ scrollProgress, wallTexture }) {
  const roomZ = -14;
  const visibility = Math.max(0, Math.min(1, (scrollProgress - 0.5) * 2));
  // Generate particle data
  const particlesData = useMemo(() => 
    Array.from({ length: 30 }).map(() => ({
      initialPos: [
        -4 + Math.random() * 8,
        -1 + Math.random() * 4,
        -1 + Math.random() * 2
      ],
      color: ["#00d4ff", "#ff6b9d", "#ffd700", "#00ff88"][Math.floor(Math.random() * 4)],
      offset: Math.random() * Math.PI * 2
    })), []
  );

  // Generate bar chart data
  const barChartData = useMemo(() => 
    Array.from({ length: 10 }).map(() => ({
      baseHeight: 0.2 + Math.random() * 0.8,
      offset: Math.random() * Math.PI * 2
    })), []
  );

  return (
    <group position={[0, 0, roomZ]} visible={visibility > 0}>
      {/* Back Wall - EXACT Twinbru light pink/blush (from screenshot) */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[14, 9]} />
        <meshStandardMaterial
          color="#f5e8d8"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* Left Wall - Light cream/pink */}
      <mesh position={[-7, 0, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial
          color="#faf8f3"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* Right Wall - Light cream/pink */}
      <mesh position={[7, 0, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[9, 9]} />
        <meshStandardMaterial
          color="#faf8f3"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* Curved Sofa - Main (Twinbru style pink/peach) */}
      <RealisticSofa 
        position={[-2, -1.8, 2]} 
        rotation={[0, 0.3, 0]}
        color="#f5d4c4"
      />

      {/* Curved Sofa - Secondary (lighter) */}
      <RealisticSofa 
        position={[2.5, -1.8, 1.5]} 
        rotation={[0, -0.4, 0]}
        color="#faf0e6"
      />

      {/* Center Coffee Table */}
      <CoffeeTable position={[0, -1.8, 2.2]} />

      {/* Low Ottomans (dark terracotta) */}
      <mesh position={[-1, -1.8, 3]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshStandardMaterial
          color="#a67c52"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
      <mesh position={[1, -1.8, 3]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshStandardMaterial
          color="#a67c52"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>

      {/* Round Cushion/Table */}
      <mesh position={[0, -1.65, 3.2]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial
          color="#8b6f47"
          metalness={0.15}
          roughness={0.85}
        />
      </mesh>

      {/* Large Circular Rug - EXACT Twinbru light pink/blush floor (from screenshot) */}
      <mesh position={[0, -1.9, 2]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.5, 0.05, 32]} />
        <meshStandardMaterial
          color="#f5d4c4"
          roughness={0.98}
          metalness={0.01}
        />
      </mesh>

      {/* Plants/Vase with grasses */}
      <mesh position={[-1, -1.5, 3.1]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 8]} />
        <meshStandardMaterial
          color="#4a6741"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
      {/* Dried grasses */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[-1 + (i - 2) * 0.1, -1.3 + Math.random() * 0.3, 3.1]} castShadow>
          <cylinderGeometry args={[0.01, 0.01, 0.8 + Math.random() * 0.3, 4]} />
          <meshStandardMaterial
            color="#8b7355"
            metalness={0.05}
            roughness={0.95}
          />
        </mesh>
      ))}

      {/* Decorative Wall Element */}
      <mesh position={[0, 2.5, 0.3]} castShadow>
        <boxGeometry args={[1.5, 0.6, 0.15]} />
        <meshStandardMaterial
          color="#a67c52"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Skylights (Twinbru style - oval openings) */}
      {[-2, 0, 2].map((x, i) => (
        <mesh key={i} position={[x, 4, 0.1]} scale={[1, 0.625, 1]} castShadow>
          <circleGeometry args={[0.8, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#fff8e1"
            emissiveIntensity={0.8}
            transparent
            opacity={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* DATA ANALYSIS ELEMENTS - Charts, Graphs, Dashboards with Lights */}
      
      {/* Large Dashboard Screen - Left Wall */}
      <mesh position={[-6.5, 1.5, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[2.5, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Bar Chart Bars on Dashboard */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh key={i} position={[-6.5, 1.5 - 0.6 + (i * 0.15), 0.3]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.15, 0.1 + Math.random() * 0.3, 0.05]} />
          <meshStandardMaterial
            color="#00ff88"
          />
        </mesh>
      ))}

      {/* Large Dashboard Screen - Right Wall */}
      <mesh position={[6.5, 1.5, 0.2]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[2.5, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Line Graph on Dashboard */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[6.5, 1.5 - 0.8 + (i * 0.08), 0.3 + Math.sin(i * 0.3) * 0.1]} rotation={[0, -Math.PI / 2, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#ff6b9d"
          />
        </mesh>
      ))}

      {/* Center Data Visualization - Back Wall */}
      <mesh position={[0, 2, 0.2]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      {/* Network Graph Nodes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const angle = (i / 15) * Math.PI * 2;
        const radius = 0.4 + Math.random() * 0.5;
        return (
          <mesh key={i} position={[0 + Math.cos(angle) * radius, 2 + Math.sin(angle) * radius, 0.3]}>
            <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#ffd700"
          />
          </mesh>
        );
      })}
      {/* Network Connections */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle1 = (i / 20) * Math.PI * 2;
        const angle2 = ((i + 3) / 20) * Math.PI * 2;
        const radius = 0.5;
        return (
          <line key={i} position={[0, 2, 0.28]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  Math.cos(angle1) * radius, Math.sin(angle1) * radius, 0,
                  Math.cos(angle2) * radius, Math.sin(angle2) * radius, 0
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#ffd700" transparent opacity={0.4} />
          </line>
        );
      })}

      {/* Floating Data Particles - Animated */}
      {particlesData.map((particle, i) => (
        <DataParticle
          key={i}
          initialPos={particle.initialPos}
          color={particle.color}
          offset={particle.offset}
        />
      ))}

      {/* Bar Chart - Left Side Floor (Animated) */}
      {barChartData.map((bar, i) => (
        <AnimatedBar
          key={i}
          baseHeight={bar.baseHeight}
          offset={bar.offset}
          position={[-4, -1.8 + bar.baseHeight / 2, 1 + i * 0.2]}
        />
      ))}

      {/* Pie Chart - Right Side Floor */}
      <group position={[4, -1.7, 1]}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * 0.3, 0, Math.sin(angle) * 0.3]} rotation={[0, angle, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.1, 32, 1, false, (i / 6) * Math.PI * 2, (1 / 6) * Math.PI * 2]} />
              <meshStandardMaterial
                color={["#ff6b9d", "#00d4ff", "#ffd700", "#00ff88", "#ff9500", "#9d4edd"][i]}
              />
            </mesh>
          );
        })}
      </group>

      {/* Data Flow Lines - Animated */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} position={[0, 0, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                -5 + Math.random() * 10, -1 + Math.random() * 3, -1,
                -5 + Math.random() * 10, -1 + Math.random() * 3, 1
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color={["#00d4ff", "#ff6b9d", "#ffd700"][Math.floor(Math.random() * 3)]} 
            transparent 
            opacity={0.5}
            linewidth={2}
          />
        </line>
      ))}

      {/* Statistical Indicators - Floating Numbers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[-3 + (i % 4) * 2, 0.5 + Math.floor(i / 4) * 1.5, 0.5]}>
          <boxGeometry args={[0.3, 0.4, 0.05]} />
        <meshStandardMaterial
          color="#1a1a1a"
        />
        </mesh>
      ))}

    </group>
  );
}

/**
 * Portal Tunnel - Multiple receding arches with realistic interior
 */
function PortalTunnel({ scrollProgress, mouse, wallTexture }) {
  const tunnelRef = useRef();
  const numArches = 8;
  const archSpacing = 1.5;

  useFrame((state) => {
    if (tunnelRef.current) {
      // Subtle rotation based on mouse
      tunnelRef.current.rotation.y = mouse.current[0] * 0.1;
      tunnelRef.current.rotation.x = mouse.current[1] * 0.05;
    }
  });

  return (
    <group ref={tunnelRef} position={[0, 0, 0]}>
      {Array.from({ length: numArches }).map((_, i) => {
        const z = -i * archSpacing;
        return (
          <PortalArch
            key={i}
            position={[0, 0, z]}
            index={i}
            total={numArches}
            scrollProgress={scrollProgress}
            wallTexture={wallTexture}
          />
        );
      })}

      {/* Realistic Interior Room - appears as we scroll through */}
      <InteriorRoom scrollProgress={scrollProgress} wallTexture={wallTexture} />
    </group>
  );
}

/**
 * Scene with proper lighting and realistic environment (Twinbru style)
 */
function Scene({ mouse, scrollProgressRef, cameraRef }) {
  const wallTexture = useMemo(() => createTerracottaWallTexture(), []);

  useFrame((state) => {
    if (cameraRef.current && scrollProgressRef.current !== undefined) {
      const progress = scrollProgressRef.current;
      
      // Smooth camera movement through tunnel (Twinbru style)
      // Start at z=5, move forward through the tunnel
      const tunnelLength = 8 * 1.5; // numArches * archSpacing
      const targetZ = 5 - progress * (tunnelLength + 6);
      
      // Smooth lerp for camera movement
      cameraRef.current.position.z = THREE.MathUtils.lerp(
        cameraRef.current.position.z,
        targetZ,
        0.1
      );

      // Subtle camera movement upward as we go through
      const targetY = 1 + progress * 0.4;
      cameraRef.current.position.y = THREE.MathUtils.lerp(
        cameraRef.current.position.y,
        targetY,
        0.1
      );

      // Camera look at point moves forward through tunnel
      const lookAtZ = -progress * tunnelLength * 0.9;
      const lookAtY = 0.3 + progress * 0.2;
      cameraRef.current.lookAt(0, lookAtY, lookAtZ);
    }
  });

  return (
    <>
      <color attach="background" args={["#f5d4c4"]} />
      
      {/* Realistic lighting setup (Twinbru style - warm natural light) */}
      <ambientLight intensity={0.8} />
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={2} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048}
        color="#fff8e1"
      />
      <directionalLight position={[-5, 6, 5]} intensity={1.2} color="#f5e6d3" />
      <hemisphereLight intensity={0.6} color="#ffffff" groundColor="#f5d4c4" />
      
      {/* Portal Tunnel with realistic interior */}
      <PortalTunnel 
        scrollProgress={scrollProgressRef.current || 0}
        mouse={mouse}
        wallTexture={wallTexture}
      />
      
      {/* Floor - EXACT Twinbru light pink/blush (from screenshot) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -8]} receiveShadow>
        <planeGeometry args={[20, 40]} />
        <meshStandardMaterial 
          color="#f5d4c4" 
          roughness={0.98}
          metalness={0.01}
        />
      </mesh>

      {/* Ceiling - Light cream with organic cutouts (Twinbru style) */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 5, -8]} receiveShadow>
        <planeGeometry args={[20, 40]} />
        <meshStandardMaterial 
          color="#faf8f3" 
          roughness={0.97}
          metalness={0.01}
        />
      </mesh>

      {/* Side walls - Deep terracotta (matching arches) */}
      <mesh position={[-6, 0, -8]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[40, 10]} />
        <meshStandardMaterial 
          map={wallTexture}
          color="#a67c52" 
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      <mesh position={[6, 0, -8]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[40, 10]} />
        <meshStandardMaterial 
          map={wallTexture}
          color="#a67c52" 
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>

      {/* Post-processing effects for ULTRA realistic rendering (Best quality) */}
      <EffectComposer multisampling={8}>
        <Bloom 
          intensity={0.8} 
          luminanceThreshold={0.85}
          luminanceSmoothing={0.9}
          height={300}
        />
        <SSAO 
          samples={63}
          radius={0.6}
          intensity={3}
          luminanceInfluence={0.6}
          color="#000000"
        />
        <ToneMapping 
          adaptive={true}
          resolution={256}
          middleGrey={0.6}
          maxLuminance={16.0}
        />
        <Vignette 
          eskil={false} 
          offset={0.15} 
          darkness={0.4}
        />
      </EffectComposer>
    </>
  );
}

/**
 * Main Portal Tunnel Component
 */
export default function PortalTunnelEffect({ className = "" }) {
  const mouse = useRef([0, 0]);
  const scrollProgress = useRef(0);
  const cameraRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate scroll progress - tunnel through effect
      // Use viewport height for smooth transition
      const scrollDistance = windowHeight * 2; // More scroll distance for smooth effect
      let progress = Math.min(scrollY / scrollDistance, 1);
      
      // Smooth easing for natural feel
      progress = Math.pow(progress, 0.7);
      scrollProgress.current = progress;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`absolute inset-0 bg-[#f5d4c4] ${className}`}>
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          precision: "highp",
          preserveDrawingBuffer: false,
          logarithmicDepthBuffer: true
        }}
        shadows
        dpr={[1, 2]}
        className="w-full h-full"
        onCreated={({ camera, gl, scene }) => {
          cameraRef.current = camera;
          camera.lookAt(0, 0, 0);
          
          // Enable shadow maps with best quality
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
          
          // Enhanced rendering quality
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
          gl.outputColorSpace = THREE.SRGBColorSpace;
          
          // Enable realistic fog for depth
          scene.fog = new THREE.FogExp2("#f5d4c4", 0.02);
        }}
      >
        <Scene mouse={mouse} scrollProgressRef={scrollProgress} cameraRef={cameraRef} />
      </Canvas>
    </div>
  );
}

