"use client";

// Components
import SphereEffect from "./SphereEffect";

// Three Fiber
import { Canvas } from "@react-three/fiber";

export default function BackgroundEffect() {
  return (
    <div className="fixed w-screen h-screen flex items-center justify-center opacity-10 pointer-events-none">
      <Canvas>
        <SphereEffect />
      </Canvas>
    </div>
  );
}
