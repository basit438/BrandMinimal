import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Navbar from './Navbar';

// Simple planet component
function Planet({ position, size, color, orbitRadius, orbitSpeed }) {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * orbitSpeed;
    ref.current.position.x = Math.cos(t) * orbitRadius;
    ref.current.position.z = Math.sin(t) * orbitRadius;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Orbit path visualization
function OrbitPath({ radius }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="white" opacity={0.3} transparent />
    </line>
  );
}

// Central sun component
function Sun() {
  const sunRef = useRef();
  
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.002;
    }
  });
  
  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#FDB813" />
      <pointLight intensity={1} distance={25} color="#FDB813" />
    </mesh>
  );
}

// Main scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      
      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} />
      
      {/* Sun */}
      <Sun />
      
      {/* Orbit paths */}
      <OrbitPath radius={3} />
      <OrbitPath radius={5} />
      <OrbitPath radius={7} />
      
      {/* Planets */}
      <Planet position={[3, 0, 0]} size={0.3} color="#3498db" orbitRadius={3} orbitSpeed={0.3} />
      <Planet position={[5, 0, 0]} size={0.5} color="#9b59b6" orbitRadius={5} orbitSpeed={0.2} />
      <Planet position={[7, 0, 0]} size={0.4} color="#2ecc71" orbitRadius={7} orbitSpeed={0.1} />
      
      {/* Optional camera controls */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    </>
  );
}

const HeroSection = ({ opacity }) => {
  return (
    <section
      id="hero"
      className="hero-section flex items-center justify-center relative"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 5, 12], fov: 60 }}
          dpr={[1, 2]}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      <Navbar theme="dark" />
      
      {/* Hero Content */}
      <div className="text-center z-20 relative">
        <h1 className="script-font text-white text-6xl mb-1">Brand Minimal</h1>
        <p className="text-white uppercase tracking-widest text-sm">S T U D I O</p>
        
        {/* Description text */}
        <p className="text-white opacity-70 max-w-md mx-auto mt-6 text-sm tracking-wide">
          A creative design studio crafting meaningful digital experiences and thoughtful brand identities.
        </p>
      </div>
      
      {/* Interactive decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-white opacity-20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white opacity-20 rounded-full"></div>
      </div>
      
      {/* Decorative number */}
      <div className="absolute bottom-5 left-5 text-white text-4xl opacity-20 z-20">
        0
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
        <div className="flex flex-col items-center">
          <span className="text-white text-xs tracking-widest opacity-50 mb-2">SCROLL</span>
          <div className="w-px h-10 bg-white opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;