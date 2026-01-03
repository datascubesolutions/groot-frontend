"use client";

/**
 * Realistic Door Component
 * 
 * @fileoverview Realistic 3D door with textures - looks like a real door
 * @module components/three/GateEffect
 */

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Create procedural light wood texture (PBR-ready)
 */
function createLightWoodTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");

  // Light wood base color (oak/pine color)
  ctx.fillStyle = "#d4a574"; // Light golden brown
  ctx.fillRect(0, 0, 1024, 1024);

  // Wood grain lines - lighter variation
  for (let i = 0; i < 80; i++) {
    const y = (i / 80) * 1024;
    const variation = Math.sin(i * 0.3) * 15;
    const lightness = 180 + Math.random() * 40;
    ctx.strokeStyle = `rgba(${lightness}, ${lightness - 20}, ${lightness - 40}, 0.4)`;
    ctx.lineWidth = 1 + Math.random() * 1.5;
    ctx.beginPath();
    ctx.moveTo(0, y + variation);
    ctx.lineTo(1024, y + variation);
    ctx.stroke();
  }

  // Darker grain lines for depth
  for (let i = 0; i < 20; i++) {
    const y = (i / 20) * 1024;
    const variation = Math.sin(i * 0.5) * 20;
    ctx.strokeStyle = `rgba(${140 + Math.random() * 20}, ${100 + Math.random() * 15}, ${70 + Math.random() * 10}, 0.5)`;
    ctx.lineWidth = 2 + Math.random() * 2;
    ctx.beginPath();
    ctx.moveTo(0, y + variation);
    ctx.lineTo(1024, y + variation);
    ctx.stroke();
  }

  // Add subtle knots
  for (let i = 0; i < 8; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const radius = 30 + Math.random() * 40;
    ctx.fillStyle = `rgba(${100 + Math.random() * 30}, ${70 + Math.random() * 20}, ${40 + Math.random() * 15}, 0.6)`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 2);
  return texture;
}

/**
 * Create roughness map for PBR material
 */
function createRoughnessMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  // Base roughness (medium)
  ctx.fillStyle = "#808080"; // 128 gray = medium roughness
  ctx.fillRect(0, 0, 512, 512);

  // Add variation
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const radius = 10 + Math.random() * 20;
    const gray = 100 + Math.random() * 50;
    ctx.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

/**
 * Create normal map for wood grain depth
 */
function createNormalMap() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(512, 512);
  
  for (let y = 0; y < 512; y++) {
    for (let x = 0; x < 512; x++) {
      const i = (y * 512 + x) * 4;
      const grain = Math.sin(x * 0.1) * 0.3 + 0.7;
      imageData.data[i] = 128 + grain * 20;     // R
      imageData.data[i + 1] = 128 + grain * 20; // G
      imageData.data[i + 2] = 255;              // B (normal map blue)
      imageData.data[i + 3] = 255;               // A
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

/**
 * Create procedural metal texture
 */
function createMetalTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  // Base metal color
  const gradient = ctx.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, "#2a2a2a");
  gradient.addColorStop(0.5, "#1a1a1a");
  gradient.addColorStop(1, "#2a2a2a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  // Add scratches and wear
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

/**
 * Realistic Door - Complete realistic door structure with scroll-based opening
 */
function RealisticDoor({ mouse, scrollProgress, doorOpenProgress }) {
  const doorRef = useRef();
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();

  // Create PBR textures
  const woodTexture = useMemo(() => createLightWoodTexture(), []);
  const metalTexture = useMemo(() => createMetalTexture(), []);
  const roughnessMap = useMemo(() => createRoughnessMap(), []);
  const normalMap = useMemo(() => createNormalMap(), []);

  useFrame((state) => {
    if (doorRef.current) {
      // Very subtle rotation based on mouse
      doorRef.current.rotation.y = mouse.current[0] * 0.03;
      doorRef.current.rotation.x = mouse.current[1] * 0.01;
    }

    // Scroll-based door opening animation (Twinbru style - smooth and cinematic)
    // doorOpenProgress: 0 = closed, 1 = fully open (90 degrees)
    const smoothProgress = Math.pow(doorOpenProgress, 0.7); // Easing for smooth opening
    
    if (leftDoorRef.current) {
      // Left door opens outward (negative rotation) - fully open at 90 degrees
      const targetRotation = -Math.PI / 2 * smoothProgress; // Open 90 degrees
      leftDoorRef.current.rotation.y = THREE.MathUtils.lerp(
        leftDoorRef.current.rotation.y,
        targetRotation,
        0.12
      );
    }
    if (rightDoorRef.current) {
      // Right door opens outward (positive rotation) - fully open at 90 degrees
      const targetRotation = Math.PI / 2 * smoothProgress; // Open 90 degrees
      rightDoorRef.current.rotation.y = THREE.MathUtils.lerp(
        rightDoorRef.current.rotation.y,
        targetRotation,
        0.12
      );
    }
  });

  return (
    <group ref={doorRef} position={[0, 3.5, 0]}>
      {/* Left Door Panel */}
      <group ref={leftDoorRef} position={[-1.5, 0, 0]}>
        {/* Main door surface */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 4, 0.12]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#d4a574"
            metalness={0.05}
            roughness={0.7}
            normalScale={[1, 1]}
          />
        </mesh>

        {/* Top panel */}
        <mesh position={[0, 1.3, 0.07]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>
        {/* Middle panel */}
        <mesh position={[0, 0, 0.07]} castShadow>
          <boxGeometry args={[1.2, 1.2, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>
        {/* Bottom panel */}
        <mesh position={[0, -1.3, 0.07]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>

        {/* Door handle */}
        <group position={[0.65, 0, 0.08]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.2, 16]} />
            <meshStandardMaterial
              map={metalTexture}
              color="#c0c0c0"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
          {/* Handle base */}
          <mesh position={[0, 0, 0.12]}>
            <boxGeometry args={[0.15, 0.15, 0.05]} />
            <meshStandardMaterial
              map={metalTexture}
              color="#a0a0a0"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
        </group>

        {/* Hinges */}
        <mesh position={[-0.7, 1.5, 0.06]} castShadow>
          <boxGeometry args={[0.12, 0.3, 0.08]} />
          <meshStandardMaterial
            map={metalTexture}
            color="#8a8a8a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-0.7, -1.5, 0.06]} castShadow>
          <boxGeometry args={[0.12, 0.3, 0.08]} />
          <meshStandardMaterial
            map={metalTexture}
            color="#8a8a8a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Right Door Panel */}
      <group ref={rightDoorRef} position={[1.5, 0, 0]}>
        {/* Main door surface */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 4, 0.12]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#d4a574"
            metalness={0.05}
            roughness={0.7}
            normalScale={[1, 1]}
          />
        </mesh>

        {/* Top panel */}
        <mesh position={[0, 1.3, 0.07]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>
        {/* Middle panel */}
        <mesh position={[0, 0, 0.07]} castShadow>
          <boxGeometry args={[1.2, 1.2, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>
        {/* Bottom panel */}
        <mesh position={[0, -1.3, 0.07]} castShadow>
          <boxGeometry args={[1.2, 0.8, 0.03]} />
          <meshStandardMaterial
            map={woodTexture}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            color="#c49a6a"
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>

        {/* Door handle */}
        <group position={[-0.65, 0, 0.08]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.2, 16]} />
            <meshStandardMaterial
              map={metalTexture}
              color="#c0c0c0"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
          {/* Handle base */}
          <mesh position={[0, 0, 0.12]}>
            <boxGeometry args={[0.15, 0.15, 0.05]} />
            <meshStandardMaterial
              map={metalTexture}
              color="#a0a0a0"
              metalness={0.95}
              roughness={0.1}
            />
          </mesh>
        </group>

        {/* Hinges */}
        <mesh position={[0.7, 1.5, 0.06]} castShadow>
          <boxGeometry args={[0.12, 0.3, 0.08]} />
          <meshStandardMaterial
            map={metalTexture}
            color="#8a8a8a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.7, -1.5, 0.06]} castShadow>
          <boxGeometry args={[0.12, 0.3, 0.08]} />
          <meshStandardMaterial
            map={metalTexture}
            color="#8a8a8a"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Door Frame - Realistic wooden frame */}
      {/* Top frame */}
      <mesh position={[0, 2.2, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.5, 0.3]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          color="#b8956a"
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>
      {/* Bottom frame */}
      <mesh position={[0, -2.2, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[4.5, 0.5, 0.3]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          color="#b8956a"
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>
      {/* Left frame */}
      <mesh position={[-2.25, 0, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 4.5, 0.3]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          color="#b8956a"
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>
      {/* Right frame */}
      <mesh position={[2.25, 0, -0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 4.5, 0.3]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          color="#b8956a"
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>

      {/* Door stop/molding */}
      <mesh position={[0, 0, -0.05]} castShadow>
        <boxGeometry args={[4.3, 4.3, 0.05]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          color="#a8855a"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>
    </group>
  );
}

/**
 * Data Visualization Elements - Professional Analytics Background
 */
function DataVisualizationElements({ scrollProgress }) {
  const leftChartRef = useRef();
  const rightNetworkRef = useRef();
  const dashboardRef = useRef();
  const dataFlowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate bar chart
    if (leftChartRef.current) {
      leftChartRef.current.children.forEach((bar, i) => {
        const scale = 1 + Math.sin(time * 2 + i) * 0.1;
        bar.scale.y = scale;
      });
    }

    // Animate network nodes
    if (rightNetworkRef.current) {
      rightNetworkRef.current.children.forEach((node, i) => {
        if (node.type === "Mesh" && node.geometry.type === "SphereGeometry") {
          const pulse = 1 + Math.sin(time * 3 + i) * 0.2;
          node.scale.set(pulse, pulse, pulse);
        }
      });
    }

    // Animate dashboard
    if (dashboardRef.current) {
      dashboardRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }

    // Animate data flow
    if (dataFlowRef.current) {
      dataFlowRef.current.children.forEach((particle, i) => {
        particle.position.x += 0.01;
        if (particle.position.x > 2) particle.position.x = -2;
        particle.rotation.y += 0.02;
      });
    }
  });

  return (
    <>
      {/* Left Side - Charts and Graphs */}
      <group ref={leftChartRef} position={[-4, 2, -1]}>
        {/* Bar Chart */}
        <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.1, 2, 0.1]} />
          <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.6, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.1, 1.2, 0.1]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.9, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[0.1, 1.8, 0.1]} />
          <meshStandardMaterial color="#15803d" emissive="#15803d" emissiveIntensity={0.3} />
        </mesh>
      </group>

      {/* Right Side - Network/Connection Visualization */}
      <group ref={rightNetworkRef} position={[4, 2, -1]}>
        {/* Network Nodes */}
        {[0, 0.5, 1, 1.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[0, -Math.PI / 4, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.4} />
          </mesh>
        ))}
        {/* Connection Lines */}
        <mesh position={[0, 0.75, 0]} rotation={[0, -Math.PI / 4, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Top - Analytics Dashboard Elements */}
      <group ref={dashboardRef} position={[0, 4.5, -1.5]}>
        {/* Dashboard Panel */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 1.5, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" emissive="#22c55e" emissiveIntensity={0.1} />
        </mesh>
        {/* Data Lines */}
        {[-1, -0.5, 0, 0.5, 1].map((x, i) => (
          <mesh key={i} position={[x, 0, 0.03]}>
            <boxGeometry args={[0.3, 0.02, 0.02]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>

      {/* Bottom - Data Flow Visualization */}
      <group ref={dataFlowRef} position={[0, -3, -1]}>
        {/* Flowing Data Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[-2 + (i * 0.5), Math.sin(i) * 0.3, 0]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial 
              color="#22c55e" 
              emissive="#22c55e" 
              emissiveIntensity={0.6}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Floating Analytics Icons */}
      <group position={[-3, 2, -2]}>
        <mesh>
          <torusGeometry args={[0.2, 0.05, 16, 32]} />
          <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.4} />
        </mesh>
      </group>
      <group position={[3, 2, -2]}>
        <mesh>
          <octahedronGeometry args={[0.2, 0]} />
          <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.4} />
        </mesh>
      </group>

      {/* Data Pipeline Visualization */}
      <group position={[-2, -1, -1.5]}>
        {/* Pipeline segments */}
        {[0, 0.5, 1, 1.5, 2].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
            <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.3} />
          </mesh>
        ))}
        {/* Connecting joints */}
        {[0.25, 0.75, 1.25, 1.75].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#16a34a" emissive="#16a34a" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>

      {/* Growth Metrics Visualization */}
      <group position={[2, -1, -1.5]}>
        {/* Growth curve */}
        {Array.from({ length: 10 }).map((_, i) => {
          const x = (i / 10) * 1.5;
          const y = Math.sin(i * 0.5) * 0.5;
          return (
            <mesh key={i} position={[x, y, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.4} />
            </mesh>
          );
        })}
      </group>

      {/* Statistical Indicators */}
      <group position={[0, 1.5, -2]}>
        {/* Pie chart segments */}
        {[0, Math.PI / 2, Math.PI, 3 * Math.PI / 2].map((angle, i) => (
          <mesh key={i} position={[Math.cos(angle) * 0.3, Math.sin(angle) * 0.3, 0]}>
            <boxGeometry args={[0.15, 0.15, 0.05]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#22c55e" : "#16a34a"} 
              emissive={i % 2 === 0 ? "#22c55e" : "#16a34a"} 
              emissiveIntensity={0.3} 
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

/**
 * Realistic Room Environment
 */
function RoomEnvironment({ woodTexture, normalMap, roughnessMap }) {
  return (
    <>
      {/* Left Wall - with subtle pattern */}
      <mesh position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Right Wall - with subtle pattern */}
      <mesh position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Back Wall (behind door) */}
      <mesh position={[0, 0, -3]} castShadow receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, 5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#faf8f3"
          roughness={0.95}
          metalness={0.02}
        />
      </mesh>

      {/* Floor - with wood texture */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          map={woodTexture}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          color="#d4a574"
          metalness={0.05}
          roughness={0.8}
        />
      </mesh>

      {/* Baseboards */}
      <mesh position={[-5, -2.3, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.15, 0.4, 10]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#b8956a"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>
      <mesh position={[5, -2.3, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.15, 0.4, 10]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#b8956a"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>
      <mesh position={[0, -2.3, -3]} castShadow>
        <boxGeometry args={[10, 0.4, 0.15]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#b8956a"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>

      {/* Crown Molding */}
      <mesh position={[-5, 4.8, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.3, 10]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#c4a574"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>
      <mesh position={[5, 4.8, 0]} rotation={[0, -Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.3, 10]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#c4a574"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>
      <mesh position={[0, 4.8, -3]} castShadow>
        <boxGeometry args={[10, 0.3, 0.2]} />
        <meshStandardMaterial
          map={woodTexture}
          color="#c4a574"
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>

      {/* Door Frame Extension (wall around door) */}
      <mesh position={[0, 0, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[5, 5, 0.3]} />
        <meshStandardMaterial
          color="#f0e8d8"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>
    </>
  );
}

/**
 * Scene component with realistic lighting and environment
 */
function Scene({ mouse, scrollProgressRef, cameraRef }) {
  const woodTexture = useMemo(() => createLightWoodTexture(), []);
  const normalMap = useMemo(() => createNormalMap(), []);
  const roughnessMap = useMemo(() => createRoughnessMap(), []);

  useFrame((state) => {
    if (cameraRef.current && scrollProgressRef.current !== undefined) {
      const progress = scrollProgressRef.current;
      
      // Smooth camera movement through the door (Twinbru style)
      // Start at z=8, move forward to z=-2 (through and beyond the door)
      const targetZ = 8 - progress * 10;
      cameraRef.current.position.z = THREE.MathUtils.lerp(
        cameraRef.current.position.z, 
        targetZ, 
        0.08
      );
      
      // Subtle camera tilt as we go through
      const targetRotationX = progress * 0.1;
      cameraRef.current.rotation.x = THREE.MathUtils.lerp(
        cameraRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      
      // Slight camera movement up as we go through
      const targetY = 2 + progress * 0.5;
      cameraRef.current.position.y = THREE.MathUtils.lerp(
        cameraRef.current.position.y,
        targetY,
        0.08
      );
    }
  });

  return (
    <>
      <color attach="background" args={["#f5f5f0"]} />
      {/* Realistic lighting setup - brighter for light wood */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 3, 5]} intensity={0.8} />
      <pointLight position={[0, 3, 5]} intensity={1.2} color="#fff8e1" />
      <pointLight position={[0, -3, 5]} intensity={0.6} color="#fff8e1" />
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#d4a574" />
      
      {/* Room Environment */}
      <RoomEnvironment 
        woodTexture={woodTexture}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
      />
      
      {/* Data Visualization Elements - Professional Background */}
      <DataVisualizationElements scrollProgress={scrollProgressRef.current || 0} />
      
      {/* Realistic Door - Positioned at top */}
      <RealisticDoor 
        mouse={mouse} 
        scrollProgress={scrollProgressRef.current || 0}
        doorOpenProgress={scrollProgressRef.current || 0}
      />
    </>
  );
}

/**
 * Main Gate Effect Component with scroll parallax
 */
export default function GateEffect({ className = "" }) {
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
      
      // Calculate scroll progress - smooth transition through door (Twinbru style)
      // Use viewport height for smooth, cinematic effect
      const scrollDistance = windowHeight * 1.5; // Smooth scroll distance
      scrollProgress.current = Math.min(scrollY / scrollDistance, 1);
      
      // Smooth scroll behavior - prevent jumpy scrolling
      if (scrollProgress.current > 0 && scrollProgress.current < 1) {
        // Add smooth easing
        scrollProgress.current = Math.pow(scrollProgress.current, 0.8);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial scroll check
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`absolute inset-0 bg-[#f5f5f0] ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        shadows
        className="w-full h-full"
        onCreated={({ camera }) => {
          cameraRef.current = camera;
          // Set initial camera look at door
          camera.lookAt(0, 3.5, 0);
        }}
      >
        <Scene mouse={mouse} scrollProgressRef={scrollProgress} cameraRef={cameraRef} />
      </Canvas>
    </div>
  );
}

